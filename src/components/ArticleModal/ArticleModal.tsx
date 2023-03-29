import React, {  useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';
import EntryLinkTrigger from './EntryLinkTrigger/EntryLinkTrigger';
// import appConfig from '../../appConfig';
// import ArticleMediaDisplay from './ArticleMediaDisplay/ArticleMediaDisplay';
import ArticleOverview from './EntryOverview/ArticleOverview';
import CollabListing from '../CollabListing/CollabListing';
import { ArticleContext } from '../../contexts/ArticleContext';

import './Entry.scss';
import ArticleMediaDisplay from './ArticleMediaDisplay/ArticleMediaDisplay';

enum EELT_Type {
    Github = "github",
    Demo = "demo"
}

interface IArticleProps {
    selArticle: any
}

function ArticleModal({selArticle} : IArticleProps) {
    const [show, setShow] = useState(true);

    const {
        repoUrl,
        demoUrl,
        video,
        images
    } = selArticle

    const {
        updateSelArticle,
    } = useContext(ArticleContext)

    const handleHideModal = () => {
        setShow(false)
        updateSelArticle(undefined)
    }

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
                    tabs={[]}
                />
            </Modal.Body>
            <Modal.Footer >
                {/* <CollabListing /> */}

            </Modal.Footer>
        </Modal>
    )
}

export default ArticleModal;

