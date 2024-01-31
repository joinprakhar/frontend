import React from "react";
import "./CSS/skillcss.css";
import { skillpoints } from "../assets/data.js";

const Skills = () => {
  console.log(skillpoints);
  return (
    <div className="skillpage">
      {skillpoints &&
        skillpoints.map((ele) => {
          return <KeySkills name={ele?.name} image={ele?.image} />;
        })}
    </div>
  );
};

export default Skills;

function KeySkills({ name, image }) {
  return (
    <div className="ks-container">
      <img src={image} alt={""} />
      <span>{name}</span>
    </div>
  );
}
