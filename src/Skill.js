import React from "react";
import SkillBar from "react-skillbars";
import "./Skills.css";

const Skill = () => {
  const colors = {
    bar: "#3498db",
    title: {
      text: "#fff",
      background: "#2980b9",
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

  return (
    <div className="skillSection">
      <hr className="bg-white" />
      <h1 className="about__heading">My Skills</h1>
      <div className="skillflex">
        <div>
          <h3 className="skillHead"> Expert</h3>
          <SkillBar skills={expert} />
        </div>
        <div>
          <h3 className="skillHead"> Comfortable </h3>
          <SkillBar skills={comfortable} />
        </div>
      </div>
      <div>
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
      <div>
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
