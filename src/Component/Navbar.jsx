import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import Banner from "./Banner";
import Skills from "./Skills";
import Projects from "./Projects";

export function Navbar() {
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = () => setIsOpen(false);

  console.log(headerRef);
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

  return (
    <div className="pageBanner">
      <nav className="navbar">
        <div className="navbar-container" ref={headerRef}>
          <h1 className="logo">Nested Navbar</h1>
          <button className="navbar-toggle" onClick={toggleNavbar}>
            <span className="navbar-icon"></span>
            <span className="navbar-icon"></span>
            <span className="navbar-icon"></span>
          </button>
          <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
            <NavItem title="Home" link="/" />
            <NavItem title="About" link="/about" />
            <NavItem title="Services">
              <DropdownItem title="Service 1" link="/service1" />
              <DropdownItem title="Service 2" link="/service2" />
              <DropdownItem title="Service 3" link="/service3" />
            </NavItem>
            <NavItem title="Contact" link="/contact" />
          </ul>
        </div>
      </nav>
      <Banner />
      <span style={{ textAlign: "center" }}>--Skills--</span>
      <Skills />
      <span style={{ textAlign: "center" }}>--Projects--</span>
      <Projects />
    </div>
  );
}

function NavItem({ title, link, children }) {
  return (
    <li className="nav-item">
      <a href={link} className="nav-link">
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
