import React, {  useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';
import EntryLinkTrigger from './EntryLinkTrigger/EntryLinkTrigger';

import ArticleOverview from './EntryOverview/ArticleOverview';
import { ArticleContext } from '../../contexts/ArticleContext';

import ArticleMediaDisplay from './ArticleMediaDisplay/ArticleMediaDisplay';

import './ArticleModal.scss';
import { useArticleRetriever } from '../../hooks/useArticleRetriever';


enum EELT_Type {
    Github = "github",
    Demo = "demo"
}

function ArticleModal() {
    const [show, setShow] = useState(true);

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

    const { tabs } = useArticleRetriever(id); 

    const handleHideModal = () => {
        setShow(false)
        updateSelArticle(undefined)
    }

    console.log("Tabs:", id, tabs)


    return (
        <Modal
            show={show}
            onHide={handleHideModal}
            dialogClassName="entry-cntr"
        >
            <Modal.Header closeButton>
                <Modal.Title
                    id="entry-title"
                >
                    <span className="title">
                        {selArticle.name}
                    </span>
                    <span className='divider'>|</span>
                    <span className="entry-type">
                        {selArticle.type}
                    </span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    (repoUrl || demoUrl) &&
                    <div className='elt-cntr'>
                        {repoUrl && <EntryLinkTrigger type={EELT_Type.Github} linkUrl={repoUrl} />}
                        {demoUrl && <EntryLinkTrigger type={EELT_Type.Demo} linkUrl={demoUrl} />}
                    </div>
                }
                <ArticleMediaDisplay
                    videoUrl={video}
                    images={images} 
                />
                <ArticleOverview
                    tabs={tabs}
                />
            </Modal.Body>
            <Modal.Footer >
                {/* <CollabListing /> */}

            </Modal.Footer>
        </Modal>
    )
}

export default ArticleModal;

