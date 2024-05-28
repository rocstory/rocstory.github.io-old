import Container from 'react-bootstrap/Container';
import IntroCard from './IntroCard/IntroCard';
import profPhoto from "../../../assets/imgs/profile-photo.png"
import "./Hero.scss";
import { Image } from 'react-bootstrap';

function Hero() {
    return (
        <Container
            className='rs-hero'
            fluid
        >
            <div
                className='rs-hero-wrapper'
            >
                <IntroCard />

                <div className='prof-pic-wrapper'>
                    <Image src={profPhoto} />
                </div>

            </div>
        </Container>
    )
}

export default Hero;