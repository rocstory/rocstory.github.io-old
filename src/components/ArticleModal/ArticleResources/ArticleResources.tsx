import React from 'react';
import { IArticleResource } from '../../../models/IArticleResource';

import "../ArticleModal.scss"
import ResourceTrigger from './ResourceTrigger/ResourceTrigger';


type ArticleResourcesProps = {
    resources: IArticleResource[]
}

function ArticleResources ( props : ArticleResourcesProps) {

    const {
        resources
    } = props
    
    return  resources && resources.length > 0 ? (
        <div className='elt-cntr'>
            {
                resources && resources.length &&
                resources.map((resource) => <ResourceTrigger resource={resource} />)
            }
        </div>
    )
    :
    <></>
}

export default ArticleResources;

