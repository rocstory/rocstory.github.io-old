import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Tech.css";



function Tech(props)
{

    const techName = props.data.name.substring(0,10);

    const fontColor = props.data.colortheme ? {color: props.data.colortheme} : {color: "black"};
    
    return (
        <div className="tech-container">
            <div style={fontColor} className="tech-icon">
                <FontAwesomeIcon icon={props.data.icon}/>
            </div>

            <div className="tech-name"> 
                {techName}
            </div>
        </div>
    )
}

export default Tech;