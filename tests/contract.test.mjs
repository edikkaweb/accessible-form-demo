import test from "node:test";
import assert from "node:assert/strict";
import { once } from "node:events";
import { browserTransport, httpTransport } from "../src/transports.mjs";
import { createLabServer } from "../src/server.mjs";
import {
  example,
  blank,
  canonical,
  validate,
  preset,
  shareURL,
} from "../src/contract.mjs";
import { createController } from "../src/controller.mjs";
import { TEXT, errorText, errorHeading } from "../src/i18n.mjs";
import { renderPage } from "../src/render.mjs";
for (const mode of ["browser", "http"]) {
  async function setup() {
    if (mode === "browser")
      return { t: browserTransport({ delayMs: 40 }), close: () => {} };
    const server = createLabServer({ delayMs: 40 });
    server.listen(0, "127.0.0.1");
    await once(server, "listening");
    return {
      t: httpTransport({ base: `http://127.0.0.1:${server.address().port}` }),
      close: () => {
        server.closeAllConnections();
        server.close();
      },
    };
  }
  const run = (label, fn) =>
    test(`${mode}: ${label}`, async () => {
      const x = await setup();
      try {
        await fn(x.t);
      } finally {
        x.close();
      }
    });
  run(
    "invalid data never creates a record (independent service validation)",
    async (t) => {
      const r = await t.submit({
        key: crypto.randomUUID(),
        fields: blank(),
        scenario: "A",
      });
      assert.equal(r.status, 422);
      assert.equal(Object.keys(r.body.errors).length, 4);
      assert.equal((await t.journal()).records, 0);
    },
  );
  run(
    "explicit refusal before storage is transient; values and key can be reused",
    async (t) => {
      const key = crypto.randomUUID(),
        fields = example();
      assert.equal(
        (await t.submit({ key, fields, scenario: "B" })).status,
        503,
      );
      assert.equal((await t.journal()).records, 0);
      assert.equal(
        (await t.submit({ key, fields, scenario: "B" })).status,
        201,
      );
      assert.equal((await t.journal()).records, 1);
    },
  );
  run(
    "response lost after storage; status and retry find exactly one record",
    async (t) => {
      const key = crypto.randomUUID(),
        fields = example();
      await assert.rejects(t.submit({ key, fields, scenario: "C" }));
      assert.equal((await t.journal()).records, 1);
      const r = await t.status(key);
      assert.equal(r.status, 200);
      const retry = await t.submit({ key, fields, scenario: "C" });
      assert.equal(retry.status, 200);
      assert.equal(retry.body.duplicate, true);
      assert.equal(retry.body.reference, r.body.reference);
      assert.equal((await t.journal()).records, 1);
    },
  );
  run(
    "first creation false; repeated key true; different content conflicts",
    async (t) => {
      const key = crypto.randomUUID(),
        fields = example();
      const first = await t.submit({ key, fields, scenario: "A" });
      assert.equal(first.status, 201);
      assert.equal(first.body.duplicate, false);
      const again = await t.submit({ key, fields, scenario: "D" });
      assert.equal(again.status, 200);
      assert.equal(again.body.duplicate, true);
      assert.equal(again.body.reference, first.body.reference);
      const different = await t.submit({
        key,
        fields: { ...fields, request: "Another fictional request" },
        scenario: "A",
      });
      assert.equal(different.status, 409);
      assert.equal((await t.status(key)).body.reference, first.body.reference);
      assert.equal((await t.journal()).records, 1);
    },
  );
  run(
    "two concurrent requests reserve once; pending status is not found yet",
    async (t) => {
      const key = crypto.randomUUID(),
        fields = example();
      const a = t.submit({ key, fields, scenario: "D" }),
        b = t.submit({ key, fields, scenario: "D" });
      const pending = await t.status(key);
      assert.equal(pending.status, 404);
      const [r1, r2] = await Promise.all([a, b]);
      assert.equal(r1.body.reference, r2.body.reference);
      assert.deepEqual([r1.body.duplicate, r2.body.duplicate], [false, true]);
      assert.equal((await t.journal()).records, 1);
    },
  );
  run(
    "network loss before storage; status unavailable/lost/not-found remain distinct",
    async (t) => {
      const key = crypto.randomUUID();
      await assert.rejects(
        t.submit({ key, fields: example(), scenario: "network-before" }),
      );
      assert.equal((await t.journal()).records, 0);
      assert.equal((await t.status(key)).status, 404);
      assert.equal((await t.status(key, "unavailable")).status, 503);
      await assert.rejects(t.status(key, "network"));
    },
  );
  run(
    "concurrent different content conflicts even while first request is pending",
    async (t) => {
      const key = crypto.randomUUID(),
        fields = example();
      const a = t.submit({ key, fields, scenario: "D" });
      const conflict = await t.submit({
        key,
        fields: { ...fields, firstName: "Other" },
        scenario: "D",
      });
      assert.equal(conflict.status, 409);
      await a;
      assert.equal((await t.journal()).records, 1);
    },
  );
}
test("canonical business content: fixed fields, NFC, trim, LF; settings excluded", () => {
  const x = example();
  assert.equal(
    canonical({
      ...x,
      firstName: " E\u0301va ",
      request: "hello\r\nworld\r! ",
      scenario: "B",
    }),
    canonical({
      ...x,
      firstName: "Éva",
      request: "hello\nworld\n!",
      scenario: "C",
    }),
  );
  assert.notEqual(
    canonical(x),
    canonical({ ...x, request: x.request + " changed" }),
  );
});
test("names accept accents, apostrophes, hyphens and single characters; shared lengths", () => {
  assert.deepEqual(
    validate({ ...example(), firstName: "É", lastName: "李 O’Neil-D’Arcy" }),
    {},
  );
  assert.equal(validate({ ...example(), request: "court" }).request, "short");
  assert.equal(
    validate({ ...example(), firstName: "a".repeat(101) }).firstName,
    "long",
  );
  assert.equal(validate({ ...example(), email: "bad" }).email, "format");
});
test("FR/EN: zero/one/many count, exact reference messages and two variants same rules", () => {
  assert.deepEqual(Object.keys(TEXT.fr).sort(), Object.keys(TEXT.en).sort());
  for (const locale of ["fr", "en"]) {
    assert.equal(errorHeading(locale, 0), "");
    assert.match(errorHeading(locale, 1), /^1 /);
    assert.match(errorHeading(locale, 4), /^4 /);
    for (const [f, c] of Object.entries(validate(blank()))) {
      assert.equal(
        errorText(locale, f, c, "reference", true),
        errorText(locale, f, c, "reference", false),
      );
      assert.notEqual(
        errorText(locale, f, c, "counterexample", true),
        errorText(locale, f, c, "counterexample", false),
      );
    }
  }
});
function controller(scenario = "A", extra = {}) {
  return createController({
    makeTransport: (onJournal) => browserTransport({ onJournal, delayMs: 25 }),
    scenario,
    ...extra,
  });
}
function fill(c, x = example()) {
  for (const [k, v] of Object.entries(x)) c.edit(k, v);
}
test("controller validates without transport; correction on blur preserves valid values", async () => {
  const c = controller();
  await c.submit();
  assert.equal(c.state.phase, "invalid");
  assert.equal(Object.keys(c.state.errors).length, 4);
  c.edit("firstName", "Camille");
  c.checkField("firstName");
  assert.equal(Object.keys(c.state.errors).length, 3);
  c.setVariant("counterexample");
  assert.equal(c.state.draft.firstName, "Camille");
  fill(c);
  await c.submit();
  assert.equal(c.state.phase, "confirmed");
});
test("controller: no confirmation from registry after lost response; verify establishes it", async () => {
  const c = controller("C");
  fill(c);
  await c.submit();
  assert.equal(c.state.phase, "unknown");
  assert.equal(c.state.receipt, null);
  assert.equal(c.state.journal.records, 1);
  assert.equal(c.edit("request", "overwrite"), false);
  await c.verify();
  assert.equal(c.state.phase, "confirmed");
  assert.equal(c.state.receipt.via, "status");
});
test("status failures and not-found do not establish absence; original snapshot preserved", async () => {
  const c = controller("C");
  fill(c);
  await c.submit();
  const snapshot = canonical(c.state.intent.fields);
  for (const b of ["unavailable", "network", "not-found"]) {
    c.state.statusBehavior = b;
    await c.verify();
    assert.equal(c.state.phase, "unknown");
    assert.equal(canonical(c.state.intent.fields), snapshot);
  }
  await c.verify();
  assert.equal(c.state.phase, "confirmed");
});
test("stop waiting does not cancel service; result ignored then recover by status", async () => {
  const c = controller("D");
  fill(c);
  const p = c.submit();
  c.stopWaiting();
  assert.equal(c.state.phase, "unknown");
  await p;
  await new Promise((r) => setTimeout(r, 40));
  assert.equal(c.state.phase, "unknown");
  await c.verify();
  assert.equal(c.state.phase, "confirmed");
  assert.equal(c.state.journal.records, 1);
});
test("repeated activation guarded; deliberate retry preserves one reference", async () => {
  const c = controller("D");
  fill(c);
  const p = c.submit();
  await c.submit();
  await p;
  assert.equal(c.state.journal.attempts, 1);
  const ref = c.state.receipt.reference;
  await c.submit();
  assert.equal(c.state.receipt.reference, ref);
  assert.equal(c.state.journal.attempts, 2);
  assert.equal(c.state.journal.records, 1);
});
test("old result and journal never contaminate a reset scenario", async () => {
  const c = controller("D");
  fill(c);
  const p = c.submit();
  c.reset("B");
  await p;
  await new Promise((r) => setTimeout(r, 40));
  assert.equal(c.state.scenario, "B");
  assert.equal(c.state.phase, "editing");
  assert.equal(c.state.receipt, null);
  assert.deepEqual(c.state.draft, blank());
  assert.equal(c.state.journal, null);
});
test("export omits field values and content fingerprints in both variants", async () => {
  for (const variant of ["reference", "counterexample"]) {
    const c = controller();
    c.setVariant(variant);
    const values = {
      firstName: "PRIVATE-FIRST-XYZ",
      lastName: "PRIVATE-LAST-XYZ",
      email: "secret-xyz@example.test",
      request: "PRIVATE-REQUEST-XYZ",
    };
    fill(c, values);
    await c.submit();
    const output = JSON.stringify(c.exportProof());
    for (const value of Object.values(values)) assert(!output.includes(value));
    assert(!output.includes("canonical"));
    assert(!output.includes("sha256"));
    assert.equal(c.exportProof().registry.records, 1);
  }
});
test("share links accept only public scenario; free text never serialized", () => {
  assert.equal(preset("https://example.test/#scenario=C"), "C");
  assert.equal(preset("https://example.test/#scenario=C&name=secret"), "A");
  assert.equal(preset("https://example.test/#scenario=evil"), "A");
  assert.equal(
    shareURL("en", "C"),
    "https://edikkaweb.github.io/accessible-form-demo/index-en.html#scenario=C",
  );
});
test("static fallback: inactive form, no native GET submission, sources and full scenarios", () => {
  for (const lang of ["fr", "en"]) {
    const html = renderPage(lang);
    assert(html.includes('<fieldset id="fields" disabled>'));
    assert(html.includes('method="dialog"'));
    assert(html.includes("form-action 'none'"));
    assert(html.includes("<noscript>"));
    for (const k of ["A", "B", "C", "D"])
      assert(html.includes(TEXT[lang]["scenario" + k]));
    assert(!html.includes('role="alert"'));
    assert.equal((html.match(/role="status"/g) || []).length, 1);
    assert(!html.includes('role="button"'));
  }
});
test("HTTP guardrails: JSON/size/origin/traversal and static-only API", async () => {
  const s = createLabServer();
  s.listen(0, "127.0.0.1");
  await once(s, "listening");
  const base = `http://127.0.0.1:${s.address().port}`;
  try {
    const req = (body, headers = {}) =>
      fetch(base + "/api/submit", {
        method: "POST",
        headers: { "content-type": "application/json", ...headers },
        body,
      });
    assert.equal((await req("{")).status, 400);
    assert.equal((await req("x".repeat(17000))).status, 413);
    assert.equal(
      (await req("{}", { origin: "https://example.test" })).status,
      403,
    );
    assert.equal(
      (await req("{}", { "content-type": "text/plain" })).status,
      415,
    );
    assert.equal(
      (await fetch(base + "/originals/../../src/server.mjs")).status,
      404,
    );
  } finally {
    s.closeAllConnections();
    s.close();
  }
  const staticServer = createLabServer({ staticOnly: true });
  staticServer.listen(0, "127.0.0.1");
  await once(staticServer, "listening");
  try {
    assert.equal(
      (
        await fetch(
          `http://127.0.0.1:${staticServer.address().port}/api/submit`,
          { method: "POST" },
        )
      ).status,
      404,
    );
  } finally {
    staticServer.closeAllConnections();
    staticServer.close();
  }
});
test("real HTTP cancellation stops client waiting but stored record can still be recovered", async () => {
  const server = createLabServer({ delayMs: 80 });
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  const t = httpTransport({
      base: `http://127.0.0.1:${server.address().port}`,
    }),
    key = crypto.randomUUID(),
    stop = new AbortController();
  try {
    const p = t.submit({ key, fields: example(), scenario: "D" }, stop.signal);
    let j;
    for (let i = 0; i < 30; i++) {
      j = await t.journal();
      if (j.pending) break;
      await new Promise((r) => setTimeout(r, 2));
    }
    assert.equal(j.pending, 1);
    const rejected = assert.rejects(p);
    stop.abort();
    await rejected;
    await new Promise((r) => setTimeout(r, 100));
    const r = await t.status(key);
    assert.equal(r.status, 200);
    assert.equal((await t.journal()).records, 1);
  } finally {
    server.closeAllConnections();
    server.close();
  }
});
