import React, { useContext, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { ERSTabType } from '../../enums/ERSTabType';
import { IRSTab } from '../../models/IRSTab';
import './RSTabs.scss'

type RSTabsProps = {
    tabs: IRSTab[],
    defaultActiveKey: ERSTabType
}

function RSTabs( props : RSTabsProps) {

    const {
        tabs,
        defaultActiveKey
    } = props

    return (
        <div
            className={`rs-tab-wrapper`}
        >
            <Tabs
                className={`mb-3 rs-tabs`}
                defaultActiveKey={defaultActiveKey}
            >
                {
                    tabs && tabs.length > 0 && tabs.map((tab) => 
                        {
                            const {
                                tabType,
                                component,
                                title,
                                className
                            } = tab
                            const tabTitle = title ?? tabType;
                        
                            return ( 
                            <Tab 
                                className={`rs-tab ${className ?? ''}`} 
                                eventKey={tabType} 
                                title={tabTitle}
                            >
                                {component}
                            </Tab>
                            )
                        }
                    )
                }
                
            </Tabs>
        </div>
    )
}

export default RSTabs;

