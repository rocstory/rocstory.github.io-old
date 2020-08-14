import React from 'react';
import "./ReferenceLink.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function ReferenceLink(props)
{
    let style = "fas";
    let fa_icon = "lightbulb";
    //let bgColor = "white";

    const linkType = props.link.type.toLowerCase();

    switch(linkType)
    {
        case "twitter":
            //bgColor = "#00ACED"; 
            style = "fab";
            fa_icon = "twitter";
            break;
        case "instagram":
            //bgColor = "#E1306C"; 
            style = "fab";
            fa_icon = "instagram";
            break;
        case "facebook":
            //bgColor = "#4267B2"; 
            style = "fab";
            fa_icon = "facebook";
            break;
        case "github":
            //bgColor = "#6cc644"; 
            style = "fab";
            fa_icon = "github";
            break;
        case "youtube":
            //bgColor = "#ff0000"; 
            style = "fab";
            fa_icon = "youtube";
            break; 
        case "tumblr":
            //bgColor = "#35465c";
            style = "fab";
            fa_icon = "tumblr";
            break;
        case "linkedin":
            //bgColor = "#007bb5";
            style="fab";
            fa_icon = "linkedin";
            break;
        case "web":
            //bgColor = "#00ACED";
            style = "fas";
            fa_icon = "globe";
            break;
        default:
            //bgColor = "gold"; 
            style = "fas";
            fa_icon = "lightbulb";
            break;
    }

    return (
        <a href={props.link.source} target="_blank" rel="noopener noreferrer">
            <button 
                className="ref-container clickable"
            >
                <span> <FontAwesomeIcon icon={[style, fa_icon]} /> </span>
                <p>{props.link.name}</p>
            </button>
        </a>
    )
};

export default ReferenceLink;