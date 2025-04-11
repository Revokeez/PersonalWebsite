/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect } from "react";

const ShowImg = ({src}) => {
    return (
        <div className="flex justify-center">
          <div className="avatar">
                <div className="size-100 rounded-full">
                    <img src={src} alt="avatar" />
                </div>
          </div>
        </div>
    )
};

export default ShowImg;