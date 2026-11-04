// Carnet d'observation des sols — point d'entrée : le menu.
// À vous d'écrire tout le menu : accueil, chargement des données, menu affiché avant chaque choix,
// actions, sortie et gestion des erreurs. Comportement et textes imposés : fiches/3-ajouter-lister.md.
// Lancer : node app.js
import { demander, fermerSaisie, ouvrirSaisie } from './src/saisie.js';
import { chargerJson, enregistrerJson } from './src/stockage.js';
import { HUMIDITES, TEXTURES, ajouterObservation, creerObservation, formaterObservation, listerObservations, trouverParId } from './src/registre.js';
import { filtrerParParcelle, filtrerParTexture, trierParPh } from './src/recherche.js';
import { SEUIL_PH_A_DISCUTER, compterParTexture, phMinMax, pointsADiscuter } from './src/synthese.js';

const FICHIER_DONNEES = 'donnees/observations.json';

// ============ Affichage =================
function afficherAcueil() {
  console.log('-----------------------------------------------------------------------------------');
  console.log('Ferme pédagogique');
  console.log('-----------------------------------------------------------------------------------');
}

function afficherMenu() {
  console.log('');
  console.log('---------------------------------------------------------------------------------------');
  console.log('1. Ajouter une observation');
  console.log('2.Lister les observations ');
  console.log('3.Rechercher (point, parcelle, texture)');
  console.log('4.Tier par pH');
  console.log('5.Synthèse des observation');
  console.log('0.Quittere');
  console.log('Votre choix :')
}
// --------------------Actions---------------------------------------------------------------------------
// choix 1 : poser les cinq questions, verifier, ajouter, enregistrer.
async function ajouter(question) {
  console.log('--- Ajouter une observation---');

  const id = await demander('point observé (ex. S11) : s11');
  if (id === null)
    return;
  const parcelle = await demander('parcelle (ex. P1) :p6');
  if (parcelle === null)
    return;
  const texture = await demander(`texture(${TEXTURES.join(',')}) :limoneux`);
  if (texture === null)
    return;
  const pH = await demander(`pH (nombre de 0 à 14, sans unité, virgule accepté) : 5,8`)
  if (pH === null)
    return;
  const etatHumidite = await demander(`Etat d'humidité (${HUMIDITES.join(',')}) :Humidité `);
  if (etatHumidite === null)
    return;
}

//Normalisation avant vérification: majuscule pour le point et la parcelle.
//miniscules pour la texture et l'état d'humidité, le pH reste tel quel.
const saisie = {
  id: id.toUppercase(),
  parcelle: parcelle.toUppercase(),
  texture: parcelle.toUppercase(),
  texture: texture.toUppercase(),
  etatHumidite: etatHumidite.toUppercase(),
};
const erreurs = ajouterObservation(creerObservation, saisie);
async function ajouter(observations) {
  const saisie = {
    etatHumidite: etatHumidite.toUppercase(),
  };

  const erreurs = ajouterObservation(observations, saisie);
  if (erreurs.length > 0) {
    console.log('observation refusé :');
    for (const erreur of erreurs) {
      console.log(` -${erreur}`);
    }
    console.log(`le carnet compte toujour ${observations.length} observation(s)`);
    return
  }
  await enregistrerJsonJson(FICHIER_DONNEES, observations);
  console.log(`Observation ${saisie.id} ajoutée. le carnet compte ${observations.length} observation`)
}
































































































































































































async function main() {
  ouvrirSaisie();
  console.log("À compléter : écrivez le menu dans app.js (fiches/3-ajouter-lister.md).");
  fermerSaisie();
}

main();


