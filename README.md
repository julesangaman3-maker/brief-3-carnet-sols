# Carnet d'observation des sols

> Projet individuel du SAS DFS, brief 3 (sujet : [SUJET.md](SUJET.md)). Remplacez chaque ✏️ par votre texte, puis supprimez cette ligne.

## Contexte
L'outil est destiné à l'équipe de la ferme pédagogique , qui revèle des point de sol sur le terrain. Son geste professionnel consiste à observer un point  avec la fiche de terrain, puis à noter sa texture, son pH et son état d'humidité. Son besoin de conserver ces relevés, de retrouver rapidement les points concernés et de repérer les valeurs à vérifier avec l'agronome.L'utilisateur saisit un identifiant de point, une classe de texture une valeur croissant si besoin, et un état d'humidité. Le programme affiche la liste des observations, triées par pH croissant si besoin, et peut se limiter à une selection de point. Il signale aussi les saisies refusées et permet de corriger un champ d'une observation existante. En revanche, l'outil ne produit aucun diagnostic de fertilisation et ne remplace pas l'avis de l'agronome. Il aide seulement à organiser les relevés et à préparer la discution.

## Prérequis et lancement

- Node.js 20 ou plus récent, Git ; aucune bibliothèque à installer.

```bash
git clone https://github.com/VOTRE-COMPTE/brief-3-carnet-sols.git
cd brief-3-carnet-sols
node app.js
npm test
```

Sous PowerShell, si `npm` est bloqué : `npm.cmd test`.

## Fonctionnalités

✏️ *Cochez seulement ce qui marche : `- [x]`.*

- [ x] Données lues et enregistrées dans `donnees/observations.json`
- [ x] Ajouter une observation, saisies invalides refusées sans arrêter le programme
- [ x] Lister les observations, message si le carnet est vide
- [ x] Rechercher par point ou par parcelle ; filtrer par texture
- [ x] Trier par pH
- [ x] Synthèse : pH minimum et maximum, nombre par texture, points à discuter (pH < 5,5)
- [ x] Bonus : supprimer et modifier une observation (choix 6 et 7)
- [ x] Bonus : tri par pH décroissant, texture la plus fréquente

## Données

✏️ *Le fichier, le nombre d'observations, les champs (voir [docs/dictionnaire-donnees.md](docs/dictionnaire-donnees.md)), le pH sans unité. Rappelez qu'elles sont fictives.*

## Limites

✏️ *Au moins trois. Par exemple : le carnet repère des valeurs à discuter, mais ne produit aucun diagnostic de fertilisation.*

## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

N'DIAMOI ANGAMAN JULES CHRIST
j'ai utilisé le site https://developer.mozilla.org/en-US/docs/Web/JavaScript : pour faire la recherche sur les different code dont j"avais des incomprehension sur la strucure.
