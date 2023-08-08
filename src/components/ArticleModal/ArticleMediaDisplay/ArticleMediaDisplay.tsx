import React, {useState } from 'react';
import './ArticleMediaDisplay.scss';
import ReactPlayer from 'react-player';
import ImageGallery from '../../ImageGallery/ImageGallery';
import { Image } from 'react-bootstrap';
import { useProjectConfig } from '../../../hooks/useProjectConfig';


interface IArticleMediaDisplay {
    videoUrl?: string,
    images?: any,
    articleMetadata: any,
}
function ArticleMediaDisplay(props: IArticleMediaDisplay) {
    const { 
        videoUrl, 
        images,
        articleMetadata
    } = props
    
    const [isVideoError, setIsVideoError] = useState(false) 
    const {thumbnail} = useProjectConfig({prjMetadata: articleMetadata })

    const handleVideoError = () => {
        setIsVideoError(true)
    }

    return (
        <div className="emd-cntr">
            {

            }
            {
                videoUrl && !isVideoError ?
                <ReactPlayer
                    className="emd-media"
                    url={videoUrl}
                    onError={handleVideoError}
                />
                :
                <div
                    className='article-thumbnail-container'
                >
                    <Image 
                        src={thumbnail}
                    />
                </div>
            }
            {
                (images && images.length > 0) &&
                <ImageGallery images={images} />
            }
        </div>
    )
}

export default ArticleMediaDisplay;

