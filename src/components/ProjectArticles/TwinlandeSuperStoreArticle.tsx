import React, { useContext } from 'react';
import { IArticleTab } from '../../models/IArticleTab';

const AboutTab = () => {

    return (
        <div>
            <div>
                <h1>What is Twinlande Super Store (TSS)?</h1>
                <p>Twinlande Super Store is a web app that I am 
                    building with my community on TikTok and 
                    other social media platforms.
                </p>
            </div>
        </div>
    )
   
}

const StoryTab = () => {
    return (
        <div>
            <div>
                <h1>The Why?</h1>
                <p>
                    The reason why I created Twinlande Super Store is to 
                    step out of my comfort zone. The project is intended to be built
                    with a community of other people.
                </p>
            </div>
        </div>
    )
}

const TechnologyTab = () => {
    return (
        <div>
            This is the technology tab
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
    {
        eventKey: 'technology',
        title: 'technology',
        content: TechnologyTab
    }

]


export {
    TwinlandeTabs
}

