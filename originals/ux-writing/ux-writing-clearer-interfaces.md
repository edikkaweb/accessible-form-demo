---
title: "UX writing: a verifiable protocol applied to three real Edikka interfaces"
description: "A public UX writing before-and-after on an AI test, contact form and CTAs: 16 replayable checks, open evidence, XLSX and JSON."
canonical: "https://www.edikka.com/en/insights/ux-ui-design/ux-writing-clearer-interfaces"
author: "Bertrand Morel"
publisher: "Edikka"
version: "1.0.1"
published: "2026-09-03"
last_reviewed: "2026-09-03"
next_review: "2026-12-03"
license: "CC BY 4.0"
---

# UX writing: a verifiable protocol applied to three real Edikka interfaces

A public UX writing before-and-after on an AI test, contact form and CTAs: 16 replayable checks, open evidence, XLSX and JSON.

Short answer

## UX writing becomes verifiable when words match the interface’s actual state.

A label is not useful merely because it reads smoothly. It should name the action, object, next state and confidence level without asking the reader to interpret the system. On a critical interface, that promise must also remain true in the accessible name, error summary, dynamic message and translated edition.

Edikka applied that definition to three public interfaces: the AI agent readiness test, the contact form and this article’s actions. The protocol has sixteen stable checks. Fifteen are satisfied after correction; the sixteenth remains “To test” until a VoiceOver and NVDA retest is published.

Clearer wording is not automatically higher-performing wording. This study infers no conversion, satisfaction or comprehension uplift. It verifies fidelity between words, evidence state, available action and what the machine announces.

Operational definition

## What the protocol measures — and what it refuses to invent.

*Boundary of Edikka UX writing study v1.0.1*

| Dimension | Measured here | Not demonstrated |
| --- | --- | --- |
| Accuracy | The text matches the data and its reliability level. | That readers remember the information better. |
| Action | The label names the object, format or next step. | That more people click. |
| Accessibility | Accessible name, error association, focus and programmatic status. | Full WCAG or RGAA conformance of the page or site. |
| Consistency | Summary, detail, report and French edition carry the same decision. | A universal editorial preference. |

This boundary avoids the common shortcut of turning observable microcopy conformance into proof of commercial effectiveness. User testing or controlled experiments can measure comprehension and task success. These sixteen checks answer a narrower question: **does the interface say exactly what its system knows, does and expects?**

Edikka method · v1.0.1

## Three bases, four statuses, no average that erases a blocking defect.

*Controlled vocabulary*

| Field | Allowed values | Rule |
| --- | --- | --- |
| Basis | WCAG · interface pattern · evidence integrity | Each check names its requirement type; preference is not disguised as a standard. |
| Status | Satisfied · To correct · To test · Out of scope | Not tested never means satisfied. |
| Severity | Blocking · High · Medium | Severity does not alter the observed result. |
| Time | Before · After · Retest | A correction adds to historical evidence; it does not replace it. |

The protocol was frozen before the conclusion was written. The same sixteen checks apply to the initial and corrected states. The result is not a score: one blocking failure remains visible even when the other fifteen checks pass.

Public results · 3 September 2026

## Nine gaps corrected, six rules retained, one human retest still open.

*Before and after by interface*

| Interface | Initial state | Corrected state | Decision |
| --- | --- | --- | --- |
| AI agent test | 5 to correct · 1 to test | 5 satisfied · 1 to test | Scan quality now governs verdict wording. |
| Contact form | 4 satisfied · 2 to correct | 6 satisfied | Two summary wordings were corrected; four already-satisfied properties were retained. |
| Article actions | 2 satisfied · 2 to correct | 4 satisfied | Two generic labels were made precise; two already-satisfied properties were retained. |

The third case combines two corrections with two properties that were already satisfied. UXW13 and UXW14 document the labels made precise; UXW15 and UXW16 preserve accessible-name and bilingual consistency. The study separates corrected gaps from retained rules instead of reducing the interface to one global verdict.

Case 01 · Evidence integrity

## Case 01 · AI agent test: a cautious verdict can still be wrong.

The test compared Edikka with two competitors. Access42 was readable and scored 42/45 against Edikka’s 40/45. Claude.ai returned a partial 10/45 result explicitly labelled inconclusive. The former interface summarised everything as “Apparent lag, to confirm.” Caution attached to the weak scan contaminated the reliable comparison.

