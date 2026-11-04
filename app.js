// Carnet d'observation des sols — point d'entrée : le menu.
// À vous d'écrire tout le menu : accueil, chargement des données, menu affiché avant chaque choix,
// actions, sortie et gestion des erreurs. Comportement et textes imposés : fiches/3-ajouter-lister.md.
// Lancer : node app.js
import { demander, fermerSaisie, ouvrirSaisie } from './src/saisie.js';
import { chargerJson, enregistrerJson } from './src/stockage.js';
import { HUMIDITES, TEXTURES, ajouterObservation, formaterObservation, listerObservations, trouverParId } from './src/registre.js';
import { filtrerParParcelle, filtrerParTexture, trierParPh } from './src/recherche.js';
import { SEUIL_PH_A_DISCUTER, compterParTexture, phMinMax, pointsADiscuter } from './src/synthese.js';

const FICHIER_DONNEES = 'donnees/observations.json';

// Le carnet : un tableau d'observations. On le remplit au démarrage (voir main).
let observations = [];

// ---------------------------------------------------------------------------
// 1) Affichages : l'accueil et le menu
// ---------------------------------------------------------------------------

function afficherAccueil() {
  console.log('==================================================');
  console.log("   CARNET D'OBSERVATION DES SOLS");
  console.log('   Ferme pédagogique');
  console.log('==================================================');
}

function afficherMenu() {
  console.log('');
  console.log('--------------------- MENU ---------------------');
  console.log('1. Ajouter une observation');
  console.log('2. Lister les observations');
  console.log('3. Rechercher (point, parcelle, texture)');
  console.log('4. Trier par pH');
  console.log('5. Synthèse des observations');
  console.log('0. Quitter');
}

// ---------------------------------------------------------------------------
// 2) Choix 1 : ajouter une observation
// ---------------------------------------------------------------------------

async function ajouter() {
  console.log('--- Ajouter une observation ---');

  // On pose les cinq questions, dans l'ordre imposé.
  // Si demander() renvoie null (Ctrl+C), on abandonne l'ajout avec return.
  const id = await demander('Point observé (ex. S11) : ');
  if (id === null) return;

  const parcelle = await demander('Parcelle (ex. P1) : ');
  if (parcelle === null) return;

  const texture = await demander('Texture (' + TEXTURES.join(', ') + ') : ');
  if (texture === null) return;

  const pH = await demander('pH (nombre de 0 à 14, sans unité, virgule acceptée) : ');
  if (pH === null) return;

  const etatHumidite = await demander("État d'humidité (" + HUMIDITES.join(', ') + ') : ');
  if (etatHumidite === null) return;

  // On range les réponses dans un objet. Le point et la parcelle sont mis en
  // majuscules, la texture et l'humidité en minuscules. Le pH reste tel quel.
  const saisie = {
    id: id.toUpperCase(),
    parcelle: parcelle.toUpperCase(),
    texture: texture.toLowerCase(),
    pH: pH,
    etatHumidite: etatHumidite.toLowerCase(),
  };

  // ajouterObservation renvoie la liste des erreurs ([] si tout va bien).
  const erreurs = ajouterObservation(observations, saisie);

  if (erreurs.length > 0) {
    console.log('Observation refusée :');
    for (const erreur of erreurs) {
      console.log('  - ' + erreur);
    }
    console.log('Le carnet compte toujours ' + observations.length + ' observation(s).');
  } else {
    // Ajout réussi : on sauvegarde tout le carnet dans le fichier JSON.
    await enregistrerJson(FICHIER_DONNEES, observations);
    console.log('Observation ' + saisie.id + ' ajoutée. Le carnet compte ' + observations.length + ' observation(s).');
  }
}

// ---------------------------------------------------------------------------
// 3) Choix 2 : lister les observations
// ---------------------------------------------------------------------------

function lister() {
  console.log('--- Liste des observations (' + observations.length + ') ---');
  console.log(listerObservations(observations));
}

// ---------------------------------------------------------------------------
// 4) Choix 3 : rechercher
// ---------------------------------------------------------------------------

