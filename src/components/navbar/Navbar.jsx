import React, { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [primaryNavigation, setPrimaryNavigation] =
    useState("primary-navigation");

  return (
    <header>
      <h1>Jalal Portfolio</h1>
      <button
        onClick={() =>
          primaryNavigation === "primary-navigation"
            ? setPrimaryNavigation("primary-navigation show")
            : setPrimaryNavigation("primary-navigation")
        }
        className="mobile-nav-toggle"
        aria-aria-controls="primary-navigation"
        aria-expanded="false"
      >
        <span className="sr-only">menu</span>
      </button>
      <nav>
        <ul id="primary-navigation" className={primaryNavigation}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
      </nav>
      <button className="contactbtn">contact me</button>
    </header>
  );
};

export default Navbar;
