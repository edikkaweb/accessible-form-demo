---
title: "UX writing : protocole vérifiable appliqué à trois interfaces réelles Edikka"
description: "Avant/après public sur un test IA, un formulaire et des CTA : 16 contrôles UX writing rejouables, preuves ouvertes, XLSX et JSON."
canonical: "https://www.edikka.com/insights/ux-ui-design/ux-writing-interfaces-claires"
author: "Bertrand Morel"
publisher: "Edikka"
version: "1.0.1"
published: "2026-09-03"
last_reviewed: "2026-09-03"
next_review: "2026-12-03"
license: "CC BY 4.0"
---

# UX writing : protocole vérifiable appliqué à trois interfaces réelles Edikka

Avant/après public sur un test IA, un formulaire et des CTA : 16 contrôles UX writing rejouables, preuves ouvertes, XLSX et JSON.

Réponse courte

## L’UX writing est vérifiable quand les mots correspondent à l’état réel de l’interface.

Un libellé n’est pas « bon » parce qu’il paraît fluide. Il est utile lorsqu’il nomme l’action, l’objet, le prochain état et le niveau de certitude sans demander au lecteur d’interpréter le système. Sur une interface critique, cette promesse doit aussi rester vraie dans le nom accessible, le résumé d’erreurs, le message dynamique et la version anglaise.

Edikka a appliqué cette définition à trois interfaces publiques : le test de préparation aux agents IA, le formulaire de contact et les actions de cet article. Le protocole compte seize contrôles stables. Quinze sont satisfaits après correction ; le seizième reste volontairement « À tester » tant qu’un contre-test VoiceOver et NVDA n’est pas publié.

Une phrase plus claire n’est pas automatiquement une phrase plus performante. Cette étude ne déduit aucun gain de conversion, de satisfaction ou de compréhension. Elle vérifie la fidélité entre les mots, l’état de preuve, l’action disponible et ce qu’annonce la machine.

Définition opérationnelle

## Ce que le protocole mesure — et ce qu’il refuse d’inventer.

*Frontière de l’étude UX writing Edikka v1.0.1*

| Dimension | Mesurée ici | Non démontrée |
| --- | --- | --- |
| Exactitude | Le texte correspond aux données et à leur niveau de fiabilité. | Que le lecteur mémorise mieux l’information. |
| Action | Le libellé nomme l’objet, le format ou l’étape suivante. | Que davantage de personnes cliquent. |
| Accessibilité | Nom accessible, association d’erreur, focus et statut programmatique. | La conformité RGAA complète de la page ou du site. |
| Cohérence | Résumé, détail, rapport et version anglaise portent la même décision. | Une préférence éditoriale universelle. |

Cette frontière évite le raccourci le plus courant : confondre une microcopie conforme à un critère observable avec une preuve d’efficacité commerciale. Un test utilisateur ou une expérience contrôlée peut mesurer la compréhension et la réussite d’une tâche. Les seize contrôles ci-dessous répondent à une question plus étroite : **l’interface dit-elle exactement ce que son système sait, fait et attend ?**

Méthode Edikka · v1.0.1

## Trois fondements, quatre statuts, aucune moyenne qui efface un défaut bloquant.

*Vocabulaire contrôlé du protocole*

| Champ | Valeurs autorisées | Règle |
| --- | --- | --- |
| Fondement | WCAG · pattern d’interface · intégrité de preuve | Chaque contrôle annonce la nature de son exigence ; une préférence n’est pas maquillée en norme. |
| Statut | Satisfait · À corriger · À tester · Hors périmètre | Non testé ne signifie jamais satisfait. |
| Sévérité | Bloquante · Haute · Moyenne | La sévérité ne modifie pas le résultat observé. |
| Temporalité | Avant · Après · Contre-test | La correction ne remplace pas la preuve historique ; elle s’y ajoute. |

Le protocole a été figé avant l’écriture de la conclusion. Les mêmes seize contrôles sont appliqués à l’état initial et à l’état corrigé. Le bilan n’est pas une note : un contrôle bloquant à corriger reste visible même si les quinze autres sont satisfaits.

Bilan public · 3 septembre 2026

## Neuf écarts corrigés, six règles conservées, un contre-test humain encore ouvert.

*Résultats avant et après par interface*

