import assert from "node:assert/strict";
import { once } from "node:events";
import { createAccessibleFormReferenceServer } from "../originals/accessible-form-reference/server.mjs";
const server = createAccessibleFormReferenceServer();
server.listen(0, "127.0.0.1");
await once(server, "listening");
const base = `http://127.0.0.1:${server.address().port}`;
try {
  const send = (message) =>
    fetch(base + "/api/submissions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "idempotency-key": "historical-probe-001",
      },
      body: JSON.stringify({
        name: "Camille Test",
        email: "camille@example.test",
        message,
        scenario: "success",
      }),
    });
  const first = await (await send("Original fictional test request.")).json();
  assert.equal(first.duplicate, true);
  const repeat = await send("Changed fictional business content.");
  const second = await repeat.json();
  assert.equal(repeat.status, 201);
  assert.equal(second.submission.id, first.submission.id);
  assert.equal(
    second.submission.fields.message,
    "Original fictional test request.",
  );
  console.log(
    JSON.stringify(
      {
        at: new Date().toISOString(),
        node: process.version,
        source: "originals/accessible-form-reference/server.mjs",
        firstCreationDuplicate: true,
        changedContentStatus: 201,
        sameReference: true,
        oldContentRetained: true,
        conclusion:
          "Two historical defects reproduced by real HTTP; originals unchanged.",
      },
      null,
      2,
    ),
  );
} finally {
  server.closeAllConnections();
  server.close();
}
