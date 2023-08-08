import React, { useContext, useState } from 'react';
import { Modal, Tab, Tabs } from 'react-bootstrap';
import { useProjectConfig } from '../../../hooks/useProjectConfig';
import ArticleMediaDisplay from '../../ArticleModal/ArticleMediaDisplay/ArticleMediaDisplay';

import "../../ArticleModal/ArticleModal.scss";
import ArticleTitle from '../../ArticleModal/ArticleTitle/ArticleTitle';
import ArticleResources from '../../ArticleModal/ArticleResources/ArticleResources';
import { IContactCard } from '../../../models/IContactCard';
import { ETechnology } from '../../../enums/ETechnology';
import TechnologyTab from '../../ArticleTabs/TechnologyTab';
import { IArticleResource } from '../../../models/IArticleResource';
import { EArticleResourceType } from '../../../enums/EArticleResouceType';
import { ERSIcon } from '../../../enums/ERSIcon';
import { IRSTab } from '../../../models/IRSTab';
import { ERSTabType } from '../../../enums/ERSTabType';
import RSTabs from '../../RSTabs/RSTabs';
import CollabListing from '../../CollabListing/CollabListing';
import { IRefLink} from '../../../models/IRefLink';
import AboutTab from '../../ArticleTabs/AboutTab';
import RSIcon from '../../RSIcon/RSIcon';
import { RefLinksList } from '../../RefLinksList/RefLinksList';

function PawBytesCafeArticle({ articlePayload }: any) {

    const {
        demoUrl,
        repoUrl,
        name
    } = articlePayload;

    const articleName = name
    const techList: ETechnology[] = [
        ETechnology.CSS,
        ETechnology.HTML,
        ETechnology.JavaScript,
        ETechnology.PostgresSQL,
        ETechnology.MongoDB,
        ETechnology.Python,
        ETechnology.React,
        ETechnology.Twitter
    ];


    const {
        prjType
    } = useProjectConfig({ prjMetadata: articlePayload })

    const videoUrl = undefined;
    const images: any = [
        {
            "alt": "paw bytes main page",
            "url": "https://firebasestorage.googleapis.com/v0/b/rocportfolio-1b669.appspot.com/o/projects%2Fpawbytes%2Fpawbytes_homepage.jpg?alt=media&token=31b0797a-fd85-44c3-8456-81ac4b21fa90"
          },
          {
            "alt": "project plan",
            "url": "https://firebasestorage.googleapis.com/v0/b/rocportfolio-1b669.appspot.com/o/projects%2Fpawbytes%2Fpawbytes_designplan.jpg?alt=media&token=d6e23485-8a98-4591-8572-e8a10a0e24c4"
          },
          {
            "alt": "database change",
            "url": "https://firebasestorage.googleapis.com/v0/b/rocportfolio-1b669.appspot.com/o/projects%2Fpawbytes%2Fdbchange.jpg?alt=media&token=167b8db7-d69b-4050-820b-4ec4cdae2ae4"
          }
    ];

    let resources = [] as IArticleResource[]

    if (demoUrl) {
        let demoResource : IArticleResource = {
            title: 'Demo',
            src: demoUrl,
            type: EArticleResourceType.Demo,
            iconName: ERSIcon.Play
        }

        resources.push(demoResource);
    }
    if (repoUrl) {
        let repoResource : IArticleResource = {
            title: 'Github',
            src: repoUrl,
            type: EArticleResourceType.Github,
            iconName: ERSIcon.Github
        }
        resources.push(repoResource);
    }

    const refLinks : IRefLink[] = [
        {
            url: "https://github.com/rocstory/PawBytes_WebApp",
            label: "Client - Source Code"
        },
        {
            url: "https://github.com/rocstory/PawBytes_Database",
            label: "Database - Source Code"
        },
        {
            url: "https://github.com/rocstory/PawBytes_PawBot",
            label: "Paw Bot - Source Code"
        },
        {
            url: "https://twitter.com/PawBytes",
            label: "Paw Bot - Twitter Bot"
        }
    ]

    const articleTabs = [
        {
            tabType: ERSTabType.About,
            component: <AboutTab header={<AboutTabHeader refLinks={refLinks} />} body={<AboutTabBody />}  />,
        },
        {
            tabType: ERSTabType.Technology,
            component: <TechnologyTab technologies={techList} />,
        }
    ] as IRSTab[]

    return (
        <>
            <Modal.Header closeButton>
                <ArticleTitle 
                    entryName={articleName}
                    categoryName={prjType}
                />
            </Modal.Header>
            <Modal.Body>
                <ArticleResources
                    resources={resources}
                />
                <ArticleMediaDisplay
                    videoUrl={videoUrl}
                    images={images}
                    articleMetadata={articlePayload}
                />
                <RSTabs 
                    tabs={articleTabs}
                    defaultActiveKey={ERSTabType.About}
                />
            </Modal.Body>
        </>
        
    )
}

export default PawBytesCafeArticle;

function AboutTabHeader(props: any) {
    const {
        refLinks
    } = props

    return (
        <div>
            <RefLinksList refLinks={refLinks} />
        </div>
    )
}

function AboutTabBody() {

    return (
        <div>
            <div>
                <h2>What is Paw Bytes Café?</h2>
                <p>
                    Paw Bytes Café is a full stack application 
                    using React (JavaScript), MongoDB, and a Twitter Bot.  
                </p>
                <p>
                    This project is about a café for students and other people who are 
                    looking for a place to relax with cats and dogs.
                </p>
            </div>
            <div>
                <h2>What is the goal of this project?</h2>
                <p>
                    The goal of Paw Bytes Café was originally to have a 
                    better understanding of databases, React, Python, 
                    and the Twitter Api. 
                </p>
            </div>
            <div>
                <h2>Why did I create this project?</h2>
                <p>
                    I created Paw Bytes Café because I barely passed 
                    my Database Management Systems class. 
                    During my sophomore year of college, I was 
                    struggling with managing my mental health, school, jobs, and 
                    my family. With so much going on, especially 
                    with family, I was having a hard time keeping up with the material.
                    
                </p>
                <p>
                    I had to decide between prioritizing my mental 
                    health or my grades. In hindsight, 
                    choosing my mental health is 
                    the obvious choice but that meant risking my scholarships, 
                    my status as a Kathwari Honors student, and even my status as a college student overall. 
                    After deciding to prioritize my mental health, I made a promise to myself to 
                    relearn the material when I have the time.
                </p>
            </div>
        </div>
    )
}