The correction does not seek a more flattering phrase. It separates evidence sets: **“Confirmed lag behind 1 competitor; 1 inconclusive result.”** The confirmed difference remains two points. The weak result stays visible but can neither create nor erase an advantage.

*From data to text in a mixed comparison*

| Layer | Before | After |
| --- | --- | --- |
| Reliable subset | Present in the data, absent from the decision. | Drives confirmed rank 2/2 and the −2 gap. |
| Weak result | Degraded the whole verdict. | Counted and excluded from confirmed rank with its reason. |
| Shareable report | Score without readability quality. | Score, quality and reasons remain together. |
| Next action | Review everything without knowing which scan to repeat. | Replay the inconclusive scan; handle the confirmed lag separately. |

![Before correction: the apparent lag verdict mixes one reliable competitor with an inconclusive result](/docbd/article/divers/ux-writing-agent-ready-before-2026-09-03.jpg)

*Before · caution attached to the weak scan erased the confirmed lag.*

![After correction: the verdict separates a confirmed lag from an inconclusive result](/docbd/article/divers/ux-writing-agent-ready-after-2026-09-03.jpg)

*After · both evidence states are named without being merged.*

Caution is not a veil over the whole sentence. It must attach precisely to the uncertain evidence. Good UX writing reduces ambiguity without discarding available information.

Case 02 · Form errors

## Case 02 · Contact form: the summary and field should describe the same correction.

On empty submission, the form already identified errors in text, moved focus to the summary, linked back to fields and exposed `aria-invalid` with `aria-describedby`. Four useful mechanisms were present. The gap was wording precision: the summary title remained generic and its links sometimes paraphrased the message displayed beside the field.

The corrected edition announces “4 fields to correct before sending your request” and repeats every message exactly. With one failure, the singular form is used. This identity is not cosmetic: it prevents the same problem from carrying two formulations depending on where it is encountered.

This case checks wording fidelity across the summary, field and accessible announcement. [Accessible forms: errors, focus and lost leads](/en/insights/web-development/accessible-forms-lost-leads) retains the full implementation scope: structure, programmatic associations, data preservation, keyboard navigation and screen-reader testing. This page does not duplicate that technical guide.

*Replayable contact-form scenario*

| Step | Expected | Evidence |
| --- | --- | --- |
| 1. Submit empty | Focus reaches a summary announced as an alert. | Visible focus and role inspection. |
| 2. Count | The title states exactly four fields. | Compare title, four links and four invalid fields. |
| 3. Compare | Every summary link repeats its field message. | Text equality, ignoring punctuation only when meaning is unchanged. |
| 4. Correct | The message identifies the error and a possible correction. | Visible text, `aria-describedby` and a new retest. |

![Before correction: generic contact-form error summary](/docbd/article/divers/ux-writing-contact-errors-before-2026-09-03.jpg)

*Before · accessible mechanisms existed, but the summary did not quantify the task.*

![After correction: the summary states four fields and repeats field-level messages](/docbd/article/divers/ux-writing-contact-errors-after-2026-09-03.jpg)

*After · count, links and inline errors describe the same correction.*

Case 03 · Links and downloads

## Case 03 · Article actions: the control should describe the result, not only the intent.

The generic action panel offered a diagnosis and checklist without naming this page’s asset. The new edition prioritises two concrete outputs: **“Download the UX writing grid (XLSX)”** and **“Audit an interface.”** The format is visible before activation and the commercial destination announces its scope.

The rewrite preserves what already worked: native links, accessible names containing visible labels, equivalent French intent and a stable analytics name for the download. The change is dated in the changelog so a CTA modification during the MIA-FR observation window is not hidden.

![Before correction: generic action panel on the UX writing article](/docbd/article/divers/ux-writing-article-actions-before-2026-09-03.jpg)

*Before · the action existed, but its object remained generic.*

![After correction: UX writing grid download and interface audit actions](/docbd/article/divers/ux-writing-article-actions-after-2026-09-03.jpg)

*After · object, format and destination are announced before activation.*

Open instrument

## All sixteen checks, with acceptance criteria and evidence.

The table is generated from the canonical JSON. The XLSX uses the same identifiers, statuses and observations. Any divergence between article and files blocks the migration.

UXW01–UXW06 · 6 checks

### AI agent readiness test

Mixed comparison: one readable competitor and one inconclusive competitor.

