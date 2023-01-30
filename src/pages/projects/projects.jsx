import React from "react";
import "./projects.scss";
import { projects } from "./mockProjects";
import Project from "./../../components/project/project";

const Projects = () => {
  return (
    <div id="projects" className="projects-section">
      <h1>projects</h1>
      <p>A list of works that I have done</p>
      <div className="projects-section__projectsList">
        {projects.map((project, id) => (
          <Project
            key={id}
            imageSource={project.imageSource}
            description={project.description}
            url={project.url}
            repoUrl={project.repoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
