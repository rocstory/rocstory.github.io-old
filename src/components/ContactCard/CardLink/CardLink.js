import React, { useEffect, useState } from "react";
import "./CardLink.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from 'react-bootstrap/Button';

const dStore = require('../../../dataStore/dataStore');

function CardLink({ link }) {
    const { type, name, url } = link;
    const [icon, setIcon] = useState(null)

    useEffect(() => {
        function getLinkIcon() {
            const linkIcon = dStore.getTechIcon(type);
            setIcon(linkIcon);
        }
        getLinkIcon();
    })

    return icon && (
        <div className="cl-container">
            <Button
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="cl-icon"
            >
                <p
                    className="cl-icon-content"
                >
                    <FontAwesomeIcon icon={[icon.type, icon.icon]} />
                </p>
            </Button>

            <div className="cl-name-container">
                <p>{name}</p>
            </div>
        </div>
    )
}; // class

export default CardLink;
