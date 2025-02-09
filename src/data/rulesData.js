// src/data/rulesData.js

export const criticalHitsDetails = {
    defaut: {
      title: "Génériques",
      subtitle: "Coups critiques de base.\n(Et un peu trop fort)",
      hits: [
        { title: "1 - 2 : Organe Vital", description: "= 2 Blessures" },
        { title: "3 - 4 : Partie Découverte", description: "= 2 Blessures\nPas de Svg" },
        { title: "5 - 6 : Coup de Maitre", description: "= 2 Blessures\nPas de Svg\n+2 au Dégâts" },
      ],
    },
    Tranchant: {
      title: "Armes Tranchantes",
      subtitle: "Épées, haches, etc.",
      hits: [
        { title: "1 - 2 : Point Vulnérable", description: "Pas de Svg" },
        { title: "3 - 4 : Tempête de Lames", description: "= 2 Blessures" },
        { title: "5 - 6 : Tranché !", description: "= 2 Blessures\nPas de Svg\n+2 au Dégâts" },
      ],
    },
    Contondant: {
      title: "Armes Contondantes",
      subtitle: "Masses, marteaux, fléaux, etc.",
      hits: [
        { title: "1 - 2 : Déséquilibré", description: "Pas de Riposte" },
        { title: "3 - 4 : Impact", description: "Pas de Svg\nPas de Casques" },
        { title: "5 : Grand Coup", description: "Lâche une arme\n(rand. si 2 armes)" },
        { title: "6 : Assommé Net", description: "Hors Combat !\n(même si plusieurs Pv)" },
      ],
    },
    Tir: {
      title: "Armes de Tir",
      subtitle: "Arcs, arbalètes, armes de jet, etc.",
      hits: [
        { title: "1 - 2 : Point Vulnérable", description: "Pas de Svg" },
        { title: "3 - 4 : Ricochet", description: "Touche également l'ennemi\nle plus proche (6 ps Max)" },
        { title: "5 - 6 : Tir Parfait", description: "= 2 Blessures\nPas de Svg" },
      ],
    },
    Estoc: {
      title: "Armes d'Estoc",
      subtitle: "Lances, hallbardes, etc.",
      hits: [
        { title: "1 - 2 : Coup Rapide", description: "+1 au Dégâts" },
        { title: "3 - 4 : Poussée", description: "À Terre !\n(même si plusieurs Pv)" },
        { title: "5 - 6 : Kebab !", description: "Pas de Svg\n+2 au Dégâts\nLes 2 figs restent collées\net reculent de D6 ps.\n(1 touche de F3 aux autres figs)" },
      ],
    },
   Naturelles: {
      title: "Armes Naturelles",
      subtitle: "Animaux, zombies, possédés, etc.",
      hits: [
        { title: "1 - 2 : Bousculade", description: "+1 Attaque.\n(à roll directement)" },
        { title: "3 - 4 : Coup Écrasant", description: "+1 aux Dégâts" },
        { title: "5 - 6 : Coup de Maître", description: "Pas de Svg\n+2 aux Dégâts" },
      ],
    },
    CritiquesMaison : {
      title: "Coups Critiques\n(Règles Maison)",
      subtitle: "Version plus équilibrée et moins puissantes des coups critiques.",
      menu: {
        "TranchantMaison": {
          title: "Armes Tranchantes",
          subtitle: "Épées, haches, etc.",
          hits: [
            { title: "1 : Ouverture", description: "+1 Attaque\n(à roll directement)" },
            { title: "2 : Moulinette", description: "Test de 'Force' pour l'adversaire :\n malus +1 si vous avez une arme à 2 mains,\n bonus -1 s'il en a un arme a 2 mains.\n Il est 'Désarmé' en cas d'échec." },
            { title: "3 : Enchainement", description: "Touche auto sur un autre adversaire en contact." },
            { title: "4 : Point Faible", description: "-4 en Svg" },
            { title: "5 : Tempête de Lames", description: "-3 en Svg\n+1 au Dégâts" },
            { title: "6 : Tranché !", description: "-2 en Svg\n+2 aux Dégâts" },
          ],
             },

         "ContondantMaison": {
          title: "Armes Contondantes",
          subtitle: "Masses, marteaux, fléaux, etc.",
          hits: [
            { title: "1 : Déséquilibré", description: "Pas de riposte possible ce tour" },
            { title: "2 : Moulinette", description: "Test de 'Force' pour l'adversaire :\n malus +1 si blessé avec une 2H.,\n bonus -1 si le def a une 2H.\n Il est 'Désarmé' en cas d'échec." },
            { title: "3 : Fracassé", description: "-3 en Svg\nPas de Svg de Casque." },
            { title: "4 : Irrésistible", description: "-2 en Svg\n 'À Terre' auto" },
            { title: "5 : Assomé Net !", description: "-2 en Svg\n'Sonné' auto" },
            { title: "6 : Commotion", description: "= 2 Blessures\n-2 en Svg" },

          ],
             },
          "TirMaison": {
          title: "Armes de Tir",
          subtitle: "Arcs, arbalètes, armes de jet, etc.",
          hits: [
            { title: "1 : Ricochet", description: "Touche auto sur un ennemi à 4ps" },
            { title: "2 : Point Faible", description: "-5 en Svg" },
            { title: "3 : Partie Découverte", description: "-4 en Svg\nPas de Svg de Casque." },
            { title: "4 : Barrage", description: "-1 en Svg\nPas de Svg de Casque.\n 'À Terre' auto" },
            { title: "5 : Pleine Tête", description: "-3 en Svg\n+1 aux Dégats" },
            { title: "6 : Organe Vital", description: "-1 en Svg\n+2 aux Dégats" },
          ],

             },
          "PoudreNoirMaison": {
          title: "Armes à Poudre Noire",
          subtitle: "Pistolets, Arquebuse, etc.",
          hits: [
            { title: "1 : Ricochet", description: "Touche auto sur un ennemi à 4ps" },
            { title: "2 : Projeté", description: "Cible recule de D6 ps\nSi ennemi sur le chemin : Touche de F2." },
            { title: "3 : Transpercé", description: "-2 en Svg\nPas de Svg de Casque." },
            { title: "4 : Passoire", description: "= 2 Blessures\n-2 en Svg" },
            { title: "5 : Soufflé", description: "= 2 Blessures\n'À Terre' auto" },
            { title: "6 : Hémoragie", description: "= 2 Blessures\n'Sonné' auto" },
          ],

             },
          "EstocMaison": {
          title: "Armes d'Estoc",
          subtitle: "Lances, hallbardes, etc.",
          hits: [
            { title: "1 : Planté", description: "-2 en Svg\n'À Terre' auto" },
            { title: "2 : Ballayage", description: "Touche auto sur un autre adversaire en contact." },
            { title: "3 : Point Faible", description: "-4 en Svg\nPas de Svg de Casque." },
            { title: "4 : Ouvre Boite", description: "+1 aux Dégats\n-3 en Svg\nPas de Svg de Casque." },
            { title: "5 : Entaille Profonde", description: "= 2 Blessures\n-2 en Svg\nPas de Svg de Casque." },
            { title: "6 : Brochette !", description: "+2 aux Dégats\n-2 en Svg\nLa victime recule de D6 ps suivi par l'attaquant.\nSi ennemi sur le chemin : Touche de F3." },
          ],

             },
          "NaturellesMaison": {
          title: "Armes Naturelles",  
          subtitle: "Dagues, Animaux, Zombies, Possédés, etc.",
          hits: [
            { title: "1 : Déstabillisé", description: "L'adversaire perd une attaque ce tour-ci" },
            { title: "2 : Déséquillibré", description: "Pas de riposte possible ce tour." },
            { title: "3 : Ouverture", description: "+1 Attaque\n(à roll directement)" },
            { title: "4 : Plaquage", description: "-2 en Svg\n'À Terre' auto" },
            { title: "5 : Upercut", description: "+1 aux Dégats" },
            { title: "6 : Skadoosh", description: "+2 aux Dégats" },
          ],
           
        },
    },
  },
  };
  
  export const competencesDetails = {
    force: {
      title: "Combat",
      skills: [
        { name: "Coup Puissant", description: "+1 au dégat au Corps à Corps" },
        { name: "Maitre Combatant", description: "+1 Attaque au contacte de 2 ennemie ou plus\nImmunisé au test seul contre tous" },
        { name: "Connaissance des Armes", description: "Peut utiliser toutes les armes de mélées" },
        { name: "Mur d'Acier", description: "+1 au tableau des Critique en mélée" },
        { name: "Maitre Escrimeur", description: "Peut relancer les jets pour touché à l'épée en charge" },
        { name: "Saut de Coté", description: "Svg suplémentaire, non modifiable en mélée de 5+" },
      ],
    },
    agilite: {
      title: "Tir",
      skills: [
        { name: "Esquive", description: "Permet d'éviter les attaques ennemies." },
        { name: "Saut de félin", description: "Facilite les déplacements acrobatiques." },
      ],
    },
    // Ajoutez les autres catégories...
  };
  
  export const postBattleDetails = {
    "Blessures Graves": {
  title: "Blessures Graves",
  subtitle: "Roll pour chaque guerrier 'Hors-Combat'",
  details: [
        { title: <span style={{ fontSize: "26px",textDecoration: "underline" }}>Hommes de Main</span>, description: "Roll 1d6 pour les homme de main\n" },
        { title: "1 - 2 : . . . . . . . . . . Décès\n" },
        { title: "3 - 4 : . . . . . . . . . . Sauvé\n\n\n" },
        { title: <span style={{ fontSize: "26px",textDecoration: "underline" }}>Héros</span>, description: "Roll 1d66 pour les héros\n" },
        { title: "11 - 15 : . . . . . . . . . . . . . Mort", description: "Le héro est rayé de la feuille de bande" },
        { title: "16 - 21 : . . . .Blessures multiples", description: "Re-roll D6 fois sur ce tableau.\n (Reroll les 11 à 21 et 61)"},
        { title: "22 : . . . . . . Blessure à la jambe", description: "-1 en mouvement. (M)" },
        { title: "23 : . . . . . . . . .Blessure au bras", description: "(Roll D6) 1 : Bras coupé.\n 2 - 6 : Rate la prochaine Bataille." },
        { title: "24 : . . . . . . . . . . . . . . . . Folie", description: "(Roll D6) 1 - 3 : Stupide.\n 4 - 6 : Frénétique." },
        { title: "25 : . . . . . . . . . . Jambe écrasée", description: "(Roll D6) 1 : Peut charger mais plus courir.\n 2 - 6 : Rate la prochaine Bataille." },
        { title: "26 : . . . . . . . . Blessure au torse", description: "-1 en endurance. (E)" },
        { title: "31 : . . . . . . . . . . . . . .Oeil crevé", description: "-1 en capacité de tir. (CT)\n(Roll D6) 1 - 3 : Oeil gauche\n 4 - 6 : Oeil droit\n(Si les deux yeux crevés : Mort)" },
        { title: "32 : . . . . . . . . . . Vielle blessure", description: "(Roll D6 avant chaque partie)\n Si 1 : Rate la Bataille." },
        { title: "33 : . . . . . Traumatisme nerveux", description: "-1 en initiative. (I)" },
        { title: "34 : . . . . . . Blessure à la main", description: "-1 en capacité de combat. (CC)" },
        { title: "35 : . . . . . . . .Blessure profonde", description: "Rate les (Roll D3) prochaines batailles" },
        { title: "36 : . . . . . . . . . . . . . Dépouillé", description: "Tout ses armes, armures et\n équipements sont perdus" },
        { title: "41 - 55 : . . . Récuperation totale", description: "Ouf ! Pas de blessure grave" },
        { title: "56 : . . . . . . . . . . . . . .Rancune", description: "Haine du (Roll D6) 1 - 3 : héros agresseur;\n 4 : Chef de bande; 5 : Toute la bande;\n 6 : Toutes bandes du même type." },
        { title: "61 : . . . . . . . . . . . . . . .Capturé", description: "Peut être échangé contre rançon;\nVendu comme esclave D6x5 CO\n+ récup de tout son équipement;\n(Mort-Viv.)Transformé en zombie;\n(Poss.)Sacrifié pour +1Xp au chef." },
        { title: "62 - 63 : . . . . . . . . . . . .Endurci", description: "Immunisé à la 'Peur'. " },
        { title: "64 : . . . . . . . Horrible Balafres", description: "Provoque la 'Peur'. " },
        { title: "65 : . . . . . . . Vendu aux arènes", description: "Combat contre un gladiateur (Franc-Tireur).\n (Roll pour savoir qui charge)\nVictoire : +50 CO et +2Xp\nDéfaite : Dépouillé + Re-roll sur ce tableau." },
        { title: "66 : . . . . . . Survie miraculeuse", description: "+1 point d'expérience. (Xp)" },
        
      ],
    },
    "Expérience": {
      title: "Expérience",
      subtitle: "+1 Xp pour chaque guerrier (même 'H-C')...",
      details: [
          { title: "Hommes de main", description: "Re-roll si déjà eu +1 à cette caractérisitque.\n\n2-4 : . . . . . . . . . . . . +1 en Initiative.\n5 : . . . . . . . . . . . . . +1 en Force.\n6-7 : . . . . . +1 en CC/CT (au choix).\n8 : . . . . . . . . . . . . . . +1 Attaque.\n9 : . . . . +1 en Commandement.\n10-12 : . . . . . . . . . . . .Ce gars est doué :\nUn guerrier du groupe devient un héro\n et re-roll sur leur tableau.\n Re-roll pour le reste du groupe." },
          { title: "Héros", description: "Choisir l'autre stat si 1 ère déjà au max.\n Stat au choix si les deux sont au max.\n\n  2 - 5 : . . . . . . . . . . . . . Compétence.\n6 : . . . 1-3 = +1 F ; 4-6 = +1 A.\n7 : . . +1 en CC/CT (au choix).\n8 : . . . 1-3 = +1 I ; 4-6 = +1 Cd.\n9 : . .  1-3 = +1 PV ; 4-6 = +1 E.\n10 - 12 : . . . . . . . . . . . . . . . Compétence." },
        ],
    },

    "Exploration": {
      title: "Exploration",
      subtitle: "Roll 1D6 par héros non 'Hors-Combat,'\n+1D6 si victorieux.\nNe prenez que le plus haut résultat en cas de multiples doubles/triples/... ",
      menu: {
        "doubles": {
          title: "Doubles",
          subtitle: "Détails pour Double",
          details: [
            { title: "1 - 1 : . . . . . . . . . . . Puit", description: "Peut faire une test d'endu pour 1 héro :\nSi succès : +1 Fragment si non, rate la prochaine partie." },
            { title: "2 - 2 : . . . . . . . . . . Échoppe", description: "Trouve D6 CO :\nSur '1', trouve aussi un 'Porte-bonheur." },
            { title: "3 - 3 : . . . . . . . . . . Cadavre", description: "Trouve 1d6 CO :\nSi '1', trouve aussi un 'Porte-bonheur." },
            { title: "4 - 4 : . . . . . . . . Vagabond", description: "Skavens : +2D6 CO\nPossédés : +1 XP au chef\nMort-vivants : +1 Zombie\nAutres : Prochaine Exploration :\n+1D6 d'explo. & défausse 1D6 au choix" },
            { title: "5 - 5 : . . . Carrosse retourné", description: "Roll 1D6:\n1-2 : Carte de Mordheim\n3-4 : +2D6 CO\n5-6 : +12 CO" },
            { title: "6 - 6 : . . . Masures délabrées", description: "Trouve 1d6 CO"},
          
          ]
        },
        "triples": {
          title: "Triples",
          subtitle: "Détails pour Triples",
          details: [
            { title: "Triples", description: "Voici les informations spécifiques pour Triples." }
          ]
        },
        "quadruples": {
          title: "Quadruples",
          subtitle: "Détails pour Quadruples",
          details: [
            { title: "Quadruples", description: "Voici les informations spécifiques pour Quadruples." }
          ]
        },
        "quintuples": {
          title: "Quintuples",
          subtitle: "Détails pour Quintuples",
          details: [
            { title: "Quintuples", description: "Voici les informations spécifiques pour Quintuples." }
          ]
        },
        "sextuples": {
          title: "Sextuples",
          subtitle: "Détails pour Sextuples",
          details: [
            { title: "Sextuples", description: "Voici les informations spécifiques pour Sextuples." }
          ]
        },
      }
    },
    "Ventes de Fragments":{
      title: "Ventes de Fragments",
      subtitle: "Additionnez les dés d'exploration\nEt consulter la collone en fonction\n du nombre de vos guerriers\n(sans les francs-tireurs)",
      tab : [

      ]
  },
    
  "Recrutement":{
    title: "Recrutement",
    subtitle: "Vous avez droit de completer vos groupes d'homme de main déjà expérimentés pour un total de 2D6 XP à réartir dans vos nouvelles recrues\n(Exemple:Si vous faites '6' vous pouvez ajouter 2 guerriers dans un groupe ayant déjà 3Xp.\n Chaque guerrier coutera +2CO par XP.",
    },

  "Commerce":{
    title: "Commerce",
    subtitle: "Consultez les rêgles de votre bande pour voir les armes/armures utilisable.\nLes objest divers sont réservé aux héros.\nles prix de revente sont = à 50% du prix d'achats brut",
    }

};
  






 



  
  