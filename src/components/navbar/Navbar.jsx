import React, { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <header>
      <h1>Jalal Portfolio</h1>
      <button
        onClick={() => setMobileNav(!mobileNav)}
        className="mobile-nav-toggle"
      >
        <span className="sr-only">menu</span>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          className={
            mobileNav ? "primary-navigation show" : "primary-navigation"
          }
        >
          <li>
            <a href="www.google.com">Home</a>
          </li>
          <li>
            <a href="www.google.com">About</a>
          </li>
          <li>
            <a href="www.google.com">Skills</a>
          </li>
          <li>
            <a href="www.google.com">Projects</a>
          </li>
        </ul>
      </nav>
      <button className="contactbtn">contact me</button>
    </header>
  );
};

export default Navbar;
