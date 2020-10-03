import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import DevIcon from "devicon-react-svg";
import "./Tech.css";
import technologies from "../../../technologies.json";



function Tech(props)
{
    const {name} = props;
    const thisTech = technologies.filter(tech => tech.name.toLowerCase().trim().localeCompare(name.toLowerCase().trim()) === 0)[0];
    
    const {color, icon, type} = thisTech; 
    //const thisIcon =  <FontAwesomeIcon icon={[type, icon]}/>
    const fontColor = {color: color ? color : 'black'}; 

    return (
        <div className="tech-container">
            <div style={fontColor} className="tech-icon">
                <FontAwesomeIcon icon={[type, icon]}/>
            </div>
            <div className="tech-name"> 
                {name}
            </div>
        </div>
    )
}

export default Tech;