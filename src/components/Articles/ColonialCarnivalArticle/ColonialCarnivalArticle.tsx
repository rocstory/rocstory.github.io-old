import React, { useContext, useState } from 'react';
import { Modal, Tab, Tabs } from 'react-bootstrap';
import { useProjectConfig } from '../../../hooks/useProjectConfig';
import ArticleMediaDisplay from '../../ArticleModal/ArticleMediaDisplay/ArticleMediaDisplay';
import EntryLinkTrigger from '../../ArticleModal/EntryLinkTrigger/EntryLinkTrigger';
import CCAboutTab from './CCAboutTab';
import "../../ArticleModal/ArticleModal.scss"
import ArticleTitle from '../../ArticleModal/ArticleTitle/ArticleTitle';

enum EELT_Type {
    Github = "github",
    Demo = "demo"
}

function ColonialCarnivalArticle({ articlePayload }: any) {

    const {
        demoUrl,
        repoUrl,
        name
    } = articlePayload;

    const articleName = name

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

    return (
        <>
            <Modal.Header closeButton>
                <ArticleTitle 
                    entryName={articleName}
                    categoryName={prjType}
                />
            </Modal.Header>
            <Modal.Body>
                {
                    (repoUrl || demoUrl) &&
                    <div className='elt-cntr'>
                        {repoUrl && <EntryLinkTrigger type={EELT_Type.Github} linkUrl={repoUrl} />}
                        {demoUrl && <EntryLinkTrigger type={EELT_Type.Demo} linkUrl={demoUrl} />}
                    </div>
                }
                <ArticleMediaDisplay
                    videoUrl={videoUrl}
                    images={images}
                />

                <div
                    className={`tab-wrapper`}
                >
                    <Tabs
                        className={`mb-3`}
                        defaultActiveKey="about"
                    >
                        <Tab href={''} eventKey="about" title="About">
                            <CCAboutTab />
                        </Tab>
                        <Tab href={''} eventKey="tech" title="Tech">
                            Tab content for Profile
                        </Tab>
                        <Tab href={''} eventKey="collaborators" title="Collaborators">
                            Tab content for Profile
                        </Tab>
                    </Tabs>
                </div>
                
                
            </Modal.Body>
            <Modal.Footer >
                {/* <CollabListing /> */}

            </Modal.Footer>

        </>
    )
}

export default ColonialCarnivalArticle;

