/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Card = ({text, title, showGithubLink, showLinkOfProject, img, alt}) => {
    return(
        <div className="p-5">
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img className="w-96 h-70"
                src={img}
                alt={alt} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                {title}
                </h2>
                <p>{text}</p>
                <div className="card-actions justify-end">
                    {showGithubLink && typeof showGithubLink == "string" && showGithubLink.length > 0 && 
                        <a href={showGithubLink} target="_blank">
                            <div className="badge badge-outline">Go to github</div>
                        </a>
                    }
                    {showLinkOfProject && typeof showLinkOfProject == "string" && showLinkOfProject.length > 0 && 
                        
                        <a href={showLinkOfProject} target="_blank">
                            <div className="badge badge-outline">Go to website</div>
                        </a>
                    }
                </div>
            </div>
        </div>
        </div>
    );
}

export default Card;