import React, { useContext } from "react";
import StyleContext from "../contexts/style-context";
import { Fade } from "react-reveal";

const Projects = () => {

    const repoList = [

        {
            "name": "Blogr",
            "description": "A web application to provide a platform to share ideas in form of text/audio. ",
            "url": "https://github.com/Mridul20/Blogr",
            "id": "R_kgDOGs-xNw",
            "diskUsage": 40712,
            "primaryLanguage": {
                "name": "JavaScript",
                "color": "#F1E05A"
            },
            "commits": '93',
            "live": true,
            "livelink": "https://bl0gr.herokuapp.com/",
        },
        {
            "name": "Spotr",
            "description": "A web application, to trace the social media accounts across multiple platforms",
            "url": "https://github.com/Mridul20/Spotr",
            "id": "MDEwOlJlcG9zaXRvcnkzMjk1NzkzOTM=",
            "diskUsage": 95736,
            "primaryLanguage": {
                "name": "Django",
                "color": "#563d7c"
            },
            "commits": '85',
            "live": true,
            "livelink": "https://spot-r.herokuapp.com/",
        },
        {
            "url": "https://github.com/Mridul20/Bitcoin-Trading-Bot",
            "id": "MDEwOlJlcG9zaXRvcnkzMjQ4MDYxNDA=",
            "diskUsage": 2996,
            "name": "Bitcoin-Trading-Bot",
            "description": "An implementation of Deep Q-learning applied to (short-term) stock trading.",
            "primaryLanguage": {
                "name": "Python",
                "color": "#3572A5"
            },
            "commits": '11',
            "live": false,
            "livelink": "",
        },
        {
            "name": "Certify",
            "description": "A web application which generates and verify certificates using blockchain technology.",
            "url": "https://github.com/Mridul20/Certify",
            "id": "R_kgDOHPNuAw",
            "diskUsage": 135678,
            "primaryLanguage": {
                "name": "Solidity",
                "color": "#563d7c"
            },
            "commits": '20',
            "live": false,
            "livelink": "",
        },
        {
            "name": "Face-Mask-Detector",
            "description": "Detects whether a person is wearing a mask or not in python using Keras and OpenCV. ",
            "url": "https://github.com/Mridul20/Face-Mask-Detector",
            "id": "MDEwOlJlcG9zaXRvcnkzMjI5MTU2Nzg=",
            "diskUsage": 209578,
            "primaryLanguage": {
                "name": "Jupyter Notebook",
                "color": "#DA5B0B"
            },
            "commits": '2',
            "live": false,
            "livelink": "",
        },
        {
            "name": "VoteIt",
            "description": "An online mobile application to efficiently conduct elections and voting",
            "url": "https://github.com/Mridul20/VoteIt",
            "id": "MDEwOlJlcG9zaXRvcnkzNjg4NjgwNDM=",
            "diskUsage": 16717,
            "primaryLanguage": {
                "name": "Java",
                "color": "#b07219"
            },
            "commits": '13',
            "live": false,
            "livelink": "",
        },
        {
            "name": "Smart-dustbin-system",
            "description": "A management system to show the current status of garbage on GUI and manage its cycle",
            "url": "https://github.com/Mridul20/Smart-dustbin-system",
            "id": "MDEwOlJlcG9zaXRvcnkzMTAzODI1Nzk=",
            "diskUsage": 5652,
            "primaryLanguage": {
                "name": "Java",
                "color": "#b07219"
            },
            "commits": '8',
            "live": false,
            "livelink": "",
        }
    ]


    const { isDark } = useContext(StyleContext);

    return (<div className="main div-tag" id="projects">
        <h1 className="project-title h1-tagg">Open Source Projects</h1>
        <div className="repo-cards-div-main">
            {repoList.map((repo) => (
                <Fade bottom duration={1000} distance="20px">
                    <div>
                        <div className={isDark ? "dark-card-mode repo-card-div" : "repo-card-div"} key={repo.id}>
                            <div className="repo-name-div">
                                <svg aria-hidden="true" className="octicon repo-svg" height="20" role="img" viewBox="0 0 12 16" width="14" >
                                    <path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z" >
                                    </path>
                                </svg>
                                <div ><a href={repo.url} ><p className="repo-name" >{repo.name} {repo.live && <a href={repo.livelink} >(Live)</a>} </p></a>

                                </div>
                            </div>
                            <p className="repo-description">{repo.description}</p>
                            <div className="repo-stats">
                                <div className="repo-left-stat">
                                    <span>
                                        <div className="language-color" style={{ backgroundColor: repo.primaryLanguage.color }} >
                                        </div>
                                        <p>{repo.primaryLanguage.name}</p>
                                    </span>
                                    <span>
                                        <svg width="20px" height="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                            <title>ionicons-v5-d</title>
                                            <path d="M448,224H380a128,128,0,0,0-247.9,0H64a32,32,0,0,0,0,64h68.05A128,128,0,0,0,380,288H448a32,32,0,0,0,0-64ZM256,320a64,64,0,1,1,64-64A64.07,64.07,0,0,1,256,320Z" />
                                        </svg>
                                        <p>{repo.commits} Commits</p>
                                    </span>

                                </div>
                                <div className="repo-right-stat">
                                    <p>{repo.diskUsage} KB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            ))}

        </div>

        <div className="project-button">
            <a className="main-button" href="https://github.com/Mridul20?tab=repositories" >
                More Projects
            </a>
        </div>
    </div>);
}

export default Projects;

