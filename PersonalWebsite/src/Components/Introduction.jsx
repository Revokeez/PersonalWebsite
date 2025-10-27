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
                <div className="md:size-100 size-80 rounded-full">
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
                <div className="text-center font-mono text-3xl mt-5">
                    <h1>Hello my name is Edwin</h1>
                    <h1>Im a computer science student at the inter bayamon</h1>
                </div>
        </div>
    );
}

export default Introduction;