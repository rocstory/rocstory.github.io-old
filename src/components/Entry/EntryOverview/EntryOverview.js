import React, { useEffect, useContext, useState} from 'react';
import './EntryOverview.css';
import { PortfolioContext } from '../../../contexts/PortfolioContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import appConfig from '../../../appConfig';

const {EntryRefLinkIcon} = appConfig

function EntryOverview()
{
    const {selEntry} = useContext(PortfolioContext);

    const {
        startdate, 
        refLinks
    } = selEntry

    console.log(selEntry)
    return (
        <div className="eo-cntr">
            <p className="eo-created">
                Created: {`${startdate}`}
            </p>
            {
                <ul className="ref-links">
                {
                    refLinks.map(link => 
                        <li
                            
                        >
                            <a
                                href={link.url}
                                target="_blank"
                            >
                                <span><FontAwesomeIcon icon={EntryRefLinkIcon} /></span>
                                <span>{link.label}</span>
                            </a>
                        </li>)
                }
            </ul>

            }
        </div>
    )
}

export default EntryOverview;

