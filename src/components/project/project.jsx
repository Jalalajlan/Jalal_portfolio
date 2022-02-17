import React from "react";
import "./project.scss";

const Project = ({ imageSource, description }) => {
  return (
    <div className="project">
      <img src={imageSource} alt="servicify logo" />
      <div className="overlay">
        <p>{description}</p>
        <div className="overlay__btns">
          <button>View demo</button>
          <button>Code</button>
        </div>
      </div>
    </div>
  );
};

export default Project;
