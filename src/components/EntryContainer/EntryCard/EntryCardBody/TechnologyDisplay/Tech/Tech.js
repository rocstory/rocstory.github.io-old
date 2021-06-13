import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from 'react-bootstrap/Badge'
import "./Tech.css";
var util = require('../../../../../../helper/utilities');
function Tech({ name }) {
    const [icon, setIcon] = useState(null);

    useEffect(() => {
        async function getTechIcon() {
            const techData = util.getTechIcon(name);
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
                style={{color: icon.color ? icon.color : 'black'}}
            >
                <FontAwesomeIcon icon={[icon.type, icon.icon]}/>
            </span>
            <span className="tech-name">{icon.name}</span>
        </Badge>
    ) : null
}

export default Tech;

// function Tech({ name }) {
//     const [icon, setIcon] = useState(null);

//     useEffect(() => {
//         async function getTechIcon() {
//             const techData = await util.getTechIcon(name);
//             const techIconName = techData.name.toLowerCase();
//             if (techIconName === 'default') return;
//             setIcon(techData);
//         }
//         getTechIcon();
//     }, [name])

//     return icon ? (
//         <div className="tech-container">
//             <div className="tech-data">
//                 <div style={{ color: icon.color ? icon.color : 'black' }}
//                     className="tech-icon"
//                 >
//                     <span><FontAwesomeIcon icon={[icon.type, icon.icon]} /> </span>
//                 </div>
//                 <div className="tech-name clip-text">
//                     <span> {icon.name} </span>
//                 </div>
//             </div>

//         </div>
//     ) : null
// }