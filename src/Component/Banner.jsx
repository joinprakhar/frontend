import React, { useEffect, useState } from "react";
import "./CSS/Header.css";
import email from "../assets/email.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import resume from "../assets/resume.png";
import developer from "../assets/developer.png";

const Banner = () => {
  const [name, setName] = useState("");
  const text = "Front-End Developer";

  useEffect(() => {
    let currentIndex = 0;
    const interval = () =>
      setInterval(() => {
        if (currentIndex <= text.length) {
          setName(text.slice(0, currentIndex));

          currentIndex++;
          return () => clearInterval(interval);
        } else {
          clearInterval(interval);
          setName("");
          currentIndex = 0;
          return () => clearInterval(interval);
        }
      }, 300);

    interval();
    return () => clearInterval(interval);
  }, [text, setName]);

  return (
    <div className="banner-container">
      <div className="info-banner">
        <div className="banner-intro">Hi, I am</div>
        <div className="banner-name">{name}&nbsp;</div>
        <div style={{ textAlign: "justify" }}>
          Having two years of expertise and proficient in HTML, CSS, and
          JavaScript, and extensive MERN stack experience. Achieved measurable
          success in increasing page load speeds by 25%. Led the implementation
          of a development system which resulted in a 15% reduction in
          development time and a 20% increase in website performance. Adept in
          collaborating with cross-functional teams and delivering projects on
          time
        </div>
      </div>
      <div className="imageBanner">
        <div className="imagediv">
          <img src={developer} alt="" />
        </div>
        <div className="social">
          <a href="">
            <img src={github} alt="img" className="icons" />
          </a>
          <a href="">
            <img src={email} alt="img" className="icons" />
          </a>
          <a href="">
            <img src={linkedin} alt="img" className="icons" />
          </a>
          <a href="">
            <img src={resume} alt="img" className="icons" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
