import React from 'react';
import './EntryLinkTrigger.css';
import { Button } from 'react-bootstrap';
import RSIcon from '../../RSIcon/RSIcon';
import { ERSIcon } from '../../../enums/ERSIcons';

enum EELT_Type {
    Github = "github",
    Demo = "demo"
}

type EntryLinkTriggerProps = {
    type: string,
    linkUrl: string
    className?: string
}

function EntryLinkTrigger({ type, linkUrl, className } : EntryLinkTriggerProps) {
    const isGithubTrigger = (type === EELT_Type.Github);
    const eltTypeClassName = isGithubTrigger ? 'elt-github' : 'elt-demo';
    const eltIcon = isGithubTrigger ? <RSIcon iconName={ERSIcon.Github} /> : <RSIcon iconName={ERSIcon.Play} />;
    const eltLabel = isGithubTrigger ? "github" : "demo";
    const addClassName = className ?? '';

    return (
        <Button
            as="a"
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant={"-"}
            className={`elt-btn ${eltTypeClassName} ${addClassName}`}
        >
            <span className="elt-icon m-0">
                {eltIcon}
            </span>
            <span className="elt-label ml-2">{eltLabel}</span>

        </Button>
    )
}

export default EntryLinkTrigger;

