import React, { useContext } from 'react';
import "./EntryBubble.css";
import Bounce from 'react-reveal/Bounce';
import {PortfolioContext} from '../../../../../PortfolioContext';
var db = require('../../../../../database/database');
var util = require('../../../../../helper/utilities');


function EntryBubble(props) {
    const { entry } = props
    const {setSelEntry, entryType} = useContext(PortfolioContext);
    const { name, icon } = entry;
    const { url } = icon;

    async function handleSelEntry()
    {
        const collection = await util.getCollectionName(entryType);
        const fetchedEntry = await db.getEntry(name, collection);
        console.log(`User selected: ${fetchedEntry.name}`);
        setSelEntry(fetchedEntry);
    }


    return (
        <Bounce right>
            <li className="entry-bubble" onClick={handleSelEntry}>
                <div className="entry-bubble-img-container">
                    <img
                        className="entry-bubble-img"
                        src={url}
                        alt="entry bubble icon"
                    />
                </div>
                <p className="clip-text">{name}</p>
            </li>
        </Bounce>
    )
}

export default EntryBubble;
