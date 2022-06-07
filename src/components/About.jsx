import React from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";

const About = () => {
  const imglink = require("../assets/images/mridul.png");
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main div-tag" id="contact" style={{ textAlign: 'center' }}>
        <br></br><br></br>
        <h1 className="prof-title h1-tagg" >Feel Free to Reach Out to me! {emoji("😁")}</h1>
        <br></br><br></br><br></br><br></br><br></br>
        <div className="row">
          <div className="main-content-profile section-tag" style={{ paddingRight: '0', paddingTop: '1%' }}>
            <div className="location-div">

              <span className="desc-prof">
                <svg viewBox="-0.5 -2 20 19" version="1.1" width="22" height="16" aria-hidden="true" stroke="currentColor" >
                  <path fillRule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z" ></path>
                </svg>
                Vadodara,Gujarat
              </span>
            </div>
            <br></br>
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
            <br></br>
          </div>
          <div className="image-content-profile img-tag" style={{ marginRight: '25%', marginTop: '0%' }}>
            <img src={imglink} alt = "profile" className="profile-image" />
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default About;