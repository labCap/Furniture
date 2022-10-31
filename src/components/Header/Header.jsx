import React, { useState } from "react";
import { Logo } from "../Logo/Logo";
import { Nav } from "../Nav/Nav";
import "./Header.scss";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("_lock");
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />
          <Nav menuOpen={menuOpen} />
          <ul className="header__icons">
            <li className="header__icon">
              <img src="img/icon/cart.svg" alt="cart" />
            </li>
            <li className="header__icon">
              <img src="img/icon/search.svg" alt="search" />
            </li>
          </ul>
          <div
            className={`icon-menu ${menuOpen && "menu-open"}`}
            onClick={handleClick}
          >
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};
