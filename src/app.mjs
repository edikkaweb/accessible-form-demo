import { createController } from "./controller.mjs";
import { browserTransport, httpTransport } from "./transports.mjs";
import { FIELDS, example, preset, shareURL } from "./contract.mjs";
import {
  TEXT,
  errorText,
  errorHeading,
  phaseText,
  findingText,
  eventText,
} from "./i18n.mjs";
const $ = (id) => document.getElementById(id),
  mode = document.body.dataset.mode;
let ready = false,
  control,
  lastAnnouncement = "",
  downloadURL = null,
  pendingScenario = "A";
function render(s) {
  const t = TEXT[s.locale];
  document.documentElement.lang = s.locale;
  document.title = t.title + " · Edikka";
  document.querySelectorAll("[data-text]").forEach((n) => {
    const value = t[n.dataset.text];
    if (value !== undefined && n.textContent !== value) n.textContent = value;
  });
  $("language").textContent = t.languageShort;
  $("language").setAttribute("aria-label", t.language);
  $("scenario-buttons").setAttribute("aria-label", t.scenarios);
  $("scenario-instruction").textContent = t["scenario" + s.scenario];
  document
    .querySelectorAll("[data-scenario]")
    .forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.scenario === s.scenario)),
    );
  $("mode-notice").textContent =
    mode === "http" ? t.localNotice : t.publicNotice;
  $("register-kind").textContent =
    mode === "http" ? t.httpRegister : t.simulatedRegister;
  $("mode-difference").textContent = t.modes;
  $("wording-options").hidden = s.scenario !== "A";
  $("wording").value = s.variant;
  $("wording-note").textContent =
    s.variant === "reference" ? t.referenceNote : t.counterNote;
  for (const f of FIELDS) {
    const input = $(f);
    if (input.value !== s.draft[f]) input.value = s.draft[f];
    input.readOnly = Boolean(s.intent);
    const code = s.errors[f];
    $(f + "-error").hidden = !code;
    $(f + "-error").textContent = code
      ? errorText(s.locale, f, code, s.variant)
      : "";
    input.setAttribute(
      "aria-describedby",
      f + "-hint" + (code ? " " + f + "-error" : ""),
    );
    if (code) input.setAttribute("aria-invalid", "true");
    else input.removeAttribute("aria-invalid");
  }
  const entries = Object.entries(s.errors);
  $("error-summary").hidden = !entries.length;
  $("error-title").textContent = errorHeading(
    s.locale,
    entries.length,
    s.variant,
  );
  $("error-list").replaceChildren(
    ...entries.map(([f, code]) => {
      const li = document.createElement("li"),
        a = document.createElement("a");
      a.href = "#" + f;
      a.dataset.field = f;
      a.textContent = errorText(s.locale, f, code, s.variant, true);
      li.append(a);
      return li;
    }),
  );
  $("fill").hidden = Boolean(s.intent);
  $("snapshot-note").hidden = !s.intent;
  $("snapshot-note").textContent = t.frozen;
  const message = phaseText(s, mode);
  $("message").textContent = message;
  $("known-state").textContent = message;
  $("finding").textContent = findingText(s);
  const busy = ["sending", "checking"].includes(s.phase);
  $("primary").textContent = {
    editing: t.send,
    invalid: t.send,
    sending: t.sending,
    refused: t.retry,
    unknown: t.verify,
    checking: t.checking,
    confirmed: t.newRequest,
    conflict: t.verifyOriginal,
  }[s.phase];
  $("primary").setAttribute("aria-disabled", String(busy));
  $("retry").hidden = !["unknown", "confirmed"].includes(s.phase);
  $("stop").hidden = s.phase !== "sending";
  $("new").hidden = !["unknown", "conflict", "sending", "checking"].includes(
    s.phase,
  );
  $("attempt-count").textContent = s.journal?.attempts ?? 0;
  $("record-count").textContent = s.journal?.records ?? 0;
  $("receipt-reference").textContent =
    s.phase === "confirmed" ? s.receipt.reference : t.notConfirmed;
  const events = s.journal?.events || [];
  $("timeline").replaceChildren(
    ...(events.length ? events : [null]).map((e) => {
      const li = document.createElement("li");
      li.textContent = e ? eventText(s.locale, e) : t.emptyTimeline;
      return li;
    }),
  );
  $("technical-output").textContent = JSON.stringify(
    {
      mode,
      scenario: s.scenario,
      state: s.phase,
      intentKey: s.intent?.key || null,
      pending: s.journal?.pending ?? null,
      reference: s.receipt?.reference || null,
      history: s.history,
    },
    null,
    2,
  );
  $("status-behavior").disabled = !s.intent || busy;
  $("status-behavior").value = s.statusBehavior;
  $("probe").disabled = s.phase !== "confirmed";
  const signature = [s.phase, s.reason, s.receipt?.reference, s.locale].join(
    "|",
  );
  if (signature !== lastAnnouncement) {
    $("announcement").textContent = ["editing", "invalid"].includes(s.phase)
      ? ""
      : message;
    lastAnnouncement = signature;
  }
  const en = s.locale === "en";
  $("library").href =
    "https://www.edikka.com/" +
    (en ? "en/library" : "bibliotheque") +
    "#instrument-ux-writing-protocol";
  document.querySelector('[data-source="uxArticle"]').href =
    "https://www.edikka.com/" +
    (en
      ? "en/insights/ux-ui-design/ux-writing-clearer-interfaces"
      : "insights/ux-ui-design/ux-writing-interfaces-claires");
  document.querySelector('[data-source="formArticle"]').href =
    "https://www.edikka.com/" +
    (en
      ? "en/insights/web-development/accessible-forms-lost-leads"
      : "insights/developpement-web/formulaire-accessible-erreurs-contacts-perdus");
}
function reset(scenario) {
  control.reset(scenario);
  $("export-panel").hidden = true;
  $("proof-output").value = "";
  if (downloadURL) {
    URL.revokeObjectURL(downloadURL);
    downloadURL = null;
  }
  $("firstName").focus();
}
function requestReset(scenario) {
  pendingScenario = scenario;
  if (
    ["sending", "checking", "unknown", "conflict"].includes(control.state.phase)
  )
    $("new-dialog").showModal();
  else reset(scenario);
}
try {
  const factory = (onJournal) =>
    mode === "http"
      ? httpTransport({ onJournal })
      : browserTransport({ onJournal });
  control = createController({
    makeTransport: factory,
    scenario: preset(location.href),
    onChange: (s) => {
      if (ready) render(s);
    },
  });
  control.state.locale = document.documentElement.lang === "en" ? "en" : "fr";
  $("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const p = control.state.phase;
    if (p === "checking") return;
    if (p === "confirmed") {
      requestReset(control.state.scenario);
      return;
    }
    if (["unknown", "conflict"].includes(p)) {
      await control.verify();
      return;
    }
    await control.submit();
    if (control.state.phase === "invalid") $("error-summary").focus();
  });
  FIELDS.forEach((f) => {
    $(f).addEventListener("input", () => control.edit(f, $(f).value));
    $(f).addEventListener("blur", () => control.checkField(f));
  });
  $("error-list").addEventListener("click", (e) => {
    const a = e.target.closest("a[data-field]");
    if (a) {
      e.preventDefault();
      $(a.dataset.field).focus();
    }
  });
  $("fill").addEventListener("click", () => {
    for (const [f, v] of Object.entries(example(control.state.locale))) {
      control.edit(f, v);
      control.checkField(f);
    }
    render(control.state);
  });
  $("wording").addEventListener("change", () =>
    control.setVariant($("wording").value),
  );
  $("language").addEventListener("click", () =>
    control.setLocale(control.state.locale === "fr" ? "en" : "fr"),
  );
  document
    .querySelectorAll("[data-scenario]")
    .forEach((b) =>
      b.addEventListener("click", () => requestReset(b.dataset.scenario)),
    );
  $("retry").addEventListener("click", () => control.submit());
  $("stop").addEventListener("click", () => control.stopWaiting());
  $("new").addEventListener("click", () =>
    requestReset(control.state.scenario),
  );
  $("stay").addEventListener("click", () => $("new-dialog").close());
  $("confirm-new").addEventListener("click", () => {
    $("new-dialog").close();
    reset(pendingScenario);
  });
  $("inspect").addEventListener("click", () => control.refresh());
  $("status-behavior").addEventListener("change", () => {
    control.state.statusBehavior = $("status-behavior").value;
  });
  $("probe").addEventListener("click", () =>
    control.submit({ conflictProbe: true }),
  );
  $("export").addEventListener("click", () => {
    const data = JSON.stringify(control.exportProof(), null, 2);
    $("export-panel").hidden = false;
    $("proof-output").value = data;
    if (downloadURL) URL.revokeObjectURL(downloadURL);
    downloadURL = URL.createObjectURL(
      new Blob([data], { type: "application/json" }),
    );
    $("download").href = downloadURL;
    $("download").download =
      "edikka-form-proof-" + control.state.scenario + ".json";
    $("download").hidden = false;
    $("proof-output").focus();
  });
  $("share").addEventListener("click", () => {
    $("export-panel").hidden = false;
    $("proof-output").value = shareURL(
      control.state.locale,
      control.state.scenario,
    );
    $("download").hidden = true;
    $("proof-output").focus();
  });
  ready = true;
  render(control.state);
  $("fields").disabled = false;
  ["primary", "language", "wording", "inspect", "export", "share"].forEach(
    (id) => ($(id).disabled = false),
  );
  document
    .querySelectorAll("[data-scenario]")
    .forEach((b) => (b.disabled = false));
  $("initialization").textContent = "";
  $("announcement").textContent = TEXT[control.state.locale].ready;
  control.refresh();
} catch {
  $("initialization").textContent =
    TEXT[document.documentElement.lang === "en" ? "en" : "fr"].failed;
  $("fields").disabled = true;
  $("primary").disabled = true;
}
