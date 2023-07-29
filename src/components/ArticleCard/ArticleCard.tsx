import React, { useEffect, useContext}  from 'react';
import "./ArticleCard.scss"
import { Card } from 'react-bootstrap';
import { useProjectConfig } from '../../hooks/useProjectConfig';
import { IProjectMetadata } from '../../models/IProjectMetadata';
import { ArticleContext } from '../../contexts/ArticleContext';
import RSIcon from '../RSIcon/RSIcon';
import { ERSIcon } from '../../enums/ERSIcon';
import RSButton from '../RSButton/RSButton';


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
            <Card.Body >
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
            </Card.Body>
            <Card.Footer>
                {
                    demoUrl &&
                    <RSButton 
                        as="a"
                        className="demo-btn"
                        href={demoUrl}
                        hasTarget
                    >
                        <span className='demo-btn-icon'>
                            <RSIcon iconName={ERSIcon.Play} />
                        </span>
                        <span>Demo</span>
                    </RSButton>
                }
                <RSButton
                    className="float-right read-more shadow"
                    onClick={handleSelectedEntryCard}
                >
                    Read More
                </RSButton>
            </Card.Footer>
        </Card>
    )
}

export default ArticleCard;

