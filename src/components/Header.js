import React from "react";

const Header = ({ logo, title, description, picture }) => {
  return (
    <header>
      <div className="top-bar container">
        <img src={logo} alt="Deliveroo"></img>
      </div>
      <hr></hr>
      <div className="resto-infos container">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <img src={picture} alt={title}></img>
      </div>
    </header>
  );
};

export default Header;
