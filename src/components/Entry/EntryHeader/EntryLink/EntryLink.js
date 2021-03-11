import React, { useEffect, useState } from 'react';
import "./EntryLink.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
var util = require('../../../../helper/utilities');


function EntryLink({link})
{
    const {name, type, url} = link
    const [icon, setIcon] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

    function toggleHover()
    {
        setIsHovered(prev => !prev);
    }

    useEffect(() => {
        async function loadEntryLink()
        {
            let iconData = await util.getTechIcon(type);
            setIcon(iconData);
        }

        loadEntryLink();
    }, [type])

    let btnStyle = {backgroundColor: "white"}
    icon && isHovered  ? btnStyle.backgroundColor = icon.color : btnStyle.backgroundColor = "white";

    return icon ? (
        
        <a className="entry-link-wrapper"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <button 
                style={btnStyle}
                className="entry-link-icon"
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
            >
                <span><FontAwesomeIcon icon={[icon.type, icon.icon]} /></span>
            </button>
            <span className="entry-link-name clip-text">{name}</span>
        </a>
    ) : null
    
}

export default EntryLink;