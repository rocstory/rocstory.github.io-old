import React from 'react'
import { Card, Button} from 'react-bootstrap'

import './DiscordServerCard.scss'

import serverLogoIcon from '../../assets/rsicon_full.png'

const DiscordServerCard = () => {

    const discordInviteUrl = "https://discord.gg/SkVZeKXk6H"

    return (
        <Card
            className={'shadow dsc-container'}
            style={{ width: '18rem' }}
        >
            <Card.Img 
                className={`dsc-img`}
                variant="top" 
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
                    <Button className={`dsc-btn read-more shadow`}>Read More</Button>
                </div>
               
            </Card.Body>
        </Card>
    )
}

export default DiscordServerCard;