| Interface | État initial | État corrigé | Décision |
| --- | --- | --- | --- |
| Test agents IA | 5 à corriger · 1 à tester | 5 satisfaits · 1 à tester | La qualité du scan gouverne désormais la formulation du verdict. |
| Formulaire de contact | 4 satisfaits · 2 à corriger | 6 satisfaits | Deux formulations du résumé ont été corrigées ; quatre propriétés déjà satisfaites ont été conservées. |
| Actions de l’article | 2 satisfaits · 2 à corriger | 4 satisfaits | Deux libellés génériques ont été précisés ; deux propriétés déjà satisfaites ont été conservées. |

Le troisième cas combine deux corrections et deux propriétés déjà satisfaites. UXW13 et UXW14 documentent les libellés précisés ; UXW15 et UXW16 conservent la cohérence du nom accessible et des deux langues. L’étude sépare les écarts corrigés des règles conservées au lieu de réduire l’interface à un verdict global.

Cas 01 · Intégrité de preuve

## Cas 01 · Test agents IA : un verdict prudent peut quand même être faux.

Le test comparait Edikka à deux concurrents. Access42 était lisible et obtenait 42/45 contre 40/45 pour Edikka. Claude.ai ne livrait qu’un résultat partiel, 10/45, explicitement non décisif. L’ancienne interface résumait pourtant l’ensemble par « Retard apparent, à confirmer ». La précaution appliquée au scan faible contaminait la comparaison fiable.

Le correctif ne cherche pas une formulation plus positive. Il sépare les ensembles de preuve : **« Retard confirmé face à 1 concurrent ; 1 résultat non décisif. »** L’écart confirmé reste de deux points. Le résultat faible demeure visible, mais ne crée ni n’efface un avantage.

*De la donnée au texte : état mixte du test*

| Couche | Avant | Après |
| --- | --- | --- |
| Sous-ensemble fiable | Présent dans les données, absent de la décision. | Porte le rang confirmé 2/2 et l’écart de −2. |
| Résultat faible | Dégradait le verdict entier. | Compté et exclu du rang confirmé avec sa raison. |
| Rapport partageable | Score sans qualité de lecture. | Score, qualité et motifs restent ensemble. |
| Action suivante | Relire l’ensemble sans savoir quel scan reprendre. | Rejouer le résultat non décisif ; traiter séparément le retard confirmé. |

![Avant correction : le verdict global Retard apparent à confirmer mélange un concurrent fiable et un résultat non décisif](/docbd/article/divers/ux-writing-agent-ready-before-2026-09-03.jpg)

*Avant · la prudence du scan faible effaçait le retard confirmé face au scan fiable.*

![Après correction : le verdict sépare le retard confirmé et le résultat non décisif](/docbd/article/divers/ux-writing-agent-ready-after-2026-09-03.jpg)

*Après · les deux états de preuve sont nommés sans être fusionnés.*

La prudence n’est pas un voile posé sur toute la phrase. Elle doit porter exactement sur la donnée incertaine. Un bon UX writing réduit l’ambiguïté sans réduire l’information disponible.

Cas 02 · Erreurs de formulaire

## Cas 02 · Formulaire de contact : le résumé et le champ doivent raconter la même correction.

Lors d’une soumission vide, le formulaire identifiait déjà les erreurs par écrit, plaçait le focus sur le résumé, reliait les liens aux champs et exposait `aria-invalid` ainsi que `aria-describedby`. Quatre mécanismes utiles étaient donc présents. Le défaut se trouvait dans la précision des mots : le titre du résumé restait générique et ses liens paraphrasaient parfois le message affiché près du champ.

La version corrigée annonce « 4 champs à corriger avant d’envoyer votre demande. » puis reprend chaque message exactement. Si un seul champ échoue, le singulier est utilisé. Cette identité n’est pas esthétique : elle évite qu’un même problème porte deux formulations selon l’endroit où l’utilisateur le rencontre.

Ce cas vérifie la fidélité des mots entre résumé, champ et annonce accessible. L’article [Formulaire accessible : erreurs, focus et contacts perdus](/insights/developpement-web/formulaire-accessible-erreurs-contacts-perdus) conserve le périmètre d’implémentation complet : structure, associations programmatiques, conservation des données, navigation clavier et tests avec lecteur d’écran. Cette page ne reprend pas ce guide technique.

*Scénario rejouable du formulaire de contact*

| Étape | Attendu | Preuve |
| --- | --- | --- |
| 1. Soumettre vide | Le focus rejoint un résumé annoncé comme une alerte. | Focus visible et inspection du rôle programmatique. |
| 2. Compter | Le titre annonce exactement quatre champs. | Comparaison entre le titre, les quatre liens et les quatre champs invalides. |
| 3. Comparer | Chaque lien du résumé reprend le message associé au champ. | Égalité textuelle, ponctuation exclue si elle n’altère pas le sens. |
| 4. Corriger | Le message indique la nature de l’erreur et une correction possible. | Texte visible, `aria-describedby` et nouveau contre-test. |

