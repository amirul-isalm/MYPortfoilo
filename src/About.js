import React from "react";
import "./About.css";
import aboutImg from "./img/about.jpg";
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img
              src="https://i.ibb.co/yd221Tw/my-bg2-1.png"
              alt=""
              className="about__img"
            />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Hi I,m Amirul Islam Shanto. I am a MERN stack web developer. I
                have experience in developing some web pages successfully. I’m
                working a minimum of 8-10 hours every day. I have done some
                frontend and two full-stack projects in last few month.
              </p>
              <p className="about__text p__color">
                SKILLS  <br />
                Comfortable Skills: HTML, CSS, Bootstrap, tailwind CSS,
                React-Bootstrap, Material Ui, ES6, javascript, React JS,
                Firebase Authentication, Firebase, Github, Express JS <br /> Familiar
                With Redux, React Native, SASS, Node JS, MongoDB  Hosting:
                Netlify, Heroku, Firebase
                <br /> Tools: Git, Chrome Dev-tool,
                Vs-code, Github
              </p>
              <p className="about__text p__color">
                My goal is to satisfy clients, try to understand what they want
                for their website, help them from beginning to the end of the
                project, and give support for every problem.
              </p>
              
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
