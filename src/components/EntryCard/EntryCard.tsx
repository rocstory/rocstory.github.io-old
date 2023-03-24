import React, {useState, useEffect, useContext}  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./EntryCard.scss"
import { useEntryContext } from '../../hooks/useEntryContext';
import { Card, Button } from 'react-bootstrap';
import { useEntryConfig } from '../../hooks/useEntryConfig';
import { IProjectEntry } from '../../models/IProjectEntry';
import { EntryContext } from '../../contexts/EntryContext';


type EntryCardProps = {
    data: IProjectEntry
}
function EntryCard({ data } : EntryCardProps ) {
    const {
        id,
        name,
        type,
        caption,
        demoUrl
    } = data

    const { updateSelEntry} = useContext(EntryContext);
    const { thumbnail }  = useEntryConfig({entryId: id})

    
    const handleSelectedEntryCard  =  () => {
        updateSelEntry(data)
    }

    useEffect(() => {

    },[])


    return (
        <Card className='entry-card-container' >
            <Card.Img variant="top" src={thumbnail} />
            <Card.Body>
                <Card.Title
                    className="ec-title-container"
                >
                    <span className='entry-title'>{name}</span>
                    <span className="entry-type">{type}</span>
                </Card.Title>
                <Card.Text>
                    {caption}
                </Card.Text>
                {
                    demoUrl &&
                    <Button 
                        as="a"
                        className="demo-btn"
                        href={demoUrl}
                        target="_blank"
                        rel="noopeneer no referrer"
                    >
                        <span className='demo-btn-icon'><FontAwesomeIcon icon={['fas', 'play']}/></span>
                        <span>Demo</span>
                    </Button>
                }
                <Button
                    className="float-right"
                    onClick={handleSelectedEntryCard}
                >
                    Read More
                </Button>

            </Card.Body>
        </Card>
    )
}

export default EntryCard;

