import React from 'react';
import { Modal } from 'react-bootstrap';

import "../ArticleModal.scss"

function ArticleTitle ({ entryName, categoryName }: any) {

    
    return (
        <Modal.Title
            className="article-title"
        >
            <span className="title">
                {entryName}
            </span>
            <span className='divider'>|</span>
            <span className="entry-type">
                {categoryName}
            </span>
        </Modal.Title>
    )
}

export default ArticleTitle;

