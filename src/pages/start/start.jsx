import React from "react";
import "./start.scss";
import Navbar from "./../../components/navbar/Navbar";
import Profile from "../../images/profile.jpg";
import SocialIcon from "../../components/social-icon/SocialIcon";
import { icons } from "./icons";

const Start = () => {
  return (
    <>
      <Navbar />
      <div className="socials-column">
        {icons.map((icon) => (
          <div key={icon.urlLink}>
            <SocialIcon IconName={icon.name} urlLink={icon.urlLink} />
          </div>
        ))}
      </div>
      <div className="main-section">
        <div className="main-section__left">
          <h3>Hi there!</h3>
          <h1>I'm a Software Engineer</h1>
          <p>
            I’m freelance UI/UX Designer and developer based in london, England.
            I strive to build immersive and beautiful web applications through
            carefully carfted code and user centric design.
          </p>
        </div>
        <div className="main-section__right">
          <div className="rounded"></div>
          <img src={Profile} className="profile-image" alt="main profile" />
          <div className="rounded"></div>
        </div>
      </div>
    </>
  );
};

export default Start;
