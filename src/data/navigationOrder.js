// src/navigationOrder.js

const pageOrder = [
    { menu: "home", detail: null },                  // 0.0 : Menu "Home"
    // 1 "Règles"
    { menu: "regles", detail: null },               // 1.0 : Menu "Règles"
    { menu: "regles", detail: "Mouvement" },          // 1.1
    { menu: "regles", detail: "Tir" },                // 1.2
    { menu: "regles", detail: "Magie" },              // 1.3
    { menu: "regles", detail: "Corps à Corps" },      // 1.4
    { menu: "regles", detail: "Psychologie" },        // 1.5
    { menu: "regles", detail: "A terre & Sonne" },    // 1.6
    { menu: "regles", detail: "Autres rêgles" },       // 1.7
  
    // 2 "coups-critiques"
    { menu: "coups-critiques", detail: null },               // 2.0 : Menu "Coups Critiques"
    { menu: "coups-critiques", detail: "defaut" },   // 2.1
    { menu: "coups-critiques", detail: "Tranchant" },  // 2.2
    { menu: "coups-critiques", detail: "Contondant" }, // 2.3
    { menu: "coups-critiques", detail: "Tir" },       // 2.4
    { menu: "coups-critiques", detail: "Estoc" },      // 2.5
    { menu: "coups-critiques", detail: "Naturelles" },   // 2.6
    { menu: "coups-critiques", detail: "CritiquesMaison" },   // 2.7 : Menu "Critiques maison"
    { menu: "coups-critiques", detail: "TranchantMaison" },   // 2.7.1
    { menu: "coups-critiques", detail: "ContondantMaison" },  // 2.7.2
    { menu: "coups-critiques", detail: "TirMaison" },         // 2.7.3
    { menu: "coups-critiques", detail: "PoudreNoirMaison" }, // 2.7.4
    { menu: "coups-critiques", detail: "EstocMaison" },       // 2.7.5
    { menu: "coups-critiques", detail: "NaturellesMaison" }, // 2.7.6
  
    // 3 "post-bataille"
    { menu: "post-bataille", detail: null },           // 3.0 : Menu "Post-bataille"
    { menu: "post-bataille", detail: "Blessures Graves" },
    { menu: "post-bataille", detail: "Expérience" },
    { menu: "post-bataille", detail: "Exploration" },      // 3.3 : Menu "Exploration"
    { menu: "post-bataille", detail: "doubles" },          // 3.3.1
    { menu: "post-bataille", detail: "triples" },          // 3.3.2
    { menu: "post-bataille", detail: "quadruples" },       // 3.3.3
    { menu: "post-bataille", detail: "quintuples" },       // 3.3.4
    { menu: "post-bataille", detail: "sextuples" },        // 3.3.5
    { menu: "post-bataille", detail: "Vente de fragments" }, // 3.4
    { menu: "post-bataille", detail: "Recrutement" },      // 3.5
    { menu: "post-bataille", detail: "Commerce" },         // 3.6 : Menu "Commerce"
    { menu: "post-bataille", detail: "Armes de Corps à coprs" }, // 3.6.1
    { menu: "post-bataille", detail: "Armes de tir" },     // 3.6.2
    { menu: "post-bataille", detail: "Armures" },          // 3.6.3
    { menu: "post-bataille", detail: "Divers" },           // 3.6.4
  
    // 4 "objets et equipements"
    { menu: "objets-equipements", detail: null },             // 4.0 : Menu "Objets et équipements"
    { menu: "objets-equipements", detail: "Armes" },            // 4.1
    { menu: "objets-equipements", detail: "Armures" },          // 4.2
    { menu: "objets-equipements", detail: "Équipement Divers" },// 4.3
    { menu: "objets-equipements", detail: "Grand Bazar" },      // 4.4
    { menu: "objets-equipements", detail: "Échoppe de Curiosités" }, // 4.5
  
    // 5 "Compétences, sorts et prières"
    { menu: "compétences, sorts et prieres", detail: null },       // 5.0 : Menu "Compétences, sorts et prières"
    { menu: "compétences, sorts et prieres", detail: "Compétences de Bases" }, // 5.1 : Menu "Compétences de Bases"
    { menu: "compétences, sorts et prieres", detail: "Combat" },     // 5.1.1
    { menu: "compétences, sorts et prieres", detail: "Tir" },        // 5.1.2
    { menu: "compétences, sorts et prieres", detail: "Érudition" },   // 5.1.3
    { menu: "compétences, sorts et prieres", detail: "Force" },       // 5.1.4
    { menu: "compétences, sorts et prieres", detail: "Vitesse" },     // 5.1.5
    { menu: "compétences, sorts et prieres", detail: "Autres Compétence" }, // 5.2 : Menu "Autres Compétence"
    { menu: "compétences, sorts et prieres", detail: "Monte" },       // 5.2.1
    { menu: "compétences, sorts et prieres", detail: "Skavens" },      // 5.2.2
    { menu: "compétences, sorts et prieres", detail: "Soeurs de Sigmar" }, // 5.2.3
    { menu: "compétences, sorts et prieres", detail: "Vampires" },      // 5.2.4
    { menu: "compétences, sorts et prieres", detail: "Elfes" },         // 5.2.5
    { menu: "compétences, sorts et prieres", detail: "Nain" },          // 5.2.6
    { menu: "compétences, sorts et prieres", detail: "Orc" },           // 5.2.7
    { menu: "compétences, sorts et prieres", detail: "Pirates" },       // 5.2.8
    { menu: "compétences, sorts et prieres", detail: "Goblins de la N." }, // 5.2.9
    { menu: "compétences, sorts et prieres", detail: "Magie et Prières" },  // 5.3 : Menu "Magie et Prières"
    { menu: "compétences, sorts et prieres", detail: "Pieres de Sigmar" },   // 5.3.1
    { menu: "compétences, sorts et prieres", detail: "Necromancie" },         // 5.3.2
    { menu: "compétences, sorts et prieres", detail: "Rituel du Chaos" },     // 5.3.3
    { menu: "compétences, sorts et prieres", detail: "Magie Mineure" },       // 5.3.4
    { menu: "compétences, sorts et prieres", detail: "Magie du Rat: Cornu" },  // 5.3.5
    { menu: "compétences, sorts et prieres", detail: "Magie Waaagh" },        // 5.3.6
    { menu: "compétences, sorts et prieres", detail: "Autres Magies" },       // 5.3.7 : Menu "Autres Magies"
    { menu: "compétences, sorts et prieres", detail: "Goblins" },             // 5.3.7.1
    { menu: "compétences, sorts et prieres", detail: "Des ombres" },          // 5.3.7.2
    { menu: "compétences, sorts et prieres", detail: "Charm & hex" },         // 5.3.7.3
    { menu: "compétences, sorts et prieres", detail: "Rituels Amazones" },      // 5.3.7.4
    { menu: "compétences, sorts et prieres", detail: "Elfes Noirs" },           // 5.3.7.5
    { menu: "compétences, sorts et prieres", detail: "Guerriers Fantômes" },    // 5.3.7.6
    { menu: "compétences, sorts et prieres", detail: "Hommes-lézards" },        // 5.3.7.7
    { menu: "compétences, sorts et prieres", detail: "Prières d'Ulric" },       // 5.3.7.8
    { menu: "compétences, sorts et prieres", detail: "Prières de Morr" },       // 5.3.7.9
    { menu: "compétences, sorts et prieres", detail: "Runes Naines" },          // 5.3.7.10
  
    // 6 "règles-speciales"
    { menu: "regles-speciales", detail: null },           // 6.0 : Menu "Règles spéciales"
    { menu: "regles-speciales", detail: "Animosité" },      // 6.1
    { menu: "regles-speciales", detail: "La Fosse" },         // 6.2
    { menu: "regles-speciales", detail: "Montures" },         // 6.3
    { menu: "regles-speciales", detail: "Armes à poudres noir" }, // 6.4
    { menu: "regles-speciales", detail: "Éventements Aléatoires" }, // 6.5
    { menu: "regles-speciales", detail: "Éventements Secondaires" },// 6.6
    { menu: "regles-speciales", detail: "Le Pouvoir des Pierres" }, // 6.7
    { menu: "regles-speciales", detail: "Chez le Toubib" },   // 6.8
  
    // 7 "mes-bandes"
    { menu: "mes-bandes", detail: null },             // 7.0 : Menu "Mes Bandes"
    { menu: "mes-bandes", detail: "Créer une Bande" },  // 7.1 (bouton d'ajout)
    { menu: "mes-bandes", detail: "Mes Bandes" },       // 7.2 : Menu "Mes Bandes"
    { menu: "mes-bandes", detail: "Bande 1" },          // 7.2.1
    { menu: "mes-bandes", detail: "Bande 2" },          // 7.2.2
    { menu: "mes-bandes", detail: "Bande 3" }           // 7.2.3
    // ... ajoutez d'autres bandes si nécessaire
  ];
  
  export default pageOrder;
  