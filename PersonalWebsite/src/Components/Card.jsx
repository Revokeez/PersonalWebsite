/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Card = ({text, title, showGithubLink, showLinkOfProject, img, alt}) => {
  return(
        <div className="m-4 text-center duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <div className="card card-xl sm:max-w-sm bg-violet-300">
            <div className="flex justify-center pt-5 w-full h-118 object-cover">
              <img src={img} />
            </div>
              <div className="card-heade">
                <h5 className="card-title text-black">{title}</h5>
              </div>
              <div className="card-body text-black text-base">
                <p>{text}</p>
              </div>

              <div className="card-footer text-center">
                {showLinkOfProject && typeof showLinkOfProject == "string" && showLinkOfProject.length > 0 &&
                    <a href={showLinkOfProject} target="_blank">
                        <p className="text-black"> Go to Proyect</p>
                    </a>
                }
                {showGithubLink && typeof showGithubLink == "string" && showGithubLink.length > 0 &&
                    <a href={showGithubLink} target="_blank">
                        <p className="text-black"> Go to github</p>
                    </a>
                }
              </div>
            </div>
         </div>
    );
}

export default Card;