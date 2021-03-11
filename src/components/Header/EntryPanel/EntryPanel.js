import React, {useContext, useEffect, useState} from 'react';
import "./EntryPanel.css";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import EntryListing from "./EntryListing/EntryListing";
import {PortfolioContext} from "../../../PortfolioContext";
var appConfig = require('../../../app-config');
var dbController = require('../../../database/database');
var util = require('../../../helper/utilities');

function EntryPanel() {
    // const { handleSelEntry, entryType} = props
    const {entryType, dbConfig} = useContext(PortfolioContext);

    const [entries, setEntries] = useState(null);

    const [filter, setFilter] = useState([]);
    const [filterTitle, setFilterTitle] = useState('');
    const [filterItems, setFilterItems] = useState([]);

    function handleFilter(newFilter)
    {
        setFilter([...newFilter]);
    }

    const createSetOfItems = async (entriesList) =>
    {
        if (!entriesList || entriesList.length === 0)
            return [];
        const propertyName = entryType ? await appConfig.getConfig('ActivityFilterBy') : await appConfig.getConfig('ProjectFilterBy');
        let itemSet = new Set();

        // create a set of items from all entries
        entriesList.forEach(entry => {
            const items = entry[propertyName];
            items.forEach(item => itemSet.add(item.toLowerCase()));
        })

        // if we are building the project filter...
        if (!entryType)
        {
            // push all project tags to the top of the list in alphabetical order
            let prjTags = await util.getProjectTags();
            let prjTagsArray = [];
            prjTags.forEach(tag => {
                let tagName = tag.name.toLowerCase();

                if (itemSet.has(tagName))
                {
                    prjTagsArray.push(tagName);
                    itemSet.delete(tagName);
                }
            });

            prjTagsArray = util.sortAscendingOrder(prjTagsArray);
            let techArray = util.sortAscendingOrder(Array.from(itemSet));
            prjTagsArray.push(...techArray);
            itemSet = prjTagsArray;
            
        }
        else
        {
            itemSet = Array.from(itemSet);
            itemSet = util.sortAscendingOrder(itemSet);
        }
        
        return itemSet;
    }

    async function orderEntries(entryArr)
    {
        return entryArr.sort((entryA, entryB) => (entryA.index < entryB.index) ? 1 : -1)
    }
    
    useEffect(() => {
        const loadEntryPanelData = async () =>
        {
            // console.log("Calling function!");
            // change the title of the drop down menu
            const title = await appConfig.getConfig(`${entryType ? 'ActivityFilterBy' : 'ProjectFilterBy'}`)
            
            // getting entries based off of entry type 
            let collectionName = entryType ? dbConfig.ActivityCollectionName : dbConfig.ProjectCollectionName;
            let entryList = null
            try
            { 
                entryList = await dbController.getEntries(collectionName)
                entryList = await orderEntries(entryList);
            }
            catch (error)
            {
                console.log(error);
            }
            const setOfFilterItems = await createSetOfItems(entryList);
            

            setFilterTitle(title);
            setEntries(entryList);
            setFilterItems(setOfFilterItems);

        }
        loadEntryPanelData();
    }, [entryType, dbConfig])

    return filter ? (
        <div className="entry-panel">
            <DropDownMenu 
                title={filterTitle} 
                items={filterItems} 
                multiSelect={true}
                filter={filter}
                handleFilter={handleFilter}
            />
            <EntryListing 
                entryType={entryType} 
                filter={filter}
                entries={entries}
            />
        </div>
    ) : null
}

export default EntryPanel;
