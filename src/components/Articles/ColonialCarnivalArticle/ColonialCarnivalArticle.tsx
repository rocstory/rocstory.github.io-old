import React, { useContext, useState } from 'react';
import { Modal, Tab, Tabs } from 'react-bootstrap';
import { useProjectConfig } from '../../../hooks/useProjectConfig';
import ArticleMediaDisplay from '../../ArticleModal/ArticleMediaDisplay/ArticleMediaDisplay';
import EntryLinkTrigger from '../../ArticleModal/EntryLinkTrigger/EntryLinkTrigger';
import CCAboutTab from './CCAboutTab';
import "../../ArticleModal/ArticleModal.scss"
import "../../ArticleModal/ArticleTabs.scss"
import "./ColonialCarnivalArticle.scss";
import ArticleTitle from '../../ArticleModal/ArticleTitle/ArticleTitle';
import ArticleResources from '../../ArticleModal/ArticleResources/ArticleResources';
import CollabListing from '../../CollabListing/CollabListing';
import { EPersonId } from '../../../enums/EPersonId';
import { IContactCard } from '../../../models/IContactCard';
import CCTechnologyTab from './CCTechnologyTab';
import { ETechnology } from '../../../enums/ETechnology';

function ColonialCarnivalArticle({ articlePayload }: any) {

    const {
        demoUrl,
        repoUrl,
        name
    } = articlePayload;

    const articleName = name
    const collaborators = [
        {
            cid: EPersonId.ChrisKukk,
            role: "Developer"
        },
        {
            cid: EPersonId.MatheusAlexandre,
            role: "Developer"
        },
        {
            cid: EPersonId.EllyGriffin,
            role: "Developer"
        }
    ] as IContactCard[]

    const techList: ETechnology[] = [
        ETechnology.CSS,
        ETechnology.CSharp,
        ETechnology.Cpp,
        ETechnology.Arduino,
        ETechnology.Facebook,
        ETechnology.Firebase,
        ETechnology.Fritzing,
        ETechnology.Github,
        ETechnology.HTML,
        ETechnology.Instagram,
        ETechnology.JavaScript,
        ETechnology.LinkedIn,
        ETechnology.MongoDB,
        ETechnology.OpenSCAD,
        ETechnology.PostgresSQL,
        ETechnology.Python,
        ETechnology.RaspberryPi,
        ETechnology.React,
        ETechnology.Twitch,
        ETechnology.Twitter,
        ETechnology.TypeScript,
        ETechnology.Unity
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
            "url": "https://rocportfolio.s3.amazonaws.com/chevsescape/chevEscape_imgA.jpg"
        },
        {
            "alt": "Memory Match",
            "url": "https://www.creativeuncut.com/gallery-44/art/loztotk-vertical-key-art.jpg"
        }
    ];

    const collabListingDescription = "Thank you to everyone who helped with this project!"

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
                    repoUrl={repoUrl}
                    demoUrl={demoUrl}
                />
                <ArticleMediaDisplay
                    videoUrl={videoUrl}
                    images={images}
                />
                <div
                    className={`tab-wrapper`}
                >
                    <Tabs
                        className={`mb-3 article-tabs`}
                        defaultActiveKey="about"
                    >
                        <Tab className={`about-tab`} eventKey="about" title="About">
                            <CCAboutTab />
                        </Tab>
                        <Tab eventKey="tech" title="Technology">
                            <CCTechnologyTab 
                                technologies={techList}
                            />
                        </Tab>
                        <Tab eventKey="collaborators" title="Collaborators">
                            <CollabListing 
                                collabList={collaborators}
                                description={collabListingDescription}
                            />
                        </Tab>
                    </Tabs>
                </div>
            </Modal.Body>
        </>
    )
}

export default ColonialCarnivalArticle;

