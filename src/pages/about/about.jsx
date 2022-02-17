import React from "react";
import "./about.scss";
import Tag from "./../../components/tag/tag";
import { pageInfo } from "./aboutData";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-section__head">
        <p>{pageInfo[0].title}</p>
        <p>{pageInfo[0].subtitle}</p>
      </div>
      <div className="about-section__desc">
        <p>{pageInfo[1].desc}</p>
      </div>
      <div className="about-section__tags-area">
        {pageInfo[2].tags.map((name, id) => (
          <Tag key={id} name={name} colorPattern={true} hashPattern={true} />
        ))}
      </div>
    </div>
  );
};

export default About;
