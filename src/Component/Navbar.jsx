import React, { Fragment, useEffect, useRef, useState } from "react";
import "./CSS/Navbar.css";
import Banner from "./Banner";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";

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
      <div className="pageBanner">
        <nav className="navbar">
          <div className="navbar-container" ref={headerRef}>
            <h1 className="logo">&nbsp;</h1>
            <button className="navbar-toggle" onClick={toggleNavbar}>
              <span className="navbar-icon"></span>
              <span className="navbar-icon"></span>
              <span className="navbar-icon"></span>
            </button>
            <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
              <NavItem
                title="Home"
                link="/"
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

              {/* <NavItem title="Services">
              <DropdownItem title="Service 1" link="/service1" />
              <DropdownItem title="Service 2" link="/service2" />
              <DropdownItem title="Service 3" link="/service3" />
            </NavItem> */}
              {/* <NavItem title="Contact" link="contact" /> */}
            </ul>
          </div>
        </nav>
        <Banner />
      </div>
      <h2 className="heading-div" id="skill">
        Skills
      </h2>
      <Skills />
      <h2 id="experience" className="heading-div">
        Experience
      </h2>
      <Experience />
      <h2 id="project" className="heading-div">
        Projects Stats
      </h2>
      <Projects />
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
