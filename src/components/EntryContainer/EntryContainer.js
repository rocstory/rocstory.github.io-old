import React, { useEffect, useState } from 'react';
import EntryCard from './EntryCard/EntryCard';
import EntryMenu from './EntryMenu/EntryMenu';
import "./EntryContainer.css";

var db = require('../../dataStore/dataStore');
var dbConfig = require('../../dataStore/db-config');
var utilities = require('../../helper/utilities');

const PROJECTS_TYPE = 'projects';
const ACTIVITIES_TYPE = 'activities';


function EntryContainer(props) {

    const [filterItems, setFilterItems] = useState(null);
    const [appliedFilters, setAppliedFilters] = useState([]);
    const [selEntry, setSelEntry] = useState(null);

    const [entryType, setEntryType] = useState(PROJECTS_TYPE);
    const [entries, setEntries]  = useState([]);
    const [errorEncountered, setErrorEncountered] = useState(false);


    async function fetchEntries()
    {
        const {ProjectCollectionName, ActivityCollectionName} = dbConfig.getAllConfigObj();
        try
        {
            // try to get the entries from the database

            // Get project and activity entries
            let entries = [];

            switch(entryType)
            {
                case PROJECTS_TYPE:
                    entries = await db.getEntries(ProjectCollectionName);
                    break;
                case ACTIVITIES_TYPE:
                    entries = await db.getEntries(ActivityCollectionName);
                    break;
            };
            
            // Get filter items for project and activities 
            entries = sortEntriesDescending(entries);
            const entryFilterItems = getEntryFilterItems(entries);

            setErrorEncountered(false);
            setEntries(entries);
            setFilterItems(entryFilterItems);
            setAppliedFilters([]);
        }
        catch (error)
        {
            // getting local entries
            let entries = [];

            switch(entryType)
            {
                case PROJECTS_TYPE:
                    entries = db.getLocalEntries(ProjectCollectionName);
                    break;
                case ACTIVITIES_TYPE:
                    entries = db.getLocalEntries(ActivityCollectionName);
                    break;
            };

            entries = sortEntriesDescending(entries);
            const entryFilterItems = getEntryFilterItems(entries);
            // unable to get entries from the database...
            setErrorEncountered(true);
            setEntries(entries);
            setFilterItems(entryFilterItems);
            setAppliedFilters([]);
        }
    }

    function sortEntriesDescending(entries)
    {
        return entries.sort((entryA ,entryB) => {return entryB.index - entryA.index })
    }

    function getEntryFilterItems(entryList)
    {
        const entryPrimaryTags = utilities.getEntryPrimaryTags();
        let primaryItems = new Set();
        let secondaryItems = new Set();

        entryList.forEach(entry => {
            let items = entry.technologies || entry.tags;
            items.forEach(item => {
                let foundTag = entryPrimaryTags.find(tag => tag.name.toLowerCase() === item.toLowerCase())
                if (foundTag)
                {
                    primaryItems.add(item.toLowerCase());
                }
                else
                {
                    secondaryItems.add(item.toLowerCase());
                }
            });
        });

        primaryItems = Array.from(primaryItems).sort();
        secondaryItems = Array.from(secondaryItems).sort();
        return {primaryItems, secondaryItems};
    }

    function addToAppliedFilter(item)
    {
        const index = appliedFilters.indexOf(item);
        let filters = appliedFilters;
        if (index !== -1)
        {
            filters.splice(index, 1);
        }
        else
        {
            // add 
            filters.push(item);
        }
        setAppliedFilters([...filters]);
    }

    useEffect(() => {
        fetchEntries();
    }, [])

    useEffect(() => {
        fetchEntries();
    }, [entryType]);

    return (
        <>
            {
                selEntry ?
                    <EntryCard
                        entryPayload={selEntry}
                        setSelEntry={setSelEntry}
                        entryType={entryType}
                        errorEncountered={errorEncountered}
                    />
                :
                    <EntryMenu
                        entries={entries}
                        filterItems={filterItems}
                        appliedFilters={appliedFilters}
                        entryType={entryType}
                        errorEncountered={errorEncountered}
                        setEntryType={setEntryType}
                        addFilter={addToAppliedFilter}
                        setSelEntry={setSelEntry}
                    />
            }
        </>
    ) 
}

export default EntryContainer;
