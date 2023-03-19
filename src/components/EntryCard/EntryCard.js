import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./EntryCard.css"
import { useEntryContext } from '../../hooks/useEntryContext';


function EntryCard({ data }) {
    const {
        name,
        type,
        icon
    } = data

    const { setSelEntry } = useEntryContext()
    const handleEntryCardClick = () => {
        setSelEntry(data)
    }

    const thumbnailStyle = { backgroundColor: icon.color }

    return (
        <div
            className="entry-card-cntr"
            onClick={handleEntryCardClick}
        >
            <div
                className="ec-thumbnail"
                style={thumbnailStyle}
            >
                <span>
                    <FontAwesomeIcon icon={[icon.type, icon.name]} />
                </span>
            </div>
            <div
                className="ec-descr"
            >
                <p className='ec-name'>{name}</p>
                <p className='ec-type'>{type}</p>
            </div>
        </div>
    )
}

export default EntryCard;

