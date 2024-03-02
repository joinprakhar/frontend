import React from "react";
import { EndWise } from "./Charts/EndWise";
import frontend from "../assets/frontend.svg";
import backend from "../assets/5.png";
import "./CSS/WhatIDo.css";

const WhatIDo = () => {
  return (
    <div className="whatido-cont">
      <div className="wid-front">
        <h3 className="wid-title">Front-End Development</h3>
        <ul class="custom-list">
          <li>
            Building responsive website frontend using HTML, CSS, Javascript
          </li>
          <li>
            Creating application using react with other most popular state
            management library Redux and Redux-Toolkit
          </li>
          <li>
            Experience to develop application using different types of routing
            techniques and easily syntaxial data fetching libraries
          </li>
        </ul>
      </div>
      <div className="wid-chart">
        <EndWise />
      </div>
      <div className="wid-back">
        <h3 className="wid-title">Backend & Version Control</h3>
        <ul class="custom-list">
          <li>Experience working on multiple backend technologies</li>
          <li>
            Hosting and maintaining websites on virtual machine instances along
            with integration of databases
          </li>
          <li>
            Experience to develop application using node.js with MongoDB and
            Express.js <br />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhatIDo;
