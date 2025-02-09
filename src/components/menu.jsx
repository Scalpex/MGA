// src/components/Menu.jsx
import React from "react";
import "../HomePage.css";

// Liste des sous-menus prédéfinis (pour compatibilité avec l'ancienne méthode)
const subMenus = {
  "regles": ["Mouvement", "Tir", "Magie", "Corps à Corps", "Psychologie", "À terre & Sonnés"],
  "objets-equipements": ["Armes", "Armures", "Équipement Divers", "Grand Bazar", "Échoppe de Curiosités"],
  "post-bataille": ["Blessures Graves", "Expérience", "Exploration", "Ventes de Fragments", "Recrutement", "Commerce"],
  "compétences, sorts et prieres": ["Compétences Basiques", "Autres Compétences", "Sorts & Prières"],
  "regles-speciales": ["Animosité", "Armes à Poudre Noir", "La Fosse", "Montures", "Événements Aléatoires", "Événements Secondaires", "Le Pouvoir des Pierres", "Chez le Toubib"],
  "mes-bandes": ["Créer une Bande", "Gérer mes Bandes", "Statistiques"]
};

const Menu = ({ menuKey, onSelect, data }) => {
  // 1. Si la prop "data" est fournie et est un tableau, on affiche les éléments du menu issus de navigationOrder.
  if (Array.isArray(data)) {
    return (
      <div className="main-content">
        {data.map((item, index) => (
          <button
            key={index}
            className="menu-button"
            onClick={() => onSelect(item)}
          >
            {item.detail ? item.detail : item.menu}
          </button>
        ))}
      </div>
    );
  }

  // 2. Si "data" est fourni sous forme d'objet (ancienne méthode)
  if (data && typeof data === "object") {
    return (
      <div className="main-content">
        {Object.keys(data).map((key) => (
          <button
            key={key}
            className="menu-button"
            onClick={() => onSelect(key)}
          >
            {data[key].title || key}
          </button>
        ))}
      </div>
    );
  }

  // 3. Pour le menu "home", on affiche le menu principal.
  if (menuKey === "home") {
    return (
      <div className="main-content">
        <button className="menu-button" onClick={() => onSelect("regles")}>
          Règles
        </button>
        <button className="menu-button" onClick={() => onSelect("coups-critiques")}>
          Coups Critiques
        </button>
        <button className="menu-button" onClick={() => onSelect("post-bataille")}>
          Post-Bataille
        </button>
        <button className="menu-button" onClick={() => onSelect("objets-equipements")}>
          Objets et Équipements
        </button>
        <button className="menu-button" onClick={() => onSelect("compétences, sorts et prieres")}>
          Compétences, Sorts et Prières
        </button>
        <button className="menu-button" onClick={() => onSelect("regles-speciales")}>
          Règles Spéciales
        </button>
        <button className="menu-button" onClick={() => onSelect("mes-bandes")}>
          Mes Bandes
        </button>
      </div>
    );
  }

  // 4. Sinon, si un sous-menu prédéfini existe pour ce menuKey, on l'affiche.
  if (subMenus[menuKey]) {
    return (
      <div className="main-content">
        {subMenus[menuKey].map((item, index) => (
          <button
            key={index}
            className="menu-button"
            onClick={() => onSelect(item)}
          >
            {item}
          </button>
        ))}
      </div>
    );
  }

  return <div className="main-content">Menu introuvable</div>;
};

export default Menu;
