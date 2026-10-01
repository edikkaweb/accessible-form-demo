# Provenance and licences / Provenance et licences

Import daté : 2026-10-01T14:26:32.281Z. Originaux dans `originals/`, dérivés séparés. Les quatre fichiers listés par le manifeste UX writing correspondent exactement à leurs tailles et SHA-256. Le manifeste original n’a pas été réécrit. `npm run verify` recalcule les neuf empreintes d’import et protège les statuts UXW.

| Resource                                                                                                                | Declared version                   | Retrieved (UTC)          | Bytes | SHA-256                                                            |
| ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ------------------------ | ----: | ------------------------------------------------------------------ |
| [ux-writing/manifest.json](https://www.edikka.com/docbd/data/protocole-ux-writing-edikka-v1-manifest.json)              | ux-writing-edikka-reference-v1.0.1 | 2026-10-01T14:26:32.143Z |   878 | `cb72265c85f573f4eab14f9de416ad9c21db7f374de202c261b2826fec385ac9` |
| [ux-writing/protocole-ux-writing-edikka-v1.json](https://www.edikka.com/docbd/data/protocole-ux-writing-edikka-v1.json) | ux-writing-edikka-reference-v1.0.1 | 2026-10-01T14:26:32.162Z | 27323 | `568543626490b07aaa7c53109f387de0c8b3d763a01637564ebd43436614b09a` |
| [ux-writing/protocole-ux-writing-edikka-v1.xlsx](https://www.edikka.com/docbd/data/protocole-ux-writing-edikka-v1.xlsx) | ux-writing-edikka-reference-v1.0.1 | 2026-10-01T14:26:32.183Z | 21152 | `d5dfd9fe3bdaf8aa889baa575b0cff4ed0597d917e747518b5e69f242608e687` |
| [ux-writing/ux-writing-interfaces-claires.md](https://www.edikka.com/llms/insights/ux-writing-interfaces-claires.md)    | ux-writing-edikka-reference-v1.0.1 | 2026-10-01T14:26:32.202Z | 23286 | `de5eb54850444738d8da86c868c6e35635b4f53f0cdbd17be8cadc7ac24628b5` |
| [ux-writing/ux-writing-clearer-interfaces.md](https://www.edikka.com/llms/insights/ux-writing-clearer-interfaces.md)    | ux-writing-edikka-reference-v1.0.1 | 2026-10-01T14:26:32.219Z | 20662 | `e7ba888d75c25d6e3b7f5e1e648e98d2e216a8177685800cde02f3dd2e4ae413` |
| [accessible-form-reference/README.md](https://www.edikka.com/tools/accessible-form-reference/README.md)                 | 1.0 declared in README             | 2026-10-01T14:26:32.234Z |  1439 | `9a1a05e326c00884344245a8528287a1269587ac7c32d19aefc4f99cf236cd22` |
| [accessible-form-reference/index.html](https://www.edikka.com/tools/accessible-form-reference/index.html)               | 1.0 declared in README             | 2026-10-01T14:26:32.251Z |  8276 | `ff3c37a734bd2c7aea64073be89b0d26f7728ef25448f1a6cf05ecc476b719d5` |
| [accessible-form-reference/server.mjs](https://www.edikka.com/tools/accessible-form-reference/server.mjs)               | 1.0 declared in README             | 2026-10-01T14:26:32.265Z |  4225 | `9466c9d466b524c18c37ba03aea97675c8982dc7f16a2d1a78c5e722e0e7894e` |
| [accessible-form-reference/test.mjs](https://www.edikka.com/tools/accessible-form-reference/test.mjs)                   | 1.0 declared in README             | 2026-10-01T14:26:32.281Z |  2325 | `18cf4d01ac06de66aed4d3bf87292a73388c2e26f220eac08345aa5b37c240c1` |

## Attribution et adaptations

Le protocole, ses miroirs et son XLSX sont attribués à Edikka / Bertrand Morel, sous CC BY 4.0 selon le dataset. Le manifeste est conservé. Les quatre sources du laboratoire formulaire déclarent une édition 1.0 dans leur README, mais aucune licence explicite n’y est présente. Elles restent dans leur dossier d’origine attribué et sont **exclues de la licence MIT du nouveau code**. Ne pas déduire une permission générale d’une simple disponibilité publique.

La nouvelle implémentation reprend le principe pédagogique de scénarios et de clé idempotente ; elle réécrit les responsabilités pour partager contrat, validation et machine à états. Elle ajoute réservation avant attente, conflit canonique, indicateurs duplicate corrects, instantané, protection des retours tardifs, FR/EN, variantes rédactionnelles et exports expurgés. Le test historique importe l’ancien serveur intact uniquement sur loopback. Les défauts observés sont datés séparément, sans altérer les articles ou observations historiques.

## Références primaires

Les critères WCAG sont distingués des documents Understanding (explications), du tutoriel WAI et des patterns GOV.UK. Le nombre exact d’erreurs et la synchronisation rédactionnelle relèvent ici des patterns et du protocole Edikka ; ils ne sont pas présentés comme le libellé normatif d’un critère WCAG. La réservation idempotente est un contrat technique de cette démo.

- [WAI Forms Tutorial](https://www.w3.org/WAI/tutorials/forms/notifications/), récupéré 2026-10-01T14:41:02.598Z, SHA-256 `bc779609a639d460bdb5e3ebdbcef52b6a132d5b78c127686b70f972155357e8`.
- [WCAG 2.2 Understanding 3.3.1](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html), récupéré 2026-10-01T14:41:02.703Z, SHA-256 `0c33f7d1c0643f3b86d9585cc1b4dfa365950100869d6f67bd0e2b949834e361`.
- [WCAG 2.2 Understanding 3.3.3](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html), récupéré 2026-10-01T14:41:02.741Z, SHA-256 `4f4a68a0035ce362c6e54c50b9f5d4b4969b0b26b8d96cd92c472710ae9b09d2`.
- [WCAG 2.2 Understanding 4.1.3](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html), récupéré 2026-10-01T14:41:02.770Z, SHA-256 `d5a085f7be8814e4f01520db08d41d09b62491f40dc0fb6fb4941ec762cf3746`.
- [GOV.UK Design System, page sans version déclarée](https://design-system.service.gov.uk/components/error-summary/), récupéré 2026-10-01T14:41:02.798Z, SHA-256 `00a4e15befece2d94e48f83880e45b03f5c480348f61372623925a4afd237d19`.
- [GOV.UK Design System, page sans version déclarée](https://design-system.service.gov.uk/components/error-message/), récupéré 2026-10-01T14:41:02.980Z, SHA-256 `4aa20d7cd5487f074cd0580baddcf2d11281afbf3708c801512c061218f38fea`.

Copies HTML datées et manifestes conservés dans la recette locale Edikka #556 ; elles ne sont pas republiées dans le dépôt. Ces URL sont des sources vivantes ; leur contenu peut évoluer. Les titres WCAG déclarent la version 2.2 ; les deux pages GOV.UK consultées ne déclarent pas un numéro de version de composant.

New implementation: MIT, excluding `originals/`. Original UX writing resources: CC BY 4.0, attribution retained. Historical form-lab licence: not established from the imported files; no silent relicensing.
