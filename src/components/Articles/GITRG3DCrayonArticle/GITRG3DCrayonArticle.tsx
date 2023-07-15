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

function GITRG3DCrayonArticle({ articlePayload }: any) {

    const {
        demoUrl,
        repoUrl,
        name
    } = articlePayload;

    const articleName = name
    const techList: ETechnology[] = [
        ETechnology.RaspberryPi
    ];

    const {
        prjType
    } = useProjectConfig({ prjMetadata: articlePayload })

    const videoUrl = undefined;
    const images: any = [
        {
            "alt": "3dc design",
            "url": "https://rocportfolio.s3.amazonaws.com/3dc_design.jpg"
        }
    ];

    let resources = [
        {
            title: 'GITRG Webpage',
            src: 'https://www.wcsu.edu/cs/computer-science-research/computer-science-grg/',
            type: EArticleResourceType.Other,
            
        }
    ] as IArticleResource[]

    const collabList = [
        {
            cid: EPersonId.WilliamJoel,
            role: "Professor"
        }
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
        {
            tabType: ERSTabType.Collaborators,
            component: <CollabListing collabList={collabList} />,
        },
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

export default GITRG3DCrayonArticle;

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
                <h2>What is GITRG 3D Crayon 2019 - 2020?</h2>
                <p>
                    An open-source intelligent toy which allows a child to 
                    draw in a 3D space and have the image appear on the screen.
                </p>
            </div>

            <div>
                <h2>What is the goal of this project?</h2>
                <p>
                    While working on this project, the goal was to research as 
                    much as I can to make this device tangible.
                </p>
            </div>

            <div>
                <h2>Why did we create this project?</h2>
                <p>
                    It was the professor's idea.
                </p>
            </div>
        </div>
    )
}