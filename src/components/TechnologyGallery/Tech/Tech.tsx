import React, { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge'
import "./Tech.scss";
import RSIcon from '../../RSIcon/RSIcon';
import { ERSIcon } from '../../../enums/ERSIcons';
import { ETechnology } from '../../../enums/ETechnology';
import { useTech } from './useTech';

type TechProps = {
    techName: ETechnology
}
function Tech(props : TechProps) {
    const {
        techName
    } = props

    const {
        iconColor,
        secondaryColor,
        iconName,
    } = useTech(techName);

    return (
        <div
            className="tech"
            style={{backgroundColor: secondaryColor}}
        >
            <span
                className="tech-icon"
                style={{ color: iconColor}}
            >
                <RSIcon iconName={iconName} />
            </span>
            <span className="tech-name">{techName}</span>
        </div>
    ) 
}

export default Tech;
