/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Card = ({text, title, showGithubLink, showLinkOfWebsite, img, alt}) => {
      {/*
      Explaining code: duration-300 ease-in-out hover:-translate-y-1 hover:scale-110
      This code is when the user hove on top of the card
    */}

  return(
            <div className="card-xl max-md:card-xs max-w-sm bg-violet-300 m-4 duration-300 ease-in-out md:hover:-translate-y-1 md:hover:scale-110">
            <div className="flex justify-center pt-5 w-full h-118 object-cover">
              <img className="object-cover" src={img} />
            </div>

              <div className="card-body text-black text-base text-left">
                  <h5 className="md:text-4xl text-2xl text-center text-black">{title}</h5>
                  <p className="md:text-2xl text-xl">{text}</p>
              </div>

              {/*
                When a card dosent need to show a link of a project or github the 
                length of the variables(showLinkOfProject and showGithubLink) are going to be 0.
                If its not that means theres going to be a link in the card.
              */}

              <div className="card-footer text-center md:text-2xl text-xl">
                {showLinkOfWebsite && typeof showLinkOfWebsite == "string" && showLinkOfWebsite.length > 0 &&
                    <a href={showLinkOfWebsite} target="_blank">
                        <p className="text-black"> Go to Website</p>
                    </a>
                }
                {showGithubLink && typeof showGithubLink == "string" && showGithubLink.length > 0 &&
                    <a href={showGithubLink} target="_blank">
                        <p className="text-black"> Go to github</p>
                    </a>
                }
              </div>
            </div>
    );
}

export default Card;