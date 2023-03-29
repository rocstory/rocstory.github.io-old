import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from 'react-bootstrap/Badge'
import "./Tech.css";
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
                <FontAwesomeIcon icon={[icon.type, icon.icon]} />
            </span>
            <span className="tech-name">{icon.name}</span>
        </Badge>
    ) : null
}

export default Tech;
