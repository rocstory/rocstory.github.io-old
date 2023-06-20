import React, {  useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';
import EntryLinkTrigger from './EntryLinkTrigger/EntryLinkTrigger';

import ArticleOverview from './EntryOverview/ArticleOverview';
import { ArticleContext } from '../../contexts/ArticleContext';

import ArticleMediaDisplay from './ArticleMediaDisplay/ArticleMediaDisplay';

import './ArticleModal.scss';
import { useArticleRetriever } from '../../hooks/useArticleRetriever';
import ColonialCarnivalArticle from '../Articles/ColonialCarnivalArticle';
import { EProjectId } from '../../enums/EProjectId';


function ArticleModal() {
    const [show, setShow] = useState(true);
    const [selArticleId, setSelArticleId] = useState(undefined);

    const {
        selArticle,
        updateSelArticle,
    } = useContext(ArticleContext)

    const {
        id,
        repoUrl,
        demoUrl,
        video,
        images
    } = selArticle

    const handleHideModal = () => {
        setShow(false)
        updateSelArticle(undefined)
    }

    return selArticle && (
        <Modal
            show={show}
            onHide={handleHideModal}
            dialogClassName="entry-cntr"
        >
            {(selArticleId === EProjectId.ColonialCarnival) && <ColonialCarnivalArticle />}
        </Modal>
    )
}

export default ArticleModal;

