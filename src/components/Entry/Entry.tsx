import React, {  useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';
import EntryLinkTrigger from './EntryLinkTrigger/EntryLinkTrigger';
// import appConfig from '../../appConfig';
import EntryMediaDisplay from './EntryMediaDisplay/EntryMediaDisplay';
import EntryOverview from './EntryOverview/EntryOverview';
import CollabListing from '../CollabListing/CollabListing';
import { EntryContext } from '../../contexts/EntryContext';

import './Entry.scss';

enum EELT_Type {
    Github = "github",
    Demo = "demo"
}

function Entry() {
    const [show, setShow] = useState(true);
    const {
        selEntry,
        updateSelEntry,
    } = useContext(EntryContext)

    const {
        repoUrl,
        demoUrl,
    } = selEntry

    const handleHideModal = () => {
        setShow(false)
        updateSelEntry(undefined)
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
                        {selEntry.name}
                    </span>
                    <span className='divider'>|</span>
                    <span className="entry-type">
                        {selEntry.type}
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
                <EntryMediaDisplay />
                <EntryOverview />
            </Modal.Body>
            <Modal.Footer >
                {/* <CollabListing /> */}

            </Modal.Footer>
        </Modal>
    )
}

export default Entry;

