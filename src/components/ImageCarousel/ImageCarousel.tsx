import React from 'react';
import './ImageCarousel.scss';
import Carousel from 'react-bootstrap/Carousel';
import ReactPlayer from 'react-player';


interface IImageCarousel{
    images: any
}

function ImageCarousel(props: IImageCarousel) {
    const { images } = props

    return (
        <div
            className={'img-carousel'}
        >
            <Carousel
                className="image-carousel"
                pause="hover"
            >
                {
                    images.map((image: any) =>
                        <Carousel.Item
                            className="image-item"
                            key={image.url}
                        >
                            <img
                                className="d-block w-100 carousel-img"
                                src={image.url}
                                alt={image.alt}
                            />
                        </Carousel.Item>
                    )
                }
            </Carousel>
        </div>
    )
}

export default ImageCarousel;