![Avant correction : résumé générique des erreurs du formulaire de contact](/docbd/article/divers/ux-writing-contact-errors-before-2026-09-03.jpg)

*Avant · les mécanismes d’accessibilité existaient, mais le résumé ne quantifiait pas la tâche.*

![Après correction : le résumé annonce quatre champs et reprend les messages des champs](/docbd/article/divers/ux-writing-contact-errors-after-2026-09-03.jpg)

*Après · nombre, liens et erreurs en ligne décrivent la même correction.*

Cas 03 · Liens et téléchargements

## Cas 03 · Actions d’article : le bouton doit décrire le résultat, pas seulement l’intention.

Le panneau d’action générique proposait un diagnostic et une checklist sans nommer l’actif de cette page. La nouvelle édition donne la priorité à deux sorties concrètes : **« Télécharger la grille UX writing (XLSX) »** et **« Auditer une interface »**. Le format est visible avant le clic et la destination commerciale annonce son périmètre.

La réécriture conserve ce qui était déjà conforme : les liens restent natifs, leur nom accessible contient le libellé visible, la version anglaise conserve la même intention et le téléchargement porte un nom de mesure stable. La mise à jour est datée dans ce changelog afin de ne pas masquer qu’un CTA d’insight a changé pendant la fenêtre d’observation MIA-FR.

![Avant correction : panneau d’action générique de l’article UX writing](/docbd/article/divers/ux-writing-article-actions-before-2026-09-03.jpg)

*Avant · l’action était disponible, mais son objet restait générique.*

![Après correction : téléchargement de la grille UX writing et audit d’interface](/docbd/article/divers/ux-writing-article-actions-after-2026-09-03.jpg)

*Après · objet, format et destination sont annoncés avant l’activation.*

Instrument ouvert

## Les seize contrôles, avec leur critère et leur preuve.

Le tableau est généré depuis le JSON canonique. Le XLSX reprend les mêmes identifiants, statuts et observations. Une divergence entre l’article et les fichiers bloque la migration.

UXW01–UXW06 · 6 contrôles

### Test de préparation aux agents IA

Comparaison mixte : un concurrent lisible, un concurrent non décisif.

*UXW01 à UXW06 · Test de préparation aux agents IA*

| ID | Interface | Contrôle | Critère d’acceptation | Évolution | Fondement | Sévérité | Preuve |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `UXW01` | agent-ready | Le verdict global ne dépend que des scans dont la fiabilité franchit le seuil publié. | Un résultat non décisif est exclu du rang confirmé et ne peut ni créer ni effacer une avance ou un retard. | À corriger → Satisfait | Intégrité de preuve | Bloquante | Cas rejoué : Edikka 40/45, Access42 42/45 fiable, Claude 10/45 non décisif. |
| `UXW02` | agent-ready | Chaque résultat non décisif est nommé et compté. | Le lecteur sait combien de résultats sont exclus et pourquoi, sans devoir ouvrir le détail de chaque scan. | À corriger → Satisfait | Intégrité de preuve | Haute | Libellé global et qualité affichée sur chaque concurrent. |
| `UXW03` | agent-ready | La formulation reprend l'écart réellement confirmé. | Le nombre de points et le sens de l'écart correspondent au sous-ensemble fiable. | À corriger → Satisfait | Intégrité de preuve | Haute | Comparaison des scores publics et du verdict rendu. |
| `UXW04` | agent-ready | Le rapport conserve la qualité de chaque scan, pas seulement son score. | Score, niveau de fiabilité et deux raisons au maximum restent visibles dans le rapport partageable. | À corriger → Satisfait | Intégrité de preuve | Haute | Rapport public généré après le correctif. |
| `UXW05` | agent-ready | Le résumé, le rang et les cartes concurrentes racontent la même conclusion. | Aucune couche n'affiche un rang brut de trois participants quand le verdict confirmé n'en compare que deux. | À corriger → Satisfait | Intégrité de preuve | Haute | Lecture croisée du résumé exécutif, du bloc comparaison et du rapport. |
| `UXW06` | agent-ready | Le verdict injecté dynamiquement est annoncé sans déplacement de focus. | Le résultat important est exposé à une technologie d'assistance avec le nom, le rôle et le contexte utiles. | À tester → À tester | WCAG | Haute | Inspection DOM disponible ; preuve humaine non publiée. |

UXW07–UXW12 · 6 contrôles

### Formulaire de contact

