/* eslint-disable no-unused-vars */

//Components
import React, { useEffect } from "react";
import { useState } from 'react'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import Card from "./Components/Card.jsx";
import WhoAmI from "./Components/WhoAmI.jsx";

//CSS Files
import './CSS/style.css';

//Images
import ProgrammingImage from './assets/programming.jpg'
import Atmosphere from './assets/atmoshpere_space.jpg'
import Clouds from './assets/clouds.jpg'
import InterImage from './assets/inter-recinto-bayamon.jpg'
import MyImage from './assets/Me.jpg'
import TimeLine from "./Components/TimeLine.jsx";
import ListAchivements from "./Components/ListAchivements.jsx";
import Contact from "./Components/Contact.jsx";



function App() {

  const animatedProgrammingVideo = import.meta.env.VITE_ANIMATED_PROGRAMMING_VIDEO_URL;
  const animatedShootingStar = import.meta.env.VITE_ANIMATED_SHOOTINGSTAR_VIDEO_URL;
  const animatedRobotDancing = import.meta.env.VITE_ANIMATED_DANCINGROBOT_VIDEO_URL;
  return (
    <div>
      <Parallax pages={5} style={ {backgroundColor: '#EFFEF7', color: 'black'}}>

        {/*Image*/}
        <ParallaxLayer factor={4} 
          style={{
            // backgroundImage: `url(${animatedRobotDancing})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
          }}/>
        <ParallaxLayer factor={0.1} offset={0} speed={0} style={{display: 'grid', placeItems: 'center'}}>
          <img src={animatedRobotDancing} className="lg:w-200 md:w-100 sm:w-50"/>
        </ParallaxLayer>

        <ParallaxLayer offset={0.3} speed={0.8} style={{display: 'grid', placeItems: 'center'}} className="font-mono lg:text-5xl md:text-3xl sm:text-3xl text-center lg:mt-0 lg:mb-5 md:mb-5 sm:mt-0">
          <h1>Hi my name is Edwin</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={0.35} speed={0.5} style={{display: 'grid', placeItems: 'center'}} className="font-mono lg:text-5xl md:text-3xl sm:text-3xl text-center lg:mt-5 md:mt-5">
          <h1>Im a computer science student at the inter american university</h1>
        </ParallaxLayer>

        <ParallaxLayer factor={1} offset={1} speed = {1}>
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
          <h1 className="text-center font-mono text-5xl">Projects</h1>
        </ParallaxLayer>

        <ParallaxLayer factor={1} offset={2.9} speed={1}>
          <div className="flex justify-center">
            <Card />
            <Card />
          </div>
        </ParallaxLayer>

        <ParallaxLayer factor={1} offset={3} speed={1}>
          <h1 className="text-center font-mono text-5xl">Competitons</h1>
        </ParallaxLayer>

        <ParallaxLayer factor={1} offset={3.1} speed={1}>
          <ListAchivements/>
        </ParallaxLayer>

        <ParallaxLayer factor={1} offset={3.5} speed={1}>
          <Contact />
        </ParallaxLayer>
{/* 

        <ParallaxLayer factor={1} offset={4} speed={0.5} style={{backgroundImage: `url(${Clouds})`, backgroundSize: 'cover'}}>
          <h1>Student Tutor</h1>
        </ParallaxLayer>

        <ParallaxLayer factor={1} offset={5} style={{backgroundColor: 'white'}}>
          <h1>Research Intern</h1>
        </ParallaxLayer>

        <ParallaxLayer factor={1} offset={6} speed={0.3} style={{backgroundImage: `url(${InterImage})`, backgroundSize: 'cover'}}>
          <h1>Thank you for your time</h1>
        </ParallaxLayer> */}
      </Parallax>
    </div>
  );
}

export default App;
