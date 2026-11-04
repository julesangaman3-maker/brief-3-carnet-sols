# Dictionnaire des données

> Un champ par ligne, d'après `SUJET.md` et le fichier de `donnees/`. La première ligne sert de modèle.

| Champ | Signification | Type | Règle de validation | Unité | Exemple 
| --- | --- | --- | --- | --- | --- |
| `id` | Identifiant unique | texte | non vide, absent des données | — | S04|
|parcelle|la parcelle où se trouve le point observé|texte|non vide,un teste en majusucle|une lettre en majuscule suivit de chiffres| P2|
| texture|la texture du sol|texte|doit etre dans la liste TEXTURES et mise en minuscule |- | sableux|
| pH |acidité du sol au point observé | nombre|nombre de 0 à 14 bornes compris. |sans unité |4.8 |
|etathumidite|état d'humidité du sol | texte| doit etre daans la liste HUMIDITES|- |sec |

**Listes de valeurs autorisées** : 
texture (TEXTURE) : sableux,limoneux, argileux.
etathumidite (HUMIDITE) : sec, intermédiaire, humide.
parcelle :  P1,P2,P3,P4,P5.
**Sources** : 
SUJET.md (selection des données);fiche/-ajouter-lister.md (tableau des règles de vérification); scr/registre.js (liste TEXTURES et HUMIDITES); donnees/observations.json (10 observations de depart); fiche de terrain du coach agronomie pour les règles d'écriture,nombre sans unité dans la case, virgule accepter sur papier, identifiant unique, on n'inverse jamais une valeur.