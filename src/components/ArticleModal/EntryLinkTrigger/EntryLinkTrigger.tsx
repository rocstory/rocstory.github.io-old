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
}

function EntryLinkTrigger({ type, linkUrl } : EntryLinkTriggerProps) {
    const isGithubTrigger = (type === EELT_Type.Github);
    const eltTypeClassName = isGithubTrigger ? 'elt-github' : 'elt-demo';
    const eltIcon = isGithubTrigger ? <RSIcon iconName={ERSIcon.Github} /> : <RSIcon iconName={ERSIcon.Play} />;
    const eltLabel = isGithubTrigger ? "github" : "demo";

    return (
        <Button
            as="a"
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant={undefined}
            className={`elt-btn ${eltTypeClassName}`}
        >
            <span className="elt-icon m-0">
                {eltIcon}
            </span>
            <span className="elt-label ml-2">{eltLabel}</span>

        </Button>
    )
}

export default EntryLinkTrigger;

