/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const Text = ({ text, textAlign, headerSize="", fontSize,
                display, alignItems, justifyContent, marginTop, 
                marginRight, marginLeft,
                fontFamily, typeOfHtmlTag="p", maxWidth, float}) => {
    const Tag = `${typeOfHtmlTag}${headerSize}`;
    return (
        <Tag 
            style={{ 
                textAlign: textAlign,
                display: display,     
                alignItems: alignItems, // Vertical centering (flexbox)
                justifyContent: justifyContent, // Horizontal centering (flexbox)
                marginTop:marginTop,
                fontFamily: fontFamily,
                fontSize: fontSize,
                maxWidth: maxWidth,
                float: float,
                marginRight: marginRight,
                marginLeft: marginLeft
            }}
        >
            {text}
        </Tag>
    );
};

export default Text;