import React from 'react';
import './EntryMediaDisplay.scss';
import Carousel from 'react-bootstrap/Carousel';
import ReactPlayer from 'react-player';
import { useEntryContext } from '../../../hooks/useEntryContext';


function EntryMediaDisplay() {
    const { selEntry } = useEntryContext()

    const {
        video,
        images
    } = selEntry

    return (
        <div className="emd-cntr">
            {
                video &&
                <ReactPlayer
                    className="emd-media"
                    url={video}
                />
            }
            {
                (images && images.length > 0) &&
                <Carousel
                    className="emd-carousel"
                    pause="hover"
                >
                    {
                        images.map(image =>
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
            }
        </div>
    )
}

export default EntryMediaDisplay;

