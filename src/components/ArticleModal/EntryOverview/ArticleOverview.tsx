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
    const { selArticle } = useContext(ArticleContext);

    return (
        <div className="eo-cntr">
            <ArticleTabs
                tabs={[]}
            />
        </div>
    )
}

export default ArticleOverview;



// function EntryOverview() {
//     const { selEntry } = useContext(EntryContext);

//     const {
//         startdate,
//         refLinks,
//         notes
//     } = selEntry

//     return (
//         <div className="eo-cntr">
//             <p className="eo-created">
//                 Created: {`${startdate}`}
//             </p>
//             {
//                 refLinks && <ul className="ref-links">
//                     {
//                         refLinks.length > 0 && refLinks.map((link: any, index: any) =>
//                             <li key={index}>
//                                 <a
//                                     href={link.url}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                 >
//                                     <span className="eol-icon"><FontAwesomeIcon icon={["fas", "link"]} /></span>
//                                     <span className="eol-label">{link.label}</span>
//                                 </a>
//                             </li>)
//                     }
//                 </ul>
//             }
//             {
//                 notes &&
//                 <div
//                     className="eod-cntr"
//                 >
//                     {
//                         notes.map((note: any) =>
//                             <p key={note}>
//                                 {note}
//                             </p>)
//                     }

//                 </div>
//             }
//             {/* <TechnologyListing /> */}

//         </div>
//     )
// }

// export default EntryOverview;

