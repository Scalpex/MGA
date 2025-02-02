import React, { useState, useRef } from "react";
import "./HomePage.css";

function HomePage() {
  // États de navigation
  const [currentMenu, setCurrentMenu] = useState("home");
  const [currentCritDetail, setCurrentCritDetail] = useState(null);
  const [currentPostBattleDetail, setCurrentPostBattleDetail] = useState(null);
  const [currentCompetenceCategory, setCurrentCompetenceCategory] = useState(null);

  // État pour l'animation de transition (ex: "slide-in-left", "slide-out-right", etc.)
  const [transitionClass, setTransitionClass] = useState("");
  const transitionDuration = 300; // en ms

  // Références pour détecter le swipe
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  // --- Fonctions de navigation ---

  // Retour (flèche gauche ou swipe droit)
  const goBack = () => {
    // Si on est dans la vue détail d'une catégorie de compétences, revenir à la liste des catégories
    if (
      currentMenu === "post-bataille" &&
      currentPostBattleDetail === "liste_compétences" &&
      currentCompetenceCategory
    ) {
      triggerTransition("right", () => setCurrentCompetenceCategory(null));
    }
    // Si on est dans les coups critiques et qu'un détail est affiché
    else if (currentMenu === "coups-critiques" && currentCritDetail) {
      triggerTransition("right", () => setCurrentCritDetail(null));
    }
    // Dans la section post-bataille hors compétences
    else if (currentMenu === "post-bataille" && currentPostBattleDetail) {
      // Si une catégorie de compétences est affichée, on revient à la vue liste (gérée ci-dessus)
      if (currentCompetenceCategory) {
        triggerTransition("right", () => setCurrentCompetenceCategory(null));
      } else {
        triggerTransition("right", () => setCurrentPostBattleDetail(null));
      }
    }
    // Dans tous les autres cas (par exemple, depuis un sous-menu)
    else if (currentMenu !== "home") {
      triggerTransition("right", () => setCurrentMenu("home"));
    }
  };

  // Passe au détail suivant (flèche bas ou swipe vers le haut)
  const goNext = () => {
    // Navigation au sein de la liste des compétences
    if (
      currentMenu === "post-bataille" &&
      currentPostBattleDetail === "liste_compétences"
    ) {
      const keys = Object.keys(competencesDetails);
      // Si aucune catégorie n'est encore sélectionnée, on en sélectionne la première
      if (!currentCompetenceCategory) {
        triggerTransition("up", () => setCurrentCompetenceCategory(keys[0]));
      } else {
        const currentIndex = keys.indexOf(currentCompetenceCategory);
        const nextIndex = (currentIndex + 1) % keys.length; // boucle circulaire
        triggerTransition("up", () => setCurrentCompetenceCategory(keys[nextIndex]));
      }
    }
    // Navigation dans les coups critiques
    else if (currentMenu === "coups-critiques") {
      const keys = Object.keys(criticalHitsDetails);
      if (!currentCritDetail) {
        triggerTransition("up", () => setCurrentCritDetail(keys[0]));
      } else {
        const currentIndex = keys.indexOf(currentCritDetail);
        const nextIndex = (currentIndex + 1) % keys.length;
        triggerTransition("up", () => setCurrentCritDetail(keys[nextIndex]));
      }
    }
    // Navigation dans la section post-bataille hors compétences
    else if (currentMenu === "post-bataille") {
      const keys = Object.keys(postBattleDetails);
      if (!currentPostBattleDetail) {
        triggerTransition("up", () => setCurrentPostBattleDetail(keys[0]));
      } else if (currentPostBattleDetail !== "liste_compétences") {
        const currentIndex = keys.indexOf(currentPostBattleDetail);
        const nextIndex = (currentIndex + 1) % keys.length;
        triggerTransition("up", () => setCurrentPostBattleDetail(keys[nextIndex]));
      }
    }
    // Vous pouvez étendre la logique pour d'autres menus si besoin
  };

  // Passe au détail précédent (flèche haut ou swipe vers le bas)
  const goPrevious = () => {
    // Navigation au sein de la liste des compétences
    if (
      currentMenu === "post-bataille" &&
      currentPostBattleDetail === "liste_compétences"
    ) {
      const keys = Object.keys(competencesDetails);
      // Si aucune catégorie n'est sélectionnée, ne rien faire (ou éventuellement sélectionner la dernière)
      if (currentCompetenceCategory) {
        const currentIndex = keys.indexOf(currentCompetenceCategory);
        const prevIndex = (currentIndex - 1 + keys.length) % keys.length;
        triggerTransition("down", () => setCurrentCompetenceCategory(keys[prevIndex]));
      }
    }
    // Navigation dans les coups critiques
    else if (currentMenu === "coups-critiques" && currentCritDetail) {
      const keys = Object.keys(criticalHitsDetails);
      const currentIndex = keys.indexOf(currentCritDetail);
      const prevIndex = (currentIndex - 1 + keys.length) % keys.length;
      triggerTransition("down", () => setCurrentCritDetail(keys[prevIndex]));
    }
    // Navigation dans la section post-bataille hors compétences
    else if (currentMenu === "post-bataille") {
      const keys = Object.keys(postBattleDetails);
      if (currentPostBattleDetail && currentPostBattleDetail !== "liste_compétences") {
        const currentIndex = keys.indexOf(currentPostBattleDetail);
        const prevIndex = (currentIndex - 1 + keys.length) % keys.length;
        triggerTransition("down", () => setCurrentPostBattleDetail(keys[prevIndex]));
      }
    }
    // Vous pouvez étendre la logique pour d'autres menus si besoin
  };

  // --- Animation de transition ---
  const triggerTransition = (direction, callback) => {
    let outClass = "";
    let inClass = "";
    if (direction === "right") {
      outClass = "slide-out-right";
      inClass = "slide-in-left";
    } else if (direction === "up") {
      outClass = "slide-out-up";
      inClass = "slide-in-down";
    } else if (direction === "down") {
      outClass = "slide-out-down";
      inClass = "slide-in-up";
    }
    setTransitionClass(outClass);
    setTimeout(() => {
      callback();
      setTransitionClass(inClass);
      setTimeout(() => {
        setTransitionClass("");
      }, transitionDuration);
    }, transitionDuration);
  };

  // --- Gestion des swipes ---
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchEndX - touchStartX.current;
    const diffY = touchEndY - touchStartY.current;
    const absX = Math.abs(diffX);
    const absY = Math.abs(diffY);
    const threshold = 50;
    if (absX > absY && absX > threshold) {
      if (diffX > 0) {
        goBack();
      } else {
        goNext();
      }
    } else if (absY > absX && absY > threshold) {
      if (diffY > 0) {
        goPrevious();
      } else {
        goNext();
      }
    }
  };

  // --- Rendu des écrans ---
  const renderMenu = () => {
    switch (currentMenu) {
      case "home":
        return (
          <div className="main-content">
            <button className="menu-button" onClick={() => triggerTransition("up", () => setCurrentMenu("regles"))}>Règles</button>
            <button className="menu-button" onClick={() => triggerTransition("up", () => setCurrentMenu("coups-critiques"))}>Coups Critiques</button>
            <button className="menu-button" onClick={() => triggerTransition("up", () => setCurrentMenu("post-bataille"))}>Post-Bataille</button>
            <button className="menu-button" onClick={() => triggerTransition("up", () => setCurrentMenu("objets-equipements"))}>Objets et Équipements</button>
            <button className="menu-button" onClick={() => triggerTransition("up", () => setCurrentMenu("sorts-prieres"))}>Sorts et Prières</button>
            <button className="menu-button" onClick={() => triggerTransition("up", () => setCurrentMenu("regles-speciales"))}>Règles Spéciales</button>
            <button className="menu-button" onClick={() => triggerTransition("up", () => setCurrentMenu("mes-bandes"))}>Mes Bandes</button>
          </div>
        );
      case "coups-critiques":
        return currentCritDetail ? renderDetail() : renderCriticalHitsMenu();
      case "post-bataille":
        return currentPostBattleDetail ? renderPostBattleDetail() : renderPostBattleMenu();
      case "regles":
      case "objets-equipements":
      case "sorts-prieres":
      case "regles-speciales":
      case "mes-bandes":
        return renderSubMenu(currentMenu);
      default:
        return <div className="main-content">Menu introuvable</div>;
    }
  };

  const subMenus = {
    regles: ["Mouvement", "Tir", "Magie", "Corps à Corps", "Psychologie", "À terre & Sonnés"],
    "objets-equipements": ["Armes", "Armures", "Équipement Divers", "Grand Bazar", "Échoppe de Curiosités"],
    "sorts-prieres": ["Prières de Sigmar", "Nécromancie", "Rituel du Chaos", "Magie Mineure", "Magie du Rat Cornu", "Magie Waaagh", "Autres Magies"],
    "regles-speciales": ["Animosité", "La Fosse", "Montures", "Événements Aléatoires", "Événements Secondaires", "Résistance", "Le Pouvoir des Pierres", "Chez le Toubib"],
    "mes-bandes": ["Créer une Bande", "Gérer mes Bandes", "Statistiques"]
  };

  const renderSubMenu = (menu) => (
    <div className="main-content">
      {subMenus[menu].map((item, index) => (
        <button key={index} className="menu-button">{item}</button>
      ))}
      {/* Bouton Retour supprimé */}
    </div>
  );

  const renderPostBattleMenu = () => (
    <div className="main-content">
      {Object.keys(postBattleDetails).map((key) => (
        <button key={key} className="menu-button" onClick={() => triggerTransition("up", () => setCurrentPostBattleDetail(key))}>
          {postBattleDetails[key].title}
        </button>
      ))}
      {/* Bouton Retour supprimé */}
    </div>
  );

  const renderCriticalHitsMenu = () => (
    <div className="main-content">
      {Object.keys(criticalHitsDetails).map((key) => (
        <button key={key} className="menu-button" onClick={() => triggerTransition("up", () => setCurrentCritDetail(key))}>
          {criticalHitsDetails[key].title}
        </button>
      ))}
      {/* Bouton Retour supprimé */}
    </div>
  );

  const criticalHitsDetails = {
    defaut: {
      title: "Génériques",
      subtitle: "Coups critiques de base.\n(Et un peu trop fort)",
      hits: [
        { title: "1 - 2 : Organe Vital", description: "= 2 Blessures" },
        { title: "3 - 4 : Partie Découverte", description: "= 2 Blessures\nPas de Svg" },
        { title: "5 - 6 : Coup de Maitre", description: "= 2 Blessures\nPas de Svg\n+2 au Dégâts" },
      ],
    },
    tranchant: {
      title: "Armes Tranchantes",
      subtitle: "Épées, haches, Épées à 2 mains, etc.",
      hits: [
        { title: "1 - 2 : Point Vulnérable", description: "Pas de Svg" },
        { title: "3 - 4 : Tempête de Lames", description: "= 2 Blessures" },
        { title: "5 - 6 : Tranché !", description: "= 2 Blessures\nPas de Svg\n+2 au Dégâts" },
      ],
    },
    contondant: {
      title: "Armes Contondantes",
      subtitle: "Masses, marteaux, fléaux, etc.",
      hits: [
        { title: "1 - 2 : Déséquilibré", description: "Pas de Riposte" },
        { title: "3 - 4 : Impact", description: "Pas de Svg\nPas de Casques" },
        { title: "5 : Grand Coup", description: "Lâche une arme\n(rand. si 2 armes)" },
        { title: "6 : Assommé Net", description: "Hors Combat !\n(même si plusieurs Pv)" },
      ],
    },
    tir: {
      title: "Armes de Tir",
      subtitle: "Arcs, arbalètes, armes de jet, etc.",
      hits: [
        { title: "1 - 2 : Point Vulnérable", description: "Pas de Svg" },
        { title: "3 - 4 : Ricochet", description: "Touche également l'ennemi\nle plus proche (6 ps Max)" },
        { title: "5 - 6 : Tir Parfait", description: "= 2 Blessures\nPas de Svg" },
      ],
    },
    estoc: {
      title: "Armes d'Estoc",
      subtitle: "Lances, hallbardes, etc.",
      hits: [
        { title: "1 - 2 : Coup Rapide", description: "+1 au Dégâts" },
        { title: "3 - 4 : Poussée", description: "À Terre !\n(même si plusieurs Pv)" },
        { title: "5 - 6 : Kebab !", description: "Pas de Svg\n+2 au Dégâts\nLes 2 figs restent collées\net reculent de D6 ps.\n(1 touche de F3 aux autres figs)" },
      ],
    },
    naturelles: {
      title: "Armes Naturelles",
      subtitle: "Animaux, zombies, possédés, etc.",
      hits: [
        { title: "1 - 2 : Bousculade", description: "+1 Attaque.\n(à roll directement)" },
        { title: "3 - 4 : Coup Écrasant", description: "+1 aux Dégâts" },
        { title: "5 - 6 : Coup de Maître", description: "Pas de Svg\n+2 aux Dégâts" },
      ],
    },
  };

  const renderDetail = () => {
    if (!currentCritDetail) return null;
    const { title, subtitle, hits } = criticalHitsDetails[currentCritDetail];
    return (
      <div className="main-content detail-content">
        <div className="detail-header">
          <h2 className="detail-title">{title}</h2>
          <h3 className="detail-subtitle">{subtitle}</h3>
        </div>
        <ul className="detail-list">
          {hits.map((hit, index) => (
            <li key={index} className="detail-item">
              <span className="detail-highlight">{hit.title}</span>
              <p>
                {hit.description.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const competencesDetails = {
    force: {
      title: "Combat",
      skills: [
        { name: "Puissance", description: "Augmente la force de frappe en combat." },
        { name: "Charge brutale", description: "Ajoute un bonus de dégâts en charge." },
      ],
    },
    agilite: {
      title: "Tir",
      skills: [
        { name: "Esquive", description: "Permet d'éviter les attaques ennemies." },
        { name: "Saut de félin", description: "Facilite les déplacements acrobatiques." },
      ],
    },
    commandement: {
      title: "Érudition",
      skills: [
        { name: "Chef-né", description: "Augmente le moral des alliés proches." },
        { name: "Inspirant", description: "Donne un bonus de motivation aux troupes." },
      ],
    },
    tir: {
      title: "Force",
      skills: [
        { name: "Visée précise", description: "Augmente la précision des tirs." },
        { name: "Tir rapide", description: "Permet de tirer deux fois par tour." },
      ],
    },
    combat: {
      title: "Vitesse",
      skills: [
        { name: "Riposte", description: "Possibilité d'attaquer après une parade." },
        { name: "Frappe rapide", description: "Permet d'attaquer en premier." },
      ],
    },
  };

  const postBattleDetails = {
    blessuresDesHommesDeMain: {
      title: "Blessures graves des hommes de main",
      subtitle: "Roll 1d6 pour chaques hommes de main 'Hors Combat'",
      details: [
        { title: "Hommes de main", description: "1 - 2 : Décès\n3 - 6 : Sauvé" },
      ],
    },

    blessuresDesHeros: {
      title: "Blessures graves des héros (et francs-tireurs)",
      subtitle: "Roll D66 pour chaque héros 'Hors Combat'",
      details: [
        { title: "11 - 15 : . . . . . . . . . . . . . . . Mort", description: "Le héro est rayé de la feuille de bande" },
        { title: "16 - 21 : . . . . . .Blessures multiples", description: "Re-roll D6 fois sur ce tableau.\n (Reroll les 11 à 21 et 61)"},
        { title: "22 : . . . . . . . . Blessure à la jambe", description: "-1 en mouvement. (M)" },
        { title: "23 : . . . . . . . . . . .Blessure au bras", description: "(Roll D6) 1 : Bras coupé.\n 2 - 6 : Rate la prochaine Bataille." },
        { title: "24 : . . . . . . . . . . . . . . . . . . Folie", description: "(Roll D6) 1 - 3 : Stupide.\n 4 - 6 : Frénétique." },
        { title: "25 : . . . . . . . . . . . . Jambe écrasée", description: "(Roll D6) 1 : Peut charger mais plus courir.\n 2 - 6 : Rate la prochaine Bataille." },
        { title: "26 : . . . . . . . . . Blessure au torse", description: "-1 en endurance. (E)" },
        { title: "31 : . . . . . . . . . . . . . . . .Oeil crevé", description: "-1 en capacité de tir. (CT)\n(Roll D6) 1 - 3 : Oeil gauche\n 4 - 6 : Oeil droit\n(Si les deux yeux crevés : Mort)" },
        { title: "32 : . . . . . . . . . . . . Vielle blessure", description: "(Roll D6 avant chaque partie)\n Si 1 : Rate la Bataille." },
        { title: "33 : . . . . . . . Traumatisme nerveux", description: "-1 en initiative. (I)" },
        { title: "34 : . . . . . . . .Blessure à la main", description: "-1 en capacité de combat. (CC)" },
        { title: "35 : . . . . . . . . . . Blessure profonde", description: "Rate les (Roll D3) prochaines batailles" },
        { title: "36 : . . . . . . . . . . . . . . . Dépouillé", description: "Tout ses armes, armures et\n équipements sont perdus" },
        { title: "41 - 55 : . . . . . Récuperation totale", description: "Ouf ! Pas de blessure grave" },
        { title: "56 : . . . . . . . . . . . . . . . .Rancune", description: "Haine du (Roll D6) 1 - 3 : héros agresseur;\n 4 : Chef de bande; 5 : Toute la bande;\n 6 : Toutes bandes du même type." },
        { title: "61 : . . . . . . . . . . . . . . . . .Capturé", description: "Peut être échangé contre rançon;\nVendu comme esclave D6x5 CO\n+ récup de tout son équipement;\n(Mort-Viv.)Transformé en zombie;\n(Poss.)Sacrifié pour +1Xp au chef." },
        { title: "62 - 63 : . . . . . . . . . . . . . .Endurci", description: "Immunisé à la 'Peur'. " },
        { title: "64 : . . . . . . . . . Horrible Balafres", description: "Provoque la 'Peur'. " },
        { title: "65 : . . . . . . . . . Vendu aux arènes", description: "Combat contre un gladiateur (Franc-Tireur).\n (Roll pour savoir qui charge)\nVictoire : +50 CO et +2Xp\nDéfaite : Dépouillé + Re-roll sur ce tableau." },
        { title: "66 : . . . . . . . . Survie miraculeuse", description: "+1 point d'expérience. (Xp)" },

      ],
    },
    experience: {
      title: "Expérience",
      subtitle: "+1 Xp pour chaque guerrier (même 'H-C').\n+1 Xp par ennemi mis 'H-C' par un héro.\n+1 Xp pour le chef victorieux.\n\nRoll 2D6 si gain de niveau.",
      details: [
        { title: "Hommes de main", description: "Re-roll si déjà eu +1 à cette caractérisitque.\n\n2-4 : . . . . . . . . . . . . +1 en Initiative.\n5 : . . . . . . . . . . . . . +1 en Force.\n6-7 : . . . . . +1 en CC/CT (au choix).\n8 : . . . . . . . . . . . . . . +1 Attaque.\n9 : . . . . +1 en Commandement.\n10-12 : . . . . . . . . . . . .Ce gars est doué :\nUn guerrier du groupe devient un héro\n et re-roll sur leur tableau.\n Re-roll pour le reste du groupe." },
        { title: "Héros", description: "Choisir l'autre carac. si déjà au max.\n Carac. au choix si les deux sont au max.\n\n  2 - 5 : . . . . . . . . . . . . . Compétence.\n6 : . . . 1-3 = +1 F ; 4-6 = +1 A.\n7 : . . +1 en CC/CT (au choix).\n8 : . . . 1-3 = +1 I ; 4-6 = +1 Cd.\n9 : . .  1-3 = +1 PV ; 4-6 = +1 E.\n10 - 12 : . . . . . . . . . . . . . . Compétence." },
      ],
    },
    liste_compétences: {
      title: "Liste des Compétences",
      subtitle: "Vérifiez les compétences disponibles pour vos héros",
      details: [
        <div className="compet-menu" key="liste-competences">
          {Object.keys(competencesDetails).map((key) => (
            <button
              key={key}
              className="compet-button"
              onClick={() => triggerTransition("up", () => setCurrentCompetenceCategory(key))}
            >
              {competencesDetails[key].title}
            </button>
          ))}
        </div>,
      ],
    },
    exploration: {
      title: "Exploration",
      subtitle: "Recherche de trésors et d’objets après la bataille",
      details: [
        { title: "1 - 2 : Rien", description: "Pas de découverte significative." },
        { title: "3 - 4 : Fragments de Malepierre", description: "1D3 fragments trouvés." },
        { title: "5 - 6 : Artefact Mystérieux", description: "Un objet rare a été découvert." },
      ],
    },
    vente_fragments: {
      title: "Vente de Fragments",
      subtitle: "Échange des fragments de Malepierre contre de l'or",
      details: [
        { title: "1 Fragment", description: "= 5 Couronnes d’or" },
        { title: "2 Fragments", description: "= 10 Couronnes d’or" },
        { title: "3 Fragments ou plus", description: "= 5 Couronnes par fragment supplémentaire" },
      ],
    },
    recrutement: {
      title: "Recrutement",
      subtitle: "Ajout de nouveaux membres à la bande",
      details: [
        { title: "Mercenaires", description: "Peuvent être engagés pour une seule bataille." },
        { title: "Héros", description: "Coûtent plus cher mais apportent des bonus." },
        { title: "Recrues", description: "Jeunes guerriers à former au fil des batailles." },
      ],
    },
    commerce: {
      title: "Commerce",
      subtitle: "Achat et vente d’équipements et objets spéciaux",
      details: [
        { title: "Armes", description: "Épées, haches, arcs et autres équipements offensifs." },
        { title: "Armures", description: "Protège des dégâts mais réduit la mobilité." },
        { title: "Objets Spéciaux", description: "Potions, talismans et artefacts uniques." },
      ],
    },
  };

  const renderPostBattleDetail = () => {
    if (currentPostBattleDetail === "liste_compétences") {
      // Si aucune catégorie n'est sélectionnée, afficher la liste des catégories
      if (!currentCompetenceCategory) {
        return (
          <div className="main-content detail-content">
            <h2 className="detail-title">Liste des Compétences</h2>
            <h3 className="detail-subtitle">Choisissez une catégorie :</h3>
            <div className="compet-menu">
              {Object.keys(competencesDetails).map((key) => (
                <button
                  key={key}
                  className="menu-button"
                  onClick={() => triggerTransition("up", () => setCurrentCompetenceCategory(key))}
                >
                  {competencesDetails[key].title}
                </button>
              ))}
            </div>
          </div>
        );
      }
      // Si une catégorie est sélectionnée, afficher ses détails et permettre la navigation entre catégories
      else {
        const { title, skills } = competencesDetails[currentCompetenceCategory];
        return (
          <div className="main-content detail-content">
            <h2 className="detail-title">{title}</h2>
            <ul className="detail-list">
              {skills.map((skill, index) => (
                <li key={index} className="detail-item">
                  <span className="detail-highlight">{skill.name}</span>
                  <p>{skill.description}</p>
                </li>
              ))}
            </ul>
          </div>
        );
      }
    }
    // Pour les autres cas de post-bataille
    if (currentPostBattleDetail && postBattleDetails[currentPostBattleDetail]) {
      const { title, subtitle, details } = postBattleDetails[currentPostBattleDetail];
      return (
        <div className="main-content detail-content">
          <div className="detail-header">
            <h2 className="detail-title">{title}</h2>
            <h3 className="detail-subtitle">{subtitle}</h3>
          </div>
          <ul className="detail-list">
            {details.map((detail, index) => (
              <li key={index} className="detail-item">
                <span className="detail-highlight">{detail.title}</span>
                <p>{detail.description}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return null;
  };

  return (
    <div
      className="homepage"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <header className="header">
        <div className="language-buttons">
          <button className="lang-button">Eng</button>
          <button className="lang-button">Fr</button>
          <button className="lang-button">Hr</button>
        </div>
        <div className="header-main">
          <img
            src="/header-title.png"
            alt="Mordheim Game Assist"
            className="header-title"
            onClick={() => {
              triggerTransition("right", () => {
                setCurrentMenu("home");
                setCurrentCritDetail(null);
              });
            }}
          />
        </div>
      </header>

      {/* Conteneur de contenu animé */}
      <div className={`page-container ${transitionClass}`}>
        {renderMenu()}
      </div>

      {/* Barre de navigation en bas */}
      <div className="nav-bar">
        <button className="nav-button" onClick={goBack}>&larr;</button>
        <button className="nav-button" onClick={goPrevious}>&uarr;</button>
        <button className="nav-button" onClick={goNext}>&darr;</button>
      </div>
    </div>
  );
}

export default HomePage;