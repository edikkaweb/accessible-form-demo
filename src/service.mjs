import {
  validate,
  canonical,
  normalize,
  validKey,
  DELAY_MS,
  ResponseLost,
} from "./contract.mjs";
export function createService({ delayMs = DELAY_MS, onEvent = () => {} } = {}) {
  const claims = new Map(),
    refused = new Set(),
    events = [];
  let attempts = 0,
    records = 0,
    sequence = 0;
  const emit = (type, details = {}) => {
    const e = { sequence: ++sequence, type, ...details };
    events.push(e);
    onEvent(e);
  };
  const safeReceipt = (record, duplicate) => ({
    reference: record.reference,
    status: "recorded",
    duplicate,
  });
  async function submit({ key, fields, scenario = "A" }) {
    attempts++;
    emit("attempt", { attempt: attempts, key });
    if (!validKey(key)) return { status: 400, body: { code: "invalid_key" } };
    const errors = validate(fields);
    if (Object.keys(errors).length) {
      emit("validation_refused");
      return { status: 422, body: { code: "validation_failed", errors } };
    }
    const encoded = canonical(fields),
      previous = claims.get(key);
    if (previous) {
      if (previous.canonical !== encoded) {
        emit("conflict", { key });
        return { status: 409, body: { code: "content_conflict" } };
      }
      const r = await previous.promise;
      emit("response", {
        status: 200,
        reference: r.reference,
        duplicate: true,
      });
      return { status: 200, body: safeReceipt(r, true) };
    }
    if (scenario === "B" && !refused.has(key)) {
      refused.add(key);
      emit("refused_before_storage", { key });
      emit("response", { status: 503, recorded: false });
      return {
        status: 503,
        body: {
          code: "refused_before_storage",
          recorded: false,
          retryable: true,
        },
      };
    }
    if (scenario === "network-before") {
      emit("connection_lost_before_storage");
      throw new ResponseLost();
    }
    let resolve;
    const promise = new Promise((r) => {
      resolve = r;
    });
    const claim = { canonical: encoded, promise, record: null };
    // Reserve synchronously BEFORE any await: concurrent retries share this promise.
    claims.set(key, claim);
    emit("accepted_pending", { key });
    if (scenario === "D") await new Promise((r) => setTimeout(r, delayMs));
    const record = {
      reference: "DEMO-" + String(++records).padStart(3, "0"),
      fields: normalize(fields),
    };
    claim.record = record;
    resolve(record);
    emit("recorded", { key, reference: record.reference });
    if (scenario === "C") {
      emit("response_lost_after_storage", { key });
      throw new ResponseLost();
    }
    emit("response", {
      status: 201,
      reference: record.reference,
      duplicate: false,
    });
    return { status: 201, body: safeReceipt(record, false) };
  }
  async function status(key, behavior = "normal") {
    emit("verification", { key });
    if (behavior === "network") {
      emit("verification_response_lost");
      throw new ResponseLost();
    }
    if (behavior === "unavailable") {
      emit("verification_unavailable");
      return { status: 503, body: { code: "status_unavailable" } };
    }
    const claim = claims.get(key);
    if (!claim?.record || behavior === "not-found") {
      emit("not_found_at_check", { pending: Boolean(claim && !claim.record) });
      return {
        status: 404,
        body: {
          code: "not_found_at_check",
          pending: Boolean(claim && !claim.record),
        },
      };
    }
    emit("receipt_found", { reference: claim.record.reference });
    return { status: 200, body: safeReceipt(claim.record, false) };
  }
  function journal() {
    return {
      attempts,
      records,
      pending: [...claims.values()].filter((c) => !c.record).length,
      references: [...claims.values()]
        .filter((c) => c.record)
        .map((c) => c.record.reference),
      events: structuredClone(events),
    };
  }
  return { submit, status, journal };
}
