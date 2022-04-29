import React, { useEffect, useContext, useState} from 'react';
import './Entry.css';
import { PortfolioContext } from '../../contexts/PortfolioContext';
import { Modal } from 'react-bootstrap';
import EntryLinkTrigger from './EntryLinkTrigger/EntryLinkTrigger';
import appConfig from '../../appConfig';
import EntryMediaDisplay from './EntryMediaDisplay/EntryMediaDisplay';
import EntryOverview from './EntryOverview/EntryOverview';

const {ELT_Type} = appConfig

function Entry()
{
    const [show, setShow] = useState(true);
    const {selEntry, setSelEntry} = useContext(PortfolioContext);

    const {
        video
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
                <div className='elt-cntr'>
                    <EntryLinkTrigger type={ELT_Type.github} linkUrl={'.'}/>
                    <EntryLinkTrigger type={ELT_Type.demo} linkUrl={'.'}/>
                </div>
                <EntryMediaDisplay />
                <EntryOverview />
                
            </Modal.Body>
        </Modal>
    )
}

export default Entry;