*UXW01 to UXW06 · AI agent readiness test*

| ID | Surface | Check | Acceptance criterion | Change | Basis | Severity | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `UXW01` | agent-ready | The overall verdict only depends on scans that pass the published reliability threshold. | An inconclusive result is excluded from the confirmed rank and cannot create or erase a lead or lag. | To correct → Satisfied | Evidence integrity | Blocking | Replayed case: Edikka 40/45, Access42 42/45 reliable, Claude 10/45 inconclusive. |
| `UXW02` | agent-ready | Every inconclusive result is named and counted. | Readers know how many results are excluded and why without opening every scan detail. | To correct → Satisfied | Evidence integrity | High | Global label and per-competitor quality shown together. |
| `UXW03` | agent-ready | The wording reproduces the actually confirmed gap. | The point difference and its direction match the reliable subset. | To correct → Satisfied | Evidence integrity | High | Comparison of public scores with the rendered verdict. |
| `UXW04` | agent-ready | The report retains each scan's quality, not only its score. | Score, reliability level and at most two reasons remain visible in the shareable report. | To correct → Satisfied | Evidence integrity | High | Public report generated after the fix. |
| `UXW05` | agent-ready | The summary, rank and competitor cards tell the same conclusion. | No layer shows a raw three-participant rank when the confirmed verdict only compares two. | To correct → Satisfied | Evidence integrity | High | Cross-reading the executive summary, comparison panel and report. |
| `UXW06` | agent-ready | The dynamically injected verdict is announced without moving focus. | The important result is exposed to assistive technology with a useful name, role and context. | To test → To test | WCAG | High | DOM inspection available; human evidence not published. |

UXW07–UXW12 · 6 checks

### Contact form

Empty submission: four invalid required fields.

*UXW07 to UXW12 · Contact form*

| ID | Surface | Check | Acceptance criterion | Change | Basis | Severity | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `UXW07` | contact | The error summary states how many fields need correction. | The title uses singular for one field and the exact plural count beyond one. | To correct → Satisfied | Interface pattern | Medium | Empty submission of the contact form. |
| `UXW08` | contact | The summary and field-associated message use exactly the same correction. | The summary link repeats the inline message without a different prefix or rewrite. | To correct → Satisfied | Interface pattern | Medium | Comparison of summary and first-name field after submission. |
| `UXW09` | contact | Every error is identified in text and offers an actionable correction. | The message does not depend on colour or an icon and states the expected information. | Satisfied → Satisfied | WCAG | Blocking | First name, last name, email and project messages. |
| `UXW10` | contact | Focus moves to the summary after an invalid submission. | The summary becomes visible, receives focus and can be reviewed immediately. | Satisfied → Satisfied | Interface pattern | High | Empty submission followed by document.activeElement inspection. |
| `UXW11` | contact | Every summary entry leads to the relevant field. | The link targets the field ID and activation moves focus into that field. | Satisfied → Satisfied | Interface pattern | High | Successive activation of the four summary links. |
| `UXW12` | contact | The invalid field exposes its state and relationship to its message. | aria-invalid is true and aria-describedby references the visible message ID. | Satisfied → Satisfied | WCAG | Blocking | DOM inspection of all four invalid fields. |

UXW13–UXW16 · 4 checks

### UX writing article actions

Choose between downloading the grid and requesting an interface audit.

*UXW13 to UXW16 · UX writing article actions*

| ID | Surface | Check | Acceptance criterion | Change | Basis | Severity | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `UXW13` | article-actions | The primary action names the obtained object or destination. | The link remains understandable in its card and does not use a generic diagnosis label for a download. | To correct → Satisfied | WCAG | High | Article-specific action panel. |
| `UXW14` | article-actions | The file format is announced before activation. | The visible label includes XLSX and the download attribute provides a stable filename. | To correct → Satisfied | Interface pattern | Medium | Visible wording, download attribute and data-download-name event. |
| `UXW15` | article-actions | The accessible name contains the visible label. | No aria-label replaces the displayed words with different wording. | Satisfied → Satisfied | WCAG | High | Accessibility-tree and link-attribute inspection. |
| `UXW16` | article-actions | French and English versions retain the same intent and level of precision. | Object, format, destination and promise remain equivalent; only the language changes. | Satisfied → Satisfied | Evidence integrity | Medium | Comparison of both action panels. |

What the machine announces

## Visible words are not enough: name, description, error and status must remain coherent.

