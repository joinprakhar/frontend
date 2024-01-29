import React from "react";
import "../CSS/ProjectDetailModal.css";
import Carousel from "./Coursel";

const ProjectDetailModal = () => {
  const imgs = [
    { link: "" },
    { link: "" },
    { link: "" },
    { link: "" },
    { link: "" },
    { link: "" },
  ];

  const url =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtR6A_5G9ik5IY2Vqs-sjkyx32Eo_igLYBDA&usqp=CAU";

  return (
    <div className="project-detail-box">
      <div className="project-detail-image-box">
        <img src={url} alt="" />
        <div className="project-detail-image-carousel">
          <Carousel>
            {imgs &&
              imgs.map((ele) => {
                return (
                  <img
                    style={{
                      width: "70px",
                      height: "70px",

                      marginRight: "10px",
                    }}
                    src={url}
                    alt={""}
                  />
                );
              })}
          </Carousel>
        </div>
      </div>
      <div className="project-detail-detail-box">
        <div>Project Name</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas id
          delectus error quasi, dicta corporis ex alias ea amet, tempora rem
          labore cum ad mollitia. Repellendus in veniam quasi provident, eum
          maxime dicta, neque voluptatem nemo maiores impedit aliquid? Ipsa
          dolor sunt ex eveniet maiores, fuga assumenda neque praesentium
          distinctio?
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, dolore
          corporis! Distinctio corporis doloremque dolore a nihil harum beatae
          laborum! Placeat distinctio voluptatum dolor pariatur praesentium
          voluptate dolorem similique? Optio.
        </div>
        <div>
          <button>sfweferfe</button>
          <button>sdfsd</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
