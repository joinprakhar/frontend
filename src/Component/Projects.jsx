import React, { useEffect, useState } from "react";
import project from "../assets/project.jpg";
import "./CSS/projects.css";
import { ProjectChart } from "./Charts/ProjectChart";

import Carousel from "./Small Components/Coursel";
import { MiniProject, MajorProject } from "../assets/data";
import SkillWiseProject from "./Charts/SkillWiseProject";
import Modal from "./Small Components/Modal";
import ProjectDetailModal from "./Small Components/ProjectDetailModal";
const Projects = () => {
  console.log(MiniProject);
  return (
    <>
      <div className="project-chart">
        <div className="project-chart-1">
          <ProjectChart />
        </div>
        <div className="project-chart-2">
          <SkillWiseProject />
        </div>
      </div>
      <h3 className="" style={{ textAlign: "center" }}>
        Minor Projects
      </h3>
      <div className="project-container">
        <Carousel arrow={"white"}>
          {MiniProject &&
            MiniProject.map((ele, ind) => {
              return <MinorProject ele={ele} key={ind} />;
            })}
        </Carousel>
      </div>
      <h3 className="" style={{ textAlign: "center" }}>
        Major Projects
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "10px auto",
          width: "95%",
          height: "100%",
          justifyContent: "center",
        }}
      >
        {MajorProject &&
          MajorProject.map((ele, ind) => {
            return <MajorProjects ele={ele} key={ind} />;
          })}
      </div>
    </>
  );
};

export default Projects;

function MajorProjects({ ele }) {
  const [show, setShow] = useState({
    show: false,
    data: "",
  });
  return (
    <>
      <Modal
        isOpen={show?.show}
        onClose={() => setShow((show) => ({ ...show, show: false, data: "" }))}
      >
        <ProjectDetailModal data={show.data} />
      </Modal>
      <div
        className="project-box"
        onClick={() => setShow((show) => ({ ...show, show: true, data: ele }))}
      >
        <div className="project-image">
          <img src={ele?.image[0]} alt="" />
        </div>
        <div className="project-info">
          <div>
            <span>{ele?.name}</span>
            <br />
            <p>{ele?.desc}</p>
          </div>
          <div></div>
          <div className="major-project-link">
            <a href={ele?.git} target="_blank">
              <i title="GitHub" class="fa fa-github"></i>
            </a>
            <a href={ele?.live} target="_blank">
              <i title="Deployement" class="fa fa-laptop"></i>
            </a>
            <i
              title="Details"
              class="fa fa-external-link-square"
              onClick={() =>
                setShow((show) => ({ ...show, show: true, data: ele }))
              }
            ></i>
          </div>
        </div>
      </div>
    </>
  );
}

function MinorProject({ ele }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ele?.images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [ele?.images.length]);

  return (
    <div className="mini-project-container">
      <img src={ele?.images[currentImageIndex]} alt="" />
      <span>{ele?.name}</span>
      <p>{ele?.desc}</p>
      <div className="project-link">
        <a href={ele?.git} target="_blank">
          <i title="GitHub" class="fa fa-github"></i>
        </a>
        <a href={ele?.live} target="_blank">
          <i
            title={ele.live === "Backend" ? "Not-available" : "Deployement"}
            class="fa fa-laptop"
            style={{
              cursor: ele.live === "Backend" ? "not-allowed" : "pointer",
            }}
          ></i>
        </a>
      </div>
    </div>
  );
}
