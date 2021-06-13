import React, { useEffect, useState } from 'react';
import "./EntryCard.css";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import EntryCardHeader from './EntryCardHeader/EntryCardHeader';
import EntryCardBody from './EntryCardBody/EntryCardBody';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function EntryCard({entryPayload, setSelEntry, entryType, errorEncountered}) {
    // const [selEntry, setSelEntry] = useState(null);
    return (
        <div className="entry-card entry-wrapper h-100">
            <EntryCardHeader entryPayload={entryPayload} setSelEntry={setSelEntry} entryType={entryType} errorEncountered={errorEncountered}/>
            <EntryCardBody entryPayload={entryPayload} />
        </div>
    ) 
}

export default EntryCard;
