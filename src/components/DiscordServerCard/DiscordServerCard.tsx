import React, { useContext } from 'react'
import { Card, Button, Image} from 'react-bootstrap'
import { ArticleContext } from '../../contexts/ArticleContext'
import { EProjectId } from '../../enums/EProjectId'
import { useImageRetriever } from '../../hooks/useImageRetriever'
import { IArticleMetadata } from '../../models/IArticleMetadata'
import roclabsMetadata from "../../metadata/roclabs_metadata.json"

import './DiscordServerCard.scss'


const DiscordServerCard = () => {

    const discordInviteUrl = roclabsMetadata.serverInviteUrl; 
    const {serverLogoIcon} = useImageRetriever(); 

    const discordArticleMD : IArticleMetadata = {
        id: EProjectId.RocLabs,
        name: 'Roc Labs',
        index: 0,
    }

    const {
        updateSelArticle
    } = useContext(ArticleContext)

    const handleReadMoreClick = () => {

        updateSelArticle(discordArticleMD)
    }

    return (
        <Card
            className={'shadow dsc-container'}
            style={{ width: '18rem' }}
        >
            <Image 
                className={`dsc-img`}
                roundedCircle
                src={serverLogoIcon} 
            />
            <Card.Body>
                <Card.Title className="text-center dsc-title">Roc Labs</Card.Title>
                <div className={'dsc-btn-container'}>
                    <Button 
                        as={'a'} 
                        className={`dsc-btn join-server shadow`}
                        href={discordInviteUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                    >Join Server</Button>
                    <Button 
                        className={`dsc-btn read-more shadow`}
                        onClick={handleReadMoreClick}
                    >Read More</Button>
                </div>
               
            </Card.Body>
        </Card>
    )
}

export default DiscordServerCard;