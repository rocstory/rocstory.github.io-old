import React, { useEffect, useState } from "react";
import "./CardLink.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
var util = require('../../../helper/utilities');

function CardLink({ link }) {
    const { type, name, url } = link;
    const [icon, setIcon] = useState(null)

    useEffect(() => {
        async function getLinkIcon() {
            const linkIcon = await util.getTechIcon(type);
            setIcon(linkIcon);
        }
        getLinkIcon();
    })

    return icon ? (
        <div className="cl-container">
            <a className="cl-icon-container" href={url}>
                <button className="cl-icon">
                    <FontAwesomeIcon icon={[icon.type, icon.icon]} />
                </button>
            </a>

            <div className="cl-name-container">
                <p>{name}</p>
            </div>
        </div>
    ) : null
}; // class

export default CardLink;
