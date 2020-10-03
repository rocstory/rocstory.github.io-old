import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SocialMediaButton.css";
import technologies from "../../technologies.json"

function SocialMediaButton(props)
{
    const [isHovered, setIsHovered] = useState(false)
    const {type, source} = props.link

    const socialType = type.toLowerCase().trim()
    const iconData = technologies.filter(tech => tech.name.toLowerCase().localeCompare(socialType) === 0)[0]

    function toggleHover()
    {
        setIsHovered(prev => !prev); 
    }

    let btnStyle = {backgroundColor: "white"}
    isHovered ? btnStyle.backgroundColor = iconData.color : btnStyle.backgroundColor = "white";

    return iconData ? (
        <a href={source} target="_blank" rel="noopener noreferrer">
            <button
                style={btnStyle}
                className="social-btn-container clickable"
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
            >
                <FontAwesomeIcon icon={[iconData.type, iconData.icon]} />
            </button>
        </a>
    ) : null

}

export default SocialMediaButton;