import React from 'react';
import './ArticleMediaDisplay.scss';
import Carousel from 'react-bootstrap/Carousel';
import ReactPlayer from 'react-player';
import ImageCarousel from '../../ImageCarousel/ImageCarousel';
import ImageGallery from '../../ImageGallery/ImageGallery';


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
                <ImageGallery images={images} />
                // <ImageCarousel images={images} />
            }
        </div>
    )
}

export default ArticleMediaDisplay;

