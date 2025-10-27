/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

//Components
import React from "react";

//Production Components
import WorkExperienceTimeline from "./Components/WorkExperienceTimeline.jsx";
import WhoAmI from "./Components/WhoAmI.jsx";
import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";
import Introduction from "./Components/Introduction.jsx";
import Resume from "./Components/Resume.jsx";
import Projects from "./Components/Projects.jsx";
import Awards from "./Components/Awards.jsx";

//Development Components
import TestingWorkExperienceTimeline from "./Testing_Components/WorkExperienceTimeline.jsx";
import TestingWhoAmI from "./Testing_Components/WhoAmI.jsx";
import TestingFooter from "./Testing_Components/Footer.jsx";
import TestingNavbar from "./Testing_Components/Navbar.jsx";
import TestingIntroduction from "./Testing_Components/Introduction.jsx";
import TestingResume from "./Testing_Components/Resume.jsx";
import TestingProjects from "./Testing_Components/Projects.jsx";
import TestingAwards from "./Testing_Components/Awards.jsx";

//CSS Files
import './CSS/index.css';

//JS Files
import "flyonui/flyonui.js";
import SpotifyPlayer from "./Testing_Components/SpotifyPlayerComponent.jsx";

const ImportDevelopmentCode = ({showDevelopmentCode}) =>
{      
  return (
      <div data-aos="fade-down">
        {showDevelopmentCode ? (
          <>
            <TestingNavbar />  
            <TestingIntroduction />
            <TestingWhoAmI />
            <TestingAwards />
            <TestingProjects />
            <TestingWorkExperienceTimeline />
            <TestingResume />
            <TestingFooter />
          </>

        ) : ( 
          <>
            <Navbar />  
            <Introduction />
            <WhoAmI />
            <Awards />
            <Projects />
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