Soumission vide : quatre champs obligatoires invalides.

*UXW07 à UXW12 · Formulaire de contact*

| ID | Interface | Contrôle | Critère d’acceptation | Évolution | Fondement | Sévérité | Preuve |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `UXW07` | contact | Le résumé d'erreurs annonce le nombre de champs à corriger. | Le titre emploie le singulier pour un champ et le pluriel avec le nombre exact au-delà. | À corriger → Satisfait | Pattern d'interface | Moyenne | Soumission vide du formulaire de contact. |
| `UXW08` | contact | Le résumé et le message associé au champ emploient exactement la même correction. | Le lien du résumé reprend le message inline sans préfixe différent ni reformulation. | À corriger → Satisfait | Pattern d'interface | Moyenne | Comparaison du résumé et du champ prénom après soumission. |
| `UXW09` | contact | Chaque erreur est identifiée en texte et propose une correction exploitable. | Le message ne dépend ni de la couleur ni d'une icône et indique l'information attendue. | Satisfait → Satisfait | WCAG | Bloquante | Messages prénom, nom, e-mail et projet. |
| `UXW10` | contact | Le focus va au résumé après une soumission invalide. | Le résumé devient visible, reçoit le focus et peut être parcouru immédiatement. | Satisfait → Satisfait | Pattern d'interface | Haute | Soumission vide puis inspection de document.activeElement. |
| `UXW11` | contact | Chaque entrée du résumé conduit au champ concerné. | Le lien cible l'identifiant du champ et le clic place le focus dans ce champ. | Satisfait → Satisfait | Pattern d'interface | Haute | Activation successive des quatre liens du résumé. |
| `UXW12` | contact | Le champ invalide expose son état et la relation avec son message. | aria-invalid vaut true et aria-describedby référence l'identifiant du message visible. | Satisfait → Satisfait | WCAG | Bloquante | Inspection DOM des quatre champs invalides. |

UXW13–UXW16 · 4 contrôles

### Actions de l'article UX writing

Choisir entre télécharger la grille et demander un audit d'interface.

*UXW13 à UXW16 · Actions de l'article UX writing*

| ID | Interface | Contrôle | Critère d’acceptation | Évolution | Fondement | Sévérité | Preuve |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `UXW13` | article-actions | L'action principale nomme l'objet obtenu ou la destination. | Le lien reste compréhensible dans sa carte et n'emploie pas un diagnostic générique pour un téléchargement. | À corriger → Satisfait | WCAG | Haute | Panneau d'action spécifique à l'article. |
| `UXW14` | article-actions | Le format du fichier est annoncé avant l'activation. | Le libellé visible contient XLSX et l'attribut download fournit un nom stable. | À corriger → Satisfait | Pattern d'interface | Moyenne | Texte visible, attribut download et événement data-download-name. |
| `UXW15` | article-actions | Le nom accessible contient le libellé visible. | Aucun aria-label ne remplace les mots affichés par une formulation différente. | Satisfait → Satisfait | WCAG | Haute | Inspection de l'arbre d'accessibilité et des attributs du lien. |
| `UXW16` | article-actions | Les versions française et anglaise conservent la même intention et le même niveau de précision. | Objet, format, destination et promesse restent équivalents ; seule la langue change. | Satisfait → Satisfait | Intégrité de preuve | Moyenne | Comparaison des deux panneaux d'action. |

Ce que la machine annonce

## Les mots visibles ne suffisent pas : nom, description, erreur et statut doivent rester cohérents.

Quatre tests techniques bornent cette méthode. D’abord, le nom accessible d’un contrôle contient son libellé visible : une personne qui commande à la voix peut donc prononcer les mots qu’elle voit. Ensuite, une erreur est identifiée par du texte et reliée au champ. Troisièmement, le résumé permet de rejoindre l’erreur sans remplacer son message en ligne. Enfin, un résultat injecté dynamiquement est exposé comme message de statut lorsque le changement de contexte ne doit pas déplacer le focus.

Ces tests sont nécessaires, mais leur présence dans le DOM ne prouve pas l’expérience complète. C’est pourquoi UXW06 reste « À tester ». La prochaine révision doit publier le système, le navigateur, la version de VoiceOver ou NVDA, les étapes et l’annonce réellement entendue. La méthode préfère un résultat incomplet mais exact à un 16/16 déduit du code.

Protocole de rejeu

## Reproduire l’étude sans demander à Edikka d’expliquer le résultat.

