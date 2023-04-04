import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { IArticleTab } from '../../models/IArticleTab';

import "./ArticleTabs.scss";

interface IArticleTabsProps {
    tabs: IArticleTab[],
}



const ArticleTabs = ({ tabs }: IArticleTabsProps) => {
    const [curTabKey, setCurTabKey] = useState('');

    useEffect(() => {
        // get the first tab
        if (tabs && tabs.length > 0) {
            const firstTab: IArticleTab = tabs[0]
            const curTabKey = firstTab.eventKey;
            setCurTabKey(curTabKey);
        }
    }, [])

    const handleTabChange = (e: any) => {
        setCurTabKey(e)
    }

    return (
        <Tabs
            id="article-tab-container"
            activeKey={curTabKey}
            onSelect={handleTabChange}
            className={`mb-3 article-tab-container`}
        >
            {
                tabs.map((tab: IArticleTab) => {
                    return (
                        <Tab 
                            eventKey={tab.eventKey} 
                            title={tab.title}
                            className={`mb-3 ${tab.className ?? ''}`}
                        >
                            {tab.content && tab.content()}
                        </Tab>
                    )
                })
            }
        </Tabs>
    );
}

export default ArticleTabs;