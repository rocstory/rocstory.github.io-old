import React, { useContext, useState } from 'react';
import { Modal, Tab, Tabs } from 'react-bootstrap';
import { useProjectConfig } from '../../../hooks/useProjectConfig';
import ArticleMediaDisplay from '../../ArticleModal/ArticleMediaDisplay/ArticleMediaDisplay';

import "../../ArticleModal/ArticleModal.scss";
import ArticleTitle from '../../ArticleModal/ArticleTitle/ArticleTitle';
import ArticleResources from '../../ArticleModal/ArticleResources/ArticleResources';
import { ETechnology } from '../../../enums/ETechnology';
import { IArticleResource } from '../../../models/IArticleResource';
import { EArticleResourceType } from '../../../enums/EArticleResouceType';
import { ERSIcon } from '../../../enums/ERSIcon';
import { IRSTab } from '../../../models/IRSTab';
import { ERSTabType } from '../../../enums/ERSTabType';
import RSTabs from '../../RSTabs/RSTabs';
import { IRefLink} from '../../../models/IRefLink';
import AboutTab from '../../ArticleTabs/AboutTab';
import { RefLinksList } from '../../RefLinksList/RefLinksList';
import rocLabsMetadata from "../../../metadata/roclabs_metadata.json";
import ResourceTrigger from '../../ArticleModal/ArticleResources/ResourceTrigger/ResourceTrigger';
function RocLabsArticle({ articlePayload }: any) {

    const {
        demoUrl,
        repoUrl,
        name
    } = articlePayload;

    const articleName = name
    const techList: ETechnology[] = [
    ];



    const {
        prjType
    } = useProjectConfig({ prjMetadata: articlePayload })

    const videoUrl = undefined;
    const images: any = [
        
    ];

    const discordResource = {
        title: 'Discord Server',
        src: rocLabsMetadata.serverInviteUrl,
        type: EArticleResourceType.Discord,
        iconName: ERSIcon.Discord
    }

    let resources = [
        discordResource
    ] as IArticleResource[]


    const refLinks : IRefLink[] = [
        
    ]

    const articleTabs = [
        {
            tabType: ERSTabType.About,
            component: <AboutTab header={<AboutTabHeader refLinks={refLinks} />} body={<AboutTabBody discordResource={discordResource} />}  />,
        },
        // {
        //     tabType: ERSTabType.Technology,
        //     component: <TechnologyTab technologies={techList} />,
        // }
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

export default RocLabsArticle;

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

function AboutTabBody({discordResource } : any ) {

    return (
        <div>
            <div>
                <h2>What is Roc Labs?</h2>
                <p>
                    Roc Labs is a community that was created for people who are passionate
                    about their hobbies to connect and share resources with each other. 
                </p>

                <div className="font-weight-bold">
                    <p>
                        If you are interested in being a part of a community of creatives 
                        who are interested in growing, join the server! 
                    </p>
                    <br/>
                    <ResourceTrigger 
                        resource={discordResource}
                    />
                </div>
            </div>
        </div>
    )
}