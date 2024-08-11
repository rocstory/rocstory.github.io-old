import Container from 'react-bootstrap/Container';
import IntroCard from './IntroCard/IntroCard';
import { ProfilePicture } from '../../helpers/imageHelper';
import "./Hero.scss";
import { Image } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import MyContacts from './MyContacts/MyContacts';

function Hero() {

    return (
        <Container
            className='rs-hero'
            fluid
        >
            <div
                className='rs-hero-wrapper'
            >
                <div
                    className='hero-descr-wrapper'
                >
                    <div className='hero-descr'>
                        <IntroCard />
                        <MyContacts />
                    </div>
                </div>


                <div className='prof-pic-wrapper'>
                    <Image src={ProfilePicture} />
                </div>

            </div>
        </Container>
    )
}

export default Hero;