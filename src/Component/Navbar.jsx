import React, { Fragment, useEffect, useRef, useState } from "react";
import "./CSS/Navbar.css";
import Banner from "./Banner";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import WhatIDo from "./WhatIDo";
import Education from "./Education";
import email from "../assets/email.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import resume from "../assets/resume.png";

const Navbar = () => {
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(
        headerRef.current,
        event.target,
        headerRef.current.contains(event.target)
      );
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        handleOutsideClick();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const scrollToProjects = (id) => {
    console.log(id);
    const projectSection = document.getElementById({ id });
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container" ref={headerRef}>
          <h1 className="logo">Prakhar Pandey</h1>
          <button className="navbar-toggle" onClick={toggleNavbar}>
            <span className="navbar-icon"></span>
            <span className="navbar-icon"></span>
            <span className="navbar-icon"></span>
          </button>
          <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
            <NavItem
              title="Home"
              link="home"
              scrollToProjects={scrollToProjects}
            />
            <NavItem
              title="Skills"
              link="skill"
              scrollToProjects={scrollToProjects}
            />
            <NavItem
              title="Project"
              link="project"
              scrollToProjects={scrollToProjects}
            />
            <NavItem
              title="Experience"
              link="experience"
              scrollToProjects={scrollToProjects}
            />
            <NavItem
              title="Education"
              link="education"
              scrollToProjects={scrollToProjects}
            />
            <NavItem
              title="Contact"
              link="contact"
              scrollToProjects={scrollToProjects}
            />

            {/* <NavItem title="Services">
              <DropdownItem title="Service 1" link="/service1" />
              <DropdownItem title="Service 2" link="/service2" />
              <DropdownItem title="Service 3" link="/service3" />
            </NavItem> */}
            {/* <NavItem title="Contact" link="contact" /> */}
          </ul>
        </div>
      </nav>
      <div className="pageBanner" id="home">
        <Banner />
      </div>
      <div className="heading-cont-key">
        <h2 className="heading-div">What I Do?</h2>
      </div>
      <WhatIDo />
      <div className="heading-cont-key" id="skill">
        <h2 className="heading-div">Skills</h2>
        <p className="heading-cont-about">
          I believe that technology is advancing rapidly and is regularly
          updated. Therefore, I like to immerse myself in the latest tools and
          technologies to stay ahead of the curve and enhance my capabilities.
        </p>
      </div>

      <Skills />
      <div className="heading-cont-key" id="experience">
        <h2 className="heading-div">Experience</h2>
        <p className="heading-cont-about">
          I began my journey with a well-established company where I worked as a
          frontend developer. During this time, I gained experience working with
          agile methodologies. Additionally, I have contributed to small
          startups in internship roles.
        </p>
      </div>
      <Experience />
      <div className="heading-cont-key" id="project">
        <h2 className="heading-div">Projects</h2>
        <p className="heading-cont-about">
          In my free time, I enhance my skills by creating new projects. My
          belief lies in learning new tools and technologies through
          project-based learning. I regularly develop projects and integrate new
          learnings into my personal repertoire.
        </p>
      </div>
      <h3 className="" style={{ textAlign: "center" }}>
        Projects Stats
      </h3>
      <Projects />
      <div className="heading-cont-key" id="education">
        <h2 className="heading-div">Education, Certification and Awards</h2>
      </div>
      <Education />
      <div className="heading-cont-key" id="contact">
        <h2 className="heading-div">Contact</h2>
      </div>
      <div className="contact">
        {/* <div className="contact-img">
          <img src="" alt="" />
        </div> */}
        <div className="contact-social">
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
      <h3 style={{ textAlign: "center", backgroundColor: " #b5dbe6" }}>
        Made with ❤️ by Prakhar Pandey
      </h3>
    </>
  );
};

function NavItem({ title, link, children, scrollToProjects }) {
  return (
    <li className="nav-item">
      <a
        href={`#${link}`}
        className="nav-link"
        onClick={() => scrollToProjects(link)}
      >
        {title}
      </a>
      {children && <ul className="dropdown-menu">{children}</ul>}
    </li>
  );
}

function DropdownItem({ title, link }) {
  return (
    <li className="dropdown-item">
      <a href={link}>{title}</a>
    </li>
  );
}

export default Navbar;
