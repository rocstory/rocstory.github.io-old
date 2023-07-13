import React, { useContext, useState } from 'react';
import { Modal, Tab, Tabs } from 'react-bootstrap';
import { useProjectConfig } from '../../../hooks/useProjectConfig';
import ArticleMediaDisplay from '../../ArticleModal/ArticleMediaDisplay/ArticleMediaDisplay';
import AboutTab from './AboutTab';
import "../../ArticleModal/ArticleModal.scss"; 
import "../../ArticleTabs/ArticleTabs.scss"
import ArticleTitle from '../../ArticleModal/ArticleTitle/ArticleTitle';
import ArticleResources from '../../ArticleModal/ArticleResources/ArticleResources';
import { IContactCard } from '../../../models/IContactCard';
import { ETechnology } from '../../../enums/ETechnology';
import TechnologyTab from '../../ArticleTabs/TechnologyTab';
import { IArticleResource } from '../../../models/IArticleResource';
import { EArticleResourceType } from '../../../enums/EArticleResouceType';
import { ERSIcon } from '../../../enums/ERSIcon';

function PawBytesCafeArticle({ articlePayload }: any) {

    const {
        demoUrl,
        repoUrl,
        name
    } = articlePayload;

    const articleName = name
    const collaborators = [] as IContactCard[]

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

    let externalLinks = [
        {
            title: 'Client - Source Code',
            src: `https://github.com/rocstory/PawBytes_WebApp`,
            type: EArticleResourceType.Other,
            // iconName: ERSIcon.Database,
        },
        {
            title: 'Database - Source Code',
            src: `https://github.com/rocstory/PawBytes_Database`,
            type: EArticleResourceType.Other,
        },
        {
            title: 'Paw Bot - Source Code',
            src: `https://github.com/rocstory/PawBytes_Database`,
            type: EArticleResourceType.Other,
        },
        {
            title: 'Paw Bot - Twitter Bot',
            src: `https://twitter.com/PawBytes`,
            type: EArticleResourceType.Other,
        }
    ]
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
                    resources={resources}
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
                            <AboutTab />
                        </Tab>
                        <Tab eventKey="tech" title="Technology">
                            <TechnologyTab 
                                technologies={techList}
                            />
                        </Tab>
                        {/* <Tab eventKey="collaborators" title="Collaborators">
                            <CollabListing 
                                collabList={collaborators}
                                description={collabListingDescription}
                            />
                        </Tab> */}
                    </Tabs>
                </div>
            </Modal.Body>
        </>
    )
}

export default PawBytesCafeArticle;

