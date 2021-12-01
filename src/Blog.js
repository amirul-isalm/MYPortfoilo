import React, { useEffect } from "react";
import "./Blog.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Blog() {
   useEffect(() => {
     AOS.init({ duration: 1500 });
   }, []);
  return (
    <div className="blog component__space pb-4" id="Blog">
      <hr className="bg-white container mb-5" />
      <div className="heading">
        <h1 className="about__heading blogTitle">Blogs</h1>

        <p className="heading blogTitle p__color">
          For Grow Your Skill Read the Documentation{" "}
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div data-aos="zoom-in" className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src="https://i.ibb.co/W6RXB6T/HTML5.png"
                    alt=""
                    className="project__img"
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">HTML5</h5>
                <h4 className="project__text BlogName">
                  Getting started with HTML Documentation
                </h4>
                <a
                  target="_blank"
                  href="https://www.tutorialspoint.com/html5/index.htm"
                  className="blog project__btn btn"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src="https://i.ibb.co/V2Y45Q7/Javascript.png"
                    alt=""
                    className="project__img"
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">Javascript</h5>
                <h4 className="project__text BlogName">
                  Getting started with Javascript Documentation
                </h4>
                <a
                  target="_blank"
                  href="https://www.tutorialspoint.com/javascript/index.htm"
                  className="blog project__btn btn"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src="https://i.ibb.co/K2F7D92/CSS3-logo.png"
                    alt=""
                    className="project__img"
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">CSS3</h5>
                <h4 className="project__text BlogName">
                  Getting started with CSS3 Documentation
                </h4>
                <a
                  target="_blank"
                  href="https://www.tutorialrepublic.com/css-tutorial/"
                  className="blog project__btn btn"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
