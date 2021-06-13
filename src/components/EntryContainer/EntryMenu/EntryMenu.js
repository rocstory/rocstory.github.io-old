import React, { useEffect, useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Alert from 'react-bootstrap/Alert'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import EntryCardDisplay from './EntryCardDisplay/EntryCardDisplay';
import "./EntryMenu.css";


const PROJECTS_TYPE = 'projects';
const ACTIVITIES_TYPE = 'activities';


function EntryMenu({entries=[], filterItems, appliedFilters=[], entryType, errorEncountered, setEntryType, addFilter, setSelEntry}) {
    
    const [primaryFilterItems, setPrimaryFilterItems] = useState([]);
    const [secondaryFilterItems, setSecondaryFilterItems] = useState([]);

    function handleEntryTypeChange(type)
    {
        setEntryType(type);
    }

    function isSelectedFilter(item)
    {
        let found = appliedFilters.find(filter => filter.toLowerCase() === item.toLowerCase())
        // if (found)
        // {
        //     console.log("Checking:", item, appliedFilters)
        //     console.log("Found:", found); 
        // }
        return found;
    }

    useEffect(()=> {

        if (filterItems)
        {
            const {primaryItems, secondaryItems} = filterItems;
            setPrimaryFilterItems(primaryItems);
            setSecondaryFilterItems(secondaryItems);
        }
    }, [filterItems])

    const dropdownTitle = (entryType === PROJECTS_TYPE) ? 'Technologies' : (entryType === ACTIVITIES_TYPE) ? 'Activities' : ''
    
    return (
        <div className="entry-menu entry-wrapper h-100">
            <div className="navbar">
                <DropdownButton 
                    variant={null} 
                    className={`entry-dropdown ${(appliedFilters.length > 0) ? 'has-applied-filters' : ''}`} 
                    title={dropdownTitle}
                >
                    {
                        primaryFilterItems ? 
                        primaryFilterItems.map(item => 
                                <Dropdown.Item 
                                    key={item}
                                    as="button"
                                    onClick={()=>{addFilter(item)}}
                                    className={`filter-item ${(isSelectedFilter(item)) ? 'selected' : ''}`}
                                >{item}</Dropdown.Item>)
                        : null
                    }
                    {
                        (primaryFilterItems.length > 0 && secondaryFilterItems.length > 0) ?
                        <Dropdown.Divider/>
                        :
                        null
                    }
                    {
                        secondaryFilterItems ? 
                        secondaryFilterItems.map(item => 
                            <Dropdown.Item 
                                key={item}
                                as="button"
                                onClick={()=>{addFilter(item)}}
                                className={`filter-item ${(isSelectedFilter(item)) ? 'selected' : ''}`}
                            >{item}</Dropdown.Item>)
                            : null
                    }
                </DropdownButton>

                <div className="entry-btn-wrapper">
                    <Button
                        variant={null} 
                        className={`projects ${(entryType === PROJECTS_TYPE) ? 'selected' : ''}`}
                        onClick={()=>{handleEntryTypeChange(PROJECTS_TYPE)}}
                    >
                        Projects
                    </Button>
                    {' '}
                    <Button 
                        variant={null} 
                        className={`activities ${(entryType === ACTIVITIES_TYPE) ? 'selected' : ''}`}
                        onClick={()=>{handleEntryTypeChange(ACTIVITIES_TYPE)}}
                    >
                        Activities
                    </Button>
                </div>
            </div>
            {
                !errorEncountered ?
                    <>
                    {
                        entries ?
                            <EntryCardDisplay entries={entries} appliedFilters={appliedFilters} setSelEntry={setSelEntry} />
                            :
                            null
                    }
                    </>
                :
                    <>
                        <Alert variant="warning" className="entry-menu-error-msg">
                            <Alert.Heading>Oh no! We ran into an issue!</Alert.Heading>
                            <p>
                                We are unable to fetch the latest entries from the database!
                                For now, enjoy looking over the available entries.
                                Please contact me about this issue!
                            </p>
                        </Alert>
                        {
                            (entries && entries.length > 0) ?
                                <EntryCardDisplay entries={entries} appliedFilters={appliedFilters} setSelEntry={setSelEntry} />
                            :
                                null
                        }
                    </>
            }

        </div>
    ) 
}

export default EntryMenu;
