import React, { useContext } from "react";
import StyleContext from "../contexts/style-context";
import Lottie from 'lottie-react';
import animation from '../assets/animations/education.json'
import { Fade, Slide } from "react-reveal";


const Education = () => {
    const { isDark } = useContext(StyleContext);

    const schools = [{
        schoolName: "IIIT Allahabad",
        logo: require("../assets/images/iiita.png"),
        subHeader: "BTech in IT - 8.59 (current)",
        duration: "July 2019 - May 2023",
    },
    {
        schoolName: "Navarachana Sama",
        logo: require("../assets/images/navrachana.png"),
        subHeader: "Class 12th CBSE - 93.2%",
        duration: "April 2018 - may 2019",
    },
    {
        schoolName: "DPS Gurgaon",
        logo: require("../assets/images/dps.png"),
        subHeader: "Class 10th CBSE - 10.0",
        duration: "June 2016 - June 2017",
    }
    ];
    return (<div className="greet-main div-tag" id="education" style={{ paddingTop: '5%', paddingBottom: '5%' }}>
        <div className="greeting-main" >
            <div className="greeting-text-div" >
                <div >
                    <h1 className={isDark ? "dark-mode skills-heading h1-tag" : "skills-heading h1-tag"} > {"EDUCATION"} </h1>
                    <div className="education-card-container" >
                        {schools.map((school, index) => (<div>
                            <Fade left duration={1000} >
                                <div className="education-card" >
                                    <div className="education-card-left" >
                                        <img className="education-roundedimg" src={school.logo} alt={school.schoolName} />
                                    </div>
                                    <div className="education-card-right" style={{ paddingLeft: '10%' }} >
                                        <h5 className="education-text-school" > {school.schoolName} </h5>

                                        <div className="education-text-details" >
                                            <h5 className={isDark ? "education-text-subHeader dark-mode " : "education-text-subHeader"} >
                                                {school.subHeader}
                                            </h5>
                                            <p className={isDark ? "education-text-duration dark-mode" : " education-text-duration"} >
                                                {school.duration}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <br></br>
                            <Slide left duration={2000} >
                                <div className="education-card-border" >
                                </div>
                            </Slide>
                        </div>
                        ))
                        }
                        <div style={{ display: 'flex' }}>
                        </div>
                    </div>
                </div>
            </div>
            <div className="greeting-image-div" >
                <Lottie  style={{ height: 600 }} animationData={animation} autoPlay loop = {true}/>
            </div>
        </div>
    </div>)
}

export default Education;