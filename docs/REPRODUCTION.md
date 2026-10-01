# Reproduire / Reproduce

Node 22+, aucun paquet à installer. `npm run verify`, `npm test`, puis `npm run build`. Les tests HTTP ouvrent de vrais ports éphémères sur 127.0.0.1. Ils ne contactent pas Edikka et n’utilisent que des valeurs fictives.

1. `npm run preview` : ouvrir http://127.0.0.1:4187/accessible-form-demo/ (simulation publique).
2. `npm run lab` : ouvrir http://127.0.0.1:4188/accessible-form-demo/ (serveur HTTP en mémoire).
3. Dans A, envoyer vide : 4 erreurs et focus du résumé. Activer chaque lien avec Entrée. Remplir trois champs : 1 erreur. Changer de variante : valeurs et règles inchangées. Revenir à la référence et corriger.
4. Dans B, utiliser l’exemple fictif puis envoyer : refus explicite, zéro enregistrement. Réessayer : un enregistrement.
5. Dans C, envoyer l’exemple : réception non confirmée alors que le registre pédagogique montre un enregistrement. Vérifier : référence retrouvée. Réessayer : même référence, toujours un enregistrement.
6. Dans D, envoyer puis réactiver pendant les quatre secondes : attente, une tentative reçue. Après confirmation, « Réessayer la même demande » : deux tentatives, un enregistrement. Dans les détails, tester un autre contenu sous la clé : conflit, valeur originale préservée.
7. D : arrêter l’attente, attendre la fin du traitement, vérifier la réception. L’arrêt local ne doit pas être présenté comme une annulation serveur. Changer de scénario via le dialogue : aucun retour tardif ne doit remplacer le nouvel état.
8. C : dans les détails, choisir un statut indisponible, perdu ou momentanément non trouvé. Vérifier : rester incertain. La vérification suivante, normale, retrouve l’enregistrement.
9. Passer en anglais : même état et mêmes valeurs. Ouvrir `index-en.html#scenario=C` dans un autre onglet : scénario C initial, aucune saisie ou décision partagée.
10. Exporter la preuve : JSON lisible/copiable/téléchargeable, compteurs et transitions présents, champs et empreintes de contenu absents.

Le paramètre local `?nojs=1` ajoute une CSP bloquant les scripts. C’est un contrôle de repli sans exécution, pas une écoute de lecteur d’écran. Vérifier aussi dans un navigateur dont JavaScript est réellement désactivé si ce réglage est disponible : exemple, scénarios, sources et méthode restent présents, champs inactifs, aucun envoi natif.

## Observations à compléter honnêtement

VoiceOver/Safari et NVDA/Firefox : noter OS, navigateur, technologie, versions, date et phrases réellement entendues. Tester résumé après vide, liens, aides+erreurs, correction au blur, réponse perdue, vérification et confirmation, sans doubles annonces. Les tests DOM ne peuvent fermer ces lignes.

Zoom navigateur 200/400 % et appareils physiques : vérifier lecture et accès aux actions. Les largeurs CSS documentées dans la matrice sont des observations de reflow, pas la preuve d’un appareil physique. Une étude de participants exige un protocole et ses propres données.

## Original historique

`npm run test:historical` ouvre **le serveur original inchangé** sur un port local éphémère. Il démontre que `duplicate` était vrai à la première création, et qu’une réutilisation avec contenu différent retournait l’ancienne référence en 201 sans conflit. Le test historique attend ces observations, sans les considérer comme le comportement correct du nouveau service. [Résultat daté](proofs/historical-observation.json).

## Sources et publication

`npm run import` retélécharge les neuf sources originales, contrôle les quatre entrées du manifeste et refuse une divergence d’un fichier déjà importé. Les modules normaux ne téléchargent pas de source distante. `npm run build` rend FR/EN et produit `dist/build-manifest.json` avec tailles et SHA-256.

GitHub Pages publie uniquement `dist/`. Configurer Pages sur **GitHub Actions** avant le premier lancement. Le workflow vérifie les originaux, teste, construit, puis déploie. Contrôler ensuite les deux URL réelles, le cas C, les ressources et le lien profond : le build seul ne prouve pas une publication.

## English quick replay

Run the same commands. In A, submit empty, follow all four error links, leave one error and compare wording. B refuses once before storage, then accepts a retry. C must remain uncertain after a lost response; an explicit check finds the record. D waits four seconds and retries under the same reference. Test conflict, cancellation and late responses independently. Exported evidence must contain no entered values or derived fingerprints. Browser simulation and actual local HTTP interruption are separate methods. Record assistive-technology listening and participant research only when actually performed.