Four technical tests bound this method. First, a control’s accessible name contains its visible label, so voice-control users can speak the words they see. Second, an error is identified in text and associated with its field. Third, the summary reaches the error without replacing its inline message. Finally, a dynamically injected result is exposed as a status message when the context change should not move focus.

These tests are necessary, but their DOM presence does not prove the full experience. UXW06 therefore remains “To test”. The next review must publish the operating system, browser, VoiceOver or NVDA version, steps and announcement actually heard. The method prefers an exact incomplete result to a 16/16 inferred from code.

Replay protocol

## Reproduce the study without asking Edikka to explain the result.

1. Download the v1.0.1 XLSX or JSON and keep identifiers UXW01 to UXW16.
2. Open all three public URLs in an extension-free profile, 1280-pixel width and 100% zoom.
3. For the AI agent test, replay a case with at least one reliable competitor and one inconclusive result; record scores, quality and verdict.
4. For contact, submit the empty form; record focus, title, links, inline errors and programmatic associations.
5. For actions, record label, accessible name, destination, announced format and measurement attribute.
6. Assign one of four statuses, attach evidence and date the result. Never convert “To test” into “Satisfied” by inference.
7. After correction, replay the exact scenario. Add the retest without deleting the initial observation.

A third party may use another resolution or assistive technology if it is declared. The result becomes a comparable new observation, not retrospective validation of this one.

Editorial architecture

## Continue the analysis without conflating microcopy, accessibility and conformance.

### Each resource keeps a distinct purpose.

The UX writing protocol measures interface wording. The following resources own technical implementation, the accessibility foundation and public evidence.

- [01FormsImplement accessible errors, focus and announcements](/en/insights/web-development/accessible-forms-lost-leads)
- [02FoundationPlace the checks within an accessibility method](/en/insights/web-development/web-accessibility-professional-website-basics)
- [03EvidenceReview the public audit and its negative results](/en/audit/accessibility)

Voluntary limit

## Edikka evaluates its own interfaces with a method written by Edikka.

This document is neither an independent ranking, a user study nor a certification. Evidence-integrity criteria are Edikka editorial doctrine; they are not attributed to the W3C. WCAG references apply only to the properties they cover.

The three selected interfaces prioritise states where wording changes a decision, correction or commitment. They do not sample the full site. Screenshots document one context; they do not replace the DOM, source file or retest. Any reproducible objection may enter the changelog with its author and the accepted or rejected correction.

Open resources · CC BY 4.0

## Download, cite, challenge.

- [Edikka UX writing grid v1.0.1 · XLSX](/docbd/data/protocole-ux-writing-edikka-v1.xlsx) — summary, French/English checks and evidence log.
- [Canonical dataset · JSON](/docbd/data/protocole-ux-writing-edikka-v1.json).
- [French edition · Markdown](/llms/insights/ux-writing-interfaces-claires.md).
- [English edition · Markdown](/llms/insights/ux-writing-clearer-interfaces.md).

**Recommended citation:** Morel, Bertrand (2026). *UX writing: protocol applied to three Edikka interfaces*, version 1.0.1, Edikka. Creative Commons Attribution 4.0.

*Public changelog*

| Date | Version | Change |
| --- | --- | --- |
| 3 September 2026 · 15:29 CEST | 1.0.1 | Corrected a divergence between the public summary and the dataset after reconciling all sixteen checks. The initial distribution is now 4 satisfied and 2 to correct for the contact form, then 2 satisfied and 2 to correct for article actions. Totals, observations and detailed decisions are unchanged. |
| 3 September 2026 · 14:53 CEST | 1.0 | Protocol frozen; three interfaces audited; nine gaps corrected; UXW06 kept “To test”; article actions changed and logged during the MIA-FR observation window. |

Primary sources

## Standards and patterns used.

1. [W3C · Understanding SC 2.4.4: Link Purpose](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html).
2. [W3C · Understanding SC 2.5.3: Label in Name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html).
3. [W3C · Understanding SC 3.3.1: Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html).
4. [W3C · Understanding SC 3.3.3: Error Suggestion](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html).
5. [W3C · Understanding SC 4.1.3: Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html).
6. [GOV.UK Design System · Error summary](https://design-system.service.gov.uk/components/error-summary/).
7. [GOV.UK Design System · Error message](https://design-system.service.gov.uk/components/error-message/).
