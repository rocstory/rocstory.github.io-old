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

function TwinlandeSuperStoreArticle({ articlePayload }: any) {

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
        ETechnology.React
    ];


    const {
        prjType
    } = useProjectConfig({ prjMetadata: articlePayload })

    const videoUrl = undefined;
    const images: any = [
        {
            "alt": "tss story",
            "url": "https://rocportfolio.s3.amazonaws.com/tss/the-story.jpg"
        },
        {
            "alt": "project overview",
            "url": "https://rocportfolio.s3.amazonaws.com/tss/components.jpg"
        },
        {
            "alt": "project notes",
            "url": "https://rocportfolio.s3.amazonaws.com/tss/notesinbook.jpg"
        },
        {
            "alt": "social media engagement",
            "url": "https://rocportfolio.s3.amazonaws.com/tss/soc-media-eng.jpg"
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
            url: "https://github.com/rocstory/twinlande-super-store/tree/main/tss-client",
            label: "Client - Source Code"
          },
          {
            url: "https://github.com/rocstory/twinlande-super-store/tree/main/tss-database",
            label: "Database - Source Code"
          },
          {
            url: "https://github.com/rocstory/twinlande-super-store/tree/main/tss-server",
            label: "Server - Source Code"
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
                />
                <RSTabs 
                    tabs={articleTabs}
                    defaultActiveKey={ERSTabType.About}
                />
            </Modal.Body>
        </>
        
    )
}

export default TwinlandeSuperStoreArticle;

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
                <h2>What is Twinlande Superstore?</h2>
                <p>
                    Twinlande Superstore (TSS) is a full stack web application.
                </p>
            </div>
            <div>
                <h2>What is the goal of this project?</h2>
                <p>
                    The goal of TSS is to build a full-stack web application from the ground up. The goal is to learn how to build the frontend, backend, and 
                    database of a web application using Typescript, Python, and PostgresSQL respectively.
                </p>
            </div>

            <div>
                <h2>Why did I create this project?</h2>
                <p>
                    Twinlande Superstore was created to learn how to build a full stack application from the ground up with the help of a community. I wanted to have a deeper understanding of how to build the 
                    frontend, backend, and database of an application while creating content about it. 
                </p>
            </div>

            <div>
                <h2>What is this project about?</h2>
                <p>
                    Twinlande Superstore is about twin sisters Dlo & Dife wanting a 
                    website for their customers to order online from.
                </p>
            </div>
        </div>
    )
}