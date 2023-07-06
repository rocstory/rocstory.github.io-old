import React, {useState, useEffect, useContext}  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./ArticleCard.scss"
import { Card, Button } from 'react-bootstrap';
import { useProjectConfig } from '../../hooks/useProjectConfig';
import { IProjectMetadata } from '../../models/IProjectMetadata';
import { ArticleContext } from '../../contexts/ArticleContext';
import RSIcon from '../RSIcon/RSIcon';
import { ERSIcon } from '../../enums/ERSIcons';


type ArticleCardProps = {
    articleData: IProjectMetadata,
    
}
function ArticleCard({articleData}: ArticleCardProps ) {

    const {
        name,
        demoUrl,
        caption
    } = articleData

    const { updateSelArticle } = useContext(ArticleContext);
    const { thumbnail, prjType }  = useProjectConfig({prjMetadata: articleData})

    // const [prjType, setPrjType] = useState('')

    
    const handleSelectedEntryCard  =  () => {
        // console.log("handling selected entry:", data)
        updateSelArticle(articleData)
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
                    <span className="entry-type">{prjType}</span>
                </Card.Title>
                <Card.Text
                    className={'ac-caption'}
                >
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
                        <span className='demo-btn-icon'>
                            <RSIcon iconName={ERSIcon.Play} />
                        </span>
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

