import React, {  useContext, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import EntryLinkTrigger from './EntryLinkTrigger/EntryLinkTrigger';

import { ArticleContext } from '../../contexts/ArticleContext';

import './ArticleModal.scss';
import ColonialCarnivalArticle from '../Articles/ColonialCarnivalArticle/ColonialCarnivalArticle';
import { EProjectId } from '../../enums/EProjectId';


function ArticleModal() {
    const [show, setShow] = useState(true);

    const {
        selArticle,
        updateSelArticle,
    } = useContext(ArticleContext)

    const handleHideModal = () => {
        setShow(false)
        updateSelArticle(undefined)
    }

    const selArticleId = selArticle.id;

    // TODO : Find a better way to render the modal body
    return selArticle && (
        <Modal
            show={show}
            centered={true}
            // backdrop={true}
            onHide={handleHideModal}
            dialogClassName="article-modal-wrapper"
        >
            {(selArticleId === EProjectId.ColonialCarnival) && <ColonialCarnivalArticle articlePayload={selArticle} />}
            {(selArticleId === EProjectId.PawBytes) && <></>}
            <Modal.Footer>
                <div className={``}>
                    <Button
                        className={'rs-close'}
                        as={"button"}
                        variant={' '}
                        onClick={handleHideModal}
                    >
                        Close
                    </Button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export default ArticleModal;

