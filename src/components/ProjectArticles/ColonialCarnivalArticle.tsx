import React, { useContext } from 'react';
// import './EntryOverview.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IArticleTab } from '../../models/IArticleTab';


const AboutTab = () => {

    return (
        <div>
            This tab is about the Colonial Carnival project
        </div>
    )
   
}

const StoryTab = () => {
    return (
        <div>
            This is the story about Colonial Carnival
        </div>
    )
}


const ColonialCarnivalTabs: IArticleTab[] = [
    {
        eventKey: "about",
        title: "about",
        content: AboutTab
    },
    {
        eventKey: "story",
        title: "Story",
        content: StoryTab
    }
]


export {
    ColonialCarnivalTabs
}

