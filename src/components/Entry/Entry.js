import React from 'react';
import "./Entry.css";
import EntryHeader from './EntryHeader/EntryHeader';
import EntryBody from './EntryBody/EntryBody';
import EntryFooter from "./EntryFooter/EntryFooter";
import Bounce from 'react-reveal/Bounce';

function Entry({entry}) {
    
    return entry ? (
        <Bounce top>
            <div className="entry-container">
                <EntryHeader entry={entry} />
                <EntryBody entry={entry} />
                <EntryFooter entry={entry} />
            </div>
        </Bounce>
    ) : null

}

export default Entry;