import { url } from 'inspector';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './ImageGallery.scss';
import ImageModal from './ImageModal/ImageModal';

interface IImageDisplay {
    images: any[]
}

function ImageGallery(props: IImageDisplay) {
    const { 
        images
    } = props

    const [showModal, setShowModal] = useState(false);
    const [selImgSrc, setSelImgSrc] = useState<undefined | string>(undefined);


    const handleImgClick = (imgUrl: string) => {

        setShowModal(true);
        setSelImgSrc(imgUrl)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <div
            className="gallery-container"
        >
            <div className="gallery">
                {
                    images && images.length > 0 &&
                    images.map(image => {
                        const bgImgStyle = {backgroundImage: `url(${image.url})`, backgroundSize: 'cover'}
                        return <div
                            className={'gallery-item shadow'}
                            onClick={() => handleImgClick(image.url)}
                            style={bgImgStyle}
                        >
                            
                        </div>
                    })
                }
            </div>
            {showModal && 
            <ImageModal  
                imgSrc={selImgSrc}
                show={showModal}
                handleCloseModal={handleCloseModal}
            />}
        </div>
    )
}

export default ImageGallery;

