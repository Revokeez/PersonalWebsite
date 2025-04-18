/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

//Components
import React from "react";

//Images
import AI_Me from "../assets/ai_generated_img.png"


const ProfileImg = ({src}) => {
    return (
        <div className="flex justify-center">
          <div className="avatar">
                <div className="size-100 rounded-full">
                    <img src={src} alt="avatar" />
                </div>
          </div>
        </div>
    )
};

const Introduction = () => {
    return (
        <div className="mt-10" id="whoami">
                <ProfileImg src={AI_Me}/>
                <div className="text-center font-mono text-3xl">
                    <h1>YOUR ARE IN DEVELOPMENT ENVIROMENT</h1>
                    <h1>IF YOU WANT TO USE PRODUCTION CODE PLEASE SET showDevelopmentCode to <span className="text-red-600">False</span> IN FUNCTION ImportDevelopmentCode IN App.jsx</h1>
                </div>
        </div>
    );
}

export default Introduction;