import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(fileURLToPath(import.meta.url));
const submissions = new Map();

function sendJson(response, status, payload) {
  response.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
  });
  response.end(JSON.stringify(payload));
}

async function readJson(request) {
  let body = "";
  for await (const chunk of request) {
    body += chunk;
    if (body.length > 32_768) throw new Error("payload_too_large");
  }
  return JSON.parse(body || "{}");
}

function validate(payload) {
  const errors = {};
  if (typeof payload.name !== "string" || payload.name.trim().length < 2) {
    errors.name = "Saisissez un nom d’au moins 2 caractères.";
  }
  if (typeof payload.email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    errors.email = "Saisissez une adresse e-mail au format nom@domaine.fr.";
  }
  if (typeof payload.message !== "string" || payload.message.trim().length < 10) {
    errors.message = "Décrivez votre demande en au moins 10 caractères.";
  }
  return errors;
}

function storedSubmission(key, payload) {
  const existing = submissions.get(key);
  if (existing) return existing;
  const stored = {
    id: `test-${String(submissions.size + 1).padStart(3, "0")}`,
    idempotencyKey: key,
    receivedAt: new Date().toISOString(),
    status: "recorded",
    fields: { name: payload.name.trim(), email: payload.email.trim(), message: payload.message.trim() },
  };
  submissions.set(key, stored);
  return stored;
}

export function createAccessibleFormReferenceServer() {
  return createServer(async (request, response) => {
    const url = new URL(request.url || "/", "http://127.0.0.1");

    if (request.method === "GET" && (url.pathname === "/" || url.pathname === "/index.html")) {
      const html = await readFile(join(root, "index.html"), "utf8");
      response.writeHead(200, { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" });
      response.end(html);
      return;
    }

    if (request.method === "GET" && url.pathname.startsWith("/api/submissions/")) {
      const key = decodeURIComponent(url.pathname.slice("/api/submissions/".length));
      const stored = submissions.get(key);
      sendJson(response, stored ? 200 : 404, stored ? { submission: stored } : { error: "not_found" });
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/submissions") {
      let payload;
      try {
        payload = await readJson(request);
      } catch {
        sendJson(response, 400, { error: "invalid_json" });
        return;
      }

      const key = String(request.headers["idempotency-key"] || "").trim();
      if (!/^[a-zA-Z0-9-]{8,80}$/.test(key)) {
        sendJson(response, 400, { error: "invalid_idempotency_key" });
        return;
      }

      const errors = validate(payload);
      if (Object.keys(errors).length > 0) {
        sendJson(response, 422, { error: "validation_failed", fields: errors });
        return;
      }

      if (payload.scenario === "server_error") {
        sendJson(response, 503, { error: "service_unavailable", retryable: true });
        return;
      }

      if (payload.scenario === "network_before") {
        request.socket.destroy();
        return;
      }

      const stored = storedSubmission(key, payload);

      if (payload.scenario === "ack_lost") {
        request.socket.destroy();
        return;
      }

      if (payload.scenario === "slow_success") {
        await new Promise((resolve) => setTimeout(resolve, 350));
      }

      sendJson(response, 201, { submission: stored, duplicate: submissions.get(key) === stored });
      return;
    }

    sendJson(response, 404, { error: "not_found" });
  });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const port = Number(process.env.EDIKKA_FORM_LAB_PORT || 4177);
  createAccessibleFormReferenceServer().listen(port, "127.0.0.1", () => {
    process.stdout.write(`Laboratoire formulaire accessible : http://127.0.0.1:${port}\n`);
  });
}
