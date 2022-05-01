import React, { useEffect, useContext, useState} from 'react';
import { PortfolioContext } from '../../../contexts/PortfolioContext';
import './TechnologyListing.css';
// import Tech from './Tech/Tech';


function TechnologyListing()
{
    const {selEntry} = useContext(PortfolioContext)
    const {
        tags
    } = selEntry

    return (
        <div className="tl-cntr h-100">
            {
                // tags.map(tag => <Tech key={tag} name={tag} />)
            }
        </div>
    )
}

export default TechnologyListing;

