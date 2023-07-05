import React, {useState}from 'react';
import { Image, Modal } from 'react-bootstrap';
import './ImageModal.scss';

type ImageModalProps = {
    imgSrc: string | undefined,
    show: boolean,
    handleCloseModal: any,
}

function ImageModal(props: ImageModalProps) {
    const { 
        imgSrc,
        show,
        handleCloseModal
    } = props


    return (
        <Modal 
            dialogClassName={`img-modal`}
            show={show}
            centered
            onHide={handleCloseModal}
            
        >
            <Modal.Header className={'img-header'} closeButton></Modal.Header>
            <Modal.Body>
                <div
                    className={`img-container`}
                >
                    <Image
                        className={`modal-img shadow`}
                        src={imgSrc}
                    />
                </div>
            </Modal.Body>

        </Modal>
    )
}

export default ImageModal;

