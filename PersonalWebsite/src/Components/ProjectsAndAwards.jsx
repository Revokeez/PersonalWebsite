/* eslint-disable no-unused-vars */

//Components
import React from "react";
import Card from "./Card";

//Images
import First_Place_UPRM from "../assets/upr_mayaguez_img.jpg"
import Assosiation_Website_IMG from "../assets/Infotech_HomePage_IMG.png"
import First_Place_ISACA from "../assets/ISCA_with_team.jpg"
import First_Place_IHACK from "../assets/IHACK_with_director.jpg"
import Second_Place_UPRB from "../assets/Second_Place_UPRB.jpg"

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

    return (
        <div className="text-center font-mono text-3xl mt-10">
        <h1>Proyects and Awards</h1>
        <div className="flex justify-center flex-wrap">
              <Card img={Assosiation_Website_IMG} showGithubLink="https://github.com/InfoTech-UIPRB/Info-tech" 
                showLinkOfProject="https://infotech-uiprb.com/index.html" 
                title="Assosiation Website" 
                text={associationWebsite} dir=""/> 

              <Card img={First_Place_UPRM}   title="First Place, UPR Mayaguez Deconflicting in Space Challenge" text={firstPlaceUPRM} dir=""/>  
              <Card img={First_Place_ISACA}  title="First Place IT Bown 2025" text={firstPlaceISACA} dir=""/>
              <Card img={First_Place_IHACK}  title="First Place IHACK" text={firstPlaceIHACK} dir=""/> 
              <Card img={Second_Place_UPRB}  title="Second Place beginner UPRB" text={secondPlaceUPRB} dir=""/>  
            
        </div>
  </div>
    );
};

export default ProjectsAndAwards;