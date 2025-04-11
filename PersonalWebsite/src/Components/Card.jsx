/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Card = ({text, title, showGithubLink, showLinkOfProject, img, alt, dir}) => {
    return(
        <div dir={dir} className="m-4 text-center">
            <div className="card card-xl sm:max-w-sm bg-primary">
            <div className="flex justify-center pt-5">
            <img src={img} />
            </div>
              <div className="card-header">
                <h5 className="card-title">{title}</h5>
              </div>
              <div className="card-body">
                <p>{text}</p>
              </div>

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
              

              {/* <div className="card-footer text-center">
                <p className="text-base-content/50">Learn more about our features.</p>
              </div> */}
            </div>
         </div>
    );
}

export default Card;