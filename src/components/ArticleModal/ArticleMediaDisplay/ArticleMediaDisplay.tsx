import React from 'react';
import './ArticleMediaDisplay.scss';
import Carousel from 'react-bootstrap/Carousel';
import ReactPlayer from 'react-player';


interface IArticleMediaDisplay {
    videoUrl: string,
    images: any
}
function ArticleMediaDisplay(props: IArticleMediaDisplay) {
    const { videoUrl, images} = props

    return (
        <div className="emd-cntr">
            {
                videoUrl &&
                <ReactPlayer
                    className="emd-media"
                    url={videoUrl}
                />
            }
            {
                (images && images.length > 0) &&
                <Carousel
                    className="emd-carousel"
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
            }
        </div>
    )
}

export default ArticleMediaDisplay;

