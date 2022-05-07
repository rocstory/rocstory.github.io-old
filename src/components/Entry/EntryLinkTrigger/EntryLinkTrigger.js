import React from 'react';
import './EntryLinkTrigger.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import appConfig from '../../../appConfig';
const { ELT_Type } = appConfig

function EntryLinkTrigger({ type, linkUrl }) {
    const isGithubTrigger = (type === ELT_Type.github);
    const eltTypeClassName = isGithubTrigger ? 'elt-github' : 'elt-demo';
    const eltIcon = isGithubTrigger ? <FontAwesomeIcon icon={["fab", "github"]} /> : <FontAwesomeIcon icon={["fas", "play"]} />
    const eltLabel = isGithubTrigger ? "github" : "demo";

    return (
        <Button
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant={null}
            className={`elt-btn ${eltTypeClassName}`}
        >
            <span className="elt-icon">
                {eltIcon}
            </span>
            <span className="elt-label">{eltLabel}</span>

        </Button>
    )
}

export default EntryLinkTrigger;

