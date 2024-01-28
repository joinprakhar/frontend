import React, { useEffect, useState } from "react";
import "./Header.css";
import email from "../assets/email.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import resume from "../assets/resume.png";
import developer from "../assets/developer.png";

const Banner = () => {
  const [name, setName] = useState("");
  const text = "Prakhar Pandey";

  useEffect(() => {
    let currentIndex = 0;
    const interval = () =>
      setInterval(() => {
        if (currentIndex <= text.length) {
          setName(text.slice(0, currentIndex));

          currentIndex++;
        } else {
          clearInterval(interval);
          setName("");
          currentIndex = 0;
        }
      }, 300);

    interval();
    return () => clearInterval(interval);
  }, [text, setName]);

  return (
    <div className="banner-container">
      <div className="info-banner">
        <div className="banner-intro">Hi, There. I am</div>
        <div className="banner-name">{name}&nbsp;</div>
        <div>
          Enthusiastic and motivated <strong>Full Stack Developer</strong>,
          focused on building dynamic and interactive web applications with the
          latest technologies and best coding practices.
        </div>
      </div>
      <div className="imageBanner">
        <div className="imagediv">
          <img src={developer} alt="" />
        </div>
        <div className="social">
          <img src={github} className="icons" />
          <img src={email} className="icons" />
          <img src={linkedin} className="icons" />
          <img src={resume} className="icons" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
