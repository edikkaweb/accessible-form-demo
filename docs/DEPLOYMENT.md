# Publication receipt — 1 October 2026

The application was published and exercised on its real public URLs after the corrected [GitHub run 36882182918](https://github.com/edikkaweb/accessible-form-demo/actions/runs/36882182918) succeeded, app commit `94475d0`.

- [French](https://edikkaweb.github.io/accessible-form-demo/) and [English](https://edikkaweb.github.io/accessible-form-demo/index-en.html) served HTTP 200. Twenty-one public files exactly matched the local candidate. `.nojekyll` is a build marker excluded by the Pages artifact service; it is not a required browser asset and its public URL returns 404.
- Desktop FR scenario C: one record with unknown receipt; explicit check confirms DEMO-001; retry keeps that reference and one record. Mobile EN deep link: equivalent uncertainty, explicit confirmation, no horizontal overflow at 390px; switching language preserves the fictional request.
- New [Edikka lab card](https://www.edikka.com/bibliotheque#github-lab) and [UX writing instrument links](https://www.edikka.com/bibliotheque#instrument-ux-writing-protocol). Six demos and 24 instruments. Equivalent English links and contextual blocks in both UX writing and accessible-form articles.
- Nine bounded public files deployed, no database writes. Existing local/remote template differences preserved. Thirteen protected production hashes unchanged, including UX writing manifest/dataset, historical four-file lab, library ZIP, catalogue, global bundle manifest and site entry/footer files. Backups and rollback simulation retained privately by Edikka.
- HTTP comparison on all six Edikka pages preserved titles, metadata, canonical/hreflang, structured data and downloadable archive destinations.

[Resource receipt](proofs/first-public-resources.json), [desktop C](proofs/public-desktop-unknown.jpg), [mobile C](proofs/public-mobile-unknown.jpg), [Edikka card](proofs/public-library.jpg). This receipt records the first verified publication; the following documentation commit adds this evidence and publication rows without changing application behaviour.

The first workflow failed 27/28 because tests accessed a static build absent from a fresh checkout. An npm pretest hook builds first; a clean-copy test then passed 28/28 before the corrected workflow was pushed. No failed result is presented as successful.

VoiceOver/Safari, NVDA/Firefox, actual 200/400% browser zoom, physical devices and participant studies remain untested. Static fallback was observed by blocking scripts with CSP, not by switching the browser-wide JavaScript setting. No global accessibility, delivery-to-a-team or conversion claim.
