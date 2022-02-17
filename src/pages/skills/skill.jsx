import React from "react";
import "./skill.scss";
import { skills } from "./skillnames";
import Stack from "./../../components/Stack/stack";

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <p>skills that I have aquired and built projects with.</p>
      <div className="cards-container">
        {skills.map((skill, id) => (
          <Stack key={id} category={skill.category} names={skill.names} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
