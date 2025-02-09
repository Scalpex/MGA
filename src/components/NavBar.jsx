// src/components/NavBar.jsx
import React from "react";
import "../HomePage.css";

const NavBar = ({ goPrevious, goBack, goNext }) => {
  return (
    <div className="nav-bar">
      <button className="nav-button nav-left" onClick={goPrevious}>◁</button>
      <button className="nav-button nav-up" onClick={goBack}>⧋</button>
      <button className="nav-button nav-right" onClick={goNext}>▷</button>
    </div>
  );
};

export default NavBar;
