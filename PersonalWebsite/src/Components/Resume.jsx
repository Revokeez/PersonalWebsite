/* eslint-disable no-unused-vars */
import React from "react";
import resume from "../assets/Resume/Edwin Manuel Vazquez Vega resume 2025.pdf"

const Resume = () => {
    return (
        <div className="flex flex-row justify-center items-center my-4" id="dowloadresume">
            <a href={resume} download={true} className="btn btn-gradient btn-primary waves waves-light">Dowload Resume</a>
        </div>

    );
}

export default Resume;