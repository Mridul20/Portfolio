import React, { useContext } from "react";
import StyleContext from "../contexts/style-context";
import Lottie from 'lottie-react';
import animation from '../assets/animations/skills.json'
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";

const Skills = () => {
  const { isDark } = useContext(StyleContext);


  const techs = [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ];
  const points = [
    emoji(
      "⭐️ Building responsive website front end using ReactJS "
    ),
    emoji("⭐️ Creating application backend in Node, Express & Flask"),
    emoji(
      "⭐️ Hands on experience in Deep Learning & Reinforcement Learning"
    )
  ]
  return (<div className={isDark ? "dark-mode main div-tag" : "main div-tag"} id="skills" style={{ paddingTop: '5%', paddingBottom: '5%' }}>
    <div className="skills-main-div">
      <Fade left duration={1000}>
        <div className="skills-image-div">
          <Lottie animationData={animation} autoPlay loop = {true}/>
        </div>
      </Fade>
      <Fade right duration={1000}>
        <div className="skills-text-div">
          <h1 className={isDark ? "dark-mode skills-heading h1-tag" : "skills-heading h1-tag"} >
            {"WHAT I DO"}
          </h1>
          <p
            className={isDark ? "dark-mode subTitle skills-text-subtitle" : "subTitle skills-text-subtitle"} >
            {"Full Stack Development"}
          </p>

          <div>
            <div className="software-skills-main-div">
              <ul className="dev-icons">
                {techs.map((skills, i) => {
                  return (
                    <li
                      key={i}
                      className="software-skill-inline"
                      name={skills.skillName}
                    >
                      <i className={skills.fontAwesomeClassname}></i>
                      <p>{skills.skillName}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="p-tag">
            {points.map((skills, i) => {
              return (
                <p
                  key={i}
                  className={
                    isDark
                      ? "dark-mode subTitle skills-text"
                      : "subTitle skills-text"
                  }
                >
                  {skills}
                </p>
              );
            })}
          </div>
        </div>
      </Fade>
    </div>
  </div>);
}

export default Skills;