import { mkdir, writeFile, readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
const root = fileURLToPath(new URL("../", import.meta.url));
const hash = (b) => createHash("sha256").update(b).digest("hex");
const files = [];
async function get(url, path, version, license) {
  const r = await fetch(url);
  if (!r.ok) throw Error(`${r.status} ${url}`);
  const b = Buffer.from(await r.arrayBuffer());
  const dest = resolve(root, "originals", path);
  await mkdir(resolve(dest, ".."), { recursive: true });
  try {
    const old = await readFile(dest);
    if (!old.equals(b))
      throw Error("Original changed; review before overwriting " + path);
  } catch (e) {
    if (e.code !== "ENOENT") throw e;
  }
  await writeFile(dest, b);
  files.push({
    path,
    url,
    version,
    license,
    retrievedAt: new Date().toISOString(),
    bytes: b.length,
    sha256: hash(b),
  });
  return b;
}
const origin = "https://www.edikka.com/";
const manifest = JSON.parse(
  await get(
    origin + "docbd/data/protocole-ux-writing-edikka-v1-manifest.json",
    "ux-writing/manifest.json",
    "ux-writing-edikka-reference-v1.0.1",
    "CC BY 4.0 (dataset; manifest preserved)",
  ),
);
for (const [path, expected] of Object.entries(manifest.files)) {
  const b = await get(
    origin + path,
    "ux-writing/" + path.split("/").at(-1),
    manifest.release,
    "CC BY 4.0 (Edikka)",
  );
  if (b.length !== expected.bytes || hash(b) !== expected.sha256)
    throw Error("Published manifest mismatch " + path);
  files.at(-1).manifestVerified = true;
}
for (const f of ["README.md", "index.html", "server.mjs", "test.mjs"])
  await get(
    origin + "tools/accessible-form-reference/" + f,
    "accessible-form-reference/" + f,
    "1.0 declared in README",
    "No explicit license found in these four files; preserved attribution, excluded from new-code MIT scope.",
  );
await mkdir(resolve(root, "data"), { recursive: true });
await writeFile(
  resolve(root, "data/provenance.json"),
  JSON.stringify({ importedAt: new Date().toISOString(), files }, null, 2) +
    "\n",
);
console.log(
  `${files.length} originals imported; ${Object.keys(manifest.files).length} manifest entries verified.`,
);
