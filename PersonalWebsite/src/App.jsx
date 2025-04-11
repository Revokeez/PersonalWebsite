/* eslint-disable no-unused-vars */

//Components
import React, { useEffect } from "react";
import ShowImg from "./Components/ShowImg.jsx";
import Text from  "./Components/Text.jsx"

//CSS Files
import './CSS/index.css';

//Images
import Moon from "./assets/stars.jpg"

function App() {
  return (
    <div className="bg-black">
      <ShowImg src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png"/>
      <div className="text-center font-mono text-3xl">
          <h1>Hello my name is Edwin</h1>
          <h1>Im a computer science student in the inter bayamon</h1>
      </div>


        <div dir="rtl">
            <div className="card card-xl sm:max-w-sm">
              <div className="card-header">
                <h5 className="card-title">Innovative Solutions</h5>
              </div>
              <div className="card-body">
                <p>Explore our cutting-edge features designed to elevate your experience. Learn how our solutions can help you achieve your goals.</p>
              </div>
              <div className="card-footer text-center">
                <p className="text-base-content/50">Learn more about our features.</p>
              </div>
            </div>
         </div>

    </div>
  )
}

export default App;