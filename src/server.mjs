import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve, extname } from "node:path";
import { createService } from "./service.mjs";
import { validKey, ResponseLost } from "./contract.mjs";
const root = fileURLToPath(new URL("../dist/", import.meta.url));
const types = {
  ".html": "text/html; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/plain; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
};
export function createLabServer({ staticOnly = false, delayMs } = {}) {
  const sessions = new Map();
  const json = (r, status, body) => {
    r.writeHead(status, {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "x-content-type-options": "nosniff",
    });
    r.end(JSON.stringify(body));
  };
  return createServer(async (req, res) => {
    try {
      const host = req.headers.host || "";
      if (!/^127\.0\.0\.1:\d+$/.test(host))
        return json(res, 403, { code: "local_host_only" });
      if (req.headers.origin && req.headers.origin !== `http://${host}`)
        return json(res, 403, { code: "origin_not_allowed" });
      const u = new URL(req.url, `http://${host}`);
      if (u.pathname.startsWith("/api/")) {
        if (staticOnly) return json(res, 404, { code: "static_mode" });
        if (req.method !== "POST")
          return json(res, 405, { code: "post_required" });
        if (!req.headers["content-type"]?.startsWith("application/json"))
          return json(res, 415, { code: "json_required" });
        let chunks = [],
          size = 0;
        for await (const b of req) {
          size += b.length;
          if (size <= 16384) chunks.push(b);
        }
        if (size > 16384) return json(res, 413, { code: "body_too_large" });
        let p;
        try {
          p = JSON.parse(Buffer.concat(chunks).toString());
        } catch {
          return json(res, 400, { code: "invalid_json" });
        }
        if (!p || typeof p !== "object" || !validKey(p.session))
          return json(res, 400, { code: "invalid_session" });
        if (!sessions.has(p.session)) {
          if (sessions.size >= 100)
            return json(res, 429, { code: "session_limit_restart_lab" });
          sessions.set(p.session, createService({ delayMs }));
        }
        const service = sessions.get(p.session);
        if (u.pathname === "/api/journal")
          return json(res, 200, service.journal());
        if (service.journal().attempts >= 500)
          return json(res, 429, { code: "attempt_limit_restart_lab" });
        let r;
        try {
          if (u.pathname === "/api/submit") {
            if (!["A", "B", "C", "D", "network-before"].includes(p.scenario))
              return json(res, 400, { code: "invalid_scenario" });
            r = await service.submit(p);
          } else if (u.pathname === "/api/status") {
            if (
              !validKey(p.key) ||
              !["normal", "unavailable", "network", "not-found"].includes(
                p.behavior || "normal",
              )
            )
              return json(res, 400, { code: "invalid_status_request" });
            r = await service.status(p.key, p.behavior);
          } else return json(res, 404, { code: "not_found" });
        } catch (e) {
          if (e instanceof ResponseLost) {
            if (p.scenario === "network-before") {
              req.socket.destroy();
              return;
            }
            /* A partial response prevents transparent browser retries on an empty connection. */ res.writeHead(
              200,
              {
                "content-type": "application/json",
                "content-length": "128",
                "cache-control": "no-store",
              },
            );
            res.write('{"interrupted":');
            setTimeout(() => res.destroy(), 20);
            return;
          }
          throw e;
        }
        if (!res.destroyed) json(res, r.status, r.body);
        return;
      }
      if (!["GET", "HEAD"].includes(req.method))
        return json(res, 405, { code: "read_only" });
      const prefix = "/accessible-form-demo";
      let relative = decodeURIComponent(u.pathname);
      if (relative === prefix || relative === prefix + "/")
        relative = "/index.html";
      else if (relative.startsWith(prefix + "/"))
        relative = relative.slice(prefix.length);
      else if (relative === "/") relative = "/index.html";
      const manifest = JSON.parse(
        await readFile(resolve(root, "build-manifest.json"), "utf8"),
      );
      if (
        !Object.hasOwn(manifest.files, relative.slice(1)) &&
        relative !== "/build-manifest.json"
      )
        return json(res, 404, { code: "not_found" });
      let bytes = await readFile(resolve(root, relative.slice(1)));
      if (extname(relative) === ".html" && !staticOnly)
        bytes = Buffer.from(
          bytes
            .toString()
            .replace('data-mode="public"', 'data-mode="http"')
            .replace("connect-src 'none'", "connect-src 'self'"),
        );
      const csp =
        u.searchParams.get("nojs") === "1"
          ? "default-src 'self'; script-src 'none'; style-src 'self'; connect-src 'none'; form-action 'none'; base-uri 'self'"
          : `default-src 'self'; script-src 'self'; style-src 'self'; connect-src ${staticOnly ? "'none'" : "'self'"}; form-action 'none'; base-uri 'self'; frame-ancestors 'none'`;
      res.writeHead(200, {
        "content-type": types[extname(relative)] || "application/octet-stream",
        "cache-control": "no-store",
        "x-content-type-options": "nosniff",
        "content-security-policy": csp,
      });
      res.end(req.method === "HEAD" ? undefined : bytes);
    } catch {
      if (!res.destroyed) json(res, 500, { code: "lab_error" });
    }
  });
}
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const staticOnly = process.argv.includes("--static"),
    port = Number(process.env.EDIKKA_DEMO_PORT || (staticOnly ? 4187 : 4188));
  const server = createLabServer({ staticOnly });
  server.requestTimeout = 10000;
  server.headersTimeout = 10000;
  server.listen(port, "127.0.0.1", () =>
    console.log(
      `${staticOnly ? "Static simulation" : "HTTP local lab"}: http://127.0.0.1:${port}/accessible-form-demo/`,
    ),
  );
}
