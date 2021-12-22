import React from 'react';
import "./navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__left-eclipse"></div>
            <div className="navbar__nav-items">
                <h1>Jalal Portfolio</h1>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Projects</a></li>
                </ul>
                <div className="navbar__nav-items__btn">
                    Contact me
                </div>
            </div>
        </div>
    );
};

export default Navbar;