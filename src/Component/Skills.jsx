import React from "react";
import "./CSS/skillcss.css";

const Skills = () => {
  const skillpoints = [
    { name: "Html", image: "", value: "" },
    { name: "Css", image: "", value: "" },
    { name: "Javascript", image: "", value: "" },
    { name: "React", image: "", value: "" },
    { name: "Node JS", image: "", value: "" },
    { name: "Express JS", image: "", value: "" },
    { name: "MongoDB", image: "", value: "" },
    { name: "MySQL", image: "", value: "" },
    { name: "GIt and GitHub", image: "", value: "" },
    { name: "Doker", image: "", value: "" },
    { name: "Chartjs", image: "", value: "" },
  ];

  return (
    <div className="skillpage">
      {skillpoints &&
        skillpoints.map((ele) => {
          return (
            <KeySkills
              name={ele?.name}
              image={
                "https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
              }
            />
          );
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
