# Fiche individuelle

> Une page, avant la livraison. Prénom, nom, compte GitHub : ✏️
Prénom : ANGAMAN JULES CHRIST
Nom : N'DIAMOI 
Compte GitHub : https://github.com/julesangaman3-maker/brief-3-carnet-sols.git

1.Une fonction que j'ai écrite, et comment elle marche : 'ai écrit la fonction trierParPh(observations).

Cette fonction permet de classer les observations du sol selon leur valeur de pH, dans l'ordre croissant, c'est-à-dire du pH le plus faible au plus élevé.Ainsi, les observations sont classées correctement sans modifier le tableau de départ. Lorsque deux observations ont le même pH, leur ordre initial est conservé.

Pour réaliser ce travail, j'utilise la méthode slice() afin de créer une copie du tableau initial, puis la méthode sort() avec un comparateur numérique (a, b) => a.pH - b.pH.

2.Une difficulté, et sa solution** : j'ai rencontré une difficulté lors de la réalisation de la fonction trierParPh(observations). Au début, je ne comprenais pas pourquoi la méthode sort() ne permettait pas de classer correctement les valeurs de pH lorsqu'elles étaient considérées comme des nombres.

Pour résoudre ce problème, j'ai appris à utiliser un comparateur numérique (a, b) => a.pH - b.pH. J'ai également utilisé slice() pour éviter de modifier le tableau original. Cela m'a permis d'obtenir un tri correct tout en conservant les données de départ.

3.L'entraide** (qui m'a aidé, qui j'ai aidé, sur quoi) : Pendant la réalisation du projet, j'ai bénéficié de l'aide de mes camarades pour mieux comprendre certaines consignes et résoudre des difficultés liées au code JavaScript. De mon côté, j'ai également apporté mon aide à mes camarades en partageant mes connaissances et en expliquant certaines notions, notamment l'utilisation des méthodes filter(), find() et sort(), ainsi que la logique des fonctions.
