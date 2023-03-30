import React, { useContext } from 'react';
// import './EntryOverview.scss';
import { IArticleTab } from '../../models/IArticleTab';


const AboutTab = () => {

    return (
        <div>
            This tab is about Twinlande Super Store
        </div>
    )
   
}

const StoryTab = () => {
    return (
        <div>
            This is the story about Twinlande Super Store
        </div>
    )
}


const TwinlandeTabs: IArticleTab[] = [
    {
        eventKey: "about",
        title: "about",
        content: AboutTab
    },
    {
        eventKey: "story",
        title: "Story",
        content: StoryTab
    },

]


export {
    TwinlandeTabs
}

