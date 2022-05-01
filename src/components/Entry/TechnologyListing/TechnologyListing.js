import React, { useEffect, useContext, useState } from 'react';
import { PortfolioContext } from '../../../contexts/PortfolioContext';
import './TechnologyListing.css';
import Tech from './Tech/Tech';


function TechnologyListing() {
    const { selEntry } = useContext(PortfolioContext)
    const {
        tags
    } = selEntry

    return (
        <div className="eot-cntr">
            <h2 className="eot-title"> Technologies</h2>
            <span className='eot-caption'>The technologies listed below are what was used to build this project</span>
            <div className="tl-cntr h-100">
                {
                    tags.map(tag => <Tech key={tag} name={tag} />)
                }
            </div>
        </div>

    )
}

export default TechnologyListing;

