import React, { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge'
import "./Tech.scss";
import RSIcon from '../../../RSIcon/RSIcon';
import { ERSIcon } from '../../../../enums/ERSIcons';
import { ETechnology } from '../../../../enums/ETechnology';
import { useTech } from './useTech';
const dStore = require('../../../../dataStore/dataStore');

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
        <Badge
            pill
            variant="info"
            className="tech-container"
        >
            <span
                className="tech-icon"
                style={{ color: iconColor}}
            >
                <RSIcon iconName={iconName} />
            </span>
            <span className="tech-name">{techName}</span>
        </Badge>
    ) 
}

export default Tech;
