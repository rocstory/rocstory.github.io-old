import React, { useEffect, useContext, useState } from 'react';
import './Entry.css';
import { PortfolioContext } from '../../contexts/PortfolioContext';
import { Modal } from 'react-bootstrap';
import EntryLinkTrigger from './EntryLinkTrigger/EntryLinkTrigger';
import appConfig from '../../appConfig';
import EntryMediaDisplay from './EntryMediaDisplay/EntryMediaDisplay';
import EntryOverview from './EntryOverview/EntryOverview';
import CollabListing from '../CollabListing/CollabListing';

const { ELT_Type } = appConfig

function Entry() {
    const [show, setShow] = useState(true);
    const {
        selEntry,
        setSelEntry,

    } = useContext(PortfolioContext);

    const {
        repoUrl,
        demoUrl,
        collaborators
    } = selEntry

    const handleHideModal = () => {
        setShow(false)
        setSelEntry(undefined)
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
                    {selEntry.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    (repoUrl || demoUrl) &&
                    <div className='elt-cntr'>
                        {repoUrl && <EntryLinkTrigger type={ELT_Type.github} linkUrl={repoUrl} />}
                        {demoUrl && <EntryLinkTrigger type={ELT_Type.demo} linkUrl={demoUrl} />}
                    </div>
                }
                <EntryMediaDisplay />
                <EntryOverview />
            </Modal.Body>
            <Modal.Footer >
                <CollabListing />

            </Modal.Footer>
        </Modal>
    )
}

export default Entry;

