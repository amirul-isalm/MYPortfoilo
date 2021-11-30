import React, { useEffect, useState } from "react";
import "./Project.css";


function Project() {
  const [myProjects,setMyProjects]=useState([])
      useEffect(() => {
        fetch("./Data.JSON")
          .then((res) => res.json())
          .then((data) => setMyProjects(data));
      }, []);
  console.log(myProjects)

  return (
    <div className="project  component__space" id="Portfolio">
      <div className="heading">
        
        <h1 className="about__heading projectTitle">My Latest Project</h1>
      </div>
      <div className="container">
        <div className="row">
          {myProjects?.map((myProject) => (
            <div className="col__3">
              <div className="project__box pointer relative">
                <div className="project__box__img pointer relative">
                  <div className="project__img__box">
                    <img
                      src={myProject.photo1}
                      alt=""
                      className="project__img"
                    />
                  </div>
                  <div className="mask__effect">
                   
                  </div>
                </div>
                <div className="project__meta absolute">
                  <h1> {myProject.name }</h1>
                  <a href="#" className="project__btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
