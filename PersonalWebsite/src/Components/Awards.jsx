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

const Awards = () =>{
    const associationWebsite = `Designed and developed a responsive website using HTML, Tailwind CSS, and JavaScript to enhance the 
    online presence of the student association. Implemented a streamlined Git and GitHub Actions pipeline to enable continuous integration
    and automated deployments.`;
    
    const secondPlaceUPRB = `Secured second place by solving complex algorithmic challenges and demonstrating programming versatility. 
    Collaborated with team members to develop innovative solutions and optimize performance under pressure`;
    
    const firstPlaceIHACK =`My teammate Nordiel and I had just three hours to solve the problems. 
    We secured first place while competing against other students from various Inter American University campuses.`;
    
    const firstPlaceUPRM = `
    Our team, Info-Slay, joined the hackathon to optimize scheduling for a constellation of 5 satellites. We prioritized critical tasks like space weather monitoring, minimized mission conflicts, and ensured smooth data flow. `;
    
    const firstPlaceISACA = `The competition focused on cybersecurity, where we analyzed a case study and were
    challenged to identify three issues and explain them within a limited of 90 min. We also had to present our findings to the judges.`;   

    return (
        <>
            {/*
                Explaining code: <div id="awards"></div>

                For when the user click Awards in navbar it sends them to the navbar section.

                NOTE: The reason the id of "awards" is in a seperated div is because when
                the id was it the actual div of the code(It was not seperated in another div), 
                it would go to the center of the card and not actually to the top.
            */}
            <div id="awards"></div>
            
            <div className="text-center font-mono mt-10" data-aos="zoom-in">
                <h1 className="text-3xl">Awards</h1>
                    <div className="flex justify-center flex-wrap">
                        <Card img={First_Place_IHACK}  
                              title="First Place IHACK" 
                              text={firstPlaceIHACK}/>

                        <Card img={First_Place_ISACA}  
                              title="First Place ISACA IT Bowl 2025" 
                              text={firstPlaceISACA}/> 

                        <Card img={First_Place_UPRM}   
                              title="First Place, UPR Mayaguez Deconflicting in Space Challenge" 
                              text={firstPlaceUPRM}/>

                        <Card img={Second_Place_UPRB} 
                              title="Second Place beginner UPRB" 
                              text={secondPlaceUPRB}/>  

                    </div>
            </div> 
        </>

    );
};

export default Awards;