import React, { useContext } from "react";
import StyleContext from "../contexts/style-context";
import Navbar from './Navbar';
import Intro from './Intro';
import Skills from './Skills';
import Education from "./Education";
import Projects from "./Projects";
import About from "./About";


const Home = () => {
    const { isDark } = useContext(StyleContext);
    return (<div className={isDark ? "dark-mode" : null} style={{ height: '1000px' }}>
        <Navbar />
        <div className="html-tag">
            <Intro />
            <Skills />
            <Education />
            <Projects />
            <About />
        </div>
    </div>);
}

export default Home;