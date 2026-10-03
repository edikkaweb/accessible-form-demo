import { mkdir, readFile, writeFile, cp, readdir } from "node:fs/promises";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { renderPage } from "../src/render.mjs";
const root = fileURLToPath(new URL("../", import.meta.url)),
  dist = resolve(root, "dist");
await mkdir(resolve(dist, "assets"), { recursive: true });
for (const f of [
  "app.mjs",
  "contract.mjs",
  "controller.mjs",
  "service.mjs",
  "transports.mjs",
  "i18n.mjs",
  "style.css",
  "favicon.svg",
])
  await cp(resolve(root, "src", f), resolve(dist, "assets", f));
for (const dir of ["originals", "data"])
  await cp(resolve(root, dir), resolve(dist, dir), { recursive: true });
await writeFile(resolve(dist, "index.html"), renderPage("fr"));
await writeFile(resolve(dist, "index-en.html"), renderPage("en"));
await writeFile(resolve(dist, ".nojekyll"), "");
const files = {};
async function visit(dir, base = "") {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const rel = base + e.name;
    if (e.isDirectory()) await visit(resolve(dir, e.name), rel + "/");
    else if (rel !== "build-manifest.json") {
      const b = await readFile(resolve(dir, e.name));
      files[rel] = {
        bytes: b.length,
        sha256: createHash("sha256").update(b).digest("hex"),
      };
    }
  }
}
await visit(dist);
await writeFile(
  resolve(dist, "build-manifest.json"),
  JSON.stringify({ version: "1.0.0", files }, null, 2) + "\n",
);
console.log(`Built FR/EN: ${Object.keys(files).length} files + manifest.`);
