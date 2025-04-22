/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Card = ({text, title, showGithubLink, showLinkOfProject, img, alt}) => {
      {/*
      Explaining code: duration-300 ease-in-out hover:-translate-y-1 hover:scale-110
      This code is when the user hove on top of the card
    */}

    const hoverAnimation = "after:bg-violet-300 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
  return(
        <div className="m-4 duration-300 ease-in-out md:hover:-translate-y-1 md:hover:scale-110">
            <div className="card-xl max-md:card-xs max-w-sm bg-violet-300">
            <div className="flex justify-center pt-5 w-full h-118 object-cover">
              <img className="object-cover" src={img} />
            </div>
              <div className="card-header">
                <h5 className="card-title text-black">{title}</h5>
              </div>
              <div className="card-body text-black text-base text-left">
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
                        <p className={`text-black ${hoverAnimation}`}> Go to Proyect</p>
                    </a>
                }
                {showGithubLink && typeof showGithubLink == "string" && showGithubLink.length > 0 &&
                    <a href={showGithubLink} target="_blank" className={hoverAnimation}>
                        <p className="text-black"> Go to github</p>
                    </a>
                }
              </div>
            </div>
         </div>
    );
}

export default Card;