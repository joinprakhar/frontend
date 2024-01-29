import React from "react";
import project from "../../assets/project.jpg";
import "../CSS/projects.css";

const MinorProject = ({ pname, pimage, plivelink, pgitlink }) => {
  return (
    <div className="mini-project-container">
      <img src={project} alt="" />
      <span>{pname}</span>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, fugiat
        esse voluptate ut Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Neque, fugiat esse voluptate ut harum fugit alias. Atque pariatur
        omnis est.
      </p>
      <div className="project-link">
        <a href="https://www.google.com">
          <i title="GitHub" class="fa fa-github"></i>
        </a>
        <i title="Deployement" class="fa fa-laptop"></i>
      </div>
    </div>
  );
};

export default MinorProject;
