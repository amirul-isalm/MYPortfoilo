import React, { useEffect, useState } from "react";

import "./Project.css";
import ProjectCard from "./ProjectCard";


function Project() {
  
  const [myProjects,setMyProjects]=useState([])
      useEffect(() => {
        fetch("./Data.JSON")
          .then((res) => res.json())
          .then((data) => setMyProjects(data));
      }, []);
  

  return (
    <div className="project  component__space" id="Portfolio">
      <hr className="bg-white container mb-5" />
      <div className="heading">
        <h1 className="about__heading projectTitle">My Latest Project</h1>
      </div>
      <div className="container">
        <div className="row">
          {myProjects.map((myProject) => (
            <ProjectCard myProject={myProject}></ProjectCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
