// src/HomePage.jsx
import React, { useRef } from "react";
import Header from "./components/Header";
import ContentContainer from "./components/ContentContainer";
import NavBar from "./components/NavBar";
import "./HomePage.css";

const HomePage = () => {
  // Création d'un ref pour accéder aux fonctions de ContentContainer
  const contentRef = useRef(null);

  // Ces fonctions appellent les fonctions exposées dans ContentContainer
  const goNext = () => {
    if (contentRef.current) {
      contentRef.current.goNext();
    }
  };

  const goPrevious = () => {
    if (contentRef.current) {
      contentRef.current.goPrevious();
    }
  };

  const goBack = () => {
    if (contentRef.current) {
      contentRef.current.goBack();
    }
  };

  const handleTitleClick = () => {
    window.location.reload();
  };

  return (
    <div className="homepage">
      <Header onTitleClick={handleTitleClick} />
      {/* Passage du ref à ContentContainer */}
      <ContentContainer ref={contentRef} />
      <NavBar goPrevious={goPrevious} goBack={goBack} goNext={goNext} />
    </div>
  );
};

export default HomePage;
