import React from "react";
import "../CSS/projects.css";
const MinorProject = ({ pname, pimage, plivelink, pgitlink }) => {
  return (
    <div className="project-box">
      <div className="project-image">
        <img src={project} alt="" />
      </div>
      <div className="project-info">
        <div>Project Title</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione cum
          qui labore tempore, assumenda voluptate, possimus saepe ducimus a,
          veniam eligendi ullam molestias quos. Ratione magnam magni unde
          maxime! Modi?
        </div>
        <div className="major-project-link">
          <a href="https://www.google.com" target="_blank">
            <i title="GitHub" class="fa fa-github"></i>
          </a>
          <a href="">
            <i title="Deployement" class="fa fa-laptop"></i>
          </a>
          <a href="">
            <i title="Deployement" class="fa fa-external-link-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MinorProject;
