# Browser observations — 1 October 2026

Codex in-app browser on macOS, engine version not exposed. New demonstration 1.0.0, contract 1.0.0. Local public preview 127.0.0.1:4187; real HTTP lab 127.0.0.1:4188. These are manual observations, not screen-reader listening or participant research.

- AFD-UI01–03: Enter on empty submit focused error-summary and displayed four errors. Each summary link, activated with Enter, focused firstName, lastName, email and request respectively. After correcting names and request, one email error remained. The hint remained in aria-describedby after error removal. Switching to the teaching counterexample preserved Éva and the current error.
- AFD-UI04: scenario B, example filled, explicit refusal with zero records, retry confirmed one record.
- AFD-UI05: scenario C, one internal record while the form and its reference remained unconfirmed. Explicit status check found DEMO-001. Same-request retry kept one record.
- AFD-UI06: scenario D declared four seconds. Enter began waiting with focus on primary. A forced click on the same aria-disabled control was ignored by the controller; journal showed one service attempt. Ordinary automation helpers refused that control, so this is not a physical repeated-key observation.
- AFD-UI07: actual HTTP C produced an incomplete response after recording. One attempt, one record, unknown until explicit status check. See [HTTP capture](http-receipt-unknown.jpg). The earlier empty-socket fault was unsuitable because the browser retried automatically; it was replaced before release.
- AFD-UI08–09: EN deep link selected C at 390×844. Switching to FR preserved the English fictional request and unknown state. scrollWidth=390 matched viewport; focus and receipt controls readable. Additional EN check at 320×800: scrollWidth=320, scenario C selected, header/scenarios/form flowed without horizontal overflow. This is viewport reflow, not actual browser zoom.
- AFD-UI10: CSP script-src none blocked initialization. Fieldset and submit remained disabled; form method dialog, no named input transport; four scenario explanations, example and sources stayed in static HTML. Browser-global JavaScript setting was not changed.
- AFD-UI11: advanced changed-content replay produced conflict and preserved original. New-request dialog was explicit; Escape closed it. Checking original recovered its reference.
- AFD-UI12: exported visible HTTP JSON parsed with mode http, confirmed state, two attempts and one record. No email or request text. Native download link inspected, file-save dialog not exercised.

Screenshots: [initial desktop](desktop-initial.jpg), [desktop unknown](desktop-receipt-unknown.jpg), [mobile unknown](mobile-receipt-unknown.jpg).

VoiceOver/Safari, NVDA/Firefox, physical phone, 200/400% browser zoom and participant understanding remain untested. No global WCAG compliance or conversion claim.
