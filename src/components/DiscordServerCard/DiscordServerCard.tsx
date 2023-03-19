import React from 'react'
import { Card, Button, ButtonGroup } from 'react-bootstrap'

import './DiscordServerCard.scss'

import serverLogoIcon from '../../assets/rsicon_full.png'

const DiscordServerCard = () => {

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
                    <Button className={`dsc-btn join-server`}>Join Server</Button>
                    <Button className={`dsc-btn read-more`}>Read More</Button>
                </div>
               
            </Card.Body>
        </Card>
    )
}

export default DiscordServerCard;