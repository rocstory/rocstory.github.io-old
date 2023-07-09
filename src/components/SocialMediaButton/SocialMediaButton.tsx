import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

import "./SocialMediaButton.scss";
import { ISocialLink } from '../../models/ISocialLink';
import RSIcon from '../RSIcon/RSIcon';
import { getIconHoverClassName } from '../../helper/iconStylingHelper';
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
            setIcon(iconData);
        }
        loadData();
    }, [link, type])

    function toggleHover() {
        setIsHovered(prev => !prev);
    }
    let btnHoverClassName = getIconHoverClassName(type);

    return icon ? (
        <Button
            variant={' '}
            className={`social-btn clickable ${btnHoverClassName}`}
            as="a"
            href={src}
            target="_blank"
            rel="noopener noreferrer"

            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
        >
            <span className="social-btn-icon"><RSIcon iconName={icon.name} /></span>
            <span className="social-btn-name">{name}</span>
        </Button>
    ) : null

}

export default SocialMediaButton;