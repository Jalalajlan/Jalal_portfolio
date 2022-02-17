import React from "react";
import "./tag.scss";
const Tag = ({ name, colorPattern = false, hashPattern = false }) => {
  return (
    <div className={colorPattern ? "tag" : "tag color-pattern-2"}>
      {hashPattern ? <div className={"tag__hash center"}>#</div> : ""}
      <p className="tag__name">{name}</p>
    </div>
  );
};

export default Tag;
