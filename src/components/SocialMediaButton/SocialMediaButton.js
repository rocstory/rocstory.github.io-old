import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from 'react-bootstrap/Button';

import "./SocialMediaButton.css";
const dStore = require('../../dataStore/dataStore');

function SocialMediaButton({ link }) {
    const [isHovered, setIsHovered] = useState(false)
    const [icon, setIcon] = useState(null);
    const { type, src, name } = link

    useEffect(() => {
        async function loadData() {
            const iconData = dStore.getTechIcon(type);
            setIcon(iconData);
        }
        loadData();
    }, [link, type])

    function toggleHover() {
        setIsHovered(prev => !prev);
    }

    let btnStyle = { backgroundColor: "white" }
    isHovered ? btnStyle.backgroundColor = icon.color : btnStyle.backgroundColor = "white";

    return icon ? (
        <a
            className="social-container"
            href={src}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Button
                style={btnStyle}
                className="social-btn clickable"
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
            >
                <span className="social-btn-icon"><FontAwesomeIcon icon={[icon.type, icon.icon]} /></span>
            </Button>
            <span className="social-btn-name">{name}</span>
        </a>
    ) : null

}

export default SocialMediaButton;