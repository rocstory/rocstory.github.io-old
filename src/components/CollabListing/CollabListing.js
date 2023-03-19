import React from 'react';
import './CollabListing.css';
import ContactCard from '../ContactCard/ContactCard'
import { useEntryContext } from '../../hooks/useEntryContext';


function CollabListing() {
    const {
        selEntry
    } = useEntryContext()

    const {
        collaborators
    } = selEntry

    return collaborators && collaborators.length > 0 && (

        <div className='collab-cntr'>
            <h2 className='collab-title'> Collaborators</h2>
            <span className='collab-descr'>These are the people who helped me with this project</span>
            <div className='cl-cntr'>
                {
                    collaborators.map((collab, index) =>
                        <ContactCard
                            key={index}
                            contact={collab}
                        />
                    )
                }

            </div>
        </div>
    )
}

export default CollabListing;

