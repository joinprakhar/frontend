import React, { useState } from "react";
import "../CSS/ProjectDetailModal.css";
import Carousel from "./Coursel";

const ProjectDetailModal = ({ data }) => {
  const [img, setImg] = useState(data?.image[0]);
  const imgs = data?.image;
  const tools = [...data?.tech, ...data?.skills];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="project-large-heading">
        {data?.name}
        <div>
          <a href={data?.git} target="_blank">
            <i title="GitHub" class="fa fa-github" style={{}}></i>
          </a>
          <a href={data?.live} target="_blank">
            <i title="Deployement" class="fa fa-laptop"></i>
          </a>
        </div>
      </div>
      <div className="project-detail-box">
        <div className="project-detail-image-box">
          <img src={img} alt="" />
          <div className="project-detail-image-carousel">
            <Carousel arrow={"black"}>
              {imgs &&
                imgs.map((ele) => {
                  return (
                    <img
                      style={{
                        width: "70px",
                        height: "70px",
                        border: "1px solid black",
                        marginRight: "10px",
                      }}
                      src={ele}
                      alt={""}
                      onClick={() => setImg(ele)}
                    />
                  );
                })}
            </Carousel>
          </div>
        </div>
        <div className="project-detail-detail-box">
          <div className="project-large-desc">
            {data?.largedesc.map((ele) => {
              return <p>{ele}</p>;
            })}
          </div>
          <h3>Tools Used</h3>
          <div
            style={{ display: "flex", flexWrap: "wrap", paddingBottom: "10px" }}
          >
            {tools &&
              tools.map((ele) => {
                return (
                  <div className="project-modal-tools">
                    <span>{ele}</span>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
