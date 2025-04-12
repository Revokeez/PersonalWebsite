/* eslint-disable no-unused-vars */

//Components
import React, { useEffect } from "react";
import ShowImg from "./Components/ShowImg.jsx";
import Card from "./Components/Card.jsx";
import TimeLine from "./Components/TimeLine.jsx";
import WhoAmI from "./Components/WhoAmI.jsx";
import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";

//CSS Files
import './CSS/index.css';

//JS Files
import "flyonui/flyonui.js";

//Images
import First_Placa_UPRM from "./assets/upr_mayaguez_img.jpg"
import Assosiation_Website_IMG from "./assets/Infotech_HomePage_IMG.png"
import First_Place_ISACA from "./assets/ISCA_with_team.jpg"
import First_Place_IHACK from "./assets/IHACK_with_director.jpg"
import Second_Place_UPRB from "./assets/Second_Place_UPRB.jpg"
import AI_Me from "./assets/ai_generated_img.png"




function App() {
  return (
    <div id="scrollspy-scrollable-parent-1">
      <div id="scrollspy-1">
        
      <Navbar/>

        <div className="mt-10">
                <ShowImg src={AI_Me}/>
                <div className="text-center font-mono text-3xl">
                    <h1>Hello my name is Edwin</h1>
                    <h1>Im a computer science student in the inter bayamon</h1>
                </div>
            </div>

            <div id="whoami">
              <WhoAmI/>
            </div>

            <div className="text-center font-mono text-3xl mt-10">
                  <h1>Proyects and Awards</h1>
                  <div className="flex justify-center flex-wrap">
                        <Card img={Assosiation_Website_IMG} showGithubLink="https://github.com/InfoTech-UIPRB/Info-tech" showLinkOfProject="https://infotech-uiprb.com/index.html" title="Assosiation Website" 
                          text="Designed and developed a responsive website using HTML, Tailwind CSS, and JavaScript to enhance the online presence of the 
                          student association. 
                          Implemented a streamlined Git and GitHub Actions pipeline to enable continuous integration and automated deployments." dir=""/> 

                        <Card img={First_Placa_UPRM}  title="First Place UPRM" text="Test" dir=""/>  
                        <Card img={First_Place_ISACA}  title="First Place IT Bown 2025" text="Test" dir=""/>
                        <Card img={First_Place_IHACK}  title="First Place IHACK" text="Test" dir=""/> 
                        <Card img={Second_Place_UPRB}  title="Second Place beginner UPRB" text="Test" dir=""/>  
                      
                  </div>
            </div>

            <div className="mt-10">
              <h1 className="text-center font-mono text-3xl">Work Experience</h1>
              <TimeLine/>
            </div>

            <div id="footer">
              <Footer/>
            </div>
      </div>
    </div>
  )
}

export default App;