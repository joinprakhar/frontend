import React from "react";
import "./CSS/Education.css";

const Education = () => {
  return (
    <div className="edu-main-cont">
      <div className="edu-send-cont">
        <h3>
          <i class="fa fa-graduation-cap"></i> Education
        </h3>
        <div className="company-cont">
          <div className="company-details">
            <span className="comp-name">Bachelor of Technology</span>
            {/* <span className="comp-post">Software Developer</span> */}
          </div>
          <div className="company-profile">
            <span>Indian Institute of Carpet Technology</span>
          </div>
          <div className="company-details">
            <span>Bhadohi, Uttar Pradesh</span>
            <span>2016-2020</span>
          </div>
        </div>
        <div className="company-cont">
          <div className="company-details">
            <span className="comp-name">High School & Intermediate</span>
            {/* <span className="comp-post">Software Developer</span> */}
          </div>
          <div className="company-profile">
            <span>Jawahar Navodaya Vidyalay</span>
          </div>
          <div className="company-details">
            <span>Gyanpur, Bhadohi, Uttar Pradesh</span>
            <span>2012-2016</span>
          </div>
        </div>
      </div>
      <div className="edu-send-cont">
        <h3>
          <i class="fa fa-file-text-o"></i>&nbsp;Certifications
        </h3>
        <div className="company-cont">
          <div className="company-details">
            <span className="comp-name">Full Stack Development</span>
            {/* <span className="comp-post">Software Developer</span> */}
          </div>
          <div className="company-profile">
            <span>KnowledgeHut Upgrad</span>
          </div>
          <div className="company-details">
            <span>New Delhi</span>
            <span>2022</span>
          </div>
        </div>
      </div>
      <div className="edu-send-cont">
        <h3>
          <i class="fa fa-rocket"></i>&nbsp;Awards
        </h3>
        <div className="company-cont">
          <div className="company-details">
            <span className="comp-name">
              National Talent Search Scholarship
            </span>
          </div>
          <div className="company-profile">
            <span>NCERT</span>
          </div>
          <div className="company-details">
            <span>New Delhi</span>
            <span>259 Rank (All India)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
