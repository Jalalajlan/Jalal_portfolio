import React, { useState, useEffect } from "react";

import "./navbar.scss";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [isScreenScrolled, setIsScreenScrolled] = useState(false);

  const changeNavbarBackgroundOnScroll = () =>
    window.scrollY >= 90
      ? setIsScreenScrolled(true)
      : setIsScreenScrolled(false);

  useEffect(() => {
    changeNavbarBackgroundOnScroll();
    window.addEventListener("scroll", changeNavbarBackgroundOnScroll);
  });

  return (
    <header className={isScreenScrolled ? "navbar scrolled-navbar" : "navbar"}>
      <h1>
        Jalal <span>Ajlan</span>
      </h1>
      <button
        onClick={() => setMobileNav(!mobileNav)}
        className="mobile-nav-toggle sr-only"
      ></button>
      <span></span>
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
