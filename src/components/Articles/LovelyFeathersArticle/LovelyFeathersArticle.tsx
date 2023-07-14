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

function LovelyFeathersArticle({ articlePayload }: any) {

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
        ETechnology.React,
        ETechnology.Firebase,
        ETechnology.TypeScript
    ];


    const {
        prjType
    } = useProjectConfig({ prjMetadata: articlePayload })

    const videoUrl = undefined;
    const images: any = [
        
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
        
    ]

    const articleTabs = [
        {
            tabType: ERSTabType.About,
            component: <AboutTab body={<AboutTabBody />}  />,
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

export default LovelyFeathersArticle;

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
                <h2>What is Lovely Feathers?</h2>
                <p>
                    Lovely Feathers is a web application that gives people the opportunity to 
                    spread kindness by passing on a kind message to someone in a unique way.
                </p>
            </div>

            <div>
                <h2>What is the goal of this project?</h2>
                <p>
                    The goal of this project is to learn more about React, Bootstrap, and Firebase. The other goal is to 
                    find a creative way for people to spread a bit of kindness.
                </p>
            </div>

            <div>
                <h2>Why did I create this project?</h2>
                <p>
                    Lovely Feathers was created to take my mind off of the negative things that 
                    were going on during the COVID-19 pandemic. 
                    The constant news of police brutality, 
                    hate crimes, and more took a toll on my mental health.
                </p>

                <p>
                    Creating a web application that would give people the opportunity to spread positivity 
                    by giving someone a compliment improved my mental health. 
                </p>
            </div>
        </div>
    )
}