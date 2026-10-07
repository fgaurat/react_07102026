// import { versionControlConfig } from "../../apps/cms/src/hooks/versionControl";

// function somme(...nombres: number[]): number {
//   return nombres.reduce((total, n) => total + n, 0);
// }

// const r = somme(1, 2, 3);
// console.log(r);

// const [premier, ...autres] = [10, 20, 30];
// console.log(premier);
// console.log(autres);

// console.log(somme(...autres));

// function afficherQuantite(quantite?: number): number {
//   return quantite ?? 10;
// }

// let q = afficherQuantite();
// q = afficherQuantite(0);
// console.log(q);

type Utilisateur = {
  adresse?: {
    ville: string;
  };
};

const utilisateur: Utilisateur = {};

const ville1 = utilisateur.adresse?.ville;
const ville2 = utilisateur.adresse!.ville;
console.log(ville1);
console.log(ville2);
