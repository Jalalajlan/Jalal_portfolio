import React from "react";
import "./about.scss";
import Tag from "./../../components/tag/tag";
import { pageInfo } from "./pageinfo";

const About = () => {
  return (
    <div className="about-section center">
      <div className="about-section__head center">
        <p>{pageInfo[0].title}</p>
        <p>{pageInfo[0].subtitle}</p>
      </div>
      <div className="about-section__desc">
        <p>{pageInfo[1].desc}</p>
      </div>
      <div className="about-section__tags-area">
        {pageInfo[2].tags?.map((name) => (
          <Tag name={name} />
        ))}
      </div>
    </div>
  );
};

export default About;
