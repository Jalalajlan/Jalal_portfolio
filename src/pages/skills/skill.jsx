import React from "react";
import "./skill.scss";
import { cards } from "./pageinfo";
import Card from "./../../components/card/Card";

const Skills = () => {
  return (
    <div className="cards-container center">
      {cards.map((card) => (
        <Card
          key={card.id}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default Skills;
