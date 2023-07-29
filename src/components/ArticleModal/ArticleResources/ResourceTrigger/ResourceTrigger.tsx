import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { IArticleResource } from '../../../../models/IArticleResource';
import { ERSIcon } from '../../../../enums/ERSIcon';
import RSIcon from '../../../RSIcon/RSIcon';

import './ResourceTrigger.scss';
import { EArticleResourceType } from '../../../../enums/EArticleResouceType';
import RSButton from '../../../RSButton/RSButton';



type ResourceTriggerProps = {
    resource: IArticleResource,
}

function ResourceTrigger(props : ResourceTriggerProps) {
    const {
        resource
    } = props

    const {
        title,
        src,
        type,
        iconName
    } = resource

    const rsIconName = iconName ?? ERSIcon.Link

    const getTriggerClassName = () => {
        switch (type) {
            case EArticleResourceType.Demo:
                return 'rt-demo' //{backgroundColor: '#3cb043', color: 'white'}
            case EArticleResourceType.Github:
                return 'rt-github' //{backgroundColor: '#383838', color: 'white'};
            case EArticleResourceType.Discord:
                return 'rt-discord';
            default:
                return 'rt-standard' // {backgroundColor: 'white'};;
        }
    }

    const className = getTriggerClassName();

    return (
        
        <RSButton
            as="a"
            href={src}
            hasTarget
            className={`resource-trigger ${className}`}
        >
            <span className="resource-icon m-0">
                <RSIcon iconName={rsIconName} />
            </span>
            <span className="resource-title ml-2">{title}</span>

        </RSButton>
    )
}

export default ResourceTrigger;

