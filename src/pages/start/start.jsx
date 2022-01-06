import React from "react";
import "./start.scss";
import Navbar from "./../../components/navbar/Navbar";

import Profile from "../../images/profile.jpg";

import Twitter from "../../images/Twitter.svg";
import Facebook from "../../images/Facebook.svg";
import Github from "../../images/Github.svg";
import LinkedIn from "../../images/LinkedIn.svg";
import SocialIcon from "../../components/social-icon/SocialIcon";

const Start = () => {
  const iconNames = [Twitter, Facebook, Github, LinkedIn];

  return (
    <div>
      <Navbar />
      <div className="socialIconContainer">
        {iconNames.map((name) => (
          <div key={name}>
            <SocialIcon IconName={name} />
          </div>
        ))}
      </div>
      <div className="main-section">
        <div className="main-section__left">
          <h3>Hi, There!</h3>
          <h1>I'm a Software Engineer</h1>
          <p>
            I’m freelance UI/UX Designer and developer based in london, England.
            I strive to build immersive and beautiful web applications through
            carefully carfted code and user centric design.
          </p>
        </div>
        <div className="main-section__right">
          <div className="rounded"></div>
          <img src={Profile} className="profile-image" alt="profile image" />
          <div className="rounded"></div>
        </div>
      </div>
      <div className="aboutme">
        <h3>About me</h3>
        <h3>Like anyone cares</h3>
      </div>
    </div>
  );
};

export default Start;
