import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SocialMediaButton.css";
var util = require('../../helper/utilities');

function SocialMediaButton({link})
{
    const [isHovered, setIsHovered] = useState(false)
    const [icon, setIcon] = useState(null);
    const {type, src, name} = link

    useEffect(()=> {
        async function loadData()
        {
            const iconData = await util.getTechIcon(type);
            setIcon(iconData);
        }
        loadData();
    }, [link, type])

    function toggleHover()
    {
        setIsHovered(prev => !prev); 
    }

    let btnStyle = {backgroundColor: "white"}
    isHovered ? btnStyle.backgroundColor = icon.color : btnStyle.backgroundColor = "white";

    return icon ? (
        <a className="socialbutton-wrapper" href={src} target="_blank" rel="noopener noreferrer">
            <button
                style={btnStyle}
                className="social-btn-container clickable"
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
            >
                <FontAwesomeIcon icon={[icon.type, icon.icon]} />
            </button>
            <p className="socmedia-button-name clip-text">{name}</p>
        </a>
    ) : null

}

export default SocialMediaButton;