import { TEXT } from "./i18n.mjs";
import { FIELDS, SCENARIOS } from "./contract.mjs";
export const escape = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
export function renderPage(locale = "fr") {
  const t = TEXT[locale],
    en = locale === "en",
    text = (tag, key, attrs = "") =>
      `<${tag} data-text="${key}" ${attrs}>${escape(t[key])}</${tag}>`;
  const sources = [
    [
      "uxArticle",
      en
        ? "https://www.edikka.com/en/insights/ux-ui-design/ux-writing-clearer-interfaces"
        : "https://www.edikka.com/insights/ux-ui-design/ux-writing-interfaces-claires",
    ],
    [
      "formArticle",
      en
        ? "https://www.edikka.com/en/insights/web-development/accessible-forms-lost-leads"
        : "https://www.edikka.com/insights/developpement-web/formulaire-accessible-erreurs-contacts-perdus",
    ],
    ["protocol", "originals/ux-writing/protocole-ux-writing-edikka-v1.json"],
    [
      "reproduce",
      "https://github.com/edikkaweb/accessible-form-demo/blob/main/docs/REPRODUCTION.md",
    ],
    [
      "matrix",
      "https://github.com/edikkaweb/accessible-form-demo/blob/main/docs/VERIFICATION.md",
    ],
    [
      "stateDocs",
      "https://github.com/edikkaweb/accessible-form-demo/blob/main/docs/CONTRACT.md",
    ],
    [
      "provenance",
      "https://github.com/edikkaweb/accessible-form-demo/blob/main/docs/PROVENANCE.md",
    ],
  ];
  return `<!doctype html><html lang="${locale}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self'; connect-src 'none'; form-action 'none'; base-uri 'self'"><title>${escape(t.title)} · Edikka</title><meta name="description" content="${escape(t.subtitle)}"><link rel="canonical" href="https://edikkaweb.github.io/accessible-form-demo/${en ? "index-en.html" : ""}"><link rel="alternate" hreflang="fr" href="https://edikkaweb.github.io/accessible-form-demo/"><link rel="alternate" hreflang="en" href="https://edikkaweb.github.io/accessible-form-demo/index-en.html"><link rel="stylesheet" href="assets/style.css"><script type="module" src="assets/app.mjs"></script></head><body data-mode="public">
 ${text("a", "skip", 'class="skip" href="#form"')}<header><a class="brand" href="https://www.edikka.com/" aria-label="Edikka">edikka<span>.</span></a><span class="brand-note">EXPÉRIENCES<br>OUVERTES</span><nav>${text("a", "method", 'href="#method"')}${text("a", "code", 'href="https://github.com/edikkaweb/accessible-form-demo"')}<button id="language" type="button" aria-label="${t.language}" disabled>${t.languageShort}</button></nav></header>
 <main><section class="intro">${text("p", "eyebrow", 'class="eyebrow"')}${text("h1", "title")}${text("p", "subtitle", 'class="subtitle"')}</section>
 <div class="scenario-bar" role="group" aria-label="${t.scenarios}" id="scenario-buttons">${SCENARIOS.map((k) => `<button type="button" data-scenario="${k}" aria-pressed="${k === "A"}" disabled><span class="letter">${k}</span><span data-text="${k}">${t[k]}</span></button>`).join("")}</div>
 <p id="scenario-instruction" class="instruction">${t.scenarioA}</p>
 <div class="workspace"><section class="form-card" aria-labelledby="form-title">${text("h2", "formTitle", 'id="form-title"')}<p id="mode-notice" class="notice">${t.publicNotice}</p>${text("p", "required", 'class="required"')}<p id="initialization">${t.loading}</p><noscript><p class="notice">${t.noscript}</p></noscript>
 <form id="form" method="dialog" novalidate>
 <div id="error-summary" tabindex="-1" class="error-summary" hidden><h3 id="error-title"></h3><ul id="error-list"></ul></div>
 <fieldset id="fields" disabled><legend class="sr-only" data-text="formTitle">${t.formTitle}</legend><div class="field-grid">${FIELDS.map((f) => `<div class="field ${["email", "request"].includes(f) ? "wide" : ""}">${text("label", f, `for="${f}"`)}<p id="${f}-hint" class="hint" data-text="${f}Hint">${t[f + "Hint"]}</p>${f === "request" ? `<textarea id="${f}" rows="4" required aria-describedby="${f}-hint" autocomplete="off"></textarea>` : `<input id="${f}" type="${f === "email" ? "email" : "text"}" required aria-describedby="${f}-hint" autocomplete="off" ${f === "email" ? 'inputmode="email"' : ""}>`}<p id="${f}-error" class="field-error" hidden></p></div>`).join("")}</div>${text("button", "fill", 'type="button" id="fill" class="text-button"')}</fieldset>
 <p id="snapshot-note" class="notice" hidden>${t.frozen}</p>
 <div id="current-message" class="current-message"><p id="message">${t.editing}</p></div>
 <div class="actions"><button id="primary" type="submit" class="primary" disabled>${t.send}</button>${text("button", "retry", 'id="retry" type="button" hidden')}${text("button", "stop", 'id="stop" type="button" hidden')}${text("button", "newOther", 'id="new" type="button" class="text-button" hidden')}</div>
 </form><p id="announcement" class="sr-only" role="status" aria-atomic="true"></p>
 <div class="wording" id="wording-options">${text("label", "wording", 'for="wording"')}<select id="wording" disabled><option value="reference" data-text="reference">${t.reference}</option><option value="counterexample" data-text="counterexample">${t.counterexample}</option></select><p id="wording-note" class="hint">${t.referenceNote}</p></div></section>
 <aside class="observatory" aria-labelledby="observe-title">${text("p", "observatory", 'class="eyebrow"')}${text("h2", "interface", 'id="observe-title"')}<p id="known-state">${t.editing}</p><div class="registry"><h3 data-text="register">${t.register}</h3><p class="badge" id="register-kind">${t.simulatedRegister}</p><dl class="counts"><div>${text("dt", "attempts")}<dd id="attempt-count">0</dd></div><div>${text("dt", "records")}<dd id="record-count">0</dd></div></dl><p class="reference"><span data-text="ref">${t.ref}</span><strong id="receipt-reference">${t.notConfirmed}</strong></p></div><p class="hint" data-text="observatoryNote">${t.observatoryNote}</p><h3 data-text="timeline">${t.timeline}</h3><ol id="timeline" class="timeline"><li>${t.emptyTimeline}</li></ol><div class="finding">${text("h3", "finding")}<p id="finding">${t.notRun}</p></div><details><summary data-text="technical">${t.technical}</summary>${text("p", "protocolNote")}${text("p", "noDurable", 'class="hint"')}<p class="hint" id="mode-difference"></p>${text("button", "inspect", 'type="button" id="inspect" disabled')}<div class="status-control">${text("label", "statusBehavior", 'for="status-behavior"')}<select id="status-behavior" disabled>${["normal", "unavailable", "not-found", "network"].map((v) => `<option value="${v}" data-text="${v === "not-found" ? "notFound" : v}">${t[v === "not-found" ? "notFound" : v]}</option>`).join("")}</select></div>${text("p", "probeNote", 'class="hint"')}${text("button", "probe", 'id="probe" type="button" disabled')}<pre id="technical-output">{}</pre></details></aside></div>
 <section class="evidence" aria-labelledby="export-heading">${text("h2", "save", 'id="export-heading"')}${text("p", "exportPrivacy")}<div class="actions">${text("button", "save", 'type="button" id="export" disabled')}${text("button", "share", 'type="button" id="share" disabled')}</div><div id="export-panel" hidden>${text("label", "exportLabel", 'for="proof-output"')}<textarea id="proof-output" readonly rows="8"></textarea><a id="download" hidden data-text="download">${t.download}</a></div></section>
 <section id="method" class="method"><p class="eyebrow">EDIKKA · ${en ? "METHOD & LIMITS" : "MÉTHODE & LIMITES"}</p>${text("h2", "methodTitle")}${text("p", "methodIntro")}<div class="method-grid"><article>${text("h3", "historyTitle")}${text("p", "history")}</article><article>${text("h3", "modesTitle")}${text("p", "modes")}</article><article>${text("h3", "accessTitle")}${text("p", "access")}</article><article><h3>${en ? "Four documented scenarios" : "Quatre scénarios documentés"}</h3><ol>${SCENARIOS.map((k) => `<li><strong data-text="${k}">${t[k]}</strong><p data-text="scenario${k}">${t["scenario" + k]}</p></li>`).join("")}</ol></article></div>${text("p", "staticExample", 'class="notice"')}${text("p", "limits")}<h3 data-text="sources">${t.sources}</h3><ul class="source-links">${sources.map(([key, url]) => `<li><a href="${url}" data-source="${key}" data-text="${key}">${t[key]}</a></li>`).join("")}</ul><p class="primary-sources"><a href="https://www.w3.org/WAI/tutorials/forms/notifications/">WAI · Forms notifications</a> · <a href="https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html">WCAG 3.3.1</a> · <a href="https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html">WCAG 3.3.3</a> · <a href="https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html">WCAG 4.1.3</a> · <a href="https://design-system.service.gov.uk/components/error-summary/">GOV.UK · Error summary</a> · <a href="https://design-system.service.gov.uk/components/error-message/">GOV.UK · Error message</a></p></section></main><footer><p data-text="version">${t.version}</p><a href="https://www.edikka.com/${en ? "en/library" : "bibliotheque"}#instrument-ux-writing-protocol" id="library" data-text="back">${t.back}</a></footer>
 <dialog id="new-dialog" aria-labelledby="dialog-title">${text("h2", "resetTitle", 'id="dialog-title"')}${text("p", "resetText")}<div class="actions">${text("button", "stay", 'type="button" id="stay" class="primary"')}${text("button", "confirmNew", 'type="button" id="confirm-new"')}</div></dialog>
 </body></html>`;
}
