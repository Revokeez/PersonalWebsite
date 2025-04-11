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

function App() {
  return (
    <div>
      <ShowImg src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png"/>
      <div className="text-center font-mono text-3xl">
          <h1>Hello my name is Edwin</h1>
          <h1>Im a computer science student in the inter bayamon</h1>
      </div>

      <div className="text-center font-mono text-3xl mt-10">
            <h1>Proyects and Awards</h1>
            <div className="flex justify-center max-xl:flex-col max-sm:flex-col">
                  <Card img="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" showGithubLink="Something" title="Assosiation Website" text="Test" dir=""/> 
                  <Card img="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" showGithubLink="Something" title="Assosiation Website" text="Test" dir=""/>  
                  <Card img="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" showGithubLink="Something" title="Assosiation Website" text="Test" dir=""/> 
                  <Card img="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" showGithubLink="Something" title="Assosiation Website" text="Test" dir=""/>  
                  <Card img="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" showGithubLink="Something" title="Assosiation Website" text="Test" dir=""/> 
                  <Card img="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" showGithubLink="Something" title="Assosiation Website" text="Test" dir=""/>  
            </div>
      </div>


    </div>
  )
}

export default App;