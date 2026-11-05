# Journal de recherche

> Chaque recherche utile : ce que vous cherchiez, où (cours, [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript), [Node.js](https://nodejs.org/api/), un camarade, une IA…), ce que vous avez compris. Ce que vous gardez, vous devez pouvoir l'expliquer.

| Ce que je cherchais | Où | Ce que j'ai compris | Utilisé dans |
| --- | --- | --- | --- |
| Pourquoi un pH saisi avec une virgule (`7,2`) donne `NaN` | MDN (`Number`, `parseFloat`) et Claude | JavaScript ne comprend que le point décimal. Il faut remplacer la virgule par un point avant de convertir. | Validation du pH (`src/registre.js`) |
| Mettre le texte en majuscules ou en minuscules | MDN (`String.prototype.toUpperCase`, `toLowerCase`) | Ces méthodes renvoient un nouveau texte sans modifier l'original. On normalise la saisie pour que `s11` et `S11` soient le même point. | `ajouter()` et `modifier()` dans `app.js` |
| Attraper une erreur sans arrêter le programme | MDN (`try...catch`) | Le code risqué va dans `try`, et si une erreur arrive, `catch` la traite et le programme continue. | Boucle du menu dans `main()` |
| Comprendre `switch`, `case` et `break` | MDN (`switch`) | Sans `break`, le programme continue dans le `case` suivant. C'était le bug du `case '0'`. | Menu dans `main()` |
| Parcourir une liste d'erreurs | MDN (`for...of`) | `for (const erreur of erreurs)` prend chaque élément un par un. Le nom après `of` doit être celui du tableau. | Affichage des erreurs dans `ajouter()` et `modifier()` |
| Parcourir un objet (compter par texture) | MDN (`Object.entries`) | Renvoie des paires `[clé, valeur]`, utiles pour afficher « texture : nombre ». | `synthese()` |
| Pourquoi mon programme attend la saisie avant de continuer | MDN (`async`, `await`) et Claude | `await` met la fonction en pause jusqu'à la réponse de l'utilisateur. Une fonction qui utilise `await` doit être déclarée `async`. | `demander()`, `ajouter()`, `supprimer()` |
| Fusionner du texte et des variables sans erreur d'espace | MDN (template literals) et Claude | Avec `+`, il faut penser aux espaces. Mélanger backticks et apostrophes casse l'affichage. | Messages de `supprimer()` et `modifier()` |
| Trouver mes erreurs de ligne et de syntaxe | Claude | Une accolade `}` mal placée sort le code de la fonction. Un nom de variable mal écrit (`observatons`, `erreur`) provoque une `ReferenceError`. | Fonctions bonus de `app.js` |
