import React from 'react';
import "./navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__eclipse"></div>
            <div className="navbar__nav-links">
                <h1>Jalal Portfolio</h1>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Projects</a></li>
                </ul>
                <button className="navbar__nav-links__contactbtn">Contact me</button>
            </div>
        </div>
    );
};

export default Navbar;