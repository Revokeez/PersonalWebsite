/* eslint-disable no-unused-vars */
import React from "react";

//Components

import Card from "./Card";

//Images
import Assosiation_Website_IMG from "../assets/Infotech_Website_New.png"
import Assosiation_Website_IMG_V1 from "../assets/infotech_homePage_img.png"
import Catch_Phishing from "../assets/catchphishing.png"
import Img_Not_Found from "../assets/not_found_img.png"

const Awards = () =>{
    const associationWebsite = `Successfully developed the latest version of the Association website using modern technologies like React
    and Tailwind CSS. Additionally, Implemented a streamlined Git and GitHub Actions pipeline to enable continuous integration
    and automated deployments..`

    const associationWebsiteV1 = `Designed and developed a responsive website using HTML, Tailwind CSS, and JavaScript to enhance the 
    online presence of the student association.`;   
    
    const catchPhisingWebsite = `Catch Phish is an online platform designed to teach users how to spot and avoid phishing emails.
    Developed under the "Phish Training" submodel for the Master Workforce Research Internship, it aims to help people protect
    themselves from online threats.`

    return (
        <>
            {/*
                Explaining code: <div id="projects"></div>

                For when the user click Projects in navbar it sends them to the navbar section.

                NOTE: The reason the id of "projects" is in a seperated div is because when
                the id was it the actual div of the code(It was not seperated in another div), 
                it would go to the center of the card and not actually to the top.
            */}
            <div id="projects"></div>
            
            <div className="text-center font-mono mt-10" data-aos="zoom-in">
                <h1 className="text-3xl">Projects</h1>
                    <div className="flex justify-center flex-wrap">
                        <Card img={Assosiation_Website_IMG}
                            title="Assosiation Website"
                            text={associationWebsite}
                            showLinkOfWebsite="https://infotech-uiprb.com/index.html" 
                            showGithubLink="https://github.com/InfoTech-UIPRB/Info-tech" /> 

                        <Card img={Assosiation_Website_IMG_V1} showGithubLink="https://github.com/InfoTech-UIPRB/Info-tech" 
                              title="First version of the Assosiation Website" 
                              text={associationWebsiteV1}/>  

                        <Card img={Catch_Phishing} 
                              title="CatchPhising Website Master Workfoce Research Internship" 
                              text={catchPhisingWebsite}
                              showGithubLink="https://github.com/Revokeez/CatchPhish"/>
                    </div>
            </div> 
        </>

    );
};

export default Awards;