import React, { useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useProjectConfig } from '../../hooks/useProjectConfig';
import ArticleMediaDisplay from '../ArticleModal/ArticleMediaDisplay/ArticleMediaDisplay';
import EntryLinkTrigger from '../ArticleModal/EntryLinkTrigger/EntryLinkTrigger';

enum EELT_Type {
    Github = "github",
    Demo = "demo"
}




function ColonialCarnivalArticle({articlePayload} : any) {

    const {
        demoUrl,
        repoUrl,
        name
    } = articlePayload;

    const articleName = name

    const { 
        prjType
    } = useProjectConfig({prjMetadata: articlePayload})
    
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
                <Modal.Title
                    id="entry-title"
                >
                    <span className="title">
                        {articleName}
                    </span>
                    <span className='divider'>|</span>
                    <span className="entry-type">
                        {prjType}
                    </span>
                </Modal.Title>
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
            </Modal.Body>
            <Modal.Footer >
                {/* <CollabListing /> */}

            </Modal.Footer>

        </>
    )
}

export default ColonialCarnivalArticle;

