import React from "react";
import project from "../assets/project.jpg";
import live from "../assets/live.png";
import github from "../assets/github.png";
import "./projects.css";
const Projects = () => {
  return (
    <div className="project-container">
      <div className="mini-project-container">
        <img src={project} alt="" />
        <span>Project Name</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
          fugiat esse voluptate ut Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Neque, fugiat esse voluptate ut harum fugit alias.
          Atque pariatur omnis est.
        </p>
        <div className="project-link">
          <img src={github} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Projects;

function MajorProject() {
  return (
    <div className="project-box">
      <div className="project-image">
        <img src="project" alt="" />
      </div>
      <div className="project-info">
        <div>Project Title</div>
      </div>
    </div>
  );
}
