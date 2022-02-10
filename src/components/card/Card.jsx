import React from "react";
import "./card.scss";

const Card = ({ icon, title, description }) => {
  return (
    <div className="card">
      <img src={icon} alt="icon" />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Card;
