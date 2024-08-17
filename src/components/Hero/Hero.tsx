import Container from 'react-bootstrap/Container';
import IntroCard from './IntroCard/IntroCard';
import "./Hero.scss";
import { Image } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import MyContacts from './MyContacts/MyContacts';
import useRSImages from '../../hooks/useRSImages';
// import useRSImages from '../../helpers/imageHelper';

function Hero() {

    const {
        ProfilePicture,
    } = useRSImages();

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