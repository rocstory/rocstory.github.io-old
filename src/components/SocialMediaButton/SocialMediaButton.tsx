import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from 'react-bootstrap/Button';

import "./SocialMediaButton.scss";
import { ISocialLink } from '../../models/ISocialLink';
import { ITechnologyIcon } from '../../models/ITechnologyIcon';
const dStore = require('../../dataStore/dataStore');

interface ISocialMediaButtonProps {
    link: ISocialLink,
}

const SocialMediaButton = ({ link } : ISocialMediaButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const [icon, setIcon] = useState<any>(undefined);
    const { type, src, name } = link

    useEffect(() => {
        async function loadData() {
            const iconData = dStore.getTechIcon(type);
            console.log(iconData);
            setIcon(iconData);
        }
        loadData();
    }, [link, type])

    function toggleHover() {
        console.log("Toggling hover!")
        setIsHovered(prev => !prev);
    }

    let btnStyle = { backgroundColor: icon.color }
    // isHovered ? btnStyle.backgroundColor = icon.color : btnStyle.backgroundColor = "white";

    return icon ? (
        <Button
            style={isHovered ? btnStyle : {backgroundColor: "#4E4B4B"}}
            variant={undefined}
            className="social-btn clickable"
            as="a"
            href={src}
            target="_blank"
            rel="noopener noreferrer"

            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
        >
            <span className="social-btn-icon"><FontAwesomeIcon icon={[icon.type, icon.icon]} /></span>
            <span className="social-btn-name">{name}</span>
        </Button>
    ) : null

}

export default SocialMediaButton;