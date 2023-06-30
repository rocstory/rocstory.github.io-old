import React from 'react';
import './CollabListing.scss';
import ContactCard from '../ContactCard/ContactCard'
import { IContactCard } from '../../models/IContactCard';

type CollabListProps = {
    collabList: IContactCard[],
    description?: string,

}

function CollabListing( props : CollabListProps ) {
    
    const {
        collabList,
        description
     } = props

    return (

        <div className='collab-cntr'>
            <div className={`collab-heading`}>
                <h2 className='collab-title'> Collaborators</h2>
                {
                    description && <p className='collab-descr'>{description}</p>
                }
            </div>
            
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

