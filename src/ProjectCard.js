import React, { useEffect, useState } from 'react';
import DetailsModal from "./DetailsModal";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectCard = ({ myProject }) => {
  const [show, setShow] = useState(false);
   useEffect(() => {
     AOS.init({ duration: 1500 });
   }, []);
    return (
      <div data-aos="zoom-in" className="col__3">
        <div className="project__box pointer relative">
          <div className="project__box__img pointer relative">
            <div className="project__img__box">
              <img src={myProject.photo1} alt="" className="project__img" />
            </div>
            <div className="mask__effect"></div>
          </div>
          <div className="project__meta absolute">
            <h1 className="projectName"> {myProject.name}</h1>
            <a onClick={() => setShow(true)} className="project__btn">
              View Details
            </a>
          </div>
        </div>
        <DetailsModal
          setShow={setShow}
          show={show}
          myProject={myProject}
        ></DetailsModal>
      </div>
    );
};

export default ProjectCard;