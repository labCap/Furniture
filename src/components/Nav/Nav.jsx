import React from "react";
import "./Nav.scss";

const navList = ["Home", "About", "Collection", "Shop"];

const NavItem = ({ text }) => {
  return (
    <li className="nav__item">
      <a href="#" className="nav__link">
        {text}
      </a>
    </li>
  );
};

export const Nav = ({ menuOpen }) => {
  return (
    <nav className={`nav ${menuOpen && "menu-open"}`}>
      <ul className="nav__list">
        {navList.map((data) => (
          <NavItem key={data} text={data} />
        ))}
      </ul>
    </nav>
  );
};
