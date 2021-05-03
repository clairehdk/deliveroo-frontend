import React from "react";

const Header = ({ logo, title, description, picture }) => {
  return (
    <header>
      <div className="top-bar container">
        <img src={logo}></img>
      </div>
      <hr></hr>
      <div className="resto-infos container">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <img src={picture}></img>
      </div>
    </header>
  );
};

export default Header;
