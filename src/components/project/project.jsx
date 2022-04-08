import React from "react";
import "./project.scss";

const Project = ({ imageSource, description, url, repoUrl }) => {
  return (
    <div className="project">
      <img src={imageSource} alt="servicify logo" />
      <div className="overlay">
        <p>{description}</p>
        <div className="overlay__btns">
          <button>
            <a href={url}>View demo</a>
          </button>
          <button>
            <a href={repoUrl}>Code</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
