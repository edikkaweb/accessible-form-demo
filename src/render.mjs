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
  return `<!doctype html><html lang="${locale}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self'; connect-src 'none'; form-action 'none'; base-uri 'self'"><title>${escape(t.title)} · Edikka</title><meta name="description" content="${escape(t.subtitle)}"><link rel="canonical" href="https://edikkaweb.github.io/accessible-form-demo/${en ? "index-en.html" : ""}"><link rel="alternate" hreflang="fr" href="https://edikkaweb.github.io/accessible-form-demo/"><link rel="alternate" hreflang="en" href="https://edikkaweb.github.io/accessible-form-demo/index-en.html"><link rel="stylesheet" href="assets/style.css"><script type="module" src="assets/app.mjs"></script><meta property="og:type" content="website"><meta property="og:title" content="${escape(t.title)} · Edikka"><meta property="og:description" content="${escape(t.subtitle)}"><meta property="og:url" content="https://edikkaweb.github.io/accessible-form-demo/${en ? "index-en.html" : ""}"><meta property="og:image" content="https://edikkaweb.github.io/assets/accessible-form-demo.jpg"><meta name="twitter:card" content="summary_large_image"><link rel="icon" href="assets/favicon.svg" type="image/svg+xml"></head><body data-mode="public">
 ${text("a", "skip", 'class="skip" href="#form"')}<header><a class="brand" href="https://www.edikka.com/" aria-label="Edikka"><svg xmlns="http://www.w3.org/2000/svg" width="108" height="20" aria-hidden="true" focusable="false" viewBox="0 0 882.45 81.97">

  <rect fill="currentColor" x="342.95" y=".05" width="9.66" height="81.78" rx=".74" ry=".74"/>
  <path fill="currentColor" d="M528.33.02c.2,0,.37.17.37.37,0,.1-.04.19-.11.26l-35.81,37.62c-.24.26-.25.66-.01.92,12.53,13.89,24.75,27.68,36.66,41.37.31.36.52.65.61.86.07.16-.01.35-.18.42-.04.01-.07.02-.11.02h-10.24c-.46,0-.9-.2-1.21-.54l-37.09-41.98c-.38-.43-.37-1.08.02-1.49L517.02.25c.13-.15.33-.23.53-.23h10.78Z"/>
  <rect fill="currentColor" x="633.09" width="9.52" height="81.78" rx=".77" ry=".77"/>
  <path fill="currentColor" d="M700.11.1c.2,0,.37.17.37.37,0,.1-.04.19-.11.26l-35.73,37.6c-.24.26-.25.66-.01.92,12.53,13.85,24.75,27.61,36.65,41.28.31.36.52.64.61.85.07.16,0,.35-.17.42-.04.02-.08.02-.12.02h-10.22c-.46.01-.9-.18-1.21-.52l-37.08-41.89c-.38-.43-.37-1.08.02-1.49L688.82.34c.13-.15.33-.23.53-.23h10.76ZM59.59,8.56H9.86c-.3,0-.55.25-.55.55v26.58c0,.3.25.55.55.55h44.95c.3,0,.55.25.55.55h0v7.44c0,.3-.25.55-.55.55H9.87c-.3,0-.55.25-.55.55h0v27.48c0,.3.25.55.55.55h50.22c.3,0,.55.25.55.55h0v7.42c0,.3-.25.55-.55.55H.55c-.3,0-.55-.25-.55-.55h0V.63C0,.33.25.08.55.08h59.04c.3,0,.55.25.55.55h0v7.38c0,.3-.25.55-.55.55h0M164.67.71c0-.34.28-.62.62-.62l32.22.05c22.54.04,40.79,18.02,40.75,40.16v1.54c-.04,22.14-18.34,40.06-40.89,40.02h0l-32.22-.05c-.34,0-.62-.28-.62-.62l.14-80.48ZM174.02,9.16v63.56c0,.33.26.59.59.59h21.99c17.76,0,32.16-14.2,32.16-31.71h0v-1.32c0-17.51-14.4-31.71-32.16-31.71h-21.99c-.33,0-.59.26-.59.59"/>
  <rect fill="currentColor" x="461.45" y=".1" width="9.18" height="81.76" rx=".67" ry=".67"/>
  <path fill="currentColor" d="M840.7.07c1.39,0,2.79.04,4.21.11.3.01.57.19.69.46l36.84,81.11c.03.08,0,.17-.08.21-.02,0-.04.01-.06.01h-9.71c-.14,0-.26-.08-.32-.21-11.59-25.99-21.98-49.25-31.17-69.8-.09-.2-.23-.3-.43-.3s-.35.1-.44.3c-9.29,20.5-19.8,43.71-31.53,69.63-.06.13-.18.21-.32.21l-9.71-.05c-.08,0-.15-.06-.15-.15,0-.02,0-.05.01-.07L835.79.61c.12-.27.39-.44.69-.45,1.42-.06,2.83-.09,4.22-.09"/>
</svg></a><span class="brand-note">EXPÉRIENCES<br>OUVERTES</span><nav>${text("a", "method", 'href="#method"')}${text("a", "code", 'href="https://github.com/edikkaweb/accessible-form-demo"')}<button id="language" type="button" aria-label="${t.language}" disabled>${t.languageShort}</button></nav></header>
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
