import React from 'react';
import './TechnologyListing.scss';
import Tech from './Tech/Tech';
import { useEntryContext } from '../../../hooks/useEntryContext';


function TechnologyListing() {
    const { selEntry } = useEntryContext()
    const {
        tags
    } = selEntry

    tags.sort()

    return tags && tags.length && (
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

