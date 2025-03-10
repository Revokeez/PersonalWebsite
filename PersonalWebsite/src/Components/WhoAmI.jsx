/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
//Components
import React from "react";

//CSS Files
import "../CSS/App.css";

//Image
import ShowImg from "./ShowImg";
import Text from "./Text";


const WhoAmI = ({ img, alt, text, left=false }) => {
    if(!left)
    {
        return (
            <div style={{marginRight: '20px'}}>
                <ShowImg src={img} alt={alt} marginLeft="auto" padding="15px" float="right" maxWidth="800px" maxHeight="800px"/>
                <div style={{float: 'left', justifyContent: 'center', alignItems: 'center', marginLeft: '20px'}}>
                    <Text text="My love for programming" headerSize={1} typeOfHtmlTag="h" marginLeft="auto" /> 
                    {text}
                </div>
            </div>
        );
    }
    else
    {
        return (
            <div style={{marginLeft: '20px'}}>
                <ShowImg src={img} alt={alt} marginRight="auto" padding="15px" float="left" maxWidth="800px" maxHeight="800px" />
                <div style={{float: 'right', justifyContent: 'center', alignItems: 'center', marginRight: '20px', maxWidth: "500px"}}>
                    <Text text="My love for programming" headerSize={1} typeOfHtmlTag="h" textAlign="right" /> 
                    {text}
                </div>
            </div>
        );
    }
};

export default WhoAmI;