async function rechercher() {
  console.log('--- Rechercher ---');
  console.log('1. Par point (identifiant)');
  console.log('2. Par parcelle');
  console.log("3. Les observations d'une texture");
  const sousChoix = await demander('Votre choix : ');
  if (sousChoix === null) return;

  if (sousChoix === '1') {
    const reponse = await demander('Point : ');
    if (reponse === null) return;
    const id = reponse.toUpperCase();
    const observation = trouverParId(observations, id);
    if (observation === undefined) {
      console.log('Observation ' + id + ' introuvable.');
    } else {
      console.log(formaterObservation(observation));
    }
  } else if (sousChoix === '2') {
    const reponse = await demander('Parcelle : ');
    if (reponse === null) return;
    const parcelle = reponse.toUpperCase();
    const resultats = filtrerParParcelle(observations, parcelle);
    console.log(resultats.length + ' observation(s) sur la parcelle ' + parcelle + ' :');
    console.log(listerObservations(resultats));
  } else if (sousChoix === '3') {
    const reponse = await demander('Texture : ');
    if (reponse === null) return;
    const texture = reponse.toLowerCase();
    const resultats = filtrerParTexture(observations, texture);
    console.log(resultats.length + ' observation(s) de texture ' + texture + ' :');
    console.log(listerObservations(resultats));
  } else {
    console.log('Choix inconnu : retour au menu.');
  }
}

// ---------------------------------------------------------------------------
// 5) Choix 4 : trier par pH
// ---------------------------------------------------------------------------

async function trier() {
  console.log('--- Trier ---');
  console.log('1. Par pH croissant');
  const sousChoix = await demander('Votre choix : ');
  if (sousChoix === null) return;

  if (sousChoix === '1') {
    // trierParPh renvoie une copie triée : le carnet garde son ordre d'origine.
    const observationsTriees = trierParPh(observations);
    console.log(listerObservations(observationsTriees));
  } else {
    console.log('Choix inconnu : retour au menu.');
  }
}

// ---------------------------------------------------------------------------
// 6) Choix 5 : synthèse
// ---------------------------------------------------------------------------

function synthese() {
  console.log('--- Synthèse des observations ---');
  console.log("Nombre d'observations : " + observations.length);

  // pH minimum et maximum (phMinMax renvoie null si le carnet est vide).
  const minMax = phMinMax(observations);
  if (minMax === null) {
    console.log('pH minimum et maximum : aucune donnée');
  } else {
    console.log('pH minimum : ' + minMax.min + ' · pH maximum : ' + minMax.max);
  }

  // Nombre d'observations par texture.
  console.log('Observations par texture :');
  const comptes = compterParTexture(observations);
  for (const [texture, nombre] of Object.entries(comptes)) {
    console.log('  ' + texture + ' : ' + nombre);
  }

  // Points à discuter : pH strictement inférieur au seuil.
  const aDiscuter = pointsADiscuter(observations, SEUIL_PH_A_DISCUTER);
  console.log('Points à discuter avec le coach (pH < ' + SEUIL_PH_A_DISCUTER + ') : ' + aDiscuter.length);
  for (const observation of aDiscuter) {
    console.log('  ' + formaterObservation(observation));
  }

  console.log("Rappels : le pH est sans unité. Aucune moyenne de pH n'est calculée (échelle logarithmique).");
  console.log("Ces points ne sont pas un diagnostic de fertilisation : ils servent à préparer l'échange avec le coach.");
}

// ---------------------------------------------------------------------------
// 7) Le programme principal
// ---------------------------------------------------------------------------

async function main() {
  ouvrirSaisie();
  afficherAccueil();

  // Chargement des données. Si ça échoue, on continue avec un carnet vide.
  try {
    observations = await chargerJson(FICHIER_DONNEES);
    console.log(observations.length + ' observation(s) chargée(s) depuis ' + FICHIER_DONNEES + '.');
  } catch (erreur) {
    observations = [];
    console.log('Impossible de lire ' + FICHIER_DONNEES + ' : ' + erreur.message + '. Le carnet démarre vide.');
  }

  // Boucle du menu : on recommence tant que l'utilisateur ne quitte pas.
  let continuer = true;
  while (continuer) {
    afficherMenu();
    const choix = await demander('Votre choix : ');

    // null = Ctrl+C, '0' = Quitter
    if (choix === null || choix === '0') {
      console.log('Au revoir !');
      continuer = false;
      continue;
    }

    // Aucune erreur ne doit arrêter le programme : on les attrape avec try/catch.
    try {
      switch (choix) {
        case '1':
          await ajouter();
          break;
        case '2':
          lister();
          break;
        case '3':
          await rechercher();
          break;
        case '4':
          await trier();
          break;
        case '5':
          synthese();
          break;
        default:
          console.log('Choix inconnu : « ' + choix + ' ». Tapez un chiffre du menu.');
      }
    } catch (erreur) {
      if (erreur.message.startsWith('TODO')) {
        console.log('À compléter : ' + erreur.message);
      } else {
        console.log('Erreur inattendue : ' + erreur.message);
      }
    }
  }

  fermerSaisie();
}

main();





