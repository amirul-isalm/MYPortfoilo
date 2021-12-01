import React, { useEffect } from "react";
import SkillBar from "react-skillbars";
import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Skill = () => {
  const colors = {
    bar: "#2980b9",
    title: {
      text: "#3d3d5f",
      background: "#2A294F",
    },
  };
  const expert = [
    {
      type: "HTML",
      level: 90,
    },
    {
      type: "CSS",
      level: 85,
    },
    {
      type: "Javascript",
      level: 85,
    },
    {
      type: "ES6",
      level: 80,
    },
    {
      type: "React",
      level: 85,
    },
    {
      type: "Bootstrap",
      level: 85,
    },
  ];

  const comfortable = [
    {
      type: "Node js",
      level: 55,
    },
    {
      type: "Expressjs",
      level: 50,
    },
    {
      type: "MongoDB",
      level: 60,
    },
    {
      type: "MaterialUi",
      level: 65,
    },
    {
      type: "RESTAPI",
      level: 65,
    },
  ];
   useEffect(() => {
     AOS.init({ duration: 1500 });
   }, []);

  return (
    <div className="skillSection">
      <hr className="bg-white" />
      <h1 className="about__heading">My Skills</h1>
      <div data-aos="zoom-in" className="skillflex">
        <div>
          <h3 className="skillHead"> Expert</h3>
          <SkillBar height={20} colors={colors} skills={expert} />
        </div>
        <div>
          <h3 className="skillHead"> Comfortable </h3>
          <SkillBar height={20} colors={colors} skills={comfortable} />
        </div>
      </div>
      <div data-aos="fade-right">
        {" "}
        <h3 className="skillHead">Familiar</h3>{" "}
        <div>
          <span className="extraSkill"> Tailwind Css </span>
          <span className="extraSkill"> Firebase </span>
          <span className="extraSkill"> SASS </span>
          <span className="extraSkill"> Typescript </span>
          <span className="extraSkill"> React Native </span>
        </div>
      </div>
      <div data-aos="fade-right">
        {" "}
        <h3 className="skillHead">Tools</h3>{" "}
        <div>
          <span className="extraSkill"> Git </span>
          <span className="extraSkill"> Crome Dev Tool </span>
          <span className="extraSkill"> VS Code </span>
          <span className="extraSkill"> Heroku </span>
          <span className="extraSkill"> Netlify </span>
          <span className="extraSkill"> Firebase </span>
        </div>
      </div>
    </div>
  );
};

export default Skill;
