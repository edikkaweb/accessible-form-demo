# Correspondance historique / Historical mapping

Ces lignes reproduisent les statuts historiques, sans les réévaluer. Les contrôles AFD décrivent une **nouvelle démonstration**, pas un audit rétroactif.

| UXW   | Nature              | Avant / Before | Après / After | Nouveau contrôle                       |
| ----- | ------------------- | -------------- | ------------- | -------------------------------------- |
| UXW07 | Pattern d'interface | À corriger     | Satisfait     | AFD-A17 — count 0/1/4                  |
| UXW08 | Pattern d'interface | À corriger     | Satisfait     | AFD-A17 — exact reference messages     |
| UXW09 | WCAG                | Satisfait      | Satisfait     | AFD-UI03 — actionable field text       |
| UXW10 | Pattern d'interface | Satisfait      | Satisfait     | AFD-UI01 — summary focus               |
| UXW11 | Pattern d'interface | Satisfait      | Satisfait     | AFD-UI02 — four links focus fields     |
| UXW12 | WCAG                | Satisfait      | Satisfait     | AFD-UI03 — invalid/describedby + hints |

UXW06 appartient à la surface agent-ready et reste **À tester**. Les nouveaux essais DOM/clavier de cette démo ne ferment pas son essai lecteur d’écran historique. Le contre-exemple rédactionnel est fictif, jamais présenté comme une copie exacte de l’ancien contact Edikka.

**AFD-R01–R14** et les tests de contrôleur complètent le protocole : validation indépendante, refus avant stockage, réponse perdue, lookup, première création/reprise, conflits, concurrence, annulation et retours tardifs. Ils ne portent aucun identifiant UXW emprunté. Voir la [matrice](VERIFICATION.md).
