import React, {  useContext, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import EntryLinkTrigger from './EntryLinkTrigger/EntryLinkTrigger';

import { ArticleContext } from '../../contexts/ArticleContext';

import './ArticleModal.scss';
import ColonialCarnivalArticle from '../Articles/ColonialCarnivalArticle/ColonialCarnivalArticle';
import { EProjectId } from '../../enums/EProjectId';
import PawBytesCafeArticle from '../Articles/PawBytesCafeArticle/PawBytesCafeArticle';
import TwinlandeSuperStoreArticle from '../Articles/TwinlandeSuperStoreArticle/TwinlandeSuperStoreArticle';
import LovelyFeathersArticle from '../Articles/LovelyFeathersArticle/LovelyFeathersArticle';
import ChevsEscapeArticle from '../Articles/ChevsEscapeArticle/ChevsEscapeArticle';
import RevealingRocArticle from '../Articles/RevealingRocArticle/RevealingRocArticle';
import GITRG3DCrayonArticle from '../Articles/GITRG3DCrayonArticle/GITRG3DCrayonArticle';
import GITRGMocapArticle from '../Articles/GITRGMocapArticle copy/GITRGMocapArticle';
import RocLabsArticle from '../Articles/RocLabsArticle.tsx/RocLabsArticle';


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
            dialogClassName="article-modal-wrapper article-modal"
        >
            {(selArticleId === EProjectId.RocLabs) && <RocLabsArticle articlePayload={selArticle} />}
            {(selArticleId === EProjectId.ColonialCarnival) && <ColonialCarnivalArticle articlePayload={selArticle} />}
            {(selArticleId === EProjectId.PawBytes) && <PawBytesCafeArticle articlePayload={selArticle} />}
            {(selArticleId === EProjectId.TwinlandeSuperStore) && <TwinlandeSuperStoreArticle articlePayload={selArticle} />}
            {(selArticleId === EProjectId.LovelyFeathers) && <LovelyFeathersArticle articlePayload={selArticle} />}
            {(selArticleId === EProjectId.ChevEscape) && <ChevsEscapeArticle articlePayload={selArticle} />}
            {(selArticleId === EProjectId.RevealingRoc) && <RevealingRocArticle articlePayload={selArticle} />}
            {(selArticleId === EProjectId.GITRGCrayon) && <GITRG3DCrayonArticle articlePayload={selArticle} />}
            {(selArticleId === EProjectId.GITRGMocap) && <GITRGMocapArticle articlePayload={selArticle} />}
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

