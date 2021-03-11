import React, { useState, useEffect} from 'react';
import "./EntryListing.css";
import EntryBubble from "./EntryBubble/EntryBubble";
var appConfig = require('../../../../app-config');

function EntryListing(props) {
    const { entryType, filter, entries } = props
    const [projectFilter, setProjectFilter] = useState('');
    const [activityFilter, setActivityFilter] = useState('');
    const [modFilter, setModFilter] = useState([]);

    function isWithinFilter(entry) {
        try {
            if (!entry) throw new Error("Entry does not exist");
            if (!modFilter || modFilter.length === 0) return true;
            let propToFilter = entryType ? activityFilter : projectFilter;
            let items = entry[propToFilter];

            const found = items.find(item => modFilter.indexOf(item.toLowerCase()) >= 0)
            return found;
        }
        catch (error) {
            // console.error(error);
            return false;
        }
    }

    useEffect(() => {
        function modifyFilter() {
            const moddedFilter = filter.map(mod => mod.toLowerCase());

            setModFilter([...moddedFilter]);
        }

        modifyFilter();
    }, [filter])

    useEffect(() => {
        async function loadFilterSets() {
            const prjFilter = await appConfig.getConfig('ProjectFilterBy');
            const actFilter = await appConfig.getConfig('ActivityFilterBy');

            setProjectFilter(prjFilter);
            setActivityFilter(actFilter);
        }

        loadFilterSets();
    }, [])

    return entries ? (
        <ul className="entry-listing entry-panel-chld-height">
            {
                entries.map(entry =>
                    isWithinFilter(entry) ?
                        <EntryBubble entry={entry} key={entry.name} /> : null)
            }
        </ul>
    ) : null
}

export default EntryListing;
