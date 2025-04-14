/* eslint-disable no-unused-vars */

//Components
import React from "react";
import Card from "./Card";

//Images
import First_Place_UPRM from "../assets/upr_mayaguez_img.jpg"
import Assosiation_Website_IMG from "../assets/infotech_homePage_img.png"
import First_Place_ISACA from "../assets/ISACA_with_team_img.jpg"
import First_Place_IHACK from "../assets/IHACK_with_director_img.jpg"
import Second_Place_UPRB from "../assets/second_place_uprb_img.jpg"
import Catch_Phishing from "../assets/catchphishing.png"
import Img_Not_Found from "../assets/not_found_img.png"

const ProjectsAndAwards = () =>{
    const associationWebsite = `Designed and developed a responsive website using HTML, Tailwind CSS, and JavaScript to enhance the 
    online presence of the student association. Implemented a streamlined Git and GitHub Actions pipeline to enable continuous integration
    and automated deployments.`;
    
    const secondPlaceUPRB = `Secured second place by solving complex algorithmic challenges and demonstrating programming versatility. 
    Collaborated with team members to develop innovative solutions and optimize performance under pressure`;
    
    const firstPlaceIHACK =`My teammate Nordiel and I had just three hours to solve the problems. 
    We secured first place while competing against other students from various Inter American University campuses.`;
    
    const firstPlaceUPRM = `
    Our team, Info-Slay, participated in the hackathon and focused on optimizing the scheduling of satellite operations in
    a constellation of 5 satellites. We worked to efficiently prioritize critical tasks like space weather monitoring while
    minimizing conflicts with other missions and maintaining the flow of data from satellites. The hackathon pushed us to collaborate,
    think creatively, and leverage our technical expertise to solve a real-world problem in space technology.`;
    
    const firstPlaceISACA = `The competition focused on cybersecurity, where we analyzed a case study and were
    challenged to identify three issues and explain them within a limited of 90 min. We also had to present our findings to the judges.`;   
    
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
            <div id="projectsandawards"></div>
            <div className="text-center font-mono text-3xl mt-10" data-aos="zoom-in">
                <h1>Proyects and Awards</h1>
                    <div className="flex justify-center flex-wrap">
                        <Card img={First_Place_IHACK}  
                              title="First Place IHACK" 
                              text={firstPlaceIHACK}/>

                        <Card img={First_Place_ISACA}  
                              title="First Place ISACA IT Bown 2025" 
                              text={firstPlaceISACA}/> 

                        <Card img={First_Place_UPRM}   
                              title="First Place, UPR Mayaguez Deconflicting in Space Challenge" 
                              text={firstPlaceUPRM}/>

                        <Card img={Assosiation_Website_IMG} showGithubLink="https://github.com/InfoTech-UIPRB/Info-tech" 
                              showLinkOfProject="https://infotech-uiprb.com/index.html" 
                              title="Assosiation Website" 
                              text={associationWebsite}/> 

                        <Card img={Second_Place_UPRB} 
                              title="Second Place beginner UPRB" 
                              text={secondPlaceUPRB}/>  

                        {/* <Card img={Img_Not_Found}
                              title="Phishing Identification and Decision Support System (PIDSS) Master Workfoce Research Internship"
                              text={pidss}
                              showGithubLink="https://github.com/nordiel/PIDSS"/> */}

                        <Card img={Catch_Phishing} 
                              title="CatchPhising Website Master Workfoce Research Internship" 
                              text={catchPhisingWebsite}
                              showGithubLink="https://github.com/Revokeez/CatchPhish"/>
                    </div>
            </div> 
        </>

    );
};

export default ProjectsAndAwards;