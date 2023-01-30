import React, { useState } from "react";

import "./navbar.scss";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <header>
      <h1>
        Jalal <span>Ajlan</span>
      </h1>
      <button
        onClick={() => setMobileNav(!mobileNav)}
        className="mobile-nav-toggle"
      >
        <span className="sr-only">menu</span>
      </button>
      <nav>
        <ul className={mobileNav ? "primary-nav show" : "primary-nav"}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about-section">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
