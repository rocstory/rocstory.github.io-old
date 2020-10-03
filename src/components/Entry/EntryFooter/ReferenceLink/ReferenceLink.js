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
                <span> 
                    <FontAwesomeIcon icon={[style, icon]}/>
                </span> 
                <p>{name}</p>
            </button>
        </a>
    )
};

export default ReferenceLink;