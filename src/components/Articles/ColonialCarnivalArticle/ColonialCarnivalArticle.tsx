import React, { useContext, useState } from 'react';
import { Modal, Tab, Tabs } from 'react-bootstrap';
import { useProjectConfig } from '../../../hooks/useProjectConfig';
import ArticleMediaDisplay from '../../ArticleModal/ArticleMediaDisplay/ArticleMediaDisplay';
import "../../ArticleModal/ArticleModal.scss"
import "./ColonialCarnivalArticle.scss";
import ArticleTitle from '../../ArticleModal/ArticleTitle/ArticleTitle';
import ArticleResources from '../../ArticleModal/ArticleResources/ArticleResources';
import CollabListing from '../../CollabListing/CollabListing';
import { EPersonId } from '../../../enums/EPersonId';
import { IContactCard } from '../../../models/IContactCard';
import { ETechnology } from '../../../enums/ETechnology';
import { IRSTab } from '../../../models/IRSTab';
import { ERSTabType } from '../../../enums/ERSTabType';
import TechnologyTab from '../../ArticleTabs/TechnologyTab';
import RSTabs from '../../RSTabs/RSTabs';
import { IArticleResource } from '../../../models/IArticleResource';
import { EArticleResourceType } from '../../../enums/EArticleResouceType';
import { ERSIcon } from '../../../enums/ERSIcon';
import AboutTab from '../../ArticleTabs/AboutTab';
import { RefLinksList } from '../../RefLinksList/RefLinksList';

function ColonialCarnivalArticle({ articlePayload }: any) {

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
        ETechnology.Firebase
    ];

    const {
        prjType
    } = useProjectConfig({ prjMetadata: articlePayload })

    const videoUrl = 'https://www.youtube.com/watch?v=Pz41maOFJ94&ab_channel=rocstory';

    const images: any = [
        {
            "alt": "Program of the Year Award 2019-2020",
            "url": "https://rocportfolio.s3.amazonaws.com/colonialcarnival/program_award.jpg"
        },
        {
            "alt": "Login Page",
            "url": "https://rocportfolio.s3.amazonaws.com/colonialcarnival/login.jpg"
        },
        {
            "alt": "Home Page",
            "url": "https://rocportfolio.s3.amazonaws.com/colonialcarnival/homepage.jpg"
        },
        {
            "alt": "Rock Paper Scissors",
            "url": "https://rocportfolio.s3.amazonaws.com/colonialcarnival/rps.jpg"
        },
        {
            "alt": "WCSU Trivia",
            "url": "https://rocportfolio.s3.amazonaws.com/colonialcarnival/wcsu_trivia.jpg"
        },
        {
            "alt": "Memory Match",
            "url": "https://rocportfolio.s3.amazonaws.com/colonialcarnival/matchmatch.jpg"
        }
    ];

    const articleTabs : IRSTab[] = [
        {
            tabType: ERSTabType.About,
            component: <AboutTab body={<AboutTabBody />} />,
        },
        {
            tabType: ERSTabType.Technology,
            component: <TechnologyTab technologies={techList} />
        }
    ];

    let resources = [] as IArticleResource[];
    // IArticleResource

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

export default ColonialCarnivalArticle;

function AboutTabBody() {

    return (
        <div>
            <div>
                <h2>What is Colonial Carnival?</h2>
                <p>
                    Colonial Carnival is a web application built for the 
                    residents at 
                    Western Connecticut State University (WCSU).
                </p>
                <p>
                    Colonial Carnival is a virtual carnival for students 
                    at WCSU to earn tickets after each game to exchange 
                    for prizes such as gift cards, stationery, and 
                    other items.
                </p>
            </div>
            <div>
                <h2>What is the goal of this project?</h2>
                <p>
                    The goal of Colonial Carnival is to learn the fundamentals 
                    of website development. I also wanted to challenge 
                    myself by bringing a completely different type of 
                    Resident Assistant program to WCSU.
                </p>
            </div>
            <div>
                <h2>Why did I create this project?</h2>
                <p>
                    I created Colonial Carnival to learn HTML, CSS, and JavaScript. 
                    I also wanted to bring a new program to the residents of WCSU.
                </p>
            </div>
        </div>
    )
}