1. Télécharger le XLSX ou le JSON v1.0.1 et conserver les identifiants UXW01 à UXW16.
2. Ouvrir les trois URL publiques dans un profil sans extension, largeur 1280 px, zoom 100 %.
3. Pour le test agents IA, rejouer un cas avec au moins un concurrent fiable et un résultat non décisif ; consigner scores, qualité et verdict.
4. Pour le contact, soumettre le formulaire vide ; consigner focus, titre, liens, erreurs en ligne et associations programmatiques.
5. Pour les actions, relever libellé, nom accessible, destination, format annoncé et attribut de mesure.
6. Attribuer un des quatre statuts, joindre une preuve et dater le résultat. Ne jamais convertir « À tester » en « Satisfait » par déduction.
7. Après correction, reprendre le même scénario. Ajouter le contre-test sans supprimer l’observation initiale.

Un tiers peut utiliser une autre résolution ou technologie d’assistance à condition de la déclarer. Les résultats deviennent alors une nouvelle observation comparable, pas une validation rétroactive de celle-ci.

Architecture éditoriale

## Poursuivre l’analyse sans confondre microcopie, accessibilité et conformité.

### Chaque ressource conserve son objet.

Le protocole UX writing mesure les mots de l’interface. Les ressources suivantes possèdent l’implémentation technique, le socle d’accessibilité et la preuve publique.

- [01FormulairesImplémenter erreurs, focus et annonces accessibles](/insights/developpement-web/formulaire-accessible-erreurs-contacts-perdus)
- [02SocleSituer les contrôles dans une méthode d’accessibilité](/insights/developpement-web/accessibilite-web-bases-site-professionnel)
- [03PreuvesConsulter l’audit public et ses résultats négatifs](/audit/accessibilite)

Limite volontaire

## Edikka évalue ses propres interfaces avec une méthode qu’Edikka a écrite.

Ce document n’est ni un classement indépendant, ni une étude utilisateur, ni une certification. Les critères d’intégrité de preuve sont une doctrine éditoriale Edikka ; ils ne sont pas attribués au W3C. Les contrôles WCAG cités portent uniquement sur les propriétés qu’ils couvrent.

La sélection des trois interfaces privilégie des états où le texte change une décision, une correction ou un engagement. Elle n’échantillonne pas l’ensemble du site. Les captures documentent un contexte donné ; elles ne remplacent pas le DOM, le fichier source ni le contre-test. Toute objection reproductible peut être intégrée au changelog avec son auteur et la correction retenue ou refusée.

Ressources ouvertes · CC BY 4.0

## Télécharger, citer, contester.

- [Grille UX writing Edikka v1.0.1 · XLSX](/docbd/data/protocole-ux-writing-edikka-v1.xlsx) — synthèse, contrôles FR/EN et journal des preuves.
- [Dataset canonique · JSON](/docbd/data/protocole-ux-writing-edikka-v1.json) — source machine-readable des seize contrôles.
- [Version française · Markdown](/llms/insights/ux-writing-interfaces-claires.md).
- [English edition · Markdown](/llms/insights/ux-writing-clearer-interfaces.md).

**Citation recommandée :** Morel, Bertrand (2026). *UX writing : protocole appliqué à trois interfaces Edikka*, version 1.0.1, Edikka. Licence Creative Commons Attribution 4.0.

*Changelog public*

| Date | Version | Modification |
| --- | --- | --- |
| 3 septembre 2026 · 15 h 29 CEST | 1.0.1 | Divergence entre le bilan public et le dataset corrigée après recoupement des seize contrôles. La répartition initiale devient 4 satisfaits et 2 à corriger pour le formulaire, puis 2 satisfaits et 2 à corriger pour les actions. Totaux, observations et décisions détaillées inchangés. |
| 3 septembre 2026 · 14 h 53 CEST | 1.0 | Protocole figé ; trois interfaces auditées ; neuf écarts corrigés ; UXW06 maintenu « À tester » ; libellés d’actions modifiés et changement consigné pendant la fenêtre MIA-FR. |

Sources primaires

## Normes et patterns utilisés.

1. [W3C · Comprendre le critère 2.4.4, fonction du lien](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html).
2. [W3C · Comprendre le critère 2.5.3, étiquette dans le nom](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html).
3. [W3C · Comprendre le critère 3.3.1, identification des erreurs](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html).
4. [W3C · Comprendre le critère 3.3.3, suggestion après une erreur](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html).
5. [W3C · Comprendre le critère 4.1.3, messages de statut](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html).
6. [GOV.UK Design System · Error summary](https://design-system.service.gov.uk/components/error-summary/).
7. [GOV.UK Design System · Error message](https://design-system.service.gov.uk/components/error-message/).
