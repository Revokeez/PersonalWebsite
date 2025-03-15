/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect } from "react";


const ShowImg = ({ src, alt, display, marginLeft, marginRight,
        	       width, height, paddingLeft, paddingRight, 
                   paddingTop, paddingBottom, padding, borderRadius, 
                   float, maxWidth, maxHeight}) => {
    return <img 
    src={src}
    alt={alt} 
    style={{ 
            display: display, 
            marginLeft: marginLeft, 
            marginRight: marginRight, 
            width: width, 
            height:height, 
            paddingLeft:paddingLeft,
            paddingRight: paddingRight,
            paddingTop: paddingTop,
            paddingBottom: paddingBottom,
            padding: padding,
            borderRadius:borderRadius,
            float: float,
            maxWidth: maxWidth,
            maxHeight: maxHeight
        }} 
    />;
};

export default ShowImg;