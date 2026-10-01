import assert from "node:assert/strict";
import { once } from "node:events";
import { createAccessibleFormReferenceServer } from "./server.mjs";

const server = createAccessibleFormReferenceServer();
server.listen(0, "127.0.0.1");
await once(server, "listening");
const { port } = server.address();
const origin = `http://127.0.0.1:${port}`;

async function submit(key, scenario, overrides = {}) {
  return fetch(`${origin}/api/submissions`, {
    method: "POST",
    headers: { "content-type": "application/json", "idempotency-key": key },
    body: JSON.stringify({
      name: "Camille Test",
      email: "camille@example.test",
      message: "Demande de test reproductible.",
      scenario,
      ...overrides,
    }),
  });
}

try {
  const invalid = await submit("test-invalid-001", "success", { email: "incorrect", message: "court" });
  assert.equal(invalid.status, 422);
  assert.deepEqual(Object.keys((await invalid.json()).fields).sort(), ["email", "message"]);

  const failure = await submit("test-server-001", "server_error");
  assert.equal(failure.status, 503);
  assert.equal((await failure.json()).retryable, true);
  assert.equal((await fetch(`${origin}/api/submissions/test-server-001`)).status, 404);

  await assert.rejects(submit("test-before-001", "network_before"));
  assert.equal((await fetch(`${origin}/api/submissions/test-before-001`)).status, 404);

  await assert.rejects(submit("test-ack-001", "ack_lost"));
  const recovered = await fetch(`${origin}/api/submissions/test-ack-001`);
  assert.equal(recovered.status, 200);
  assert.equal((await recovered.json()).submission.status, "recorded");

  const success = await submit("test-success-001", "success");
  assert.equal(success.status, 201);
  const first = await success.json();
  const retry = await submit("test-success-001", "success");
  assert.equal(retry.status, 201);
  assert.equal((await retry.json()).submission.id, first.submission.id);

  const html = await fetch(origin).then((response) => response.text());
  for (const marker of ["novalidate", "role=\"alert\"", "role=\"status\"", "aria-invalid", "idempotency-key"]) {
    assert.ok(html.includes(marker), `Missing marker: ${marker}`);
  }

  process.stdout.write(JSON.stringify({ scenarios: 6, assertions: 12, result: "pass" }) + "\n");
} finally {
  server.close();
}
