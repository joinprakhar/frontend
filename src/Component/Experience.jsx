import React, { useState } from "react";
import "./CSS/Experience.css";
import exp from "../assets/1.png";

import Modal from "../Component/Small Components/Modal";
import { Comp1, Comp2 } from "./ExpModal";

const Experience = () => {
  const [show, setShow] = useState({
    show: false,
    id: "",
  });

  const showAcc = (data) => {
    if (show.show === true && show.id === data) {
      setShow((show) => ({ ...show, show: false, id: "" }));
    } else {
      setShow((show) => ({ ...show, show: true, id: data }));
    }
  };
  return (
    <div id="experience" className="exp-cont">
      <div className="exp-cont-img">
        <img src={exp} alt="" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <div className="company-cont" onClick={() => showAcc("itdose")}>
          <div className="company-details">
            <span className="comp-name">ItDose Infosystem</span>
            <span className="comp-post">Software Developer (React.Js)</span>
          </div>
          <div className="company-profile">
            <span>Noida, Uttar Pradesh</span>
            <span>August 2023 - Present</span>
          </div>

          <div className="company-details">
            <span>&nbsp;</span>
            <span>
              <button
                style={{
                  margin: "5px 2px",
                  padding: "5px",
                  border: "none",
                  textAlign: "center",
                  cursor: "pointer",
                  backgroundColor: "white",
                  borderRadius: "0.5rem",
                  color: "black",
                  width: "100%",
                }}
              >
                Details&nbsp;&nbsp;
                {show.id === "itdose" && show?.show === true ? (
                  <i class="fa fa-angle-up" style={{}}></i>
                ) : (
                  <i class="fa fa-angle-down" style={{}}></i>
                )}
              </button>
            </span>
          </div>
          {show.id === "itdose" && show?.show === true && (
            <Modal isOpen={show.show} onClose={() => showAcc("itdose")}>
              <Comp1 />
            </Modal>
          )}
        </div>
        <div className="company-cont" onClick={() => showAcc("comp1")}>
          <div className="company-details">
            <span className="comp-name">Wenedi Technologies</span>
            <span className="comp-post">Front-End Developer</span>
          </div>
          <div className="company-profile">
            <span>New Delhi </span>
            <span>Jan 2022 - July 2023</span>
          </div>
          <div className="company-details">
            <span>&nbsp;</span>
            <span>
              <button
                style={{
                  margin: "5px 2px",
                  padding: "5px",
                  border: "none",
                  textAlign: "center",
                  cursor: "pointer",
                  backgroundColor: "white",
                  borderRadius: "0.5rem",
                  color: "black",
                  width: "100%",
                }}
              >
                Details&nbsp;&nbsp;
                {show.id === "comp1" && show?.show === true ? (
                  <i class="fa fa-angle-up" style={{}}></i>
                ) : (
                  <i class="fa fa-angle-down" style={{}}></i>
                )}
              </button>
            </span>
          </div>

          {show.id === "comp1" && show?.show === true && (
            <Modal isOpen={show.show} onClose={() => showAcc("comp1")}>
              <Comp2 />
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
