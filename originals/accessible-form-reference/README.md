# Laboratoire Edikka — formulaire accessible et fiable

Sources publiques de l’édition 1.0 : [interface de test](./index.html), [serveur de scénarios](./server.mjs) et [test automatisé](./test.mjs).

Ce laboratoire local reproduit les états qui doivent être distingués pendant la recette d’un formulaire : saisie invalide, erreur serveur avant enregistrement, interruption réseau avant réception, réponse perdue après enregistrement, reprise idempotente, traitement lent et succès.

Il utilise uniquement des données fictives, ne transmet aucun e-mail et ne mesure aucune conversion. Les enregistrements restent en mémoire et disparaissent à l’arrêt du serveur.

## Exécuter

```sh
node tools/accessible-form-reference/server.mjs
```

Ouvrir ensuite `http://127.0.0.1:4177`.

## Vérifier automatiquement

```sh
node tools/accessible-form-reference/test.mjs
```

Le test vérifie les statuts HTTP, l’absence d’enregistrement après les échecs antérieurs au stockage, la récupération après perte de réponse et l’absence de doublon lors d’une reprise avec la même clé.

## Portée de la preuve

Un test réussi démontre le comportement de ce laboratoire dans l’environnement exécuté. Il ne démontre ni la conformité complète d’un formulaire tiers, ni la facilité d’usage auprès de personnes représentatives, ni un effet commercial. Ces trois conclusions exigent des preuves distinctes.
