import React, { useState } from "react";
import "./Home.css";
import Typical from "react-typical";

function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });
  // Toogle Menu
  const [show, setShow] = useState(false);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center   pxy__30">
          <div className="navigation pt__20 pxy__20">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About Me</li>
              </a>
              <a href="#Services">
                <li className="nav__items mx__15">Services</li>
              </a>
              <a href="#Portfolio">
                <li className="nav__items mx__15">Portfolio</li>
              </a>
              <a href="#Blog">
                <li className="nav__items mx__15">Blog</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
          {/* Toogle Menu */}
          <div className="toggle__menu">
            <svg
              onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ? (
            <div className="sideNavbar">
              <ul className="sidebar d__flex">
                <li className="sideNavbar">
                  <a onClick={(e) => setShow(false)} href="#Home">
                    Home
                  </a>
                </li>
                <li className="sideNavbar">
                  <a onClick={(e) => setShow(false)} href="#About">
                    About
                  </a>
                </li>
                <li onClick={(e) => setShow(false)} className="sideNavbar">
                  <a onClick={(e) => setShow(false)} href="#Services">
                    Services
                  </a>
                </li>
                <li onClick={(e) => setShow(false)} className="sideNavbar">
                  <a onClick={(e) => setShow(false)} href="#Portfolio">
                    Portfolio
                  </a>
                </li>
                <li className="sideNavbar">
                  <a onClick={(e) => setShow(false)} href="#Blog">
                    Blog
                  </a>
                </li>
                <li className="sideNavbar">
                  <a onClick={(e) => setShow(false)} href="#Contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        {/* HOME CONTENT */}
        <div className="homepageInfo">
          <div className="home__content">
            <div className="">
              <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
              <h2 className="home__text  pz__10">
                Hi, I’m <br /> Amirul Islam Shanto
              </h2>
              <div className="textanimation ">
                <span className=" fs-1">
                  <Typical
                    loop={Infinity}
                    wrapper="p"
                    steps={[
                      "I'm a Web Developer ",
                      2000,
                      "I'm a Front-end Developer ",
                      2000,
                      "I'm a MERN Stack Developer ",
                      2000,
                      "I'm a Javascript Developer ",
                      2000,
                      "I'm a React Developer ",
                      2000,
                    ]}
                  />
                </span>
              </div>
            </div>
            <div className="about__button ">
              <a
                target="_balnk"
                href="https://drive.google.com/file/d/19_w8fwjI-rMQIXusvkYTv30_Twvtg_Wd/view?usp=sharing"
              >
                <button className="about btn pointer">Download Cv</button>
              </a>

              <a href="#Contact">
                <button className="about btn pointer">Contact</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
