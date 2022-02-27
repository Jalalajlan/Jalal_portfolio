import React from "react";
import "./about.scss";
import Profile from "../../images/profile.jpg";
import { pageInfo } from "./aboutData";

const About = () => {
  return (
    <div id="about-section" className="about">
      <div className="about__headline">
        <h1>{pageInfo[0].title}</h1>
        <p>{pageInfo[0].subtitle}</p>
      </div>
      <div className="about__layout">
        <div className="about__layout__desc">
          <p>{pageInfo[1].desc[0]}</p>
          <br />
          <p>{pageInfo[1].desc[1]}</p>
          <br />
          <p>{pageInfo[1].desc[2]}</p>
          <br />
        </div>
        <div className="about__layout__profile">
          <img src={Profile} alt="left side portait" />
        </div>
      </div>
    </div>
  );
};

export default About;
