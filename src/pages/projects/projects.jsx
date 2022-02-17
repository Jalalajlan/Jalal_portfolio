import React from "react";
import "./projects.scss";
import { projects } from "./mockProjects";
import Project from "./../../components/project/project";

const Projects = () => {
  return (
    <div className="projects-section">
      <h1>projects</h1>
      <p>A few recent design and coding projects that was held in Group</p>
      <div className="projects-section__projectsList">
        {projects.map((project, id) => (
          <Project
            key={id}
            imageSource={project.imageSource}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
