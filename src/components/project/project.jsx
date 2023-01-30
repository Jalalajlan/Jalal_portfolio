import React from "react";
import "./project.scss";
import { MdRemoveRedEye } from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";

const Project = ({ imageSource, description, url, repoUrl }) => {
  return (
    <div className="project">
      <img src={imageSource} alt="servicify logo" />
      <div className="overlay">
        <p>{description}</p>
        <div className="overlay__buttons">
          <a
            className="overlay__buttons__btn"
            target="_blank"
            rel="noreferrer"
            href={url}
          >
            <button>
              <MdRemoveRedEye /> Live demo
            </button>
          </a>
          <a
            className="overlay__buttons__btn"
            target="_blank"
            rel="noreferrer"
            href={repoUrl}
          >
            <button>
              <GoMarkGithub /> Github Repo
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
