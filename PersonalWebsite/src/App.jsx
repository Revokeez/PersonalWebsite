/* eslint-disable no-unused-vars */

//Components
import React, { useEffect } from "react";
import ShowImg from "./Components/ShowImg.jsx";
import Text from  "./Components/Text.jsx"
import Card from "./Components/Card.jsx";

//CSS Files
import './CSS/index.css';

//Images
import Moon from "./assets/stars.jpg"
import Assosiation_Website_IMG from "./assets/Infotech_HomePage_IMG.png"
import TimeLine from "./Components/TimeLine.jsx";
import WhoAmI from "./Components/WhoAmI.jsx";
import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";
import "flyonui/flyonui.js";


function App() {
  return (
    <div>
      <>
      <Navbar/>
      </>

      <div className="mt-10">
          <ShowImg src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png"/>
          <div className="text-center font-mono text-3xl">
              <h1>Hello my name is Edwin</h1>
              <h1>Im a computer science student in the inter bayamon</h1>
          </div>
      </div>

      <div>
        <WhoAmI/>
      </div>

      <div className="text-center font-mono text-3xl mt-10">
            <h1>Proyects and Awards</h1>
            <div className="flex justify-center flex-wrap">
                  <Card img={Assosiation_Website_IMG} showGithubLink="https://github.com/InfoTech-UIPRB/Info-tech" showLinkOfProject="https://infotech-uiprb.com/index.html" title="Assosiation Website" 
                    text="Designed and developed a responsive website using HTML, Tailwind CSS, and JavaScript to enhance the online presence of the 
                    student association. 
                    Implemented a streamlined Git and GitHub Actions pipeline to enable continuous integration and automated deployments." dir=""/> 

                  <Card img="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" showGithubLink="Something" title="Assosiation Website" text="Test" dir=""/>  
                 
            </div>
      </div>

      <div className="mt-10">
        <h1 className="text-center font-mono text-3xl">Work Experience</h1>
        <TimeLine/>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default App;