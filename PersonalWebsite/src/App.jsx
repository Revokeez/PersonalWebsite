/* eslint-disable no-unused-vars */

//Components
import React from "react";
import TimeLine from "./Components/WorkExperienceTimeline.jsx";
import WhoAmI from "./Components/WhoAmI.jsx";
import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";
import ProjectsAndAwards from "./Components/ProjectsAndAwards.jsx";
import Introduction from "./Components/Introduction.jsx";
import Resume from "./Components/Resume.jsx";



//Development Components
import TestingTimeLine from "./Testing_Components/TimeLine.jsx";
import TestingWhoAmI from "./Testing_Components/WhoAmI.jsx";
import TestingFooter from "./Testing_Components/Footer.jsx";
import TestingNavbar from "./Testing_Components/Navbar.jsx";
import TestingProjectsAndAwards from "./Testing_Components/ProjectsAndAwards.jsx";
import TestingIntroduction from "./Testing_Components/Introduction.jsx";
import TestingResume from "./Testing_Components/Resume.jsx";



//CSS Files
import './CSS/index.css';

//JS Files
import "flyonui/flyonui.js";

const ImportDevelopmentCode = ({showDevelopmentCode=false}) =>
{
  {showDevelopmentCode ?
      <div data-aos="fade-down">
        <TestingNavbar />  
        <TestingIntroduction />
        <TestingWhoAmI />
        <TestingProjectsAndAwards />
        <TestingTimeLine />
        <TestingResume />
        <TestingFooter />
      </div>
      : 
      <div data-aos="fade-down">
        <Navbar />  
        <Introduction />
        <WhoAmI />
        <ProjectsAndAwards />
        <TimeLine />
        <Resume/>
        <Footer />
      </div>
  }
}

function App() {
  return (
      <ImportDevelopmentCode showDevelopmentCode={true}/>
  )
}

export default App;