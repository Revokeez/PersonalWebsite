/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

//Components
import React from "react";

//Production Components
import WorkExperienceTimeline from "./Components/WorkExperienceTimeline.jsx";
import WhoAmI from "./Components/WhoAmI.jsx";
import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";
import ProjectsAndAwards from "./Components/ProjectsAndAwards.jsx";
import Introduction from "./Components/Introduction.jsx";
import Resume from "./Components/Resume.jsx";

//Development Components
import TestingWorkExperienceTimeline from "./Testing_Components/WorkExperienceTimeline.jsx";
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

const ImportDevelopmentCode = ({showDevelopmentCode}) =>
{      
  return (
      <div data-aos="fade-down">
        {showDevelopmentCode ? (
          <>
            <TestingNavbar />  
            <TestingIntroduction />
            <TestingWhoAmI />
            <TestingProjectsAndAwards />
            <TestingWorkExperienceTimeline />
            <TestingResume />
            <TestingFooter />
          </>

        ) : ( 
          <>
            <Navbar />  
            <Introduction />
            <WhoAmI />
            <ProjectsAndAwards />
            <WorkExperienceTimeline />
            <Resume/>
            <Footer />
          </>
        )}
      </div>
    )
}

function App() {    
  {/*
     PLEASE WHEN YOU PUSH THIS CODE TO "gh-pages"
     dont forget to set showDevelopmentCode to FALSE
     in ImportDevelopmentCode Component
  */}
  return (

      <ImportDevelopmentCode showDevelopmentCode={false}/>
  )
}

export default App;