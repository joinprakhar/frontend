import React from "react";
import project from "../assets/project.jpg";
import live from "../assets/live.png";
import github from "../assets/github.png";
import "./CSS/projects.css";
const Projects = () => {
  return (
    <>
      <div className="project-slider">
        {/* <div>
          <i class="fa fa-toggle-left"></i>
        </div> */}
        <div className="project-slide">
          <MinorProject />
        </div>
        {/* <div>
          <i class="fa fa-toggle-right"></i>
        </div> */}
      </div>
      <div className="project-container">Project Container</div>
    </>
  );
};

export default Projects;

function MajorProject() {
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
}

function MinorProject() {
  return (
    <div className="mini-project-container">
      <img src={project} alt="" />
      <span>Project Name Project Name</span>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, fugiat
        esse voluptate ut Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Neque, fugiat esse voluptate ut harum fugit alias. Atque pariatur
        omnis est.
      </p>
      <div className="project-link">
        <a href="https://www.google.com" target="_blank">
          <i title="GitHub" class="fa fa-github"></i>
        </a>
        <i title="Deployement" class="fa fa-laptop"></i>
      </div>
    </div>
  );
}
