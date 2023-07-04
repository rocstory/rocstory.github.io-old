import React from 'react';
import { Modal } from 'react-bootstrap';

import "../ArticleModal.scss"
import EntryLinkTrigger from '../EntryLinkTrigger/EntryLinkTrigger';

enum EELT_Type {
    Github = "github",
    Demo = "demo"
}

function ArticleResources ({ repoUrl, demoUrl }: any) {

    
    return (
        <div className='elt-cntr'>
            {repoUrl && <EntryLinkTrigger type={EELT_Type.Github} linkUrl={repoUrl} className="github-hb"/>}
            {demoUrl && <EntryLinkTrigger type={EELT_Type.Demo} linkUrl={demoUrl} />}
        </div>
    )
}

export default ArticleResources;

