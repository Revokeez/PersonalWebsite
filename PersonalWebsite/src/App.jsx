/* eslint-disable no-unused-vars */

//Components
import React from "react";
import TimeLine from "./Components/TimeLine.jsx";
import WhoAmI from "./Components/WhoAmI.jsx";
import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";
import ProjectsAndAwards from "./Components/ProjectsAndAwards.jsx";
import Introduction from "./Components/Introduction.jsx";
import Testing from "./Components/Testing.jsx";
import Resume from "./Components/Resume.jsx";

//CSS Files
import './CSS/index.css';

//JS Files
import "flyonui/flyonui.js";

function App() {
  return (
      <div data-aos="fade-down">
          <Navbar />  
          <Introduction />
          <WhoAmI />
          <ProjectsAndAwards />
          <TimeLine />
          <Resume/>
          <Footer />
      </div>
    )
}

export default App;