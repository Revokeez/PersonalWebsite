/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Card = ({text, title, showGithubLink, showLinkOfProject, img, alt, dir}) => {
    {/*
      Explaining code: duration-300 ease-in-out hover:-translate-y-1 hover:scale-110
      This code is when the user hove on top of the card
    */}
    return(
        <div dir={dir} className="m-4 text-center duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <div className="card card-xl sm:max-w-sm bg-primary">
            <div className="flex justify-center pt-5 w-full h-128">
              <img src={img} />
            </div>
              <div className="card-header">
                <h5 className="card-title">{title}</h5>
              </div>
              <div className="card-body">
                <p>{text}</p>
              </div>

              {/*
                When a card dosent need to show a link of a project or github the 
                length of the variables(showLinkOfProject and showGithubLink) are going to be 0.
                If its not that means theres going to be a link in the card.
              */}

              <div className="card-footer text-center">
                {showLinkOfProject && typeof showLinkOfProject == "string" && showLinkOfProject.length > 0 &&
                    <a href={showLinkOfProject} target="_blank">
                        <p className=""> Go to Proyect</p>
                    </a>
                }
                {showGithubLink && typeof showGithubLink == "string" && showGithubLink.length > 0 &&
                    <a href={showGithubLink} target="_blank">
                        <p className=""> Go to github</p>
                    </a>
                }
              </div>
            </div>
         </div>
    );
}

export default Card;