// src/components/ContentContainer.jsx
import React, { useState, useRef, forwardRef, useImperativeHandle } from "react";
import Menu from "./menu";
import pageOrder from "../data/navigationOrder";
import Detail from "./detail";
import {
  criticalHitsDetails,
  competencesDetails,
  postBattleDetails,
} from "../data/rulesData";
import "../HomePage.css";

const transitionDuration = 300; // Durée de la transition en ms

// Fonction de normalisation pour comparer les chaînes (minuscules et sans espaces)
const normalize = (str) => (str ? str.toLowerCase().replace(/\s+/g, "") : "");

const ContentContainer = forwardRef((props, ref) => {
  // États de navigation internes
  const [currentMenu, setCurrentMenu] = useState("home");
  const [currentDetail, setCurrentDetail] = useState(null);
  const [currentSubDetail, setCurrentSubDetail] = useState(null);
  const [transitionClass, setTransitionClass] = useState("");
  const touchStartX = useRef(null);

  // Fonction de transition (animation)
  const triggerTransition = (direction, callback) => {
    let outClass = "";
    let inClass = "";
    if (direction === "left") {
      outClass = "slide-out-left";
      inClass = "slide-in-right";
    } else if (direction === "right") {
      outClass = "slide-out-right";
      inClass = "slide-in-left";
    } else if (direction === "down") {
      outClass = "slide-out-down";
      inClass = "slide-in-up";
    }
    setTransitionClass(outClass);
    setTimeout(() => {
      callback();
      setTransitionClass(inClass);
      setTimeout(() => setTransitionClass(""), transitionDuration);
    }, transitionDuration);
  };

  // --- Nouvelle méthode de navigation utilisant pageOrder ---
  const goNext = () => {
    console.log("goNext from ContentContainer");
    // Si on est sur "home", passer à la première page de pageOrder
    if (currentMenu === "home") {
      triggerTransition("left", () => {
        setCurrentMenu(pageOrder[0].menu);
        setCurrentDetail(pageOrder[0].detail);
        setCurrentSubDetail(null);
      });
      return;
    }
    const currentPage = { menu: currentMenu, detail: currentDetail };
    const index = pageOrder.findIndex(
      (page) =>
        normalize(page.menu) === normalize(currentPage.menu) &&
        normalize(page.detail) === normalize(currentPage.detail)
    );
    if (index === -1) {
      console.log("Page non trouvée, passage à la première page");
      triggerTransition("left", () => {
        setCurrentMenu(pageOrder[0].menu);
        setCurrentDetail(pageOrder[0].detail);
        setCurrentSubDetail(null);
      });
    } else if (index < pageOrder.length - 1) {
      const nextPage = pageOrder[index + 1];
      triggerTransition("left", () => {
        setCurrentMenu(nextPage.menu);
        setCurrentDetail(nextPage.detail);
        setCurrentSubDetail(null);
      });
    } else {
      console.log("Dernière page atteinte");
    }
  };

  const goPrevious = () => {
    console.log("goPrevious from ContentContainer");
    const currentPage = { menu: currentMenu, detail: currentDetail };
    const index = pageOrder.findIndex(
      (page) =>
        normalize(page.menu) === normalize(currentPage.menu) &&
      normalize(page.detail) === normalize(currentPage.detail)
    );
    if (index === -1) {
      console.log("Page non trouvée, passage à la première page");
      triggerTransition("right", () => {
        setCurrentMenu(pageOrder[0].menu);
        setCurrentDetail(pageOrder[0].detail);
        setCurrentSubDetail(null);
      });
    } else if (index > 0) {
      const prevPage = pageOrder[index - 1];
      triggerTransition("right", () => {
        setCurrentMenu(prevPage.menu);
        setCurrentDetail(prevPage.detail);
        setCurrentSubDetail(null);
      });
    } else {
      console.log("Première page atteinte");
    }
  };

  const goBack = () => {
    console.log("goBack from ContentContainer");
    if (currentSubDetail !== null) {
      // On est dans un sous-menu, on revient simplement à la page parent (on conserve currentDetail)
      triggerTransition("down", () => setCurrentSubDetail(null));
    } else if (currentDetail !== null) {
      // Sinon, on revient au niveau du menu de la rubrique
      triggerTransition("down", () => setCurrentDetail(null));
    } else if (currentMenu !== "home") {
      triggerTransition("down", () => setCurrentMenu("home"));
    }
  };

  // Exposer ces fonctions au parent via le ref
  useImperativeHandle(ref, () => ({
    goNext,
    goPrevious,
    goBack,
  }));

  // --- Gestion des swipes horizontaux ---
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchEndX - touchStartX.current;
    const threshold = 50;
    if (Math.abs(diffX) > threshold) {
      diffX > 0 ? goPrevious() : goNext();
    }
  };

  // --- Rendu du contenu selon l'état ---
  // On conserve ici l'ancienne logique de rendu, qui s'appuie sur currentMenu, currentDetail, etc.
  const renderContent = () => {
    console.log(
      "RenderContent - currentMenu:",
      currentMenu,
      "currentDetail:",
      currentDetail,
      "currentSubDetail:",
      currentSubDetail
    );
//--------------------------------------------------------------------------------

if (currentMenu === "coups-critiques") {
  if (!currentDetail) {
    const data = criticalHitsDetails;
    return (
      <Menu
        menuKey={currentMenu}
        data={data}
        onSelect={(key) =>
          triggerTransition("left", () => {
            setCurrentDetail(key);
            setCurrentSubDetail(null);
          })
        }
      />
    );
  }
  // Cas particulier pour CritiquesMaison (menu imbriqué)
  if (currentDetail === "CritiquesMaison") {
    const detailData = criticalHitsDetails["CritiquesMaison"];
    if (!currentSubDetail) {
      return (
        <div className="main-content detail-content">
          <div className="detail-header">
            <h2 className="detail-title">{detailData.title}</h2>
            {detailData.subtitle && (
              <h3 className="detail-subtitle">{detailData.subtitle}</h3>
            )}
          </div>
          <Menu
            data={detailData.menu}
            onSelect={(key) =>
              triggerTransition("left", () => setCurrentSubDetail(key))
            }
          />
        </div>
      );
    } else {
      return <Detail detailData={detailData.menu[currentSubDetail]} />;
    }
  }
  // Cas pour les options du sous-menu CritiquesMaison
  if (
    ["TranchantMaison", "ContondantMaison", "TirMaison", "PoudreNoirMaison", "EstocMaison", "NaturellesMaison"].includes(
      currentDetail
    )
  ) {
    const detailData = criticalHitsDetails["CritiquesMaison"];
    return <Detail detailData={detailData.menu[currentDetail]} />;
  }
  // Sinon, si une entrée existe dans criticalHitsDetails pour la clé currentDetail, l'afficher
  if (criticalHitsDetails[currentDetail]) {
    const detailData = criticalHitsDetails[currentDetail];
    return <Detail detailData={detailData} />;
  }
  // Si aucune entrée n'est trouvée, renvoyer un message par défaut
  return (
    <div className="main-content">
      <p>Aucun détail trouvé pour {currentDetail}</p>
    </div>
  );
}
//---------------------------------------------------------------------------------
if (currentDetail) {
      let detailData = null;
      if (currentMenu === "coups-critiques")
        detailData = criticalHitsDetails[currentDetail];
      else if (currentMenu === "post-bataille")
        detailData = postBattleDetails[currentDetail];
      else if (currentMenu === "compétences, sorts et prieres")
        detailData = competencesDetails[currentDetail];

      // Si le détail sélectionné possède un menu imbriqué (ex : Exploration)
      if (detailData && detailData.menu && !currentSubDetail) {
        return (
          <div className="main-content detail-content">
            <div className="detail-header">
              <h2 className="detail-title">{detailData.title}</h2>
              {detailData.subtitle && (
                <h3 className="detail-subtitle">{detailData.subtitle}</h3>
              )}
            </div>
            <Menu
              data={detailData.menu}
              onSelect={(key) =>
                triggerTransition("left", () => setCurrentSubDetail(key))
              }
            />
          </div>
        );
      }

      if (currentSubDetail) {
        const subDetailData = detailData.menu[currentSubDetail];
        return <Detail detailData={subDetailData} />;
      }

      return <Detail detailData={detailData} />;
    }

    // Pour les rubriques "coups-critiques" et "post-bataille" sans détail sélectionné
    if (["coups-critiques", "post-bataille"].includes(currentMenu)) {
      const data =
        currentMenu === "coups-critiques"
          ? criticalHitsDetails
          : postBattleDetails;
           //---------------------------------------------------------------------------------------------------
      return (
        <Menu
          menuKey={currentMenu}
          data={data}
          onSelect={(key) =>
            triggerTransition("left", () => {
              setCurrentDetail(key);
              setCurrentSubDetail(null);
            })
          }
        />
      );
    }

    // Pour "home" ou d'autres menus simples
    return (
      <Menu
        menuKey={currentMenu}
        onSelect={(key) =>
          triggerTransition("left", () => setCurrentMenu(key))
        }
      />
    );
  };

  return (
    <div
      className={`page-container ${transitionClass}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {renderContent()}
    </div>
  );
});

export default ContentContainer;
