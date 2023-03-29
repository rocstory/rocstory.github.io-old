import React, {useState, useEffect, useContext}  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./ArticleCard.scss"
import { Card, Button } from 'react-bootstrap';
import { useEntryConfig } from '../../hooks/useEntryConfig';
import { IProjectEntry } from '../../models/IProjectEntry';
import { ArticleContext } from '../../contexts/ArticleContext';


type ArticleCardProps = {
    data: IProjectEntry
}
function ArticleCard({ data } : ArticleCardProps ) {
    const {
        id,
        name,
        type,
        caption,
        demoUrl
    } = data

    const { updateSelArticle} = useContext(ArticleContext);
    const { thumbnail }  = useEntryConfig({entryId: id})

    
    const handleSelectedEntryCard  =  () => {
        // console.log("handling selected entry:", data)
        updateSelArticle(data)
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
                    className="float-right read-more shadow"
                    onClick={handleSelectedEntryCard}
                >
                    Read More
                </Button>

            </Card.Body>
        </Card>
    )
}

export default ArticleCard;

