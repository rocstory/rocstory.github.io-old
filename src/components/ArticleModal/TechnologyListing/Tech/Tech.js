import React, { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge'
import "./Tech.css";
import RSIcon from '../../../RSIcon/RSIcon';
import { ERSIcon } from '../../../../enums/ERSIcons';
const dStore = require('../../../../dataStore/dataStore');

function Tech({ name }) {
    const [icon, setIcon] = useState(null);

    useEffect(() => {
        function getTechIcon() {
            const techData = dStore.getTechIcon(name);
            const techIconName = techData.name.toLowerCase();
            if (techIconName === 'default') return;
            setIcon(techData);
        }
        getTechIcon();
    }, [name])

    return icon ? (
        <Badge
            pill
            variant="info"
            className="tech-container"
        >
            <span
                className="tech-icon"
                style={{ color: icon.color ? icon.color : 'black' }}
            >
                <RSIcon iconName={icon.type} />
            </span>
            <span className="tech-name">{icon.name}</span>
        </Badge>
    ) : null
}

export default Tech;
