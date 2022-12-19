import React from "react";

const Header = () => {
  const navs = ["Main", "Services", "About", "Contacts"];

  return (
    <header>
      <div>
        <span className="logo">ATD Design and Consultancy FZ-LLC</span>
        <div className="navs-wrapper">
        { navs.map(item =>
            <nav>{ item }</nav>
          ) }
      </div>
      </div>
    </header>
  );
};

export default Header;
