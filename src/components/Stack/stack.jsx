import React from "react";
import "./stack.scss";
import Tag from "./../tag/tag";

const Stack = ({ category, names }) => {
  return (
    <div className="stack-card">
      <h3>{category}</h3>
      <div>
        {names.map((name, id) => (
          <Tag key={id} name={name} />
        ))}
      </div>
    </div>
  );
};

export default Stack;
