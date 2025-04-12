/* eslint-disable no-unused-vars */

//Components
import React, { useEffect } from "react";
import TimeLine from "./Components/TimeLine.jsx";
import WhoAmI from "./Components/WhoAmI.jsx";
import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";
import ProjectsAndAwards from "./Components/ProjectsAndAwards.jsx";
import Introduction from "./Components/Introduction.jsx";

//CSS Files
import './CSS/index.css';

//JS Files
import "flyonui/flyonui.js";

function App() {
return (
    <div id="scrollspy-scrollable-parent-1">
      <div id="scrollspy-1">    
        <Navbar/>
        <Introduction/>
        <WhoAmI/>
        <ProjectsAndAwards/>
        <TimeLine/>
        <Footer/>
      </div>
    </div>
  )
}

export default App;