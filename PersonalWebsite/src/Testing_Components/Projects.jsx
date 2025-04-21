

/* eslint-disable no-unused-vars */

//Components
import React from "react";
import Card from "./Card";

//Images
import Assosiation_Website_IMG from "../assets/infotech_homePage_img.png"
import Catch_Phishing from "../assets/catchphishing.png"
import Img_Not_Found from "../assets/not_found_img.png"

const Awards = () =>{
    const associationWebsite = `Designed and developed a responsive website using HTML, Tailwind CSS, and JavaScript to enhance the 
    online presence of the student association. Implemented a streamlined Git and GitHub Actions pipeline to enable continuous integration
    and automated deployments.`;   
    
    const catchPhisingWebsite = `Catch Phish is an online platform to learn about Phishing emails and how to protect yourself against
    them. This website was built as part of our submodel "Phish Training" for the Master Workforce Research Internship by the Interamerican
    University of Puerto Rico, Bayamon campus and the Interamerican University of Puerto Rico, San German campus as part of our Modeling
    and Simulation research program. This project hopes to help people learn how to identify Phishing emails and prevent falling into the
    trap of bad actors.`

    const pidss = `The Phishing Identification and Decision Support System (PIDSS) is a tool developed as part of the 
    Master Workforce Internship 2023. This tool was made to help with identifying Phishing emails by
    properly scanning for commonly known strategies. This tool has an easy to understand Interface where
    users can see the ”Phishing Percentage” based on how likely the email provided is to be a Phishing attack.`

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

                        <Card img={Assosiation_Website_IMG} showGithubLink="https://github.com/InfoTech-UIPRB/Info-tech" 
                              showLinkOfProject="https://infotech-uiprb.com/index.html" 
                              title="Assosiation Website" 
                              text={associationWebsite}/>  

                        {/* 
                              <Card img={Img_Not_Found}
                              title="Phishing Identification and Decision Support System (PIDSS) Master Workfoce Research Internship"
                              text={pidss}
                              showGithubLink="https://github.com/nordiel/PIDSS"/> 
                        */}

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