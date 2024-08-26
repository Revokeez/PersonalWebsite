import { useState } from 'react'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import Moon from './assets/Moon.jpg'
import Stars from './assets/stars.jpg'
import ProgrammingImage from './assets/programming.jpg'
import DarkMoon from './assets/black_moon.jpg'
import Atmosphere from './assets/atmoshpere_space.jpg'
import Clouds from './assets/clouds.jpg'
import InterImage from './assets/inter-recinto-bayamon.jpg'

function App() {
  return (
      <Parallax pages={6} style={ {backgroundColor:'#000000', color: 'white'}}>
        <ParallaxLayer factor={2} offset={0} style={
          { backgroundImage: `url(${DarkMoon})`, backgroundSize: 'cover',}}>
        </ParallaxLayer>

      <ParallaxLayer speed={0.8} offset={0} style={{display: 'grid', placeItems: 'center'}}>              
        <h1>Hi my name is Edwin</h1>
      </ParallaxLayer>

      <ParallaxLayer offset={0.1} speed = {0.5}   style={{display: 'grid', placeItems: 'center'}}>
        <h1>Im a computer science student at the inter american university</h1>
        </ParallaxLayer>
      
        <ParallaxLayer offset={1.5} speed = {0.3}  style={{ backgroundColor:'#000000'}}>
        <h1>My love for Programming</h1>
          <img src={ProgrammingImage} style={{border: '2px solid black' ,borderRadius: '50px'}} width="500" height="400"/>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed = {0.8}  style={{ backgroundColor:'#000000'}}>
        <h1>Where i study</h1>
          <img src={ProgrammingImage} style={{border: '2px solid black' ,borderRadius: '50px'}} width="500" height="400"/>
        </ParallaxLayer>

        <ParallaxLayer offset={3} factor={2} speed={0.5} style={{backgroundImage: `url(${Atmosphere})`,  backgroundSize: 'cover', textAlign: 'center'}}>
          <h1>My Work Experiece</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={3.5} >
        <h1>Software Developer Intern</h1>
          <p>During my software developer internship at CEGsoft (Computer Expert Group) from June to July 2024,
            I gained invaluable experience working on a crucial internal tool for customer support.
            My primary responsibility was developing a tool integrated with Zendesk to manage client licenses and
            subscriptions, allowing customer support to activate or deactivate them efficiently. 
            This tool significantly improved the team's workflow by reducing the time required to resolve customer
            issues from hours or even a day to just 30 minutes. Throughout the project, 
            I expanded my technical skills by learning and applying technologies such as React, .NET 8,
            Entity Framework Core, Azure DevOps, API development, and C#. My contributions played a key role in
            completing the project within one month, surpassing the initial two-month timeline.
            This experience solidified my software development skills and gave me a deeper understanding of how
            technology can directly impact business operations.
          </p>
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.5} factor={2} style={{backgroundImage: `url(${Clouds})`, backgroundSize: 'cover'}}>
          <h1>Student Tutor</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={5} style={{backgroundColor: 'white'}}>
          <h1>Research Intern</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={6} speed={0.3} style={{backgroundImage: `url(${InterImage})`, backgroundSize: 'cover'}}>
          <h1>Thank you for your time</h1>
        </ParallaxLayer>
      </Parallax>
  );
}

export default App;
