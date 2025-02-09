// src/components/Header.jsx
import React from "react";
import headerTitle from '../headerTitle.png';
import "../HomePage.css";

const Header = ({ onTitleClick }) => {
  return (
    <header className="header">
      <div className="language-buttons">
        <button className="lang-button">Eng</button>
        <button className="lang-button">Fr</button>
        <button className="lang-button">Hr</button>
      </div>
      <div className="header-main">
        <img
          src={headerTitle}
          alt="Mordheim Game Assist"
          className="header-title"
          onClick={onTitleClick}
        />
      </div>
    </header>
  );
};

export default Header;
