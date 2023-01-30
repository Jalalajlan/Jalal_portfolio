import React from "react";
import "./skill.scss";
import { skills } from "./skill_names";
import Stack from "./../../components/Stack/stack";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <h1>Skills</h1>
      <p>I have experience and have built skills with.</p>
      <div className="cards-container">
        {skills.map((skill, id) => (
          <Stack key={id} category={skill.category} names={skill.names} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
