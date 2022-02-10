import React from "react";
import "./skill.scss";
import { cards } from "./pageinfo";
import Card from "./../../components/card/Card";

const Skills = () => {
  return (
    <div className="cards">
      <h2>Skills</h2>
      <div className="cards-container">
        {cards.map((card) => (
          <Card
            key={card.id}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
