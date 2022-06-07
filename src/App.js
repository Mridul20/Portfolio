import React,{useState,useEffect} from 'react';
import Lottie from 'lottie-react';
import './styles/colors.scss'
import './styles/tag-style.sass'
import animation from './assets/animations/splashAnimation.json';
import Home from './components/Home';
import {StyleProvider} from "./contexts/style-context";
import { CursorProvider } from "react-cursor-custom";

function App() {
  const [isAnimation, setisAnimation] = useState(true);
  const [isDark,setIsDark] = useState(false);
  useEffect(() => {
      setTimeout(
        () => setisAnimation(false),
        2000
      );
    },[]);
  return (
    <CursorProvider color= {isDark ? "white" : "black"} ringSize={25} transitionTime={75}>
    <StyleProvider value={{isDark: isDark, changeTheme: setIsDark}}>
    <div className={isDark ? "dark-mode App" : "App"}>
      {isAnimation &&    <div className='animation-container'><Lottie animationData={animation}/></div>}
      {!isAnimation && <Home />}
    </div>
    </StyleProvider>
    </CursorProvider>
  );
}

export default App;
