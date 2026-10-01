import { LIMITS } from "./contract.mjs";
export const TEXT = {
  fr: {
    title: "« Message envoyé » : votre demande est-elle vraiment reçue ?",
    subtitle:
      "Comprendre les erreurs, reprendre sa saisie et vérifier la réception : essayez les états d’un formulaire.",
    eyebrow: "UX WRITING · FORMULAIRE & RÉCEPTION",
    skip: "Aller au formulaire",
    method: "Méthode",
    code: "Code",
    language: "Switch interface to English",
    languageShort: "EN",
    start:
      "Commencez par envoyer le formulaire vide, puis suivez les corrections.",
    scenarios: "Choisir un scénario",
    A: "Comprendre et corriger",
    B: "Reprendre après un refus",
    C: "Réponse perdue",
    D: "Attendre sans doublon",
    scenarioA:
      "Envoyez le formulaire vide. Comparez ensuite les mots, à règles identiques.",
    scenarioB:
      "Le premier envoi valide est refusé avant stockage. La reprise est autorisée et peut réussir.",
    scenarioC:
      "Le service enregistre, puis la réponse est perdue. Que peut affirmer le formulaire ?",
    scenarioD:
      "Le service attend 4 secondes avant l’enregistrement. Réactivez la commande, puis rejouez la même demande.",
    formTitle: "Votre demande fictive",
    required: "Les quatre champs sont obligatoires.",
    publicNotice:
      "Démonstration avec données fictives. Aucun message n’est envoyé à Edikka.",
    localNotice:
      "Laboratoire HTTP local : données fictives envoyées uniquement à ce serveur local. Aucun message n’est envoyé à Edikka.",
    fill: "Remplir avec un exemple fictif",
    firstName: "Prénom",
    lastName: "Nom",
    email: "Adresse e-mail",
    request: "Votre demande",
    firstNameHint:
      "De 1 à 100 caractères. Accents, apostrophes et traits d’union acceptés.",
    lastNameHint:
      "De 1 à 100 caractères. Aucune restriction sur la forme du nom.",
    emailHint:
      "Une adresse fictive, par exemple camille@example.test. 254 caractères maximum.",
    requestHint:
      "De 10 à 2 000 caractères. Utilisez uniquement des données fictives.",
    wording: "Formulation du résumé",
    reference: "Référence : précise et synchronisée",
    counterexample: "Contre-exemple : générique et incohérent",
    counterNote:
      "Contre-exemple pédagogique, pas une reproduction de l’ancien formulaire Edikka. Seuls les mots changent.",
    referenceNote:
      "Les mêmes messages apparaissent dans le résumé et près des champs. La validation commence à la soumission, puis se met à jour à la sortie du champ.",
    frozen:
      "L’instantané de cette demande est conservé. Pour le modifier, commencez explicitement une autre demande.",
    send: "Tester l’envoi",
    sending: "Envoi en cours…",
    verify: "Vérifier la réception",
    checking: "Vérification en cours…",
    retry: "Réessayer la même demande",
    newRequest: "Commencer une nouvelle demande",
    newOther: "Commencer une autre demande",
    verifyOriginal: "Vérifier la demande d’origine",
    stop: "Arrêter mon attente",
    observatory: "Suivre ce qui se passe",
    observatoryNote:
      "Ce panneau explique les événements internes. Le formulaire n’utilise que les réponses qu’il reçoit.",
    interface: "Ce que l’interface sait",
    register: "Ce que le service a enregistré",
    simulatedRegister: "Registre de simulation · mémoire du navigateur",
    httpRegister: "Registre du laboratoire local · mémoire du serveur",
    noDurable:
      "Ce registre disparaît à la fermeture de la page (simulation) ou à l’arrêt du serveur (HTTP). Aucun e-mail.",
    attempts: "Tentatives reçues par le service",
    records: "Enregistrements créés",
    ref: "Référence confirmée à l’interface",
    notConfirmed: "Non confirmée",
    timeline: "Chronologie de l’essai",
    emptyTimeline: "Aucune tentative effectuée.",
    technical: "Contrat et détails de l’essai",
    protocolNote:
      "Une clé opaque appartient à un instantané. Une reprise conserve cette clé. Un autre contenu sous la même clé produit un conflit.",
    inspect: "Actualiser le registre pédagogique",
    statusBehavior: "Prochaine vérification (contre-test)",
    normal: "Réponse normale",
    unavailable: "Service de statut indisponible",
    notFound: "Résultat « non trouvé » à cet instant",
    network: "Réponse de statut perdue",
    probe: "Tester la même clé avec un autre contenu",
    probeNote:
      "Ce contre-test envoie un autre texte fictif avec la clé déjà utilisée. Il ne remplace pas la demande d’origine.",
    finding: "Ce que cet essai montre",
    notRun: "Aucun résultat à conclure avant l’essai.",
    save: "Exporter une preuve sans les champs",
    share: "Lien vers ce scénario public",
    exportLabel: "Preuve ou lien à copier",
    download: "Télécharger la preuve JSON",
    exportPrivacy:
      "L’export exclut les valeurs saisies et leurs empreintes. Le lien ne conserve que la langue et le scénario.",
    resetTitle: "Commencer une autre demande ?",
    resetText:
      "L’ancienne demande peut encore être traitée. Une nouvelle clé correspond à une autre intention et peut créer un autre enregistrement. Votre saisie actuelle ne sera pas envoyée automatiquement.",
    stay: "Revenir à cette demande",
    confirmNew: "Créer une autre demande",
    methodTitle: "Des mots à la mesure de ce qui est connu.",
    methodIntro:
      "Quatre expériences bornées, deux modes, une même règle : ne confirmer que ce qu’une réponse établit.",
    staticExample:
      "Exemple expliqué : après une réponse perdue, une demande peut déjà être enregistrée. Le message reste incertain jusqu’à une réponse de vérification. Reprendre avec la même clé retrouve le même enregistrement.",
    historyTitle: "Un prolongement du Protocole UX writing",
    history:
      "L’archive Edikka du 3 septembre 2026 (v1.0.1) documente deux corrections rédactionnelles sur le contact : UXW07 et UXW08. UXW09 à UXW12 étaient déjà satisfaits. UXW06 appartient au test agents IA et reste « À tester ». Ces observations ne sont pas réécrites par la présente démo.",
    modesTitle: "Simulation publique, laboratoire HTTP réel",
    modes:
      "Sur GitHub Pages, aucun champ ne quitte le navigateur. Le laboratoire local réserve et stocke réellement en mémoire sur 127.0.0.1 ; le scénario C ferme la connexion après stockage. Les deux modes partagent validation et contrat. Une panne simulée dans le navigateur n’est pas une coupure HTTP réelle.",
    accessTitle: "Clavier, erreurs et annonces",
    access:
      "Le résumé reçoit le focus après une soumission invalide. Ses liens ciblent les champs. Les aides restent associées. Une région de statut annonce les réponses sans déplacer le focus ; le résumé ne cumule pas focus et alerte live. Les observations DOM ne prouvent pas ce qu’un lecteur d’écran annonce.",
    limits:
      "Aucune conformité globale, étude utilisateurs ou amélioration de conversion déduite. Aucun e-mail livré, aucun contact transmis, aucun stockage durable.",
    sources: "Sources et reproduction",
    uxArticle: "Article UX writing",
    formArticle: "Article formulaire accessible",
    protocol: "Protocole UX writing 1.0.1",
    reproduce: "Reproduire les tests",
    matrix: "Résultats et essais non réalisés",
    stateDocs: "États et contrat HTTP",
    provenance: "Provenance et licences",
    noscript:
      "La manipulation nécessite JavaScript. L’exemple, les scénarios et la méthode restent consultables. Le formulaire est inactif et n’envoie rien.",
    loading: "Le formulaire reste inactif jusqu’au démarrage de JavaScript.",
    ready: "Prêt. Utilisez uniquement des données fictives.",
    failed:
      "La manipulation n’a pas pu démarrer. Les champs restent inactifs. Consultez la méthode et les fichiers.",
    version: "Démo 1.0.0 · contrat 1.0.0 · protocole UX writing 1.0.1",
    back: "Bibliothèque Edikka",
    none: "Aucune",
    preserved: "Votre saisie est conservée.",
    unknown:
      "La réception de votre demande n’est pas confirmée. Vérifiez son état avant de réessayer.",
    waiting:
      "Le service traite la tentative. Aucune réception n’est encore confirmée.",
    refused:
      "Le service confirme que cette tentative n’a pas été enregistrée. Votre saisie est conservée. Vous pouvez réessayer.",
    conflict:
      "Cette clé correspond déjà à une autre version. La demande enregistrée n’est pas remplacée. Vérifiez l’original ou commencez une nouvelle demande.",
    notFoundMessage:
      "Aucun enregistrement retrouvé à cet instant. Une requête peut encore être en cours. La réception reste non confirmée.",
    unavailableMessage:
      "La vérification n’a pas abouti. La réception reste non confirmée. Vérifiez à nouveau ou réessayez la même demande.",
    cancelledMessage:
      "Votre attente est arrêtée. Le traitement peut continuer : la réception reste non confirmée.",
    confirmedSimulation: "Enregistrement confirmé dans la simulation.",
    confirmedHTTP: "Enregistrement confirmé dans le laboratoire local.",
    duplicate: "Même référence retrouvée, aucun nouvel enregistrement.",
    correcting: "Corrigez les champs indiqués. Votre saisie est conservée.",
    editing: "Aucun envoi effectué.",
    findInvalid:
      "Les erreurs sont dénombrées et les valeurs restent présentes. La variante rédactionnelle ne change pas la validation.",
    findRefused:
      "La réponse explicite établit un refus avant stockage. Ce cas permet une reprise, sans ressaisie.",
    findUnknown:
      "Le registre pédagogique peut montrer un enregistrement, mais l’interface ne dispose pas d’une confirmation. La vérification est une action distincte.",
    findConfirmed:
      "Une réponse établit l’enregistrement. La référence permet de reconnaître une reprise de la même demande.",
    findDuplicate:
      "Deux tentatives peuvent retrouver une seule référence. La clé protège aussi le service, au-delà du bouton.",
    findConflict:
      "La même clé ne permet pas de remplacer silencieusement le contenu enregistré.",
    findWaiting:
      "L’absence de réponse pendant l’attente ne prouve ni succès ni échec.",
  },
  en: {
    title: "“Message sent”: was your request actually received?",
    subtitle:
      "Understand errors, resume your input and check receipt: try the states of a form.",
    eyebrow: "UX WRITING · FORMS & RECEIPT",
    skip: "Skip to the form",
    method: "Method",
    code: "Code",
    language: "Passer l’interface en français",
    languageShort: "FR",
    start: "Start by submitting the empty form, then follow the corrections.",
    scenarios: "Choose a scenario",
    A: "Understand and correct",
    B: "Retry after a refusal",
    C: "Lost response",
    D: "Wait without duplicates",
    scenarioA:
      "Submit the empty form. Then compare the wording, with identical rules.",
    scenarioB:
      "The first valid attempt is refused before storage. A retry is allowed and can succeed.",
    scenarioC:
      "The service records the request, then the response is lost. What can the form say?",
    scenarioD:
      "The service waits 4 seconds before recording. Activate the button again, then retry the same request.",
    formTitle: "Your fictional request",
    required: "All four fields are required.",
    publicNotice: "Demo with fictional data. No message is sent to Edikka.",
    localNotice:
      "Local HTTP lab: fictional data goes only to this local server. No message is sent to Edikka.",
    fill: "Fill with a fictional example",
    firstName: "First name",
    lastName: "Last name",
    email: "Email address",
    request: "Your request",
    firstNameHint:
      "1–100 characters. Accents, apostrophes and hyphens are accepted.",
    lastNameHint: "1–100 characters. No restriction on the form of a name.",
    emailHint:
      "A fictional address, such as camille@example.test. Maximum 254 characters.",
    requestHint: "10–2,000 characters. Use fictional data only.",
    wording: "Summary wording",
    reference: "Reference: precise and synchronised",
    counterexample: "Counterexample: generic and inconsistent",
    counterNote:
      "A teaching counterexample, not a reproduction of Edikka’s old form. Only wording changes.",
    referenceNote:
      "The same messages appear in the summary and beside the fields. Validation starts on submission, then updates when leaving a field.",
    frozen:
      "This request’s snapshot is preserved. To edit it, explicitly start another request.",
    send: "Try submitting",
    sending: "Sending…",
    verify: "Check receipt",
    checking: "Checking receipt…",
    retry: "Retry the same request",
    newRequest: "Start a new request",
    newOther: "Start another request",
    verifyOriginal: "Check the original request",
    stop: "Stop waiting",
    observatory: "Follow what happens",
    observatoryNote:
      "This panel explains internal events. The form uses only responses it actually receives.",
    interface: "What the interface knows",
    register: "What the service has recorded",
    simulatedRegister: "Simulation register · browser memory",
    httpRegister: "Local lab register · server memory",
    noDurable:
      "The register disappears when the page closes (simulation) or the server stops (HTTP). No email.",
    attempts: "Attempts received by the service",
    records: "Records created",
    ref: "Reference confirmed to the interface",
    notConfirmed: "Not confirmed",
    timeline: "Trial timeline",
    emptyTimeline: "No attempt made.",
    technical: "Contract and trial details",
    protocolNote:
      "An opaque key belongs to a snapshot. A retry keeps the key. Different content under the same key produces a conflict.",
    inspect: "Refresh the teaching register",
    statusBehavior: "Next status check (counter-test)",
    normal: "Normal response",
    unavailable: "Status service unavailable",
    notFound: "“Not found” at this instant",
    network: "Status response lost",
    probe: "Try the same key with different content",
    probeNote:
      "This counter-test sends other fictional text under the existing key. It does not replace the original request.",
    finding: "What this trial shows",
    notRun: "No conclusion before the trial.",
    save: "Export evidence without field values",
    share: "Link to this public scenario",
    exportLabel: "Evidence or link to copy",
    download: "Download JSON evidence",
    exportPrivacy:
      "Exports exclude entered values and their fingerprints. Links include only language and scenario.",
    resetTitle: "Start another request?",
    resetText:
      "The earlier request may still be processed. A new key represents another intention and may create another record. Your current input will not be sent automatically.",
    stay: "Return to this request",
    confirmNew: "Create another request",
    methodTitle: "Words that match what is known.",
    methodIntro:
      "Four bounded experiments, two modes, one rule: only confirm what a response establishes.",
    staticExample:
      "Explained example: after a lost response, a request may already be recorded. The interface stays uncertain until a status response arrives. Retrying the same key finds the same record.",
    historyTitle: "An extension of the UX writing protocol",
    history:
      "The Edikka archive dated 3 September 2026 (v1.0.1) records two wording corrections on the contact form: UXW07 and UXW08. UXW09–UXW12 were already satisfied. UXW06 belongs to the AI agent test and remains “To test”. This demo does not rewrite those observations.",
    modesTitle: "Public simulation, real local HTTP lab",
    modes:
      "On GitHub Pages, no field leaves the browser. The local lab actually reserves and stores in memory on 127.0.0.1; scenario C closes the connection after storage. Both modes share validation and contract. A browser-simulated fault is not a real HTTP interruption.",
    accessTitle: "Keyboard, errors and announcements",
    access:
      "The summary receives focus after an invalid submission. Its links target the fields. Hints stay associated. One status region announces responses without moving focus; the summary does not combine focus with a live alert. DOM observations do not prove what a screen reader announces.",
    limits:
      "No claim of global conformance, user research or conversion improvement. No email delivery, no contact forwarded, no durable storage.",
    sources: "Sources and reproduction",
    uxArticle: "UX writing article",
    formArticle: "Accessible form article",
    protocol: "UX writing protocol 1.0.1",
    reproduce: "Reproduce the tests",
    matrix: "Results and unperformed checks",
    stateDocs: "States and HTTP contract",
    provenance: "Provenance and licences",
    noscript:
      "Interaction requires JavaScript. The example, scenarios and method remain available. The form is inactive and sends nothing.",
    loading: "The form stays inactive until JavaScript starts.",
    ready: "Ready. Use fictional data only.",
    failed:
      "Interaction could not start. Fields remain inactive. Read the method and source files.",
    version: "Demo 1.0.0 · contract 1.0.0 · UX writing protocol 1.0.1",
    back: "Edikka library",
    none: "None",
    preserved: "Your input is preserved.",
    unknown:
      "Receipt of your request is not confirmed. Check its status before trying again.",
    waiting:
      "The service is processing this attempt. Receipt is not yet confirmed.",
    refused:
      "The service confirms this attempt was not recorded. Your input is preserved. You can retry.",
    conflict:
      "This key already refers to another version. The stored request has not been replaced. Check the original or start a new request.",
    notFoundMessage:
      "No record found at this instant. A request may still be in progress. Receipt remains unconfirmed.",
    unavailableMessage:
      "The check did not complete. Receipt remains unconfirmed. Check again or retry the same request.",
    cancelledMessage:
      "You stopped waiting. Processing may continue: receipt remains unconfirmed.",
    confirmedSimulation: "Recording confirmed in the simulation.",
    confirmedHTTP: "Recording confirmed in the local lab.",
    duplicate: "Same reference found, no new record.",
    correcting: "Correct the indicated fields. Your input is preserved.",
    editing: "Nothing submitted.",
    findInvalid:
      "Errors are counted and input stays present. Wording changes do not alter validation.",
    findRefused:
      "The explicit response establishes a refusal before storage. This case allows a retry without retyping.",
    findUnknown:
      "The teaching register may show a record, but the interface has no confirmation. Checking receipt is a separate action.",
    findConfirmed:
      "A response establishes recording. The reference identifies a retry of the same request.",
    findDuplicate:
      "Two attempts can find one reference. The key protects the service beyond the button.",
    findConflict: "The same key cannot silently replace stored content.",
    findWaiting:
      "No response during a wait proves neither success nor failure.",
  },
};
export function errorText(
  locale,
  field,
  code,
  variant = "reference",
  summary = false,
) {
  const t = TEXT[locale],
    en = locale === "en";
  let m;
  if (code === "required")
    m = {
      firstName: en ? "Enter your first name." : "Saisissez votre prénom.",
      lastName: en ? "Enter your last name." : "Saisissez votre nom.",
      email: en
        ? "Enter your email address, for example camille@example.test."
        : "Saisissez votre adresse e-mail, par exemple camille@example.test.",
      request: en
        ? "Describe your request in at least 10 characters."
        : "Décrivez votre demande en au moins 10 caractères.",
    }[field];
  else if (code === "format")
    m = en
      ? "Check the email address, for example camille@example.test."
      : "Vérifiez l’adresse e-mail, par exemple camille@example.test.";
  else if (code === "long")
    m = en
      ? `Use no more than ${LIMITS[field][1]} characters.`
      : `Utilisez au maximum ${LIMITS[field][1]} caractères.`;
  else
    m = en
      ? "Describe your request in at least 10 characters."
      : "Décrivez votre demande en au moins 10 caractères.";
  return variant === "counterexample" && summary
    ? `${t[field]} : ${en ? "Check this field." : "Vérifiez ce champ."}`
    : m;
}
export function errorHeading(locale, count, variant = "reference") {
  if (!count) return "";
  if (variant === "counterexample")
    return locale === "en" ? "There is a problem." : "Il y a un problème.";
  return locale === "en"
    ? `${count} ${count === 1 ? "field" : "fields"} to correct before continuing.`
    : `${count} ${count === 1 ? "champ à corriger" : "champs à corriger"} avant de continuer.`;
}
export function phaseText(s, mode) {
  const t = TEXT[s.locale];
  if (s.phase === "confirmed")
    return `${mode === "http" ? t.confirmedHTTP : t.confirmedSimulation} ${s.receipt.reference}. ${s.receipt.duplicate ? t.duplicate : ""}`;
  if (s.phase === "unknown")
    return (
      {
        not_found_at_check: t.notFoundMessage,
        status_unavailable: t.unavailableMessage,
        wait_cancelled: t.cancelledMessage,
      }[s.reason] || t.unknown
    );
  return {
    editing: t.editing,
    invalid: t.correcting,
    sending: t.waiting,
    checking: t.checking,
    refused: t.refused,
    conflict: t.conflict,
  }[s.phase];
}
export function findingText(s) {
  const t = TEXT[s.locale];
  return {
    editing: t.notRun,
    invalid: t.findInvalid,
    refused: t.findRefused,
    unknown: t.findUnknown,
    sending: t.findWaiting,
    checking: t.findUnknown,
    conflict: t.findConflict,
    confirmed: s.receipt?.duplicate ? t.findDuplicate : t.findConfirmed,
  }[s.phase];
}
export function eventText(locale, e) {
  const names =
    locale === "en"
      ? {
          attempt: "Attempt received",
          validation_refused: "Validation refused",
          refused_before_storage: "Refused before storage",
          accepted_pending: "Processing in progress",
          recorded: "Record created",
          response: "Response issued",
          response_lost_after_storage: "Response lost after recording",
          connection_lost_before_storage: "Connection lost before recording",
          verification: "Status check requested",
          verification_response_lost: "Status response lost",
          verification_unavailable: "Status service unavailable",
          not_found_at_check: "Not found at this instant",
          receipt_found: "Record found",
          conflict: "Different content: conflict",
        }
      : {
          attempt: "Tentative reçue",
          validation_refused: "Validation refusée",
          refused_before_storage: "Refus avant stockage",
          accepted_pending: "Traitement en cours",
          recorded: "Enregistrement créé",
          response: "Réponse émise",
          response_lost_after_storage: "Réponse perdue après stockage",
          connection_lost_before_storage: "Connexion perdue avant stockage",
          verification: "Vérification demandée",
          verification_response_lost: "Réponse de vérification perdue",
          verification_unavailable: "Vérification indisponible",
          not_found_at_check: "Non trouvé à cet instant",
          receipt_found: "Enregistrement retrouvé",
          conflict: "Autre contenu : conflit",
        };
  return (names[e.type] || e.type) + (e.reference ? " · " + e.reference : "");
}
