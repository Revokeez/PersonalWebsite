/* eslint-disable no-unused-vars */

//Components
import React from "react";
import ShowImg from "./ShowImg";

//Images
import AI_Me from "../assets/ai_generated_img.png"

const Introduction = () => {
    return (
        <div className="mt-10" id="whoami">
                <ShowImg src={AI_Me}/>
                <div className="text-center font-mono text-3xl">
                    <h1>YOU ARE IN DEVELOPMENT ENVIROMENT</h1>
                    <h1>IF YOU WANT TO USE PRODUCTION CODE DONT SET showDevelopmentCode to true</h1>
                </div>
        </div>
    );
}

export default Introduction;