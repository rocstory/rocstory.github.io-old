import { useState } from 'react';

import "./SocialMediaButton.scss";
import { ISocialLink } from '../../models/ISocialLink';
import RSIcon from '../RSIcon/RSIcon';
import { useTech } from '../../hooks/useTech';
import RSButton from '../RSButton/RSButton';

type ISocialMediaButtonProps = {
    key: any,
    link: ISocialLink,
}

const SocialMediaButton = ({ link, key }: ISocialMediaButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const { src, name } = link

    const { iconName, iconColor } = useTech(link.type)

    function toggleHover() {
        setIsHovered(prev => !prev);
    }

    let btnHoverStyle = { backgroundColor: iconColor }

    return (
        <RSButton
            key={key}
            className={`social-btn clickable`}
            href={src}
            as='a'
            hasTarget
            style={isHovered ? btnHoverStyle : {}}
            overlayChildren={name}
            overlayPlacement='top'
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}

        >
            <span className="social-btn-icon"><RSIcon iconName={iconName} /></span>
            {/* <span className="social-btn-name">{name}</span> */}
        </RSButton>
    )
}

export default SocialMediaButton;