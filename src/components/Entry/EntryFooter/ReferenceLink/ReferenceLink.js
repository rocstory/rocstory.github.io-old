import React from 'react';
import "./ReferenceLink.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import references from '../../../../references.json';

function ReferenceLink(props)
{
    const {type, name, source} = props.link
    const {style, icon} = references.filter(ref => ref.type.toLowerCase().localeCompare(type.toLowerCase()) === 0 )[0]

    return (
        <a href={source} target="_blank" rel="noopener noreferrer">
            <button 
                className="ref-container clickable"
            >
                <span className="ref-icon"> 
                    <FontAwesomeIcon icon={[style, icon]}/>
                </span> 
                <p className="ref-name">{name}</p>
            </button>
        </a>
    )
};

export default ReferenceLink;