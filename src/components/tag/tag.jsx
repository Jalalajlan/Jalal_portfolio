import React from "react";
import "./tag.scss";
const Tag = ({ name }) => {
  return (
    <div className="tag center">
      <div className="tag__hash center">#</div>
      <p className="tag__name">{name}</p>
    </div>
  );
};

export default Tag;
