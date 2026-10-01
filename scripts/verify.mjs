import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import assert from "node:assert/strict";
const root = fileURLToPath(new URL("../", import.meta.url));
const p = JSON.parse(await readFile(resolve(root, "data/provenance.json")));
for (const f of p.files) {
  const b = await readFile(resolve(root, "originals", f.path));
  assert.equal(b.length, f.bytes);
  assert.equal(createHash("sha256").update(b).digest("hex"), f.sha256, f.path);
}
const d = JSON.parse(
  await readFile(
    resolve(root, "originals/ux-writing/protocole-ux-writing-edikka-v1.json"),
  ),
);
assert.equal(d.method_version, "1.0.1");
for (const id of ["UXW07", "UXW08"]) {
  const c = d.checks.find((c) => c.id === id);
  assert.equal(c.before_result, "À corriger");
  assert.equal(c.after_result, "Satisfait");
}
for (const id of ["UXW09", "UXW10", "UXW11", "UXW12"]) {
  const c = d.checks.find((c) => c.id === id);
  assert.equal(c.before_result, "Satisfait");
  assert.equal(c.after_result, "Satisfait");
}
assert.equal(d.checks.find((c) => c.id === "UXW06").after_result, "À tester");
console.log(
  `${p.files.length} original resources intact; UXW history unchanged.`,
);
