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
import { EPersonId } from '../../../enums/EPersonId';

function RevealingRocArticle({ articlePayload }: any) {

    const {
        demoUrl,
        repoUrl,
        name
    } = articlePayload;

    const articleName = name
    const techList: ETechnology[] = [
        ETechnology.Arduino,
        ETechnology.Cpp,
        ETechnology.Fritzing
    ];

    const {
        prjType
    } = useProjectConfig({ prjMetadata: articlePayload })

    const videoUrl = undefined;
    const images: any = [
        {
            "alt": "rev roc",
            "type": "image",
            "url": "https://rocportfolio.s3.amazonaws.com/revealingroc/revroc_1.jpg"
        }
    ];

    let resources = [] as IArticleResource[]

    const collabList = [
        
    ] as IContactCard[]

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

    const refLinks : IRefLink[] = []

    const articleTabs = [
        {
            tabType: ERSTabType.About,
            component: <AboutTab  body={<AboutTabBody />}  />,
        },
        {
            tabType: ERSTabType.Technology,
            component: <TechnologyTab technologies={techList} />,
        },
        // {
        //     tabType: ERSTabType.Collaborators,
        //     component: <CollabListing collabList={collabList} />,
        // },
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

export default RevealingRocArticle;

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
                <h2>What is Revealing Roc?</h2>
                <p>
                    Revealing Roc is a game built in my CS215 Embedded Systems class. 
                    It is a game of hide and seek on an LED board.
                </p>
            </div>

            <div>
                <h2>What is the goal of this project?</h2>
                <p>
                    The goal of this project is to create a 
                    fully functioning device by the end of the semester.
                </p>
            </div>

            <div>
                <h2>Why did I create this project?</h2>
                <p>
                    Revealing Roc was created to fulfill my course requirement.
                </p>
            </div>
        </div>
    )
}