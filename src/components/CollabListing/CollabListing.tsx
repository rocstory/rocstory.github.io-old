import React from 'react';
import './CollabListing.scss';
import ContactCard from '../ContactCard/ContactCard'
import { IContactCard } from '../../models/IContactCard';

type CollabListProps = {
    collabList: IContactCard[],
}

function CollabListing( props : CollabListProps ) {
    
    const {
        collabList
     } = props

    return (

        <div className='collab-cntr'>
            <h2 className='collab-title'> Collaborators</h2>
            <span className='collab-descr'>These are the people who helped me with this project</span>
            <div className='cl-cntr'>
                {
                    collabList.map((collab, index) =>
                        <ContactCard
                            key={`contact-card-${collab.cid}${index}`}
                            contactId={collab.cid}
                            role={collab.role ? collab.role : undefined}

                        />
                    )
                }

            </div>
        </div>
    )
}

export default CollabListing;

