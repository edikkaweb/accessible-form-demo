import { blank, validate, canonical, VERSION, SCENARIOS } from "./contract.mjs";
export function createController({
  makeTransport,
  onChange = () => {},
  id = () => crypto.randomUUID(),
  scenario = "A",
}) {
  let epoch = 0,
    operation = 0,
    transport,
    aborter;
  const state = {
    locale: "fr",
    variant: "reference",
    scenario: "A",
    phase: "editing",
    draft: blank(),
    errors: {},
    intent: null,
    receipt: null,
    reason: null,
    journal: null,
    history: [],
    statusBehavior: "normal",
    inspected: false,
  };
  const notify = () => onChange(state);
  const log = (type, details = {}) =>
    state.history.push({
      sequence: state.history.length + 1,
      type,
      ...details,
    });
  const move = (phase, reason = null) => {
    const from = state.phase;
    state.phase = phase;
    state.reason = reason;
    log("transition", { from, to: phase, reason });
    notify();
  };
  function reset(next = state.scenario, { keepDraft = false } = {}) {
    epoch++;
    operation++;
    aborter?.abort();
    const draft = keepDraft ? { ...state.draft } : blank(),
      current = epoch;
    Object.assign(state, {
      scenario: SCENARIOS.includes(next) ? next : "A",
      phase: "editing",
      draft,
      errors: {},
      intent: null,
      receipt: null,
      reason: null,
      journal: null,
      history: [],
      statusBehavior: "normal",
      inspected: false,
    });
    transport = makeTransport((j) => {
      if (epoch === current) {
        state.journal = j;
        notify();
      }
    });
    log("started", { scenario: state.scenario });
    notify();
  }
  function edit(field, value) {
    if (!Object.hasOwn(state.draft, field) || state.intent) return false;
    state.draft[field] = value;
    return true;
  }
  function checkField(field) {
    if (state.phase === "invalid") {
      const now = validate(state.draft);
      if (now[field]) state.errors[field] = now[field];
      else delete state.errors[field];
      notify();
    }
  }
  async function refresh() {
    const current = epoch;
    try {
      const j = await transport.journal();
      if (current === epoch) {
        state.journal = j;
        notify();
      }
    } catch {
      /* Inspector failure is not a receipt verdict. */
    }
  }
  async function submit({ conflictProbe = false } = {}) {
    if (["sending", "checking"].includes(state.phase)) {
      log("activation_ignored_while_busy");
      notify();
      return;
    }
    if (!state.intent) {
      const errors = validate(state.draft);
      state.errors = errors;
      if (Object.keys(errors).length) {
        move("invalid");
        return;
      }
      state.intent = { key: id(), fields: structuredClone(state.draft) };
    }
    if (
      !conflictProbe &&
      canonical(state.intent.fields) !== canonical(state.draft)
    ) {
      move("conflict", "draft_changed");
      return;
    }
    const current = epoch,
      op = ++operation;
    aborter = new AbortController();
    const fields = conflictProbe
      ? {
          ...state.intent.fields,
          request: state.intent.fields.request + " [conflict test]",
        }
      : structuredClone(state.intent.fields);
    move("sending");
    try {
      const response = await transport.submit(
        { key: state.intent.key, fields, scenario: state.scenario },
        aborter.signal,
      );
      if (current !== epoch || op !== operation) return;
      log("response_received", { status: response.status });
      const b = response.body;
      if (
        [200, 201].includes(response.status) &&
        b.status === "recorded" &&
        typeof b.reference === "string"
      ) {
        state.receipt = {
          reference: b.reference,
          duplicate: Boolean(b.duplicate),
          via: "submission",
        };
        move("confirmed");
      } else if (response.status === 422) {
        state.intent = null;
        state.errors = b.errors || {};
        move("invalid");
      } else if (response.status === 409) move("conflict", "content_conflict");
      else if (
        response.status === 503 &&
        b.code === "refused_before_storage" &&
        b.recorded === false
      )
        move("refused");
      else move("unknown", "unrecognised_response");
    } catch {
      if (current === epoch && op === operation)
        move("unknown", "response_lost");
    } finally {
      if (current === epoch) await refresh();
    }
  }
  async function verify() {
    if (!state.intent || ["sending", "checking"].includes(state.phase)) return;
    const current = epoch,
      op = ++operation;
    move("checking");
    const behavior = state.statusBehavior;
    state.statusBehavior = "normal";
    try {
      const r = await transport.status(state.intent.key, behavior);
      if (current !== epoch || op !== operation) return;
      log("status_response_received", { status: r.status });
      if (
        r.status === 200 &&
        r.body.status === "recorded" &&
        typeof r.body.reference === "string"
      ) {
        state.receipt = {
          reference: r.body.reference,
          duplicate: false,
          via: "status",
        };
        move("confirmed");
      } else
        move(
          "unknown",
          r.status === 404 ? "not_found_at_check" : "status_unavailable",
        );
    } catch {
      if (current === epoch && op === operation)
        move("unknown", "status_unavailable");
    } finally {
      if (current === epoch) await refresh();
    }
  }
  function stopWaiting() {
    if (state.phase !== "sending") return;
    operation++;
    aborter?.abort();
    move("unknown", "wait_cancelled");
  }
  function exportProof() {
    return {
      schema: "edikka-form-demo-proof-v1",
      kind: "simulation_or_local_test",
      version: VERSION,
      exportedAt: new Date().toISOString(),
      environment: { transport: transport.kind, locale: state.locale },
      scenario: state.scenario,
      wording: state.variant,
      state: state.phase,
      reason: state.reason,
      reference: state.receipt?.reference || null,
      history: structuredClone(state.history),
      registry: state.journal ? structuredClone(state.journal) : null,
      limits: [
        "No field values or content-derived fingerprints included.",
        "No email, durable storage, assistive-technology or participant evidence.",
      ],
    };
  }
  reset(scenario);
  return {
    state,
    edit,
    checkField,
    submit,
    verify,
    reset,
    stopWaiting,
    refresh,
    exportProof,
    setLocale: (v) => {
      state.locale = v === "en" ? "en" : "fr";
      notify();
    },
    setVariant: (v) => {
      state.variant = v === "counterexample" ? "counterexample" : "reference";
      notify();
    },
  };
}
