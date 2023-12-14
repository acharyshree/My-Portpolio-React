import React from "react";

import Layout from "./components/Layout/Layout"; 
import About from "./pages/About/About";

import Skill from "./pages/Skills/Skill";
import Project from "./pages/Projects/Project";
import Education from "./pages/Education/education";
import Contact from "./pages/Contact/Contact";
import Achievement from "./pages/Achievements/Achievement";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ContextTheme";
// import ScrollToTop from "./Scroll";
function App() {
  const [theme]=useTheme();
  return (
    <>
    {/* <ScrollToTop/> */}
    <div id={theme}>
    <div>
     <Layout />
     <About />
     <Education/>
     <Skill />
     <Project />
     <Achievement />
     <Contact />
     {/* <my/> */}
    </div>
    </div>
    <ScrollToTop  smooth color="#f29f67" style={{backgroundColor:"#1e1e2c",borderRadius:"85px"}}/>
    </>
  );
}

export default App;
