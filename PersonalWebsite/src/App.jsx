/* eslint-disable no-unused-vars */

//Components
import React from "react";
import { useState } from 'react'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import Text from "./Components/Text.jsx";
import ShowImg from "./Components/ShowImg.jsx";
import WhoAmI from "./Components/WhoAmI.jsx";

//CSS Files
import "./CSS/App.css"

//Images
import ProgrammingImage from './assets/programming.jpg'
import Atmosphere from './assets/atmoshpere_space.jpg'
import Clouds from './assets/clouds.jpg'
import InterImage from './assets/inter-recinto-bayamon.jpg'
import MyImage from './assets/Me.jpg'
import Moon from './assets/Moon.jpg'

function App() {
  const animatedProgrammingVideo = import.meta.env.VITE_ANIMATED_PROGRAMMING_VIDEO_URL;
  const animatedShootingStar = import.meta.env.VITE_ANIMATED_SHOOTINGSTAR_VIDEO_URL;
  return (
    <div>
      <Parallax pages={5} style={ {backgroundColor:'#000000', color: 'white'}}>

        {/*Image*/}
        <ParallaxLayer factor={4} 
          style={{
            backgroundImage: `url(${Moon})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center'
          }}/>

        <ParallaxLayer offset={0} speed={0} style={{display: 'grid', placeItems: 'center'}}>
          <ShowImg src={MyImage} borderRadius="400px" marginLeft="auto" marginRight="auto" display="block"/>          
        </ParallaxLayer>

        <ParallaxLayer offset={0.3} speed={0.8} style={{display: 'grid', placeItems: 'center'}}>     
          <Text text="Hi my name is Edwin" typeOfHtmlTag="h" headerSize={1}/>
        </ParallaxLayer>

        <ParallaxLayer offset={0.35} speed={0.5} style={{display: 'grid', placeItems: 'center'}}>
          <Text text="Im a computer science student at the inter american university" typeOfHtmlTag="h" headerSize={1}/>
        </ParallaxLayer>

        <ParallaxLayer factor={1} offset={1.5} speed = {0.5} style={{ backgroundColor:'#000000'}}>
                <Text text="Who am i" headerSize={1} typeOfHtmlTag="h" textAlign="center" />
                <WhoAmI img={animatedProgrammingVideo} alt="Animated Gif" text="My love for programming started when i first enter in the university." />
        </ParallaxLayer>

        <ParallaxLayer factor={1} offset={2} speed = {0.5} style={{ backgroundColor:'#000000'}}>
                <WhoAmI img={InterImage} alt="Animated Gif" text="I study at the Inter American University of Puerto Rico Bayamon Campus" left={true}/>
        </ParallaxLayer>
{/* 
        <ParallaxLayer factor={1} offset={2} speed = {0.3}>
            <h1>My love for Programming</h1>
            <img src={ProgrammingImage} style={{border: '2px solid black' , borderRadius: '50px'}} width="500" height="400"/>
        </ParallaxLayer>
           

        <ParallaxLayer factor={1} offset={2.5} speed = {0.8}  style={{ backgroundColor:'#000000'}}>
        <h1>Where i study</h1>
          <img src={ProgrammingImage} style={{border: '2px solid black' ,borderRadius: '50px', right: 'auto'}} width="500" height="400"/>
        </ParallaxLayer>

        <ParallaxLayer factor={1} offset={3} speed={0.5} style={{backgroundImage: `url(${Atmosphere})`,  backgroundSize: 'cover', textAlign: 'center'}}>
          <h1>My Work Experiece</h1>
        </ParallaxLayer>

        <ParallaxLayer factor={1} offset={3.5} >
        <h1>Software Developer Intern</h1>
          <p>During my software developer internship at CEGsoft (Computer Expert Group) from June to July 2024,
            I gained invaluable experience working on a crucial internal tool for customer support.
            My primary responsibility was developing a tool integrated with Zendesk to manage client licenses and
            subscriptions, allowing customer support to activate or deactivate them efficiently. 
            This tool significantly improved the teams workflow by reducing the time required to resolve customer
            issues from hours or even a day to just 30 minutes. Throughout the project, 
            I expanded my technical skills by learning and applying technologies such as React, .NET 8,
            Entity Framework Core, Azure DevOps, API development, and C#. My contributions played a key role in
            completing the project within one month, surpassing the initial two-month timeline.
            This experience solidified my software development skills and gave me a deeper understanding of how
            technology can directly impact business operations.
          </p>
        </ParallaxLayer>

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
