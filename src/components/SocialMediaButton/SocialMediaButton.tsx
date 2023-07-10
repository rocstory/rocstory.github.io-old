import {  useState } from 'react';
import Button from 'react-bootstrap/Button';

import "./SocialMediaButton.scss";
import { ISocialLink } from '../../models/ISocialLink';
import RSIcon from '../RSIcon/RSIcon';
import { useTech } from '../../hooks/useTech';

interface ISocialMediaButtonProps {
    link: ISocialLink,
}

const SocialMediaButton = ({ link } : ISocialMediaButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const { src, name} = link

    const {iconName, iconColor} = useTech(link.type)

    function toggleHover() {
        setIsHovered(prev => !prev);
    }

    let btnHoverStyle = {backgroundColor: iconColor}
    return  (
        <Button
            variant={' '}
            className={`social-btn clickable`}
            as="a"
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            style={isHovered ? btnHoverStyle : {}}

            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
        >
            <span className="social-btn-icon"><RSIcon iconName={iconName} /></span>
            <span className="social-btn-name">{name}</span>
        </Button>
    )
}

export default SocialMediaButton;