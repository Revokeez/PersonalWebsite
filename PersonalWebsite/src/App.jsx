/* eslint-disable no-unused-vars */
//Components
import React, { useEffect } from "react";
import { useState } from 'react'
import { useResize, animated } from "@react-spring/web";
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import Card from "./Components/Card.jsx";
import WhoAmI from "./Components/WhoAmI.jsx";
import TimeLine from "./Components/TimeLine.jsx";
import Contact from "./Components/Contact.jsx";

//CSS Files
import './CSS/style.css';

//Images
import SecondPlaceUpr from './assets/Second_Place_UPRB.jpg';
import BancoPopularImg from './assets/banco_popular.png';
import InterImage from './assets/inter-recinto-bayamon.jpg'
import Infotech from "./assets/Infotech_HomePage_IMG.png";
import UprMayaguez from './assets/upr_mayaguez_img.jpg'; 

//Change the offset depending of the size of the windows
//Chelimar dijo que haga el background parralax pero los images como tal static

function SetOffset(width, minS, maxS, minM, maxM)
{
  return width < 960 ? minS : maxS
}

function App() {

  const animatedProgrammingVideo = import.meta.env.VITE_ANIMATED_PROGRAMMING_VIDEO_URL;
  const animatedRobotDancing = import.meta.env.VITE_ANIMATED_DANCINGROBOT_VIDEO_URL;
  return (
    <div>
      <Parallax pages={5} style={ {backgroundColor: '#EFFEF7', color: 'black'}}>

        {/*Image*/}
        <ParallaxLayer factor={4} 
          style={{
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
          }}/>
        <ParallaxLayer factor={0.1} offset={0} speed={0} style={{display: 'grid', placeItems: 'center'}} className="max-sm: w-5">
          <img src={animatedRobotDancing} className="lg:w-200 md:w-100 sm:w-50"/>
        </ParallaxLayer>

        <ParallaxLayer offset={SetOffset(window.innerWidth, 0.2, 0.3)} speed={0.8} style={{display: 'grid', placeItems: 'center'}} className="font-mono lg:text-5xl md:text-3xl sm:text-3xl text-center lg:mt-0 lg:mb-5 md:mb-5 sm:mt-0">
          <h1>Hi my name is Edwin</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={0.35} speed={window.innerWidth < 960 ? 0.2 : 0.8} style={{display: 'grid', placeItems: 'center'}} className="font-mono lg:text-5xl md:text-3xl sm:text-3xl text-center lg:mt-5 md:mt-5">
          <h1>Im a computer science student at the inter american university</h1>
        </ParallaxLayer>

        <ParallaxLayer factor={1} offset={window.innerWidth < 960 ? 0.9 : 1} speed = {1}>
          <h1 className="text-center font-mono text-5xl mt-5 mb-5">Who Am I</h1>
        </ParallaxLayer>

        <ParallaxLayer factor={1} offset={1.2} speed = {0.8}>        
          <WhoAmI img={animatedProgrammingVideo} title="My love for Programming" text="My love for programming started when i first enter in the university."/>
        </ParallaxLayer>

        <ParallaxLayer factor={1} offset={1.8} speed = {0.5}>
                <WhoAmI img={InterImage} alt="Animated Gif" title="Where i study" text="I study at the Inter American University of Puerto Rico Bayamon Campus" left={true}/>
        </ParallaxLayer>

        <ParallaxLayer factor={1} offset={2} speed={0.5}>
          <h1 className="text-center font-mono text-5xl">Work Experiece</h1>
        </ParallaxLayer>

        <ParallaxLayer factor={1} offset={2.1} speed={1}>
            <TimeLine/>
        </ParallaxLayer>

        <ParallaxLayer factor={1} offset={2.8} speed={1}>
          <h1 className="text-center font-mono text-5xl">Projects And Competitions</h1>
        </ParallaxLayer>

        <ParallaxLayer factor={1} offset={window.innerWidth < 960 ? 2.8 : (window.innerWidth > 1600 ? 2.2 : 3 )} speed={1}>
          <div className="flex justify-center lg:flex-row flex-col">
            <Card img={Infotech} title="InfoTech’s Association Website" text="Designed and developed a responsive website using HTML, Tailwind CSS, and JavaScript to enhance the online presence of the 
              student association. Implemented a streamlined Git and GitHub Actions pipeline to enable continuous integration and automated deployments." showGithubLink="https://github.com/InfoTech-UIPRB/Info-tech" showLinkOfProject="https://infotech-uiprb.com/" alt="Information about the InfoTech’s Association Website "/>

            <Card img={SecondPlaceUpr} title="Second Place, UPR Bayamón Programming Competition" 
                  text="Secured second place by solving complex algorithmic challenges and demonstrating programming versatility.
                  Collaborated with team members to develop innovative solutions and optimize performance under pressure"/>
          
            <Card img={BancoPopularImg} title="Hackathon with Copilot Studio Banco Popular & Microsoft" text="Participated in the Copilot Studio Hackathon with Microsoft and Banco Popular, where I engineered a Power Automate tool and a 
                  custom Copilot Studio agent to automate tasks and combat real-time fraud and scams."/>

            <Card img={UprMayaguez} title="First Place, UPR Mayaguez Deconflicting in Space Challenge"/>
          </div>
        </ParallaxLayer>

        <ParallaxLayer factor={1} offset={SetOffset(window.innerWidth, 3.2, 3)} speed={1} className="max-sm:mt-110">
          <h1 className="text-center font-mono text-5xl">Contact</h1>
        </ParallaxLayer>

        <ParallaxLayer factor={1} offset={3.1} speed={1}>
            <Contact />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
