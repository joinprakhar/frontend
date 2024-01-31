import React from "react";
import project from "../assets/project.jpg";
import "./CSS/projects.css";
import Carousel from "./Small Components/Coursel";
import { MiniProject } from "../assets/data";
const Projects = () => {
  return (
    <>
      <div className="project-container">
        <Carousel>
          {MiniProject &&
            MiniProject.map((ele) => {
              return <MinorProject />;
            })}
        </Carousel>
      </div>
      <h2 className="heading-div">Major Projects</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "10px",
          justifyContent: "center",
        }}
      >
        {MiniProject &&
          MiniProject.map((ele) => {
            return <MajorProject />;
          })}
      </div>
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
        <a href="https://www.google.com" target="_blank">
          <i title="Deployement" class="fa fa-laptop"></i>
        </a>
      </div>
    </div>
  );
}

{
  /* <div>
          {MiniProject &&
            MiniProject.map((ele) => {
              return <MajorProject />;
            })}
        </div> */
}
