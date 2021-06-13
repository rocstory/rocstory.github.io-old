import React, { useEffect, useState } from 'react';
// import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import DisplayCard from './DisplayCard/DisplayCard';
import Badge from 'react-bootstrap/Badge';
import icon from "../../../../assets/fallback.png";
import "./EntryCardDisplay.css";


const PROJECTS_TYPE = 'projects';
const ACTIVITIES_TYPE = 'activities';


function EntryCardDisplay({entries=[], appliedFilters=[], setSelEntry}) {

    function isWithinFilter(entry)
    {
        try 
        {
            if (!entry) throw new Error("Entry does not exist");
            if (!appliedFilters || appliedFilters.length === 0) return true;

            let items = entry.technologies || entry.tags;
            return items.find(item => appliedFilters.indexOf(item.toLowerCase()) >= 0)
        }
        catch (error)
        {
            return false;
        }
    }

    return (
        <div className="card-display">
            {
                entries.map(entry => {
                    if (isWithinFilter(entry))
                        return <DisplayCard entry={entry} key={entry.name} setSelEntry={setSelEntry}/>
                })
            }
        </div>
    ) 
}

export default EntryCardDisplay;
