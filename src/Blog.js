import React from "react";
import "./Blog.css";
import Blog1 from './img/blog-01.jpg';
import Blog2 from './img/blog-02.jpg';
import Blog3 from './img/blog-03.jpg';

function Blog() {
  return (
    <div className="blog component__space" id="Blog">
      <div className="heading">
        <h1 className="heading">Latest News</h1>
        <p className="heading p__color">
          There are many variations of passages of Lorem Ipsum available,
        </p>
        <p className="heading p__color">
          but the majority have suffered alteration.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
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
                <h4 className="project__text">
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
          <div className="col__3">
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
                <h4 className="project__text">
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
          <div className="col__3">
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
                <h4 className="project__text">
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
