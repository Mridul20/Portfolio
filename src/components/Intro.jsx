import React, { useContext } from "react";
import StyleContext from "../contexts/style-context";
import Lottie from 'lottie-react';
import animation from '../assets/animations/landingPerson.json'
import { Fade } from "react-reveal";
import Typewriter from "typewriter-effect";

const Intro = () => {
  const { isDark } = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="greet-main div-tag" id="greeting" style={{ paddingTop: '2%', paddingBottom: '5%' }} >
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className={isDark ? "greeting-text dark-mode " : "greeting-text"} >
                {" "}{"Hello , I'm Mridul "}{" "}
              </h1>
              <p className={isDark ? "dark-mode greeting-text-p" : "greeting-text-p subTitle"}>
                I'm a 4th year undergraduate student at IIITA and currently working as Software Engeneering Intern in PhonePe
                <br></br>
                <br></br>
                <Typewriter options={{ strings: ["Coder", "Gamer", "Experimenter", "Developer"], autoStart: true, loop: true, deleteSpeed: 100, }} />
              </p>
              <div className="social-media-div">
                <a href="https://github.com/Mridul20" className="icon-button github" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/mridul20/" className="icon-button linkedin" target="_blank" rel="noopener noreferrer" >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href={`mailto:${'mridulmittal20@gmail.com'}`} className="icon-button google" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-envelope"></i>
                </a>
                <a href="https://gitlab.phonepe.com/mridul.intern" className="icon-button gitlab" target="_blank" rel="noopener noreferrer" >
                  <i className="fab fa-gitlab"></i>
                </a>
                <a href="https://www.facebook.com/mridul.mittal.90/" className="icon-button facebook" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/mridul_2008/" className="icon-button instagram" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com/MridulMittal20" className="icon-button twitter" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <Lottie animationData={animation} autoPlay loop = {true}/>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Intro;