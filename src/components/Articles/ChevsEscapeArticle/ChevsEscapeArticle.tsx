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

function ChevsEscapeArticle({ articlePayload }: any) {

    const {
        demoUrl,
        repoUrl,
        name
    } = articlePayload;

    const articleName = name
    const techList: ETechnology[] = [
        ETechnology.CSharp,
    ];

    const {
        prjType
    } = useProjectConfig({ prjMetadata: articlePayload })

    const videoUrl = undefined;
    const images: any = [
        {
            "alt": "Main Menu",
            "type": "image",
            "url": "https://rocportfolio.s3.amazonaws.com/chevsescape/chevEscape_imgA.jpg"
        },
        {
            "alt": "Game Tutorial",
            "type": "image",
            "url": "https://rocportfolio.s3.amazonaws.com/chevsescape/chevEscape_imgB.jpg"
        }
    ];

    let resources = [] as IArticleResource[]

    const collabList = [
        {
            cid: EPersonId.MatheusAlexandre,
            role: 'Developer'
        },
        {
            cid: EPersonId.KrishanSingh,
            role: 'Developer'
        },
        {
            cid: EPersonId.StephenAlpuche,
            role: 'Developer'
        }, 
        {
            cid: EPersonId.CoryPineau,
            role: 'Developer'
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
            component: <AboutTab header={<AboutTabHeader refLinks={refLinks} />} body={<AboutTabBody />}  />,
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

export default ChevsEscapeArticle;

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
                <h2>What is Chev's Escape?</h2>
                <p>
                    Chev’s Escape is an Object-Oriented Software Engineering project for my 
                    CS350 Object Oriented Software Engineering class. 
                    This project is intended to be a desktop video game. 
                </p>
                
                <p>
                    This project is about our professor, 
                    Gancho Ganchev who has to solve a set 
                    of puzzles to escape a building.
                </p>
            </div>

            <div>
                <h2>What is the goal of this project?</h2>
                <p>
                    The goal of Chev’s Escape is to create a fully functioning object-oriented program 
                    by the end of the semester with a max of four other people.
                </p>
            </div>

            <div>
                <h2>Why did we create this project?</h2>
                <p>
                    We created Chev’s Escape because we thought 
                    it would be a fun idea to create a video game.
                </p>
            </div>
        </div>
    )
}