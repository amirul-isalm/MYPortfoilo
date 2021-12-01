import React, { useEffect } from 'react';
import { init } from "emailjs-com";
import './Contact.css';
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
init("user_3ogP9bl45MCHHkf1sZC9I");
function Contact() {

  const handelForm =(e)=> {
    e.preventDefault()
     emailjs
       .sendForm(
         "service_lcgwqz3",
         "template_9t1g8xs",
         e.target,
         "user_3ogP9bl45MCHHkf1sZC9I"
       )
       .then(
         (result) => {
           console.log(result.text);
           alert("Your message sent successfully.")
         },
         (error) => {
           console.log(error.text);
         }
       );
    e.target.reset()
}


 useEffect(() => {
   AOS.init({ duration: 1500 });
 }, []);



    return (
      <div className="contact component__space" id="Contact">
        <hr className="bg-white container mb-5" />
        <div className="row">
          <div data-aos="fade-right" className="col__2">
            <div className="contact__box">
              <div className="contact__meta">
                <h1 className="hire__text">Hire Me.</h1>
                <p className="hire__text white">
                  I am available for a Job or freelance work. Connect with me
                  via phone:
                </p>
                <p className="hire__text white">
                  <strong>+8801796811953</strong> or email{" "}
                  <strong>amirulislam.shanto.75@gmail.com</strong>
                </p>
              </div>
              <div className="input__box">
                <form onSubmit={handelForm}>
                  <input
                    required
                    type="text"
                    className="contact name"
                    placeholder="Your name *"
                    name="name"
                  />
                  <input
                    required
                    type="text"
                    className="contact email"
                    placeholder="Your Email *"
                    name="email"
                  />
                  <input
                    required
                    type="text"
                    className="contact subject"
                    placeholder="Write a Subject"
                    name="subject"
                  />
                  <textarea
                    required
                    name="message"
                    id="message"
                    placeholder="Write Your message"
                  ></textarea>
                  <button className="btn contact pointer" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="col__2">
            <img
              src="https://i.ibb.co/p4hRgyX/my-bg.png"
              alt=""
              className="contact__img"
            />
          </div>
        </div>
      </div>
    );
}

export default Contact
