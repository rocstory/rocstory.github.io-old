import React, { useContext } from 'react';
import './EntryOverview.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import appConfig from '../../../appConfig';
import TechnologyListing from '../TechnologyListing/TechnologyListing';
import { ArticleContext } from '../../../contexts/ArticleContext';
import ArticleTabs from '../../ArticleTabs/ArticleTabs';


interface IArticleOverviewProps {
    tabs: any
}

function ArticleOverview(props: IArticleOverviewProps ) {
    const {tabs} = props;


    return (
        <div className="eo-cntr">
            <ArticleTabs
                tabs={tabs}
            />
        </div>
    )
}

export default ArticleOverview;
