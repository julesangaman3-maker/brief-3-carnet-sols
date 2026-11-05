# Relevé des tests

> Écrivez le résultat attendu avant d'essayer. Un écart n'est pas une faute : notez-le, corrigez, refaites le test.

**Calculs à la main** : refaites à la main les résultats de référence de `SUJET.md`, puis comparez avec votre programme. 
-Nombre total d'observation : 10.
-pH min:4,8 pour la parcelle S04.
-pH Max:7,6 pour la parcelle S08.

Nombre de texture: 
-Sableux  : 3 (S01,S04,S08).
-Limoneux : 4 (S02,S05,S07,S10).
-Argileux : 3 (S03,S06,S09).

-S04: P2,sableux, pH 4,8, sec.
-S99: introuvable.
-le tri par pH commence par S04.
-pH de 14 est admis ; 14,1, -1 et une saisie vide sont refusés ; un état d'humidité hors des trois modalités est refusé ; sur un carnet vide, minimum et maximum affichent « aucune donnée ».


**Essais dans le menu** : un ajout valide (encore là après redémarrage), chaque règle refusée, une recherche introuvable, chaque tri, la synthèse, un choix inconnu.

| Action                  | Attendu                                  | Obtenu                               | Testeur |
| ---                     | ---                                      | ---                                  | ---     |
|  un ajout valid         | Observation ajoutée au tableau           |                                      | |
|chaque règle refusée     | Saisi refusée                            |                                      ||
|Une recherche introuvable| Classement par odre croissant            |                                      | |
| chaque tri              | Trié  avec succès                        |                                      | |
|la synthèse              | Affichage des statistique des observation|                                                  |                  |
|un choix inconnu         | Le message d'erreur                      |                                      |         |

**Sur un autre poste** (`git clone`, `node app.js`, `npm test`, en suivant le README) : ✏️