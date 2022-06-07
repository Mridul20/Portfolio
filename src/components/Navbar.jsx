import React, { useContext, useState } from "react";
import StyleContext from "../contexts/style-context";

const Navbar = () => {

  const { isDark } = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);
  const styleContext = useContext(StyleContext);

  return (
    <div style={{ marginTop: '0.5%' }}>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">mridul mittal</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Project</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={isDark}
                  onChange={() => {
                    styleContext.changeTheme(!isDark);
                    setChecked(!isChecked);
                  }}
                />
                <span className="slider round"></span>
              </label>
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;