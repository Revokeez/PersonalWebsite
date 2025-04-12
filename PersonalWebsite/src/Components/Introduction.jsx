/* eslint-disable no-unused-vars */

//Components
import React from "react";
import ShowImg from "./ShowImg";

//Images
import AI_Me from "../assets/ai_generated_img.png"

const Introduction = () => {
    return (
        <div className="mt-10">
                <ShowImg src={AI_Me}/>
                <div className="text-center font-mono text-3xl">
                    <h1>Hello my name is Edwin</h1>
                    <h1>Im a computer science student in the inter bayamon</h1>
                </div>
        </div>
    );
}

export default Introduction;