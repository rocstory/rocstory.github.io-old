import { Image } from "react-bootstrap";
import { EProject } from "../enums/EProject";
import { ColonialCarnivalFeaturedImg, DefaultThumbnail, HeroImg } from "../helpers/imageHelper";
import { IProject } from "../interfaces/IProject";
import React, { useEffect, useState } from "react";
import { EProjectType } from "../enums/EProjectType";
import { IRefLink } from "../interfaces/IRefLink";
import { ERefLinkType } from "../enums/ERefLinkType";
import prjConfig from "../config/projectConfig";
import { ETag } from "../enums/ETag";
import { EInfoCardType } from "../enums/EInfoCardType";
import { AboutTestProject, HighlightsTestProject } from "../components/ProjectInfo/TestProjectInfo";
import { AboutColonialCarnival, HighlightsColonialCarnival } from "../components/ProjectInfo/ColonialCarnivalInfo";

interface IProjectObj {
    title: string,
    type: EProjectType,
    shortDescr: string,
    tags: ETag[],
    thumbnail: string,
    featuredImg: string,
    refLinks: IRefLink[],
    aboutInfo?: React.ReactNode,
    highlightsInfo?: React.ReactNode,

    extraInfoCards?: React.ReactNode[],

}

interface IInfoCard {
    type: EInfoCardType,
    label?: string,
    component?: React.ReactNode
}

function useProject(name: EProject | undefined) {
    const [title, setTitle] = useState<string>('');
    const [type, setType] = useState<EProjectType>(EProjectType.WebDevelopment);
    const [shortDescr, setShortDescr] = useState<string>('');
    const [tags, setTags] = useState<ETag[]>([]);
    const [thumbnail, setThumbnail] = useState<string>();
    const [featuredImage, setFeaturedImg] = useState<string>();
    const [refLinks, setRefLinks] = useState<IRefLink[]>([]);

    const [aboutInfo, setAboutInfo] = useState<React.ReactNode>();
    const [highlightsInfo, setHighlightsInfo] = useState<React.ReactNode>();
    const [extraInfoCards, setExtraInfoCards] = useState<React.ReactNode[]>();

    const formatProjectType = (prjType: EProjectType) => {
        switch (prjType) {
            case EProjectType.WebDevelopment:
                return 'Web Development';
            case EProjectType.EmbeddedSystems:
                return 'Embedded Systems';
            case EProjectType.GameDevelopment:
                return 'Game Development';
            case EProjectType.Unknown:
                return '';
            default:
                return String(prjType);
        }
    }

    const sanitizeTagCollection = (tags: ETag[]) => {
        const uniqueTags = new Set(tags);
        return Array.from(uniqueTags);
    }



    const getPrjRefLinks = (configRefLinks: any[]) => {
        // let configRefLinks: any = refLinks;
        let prjRefLinks: IRefLink[] = [];

        if (configRefLinks && configRefLinks.length > 0) {
            configRefLinks.map((link: any) => {
                let refLink: IRefLink = {
                    src: link.src && link.src,
                    type: link.type && link.type,
                    label: link.label && link.label
                };

                prjRefLinks.push(refLink);
            })
        }

        return prjRefLinks;
    }

    const getPrjInfoCardObjs = () => {
        let abtInfo = undefined;

        let hlInfo = undefined;

        let otherInfo: React.ReactNode[] = [];

        switch (name) {
            case EProject.TestProject:
                abtInfo = <AboutTestProject />
                hlInfo = <HighlightsTestProject />
                break;

            case EProject.ColonialCarnival:
                abtInfo = <AboutColonialCarnival />
                hlInfo = <HighlightsColonialCarnival />
                break;

        }

        return {
            abtInfo,
            hlInfo,
            otherInfo
        }

    }


    // to sanitize incoming data 

    const createProjectObj = () => {
        let prj: IProjectObj = {
            title: '',
            type: EProjectType.WebDevelopment,
            shortDescr: '',
            tags: [],
            thumbnail: DefaultThumbnail,
            featuredImg: DefaultThumbnail,
            refLinks: [],
            aboutInfo: undefined,
            highlightsInfo: undefined,
            extraInfoCards: [],
        };

        switch (name) {
            case EProject.PawBytesCafe:
                prj.title = prjConfig.crayonGitrg.title;
                prj.type = prjConfig.crayonGitrg.type;
                prj.shortDescr = prjConfig.crayonGitrg.shortDescr;
                prj.tags = prjConfig.crayonGitrg.tags;
                prj.thumbnail = DefaultThumbnail;
                prj.refLinks = getPrjRefLinks(prjConfig.pawBytesCafe.refLinks);
                break;
            case EProject.LovelyFeathers:
                prj.title = prjConfig.lovelyFeathers.title;
                prj.type = prjConfig.lovelyFeathers.type;
                prj.shortDescr = prjConfig.lovelyFeathers.shortDescr;
                prj.tags = prjConfig.lovelyFeathers.tags;
                prj.thumbnail = DefaultThumbnail;
                prj.refLinks = getPrjRefLinks(prjConfig.lovelyFeathers.refLinks);
                break;
            case EProject.MocapGITRG:
                prj.title = prjConfig.mocapGitrg.title;
                prj.type = prjConfig.mocapGitrg.type;
                prj.shortDescr = prjConfig.mocapGitrg.shortDescr;
                prj.tags = prjConfig.mocapGitrg.tags;
                prj.thumbnail = DefaultThumbnail;
                prj.refLinks = getPrjRefLinks(prjConfig.mocapGitrg.refLinks);
                break;
            case EProject.CrayonGITRG:
                prj.title = prjConfig.crayonGitrg.title;
                prj.type = prjConfig.crayonGitrg.type;
                prj.shortDescr = prjConfig.crayonGitrg.shortDescr;
                prj.tags = prjConfig.crayonGitrg.tags;
                prj.thumbnail = DefaultThumbnail;
                prj.refLinks = getPrjRefLinks(prjConfig.crayonGitrg.refLinks);
                break;
            case EProject.RevealingRoc:
                prj.title = prjConfig.revealingRoc.title;
                prj.type = prjConfig.revealingRoc.type;
                prj.shortDescr = prjConfig.revealingRoc.shortDescr;
                prj.tags = prjConfig.revealingRoc.tags;
                prj.thumbnail = DefaultThumbnail;
                prj.refLinks = getPrjRefLinks(prjConfig.revealingRoc.refLinks);
                break;
            case EProject.ChevEscape:
                prj.title = prjConfig.chevEscape.title;
                prj.type = prjConfig.chevEscape.type;
                prj.shortDescr = prjConfig.chevEscape.shortDescr;
                prj.tags = prjConfig.chevEscape.tags;
                prj.thumbnail = DefaultThumbnail;
                prj.refLinks = getPrjRefLinks(prjConfig.chevEscape.refLinks);
                break;
            case EProject.ColonialCarnival:
                prj.title = prjConfig.colonialCarnival.title;
                prj.type = prjConfig.colonialCarnival.type;
                prj.shortDescr = prjConfig.colonialCarnival.shortDescr;
                prj.tags = prjConfig.colonialCarnival.tags;
                prj.thumbnail = DefaultThumbnail;
                prj.refLinks = getPrjRefLinks(prjConfig.colonialCarnival.refLinks);
                prj.featuredImg = ColonialCarnivalFeaturedImg;
                break;
            case EProject.TwinlandeSuperStore:
                prj.title = prjConfig.twinlandeSuperstore.title;
                prj.type = prjConfig.twinlandeSuperstore.type;
                prj.shortDescr = prjConfig.twinlandeSuperstore.shortDescr;
                prj.tags = prjConfig.twinlandeSuperstore.tags;
                prj.thumbnail = DefaultThumbnail;
                prj.refLinks = getPrjRefLinks(prjConfig.twinlandeSuperstore.refLinks);
                break;
            case EProject.TestProject:
                prj.title = prjConfig.testProject.title;
                prj.type = prjConfig.testProject.type;
                prj.shortDescr = prjConfig.testProject.shortDescr;
                prj.tags = prjConfig.testProject.tags;
                prj.thumbnail = DefaultThumbnail;
                prj.refLinks = getPrjRefLinks(prjConfig.testProject.refLinks);
                break;
            default:
                prj.title = 'Undefined Project';
                prj.type = EProjectType.Unknown;
                prj.shortDescr = '';
                prj.tags = [];
                prj.thumbnail = DefaultThumbnail;
                prj.refLinks = [];
                break;
        }

        const { abtInfo, hlInfo, otherInfo } = getPrjInfoCardObjs();
        prj.aboutInfo = abtInfo;
        prj.highlightsInfo = hlInfo;
        prj.extraInfoCards = otherInfo;

        return prj;
    }

    useEffect(() => {
        const prj = createProjectObj();
        const uniqueTags = sanitizeTagCollection(prj.tags);

        setTitle(prj.title);
        setType(prj.type);
        setShortDescr(prj.shortDescr);
        setTags(uniqueTags);
        setThumbnail(prj.thumbnail);
        setFeaturedImg(prj.featuredImg);
        setRefLinks([...prj.refLinks]);
        setAboutInfo(prj.aboutInfo);
        setHighlightsInfo(prj.highlightsInfo);
        setExtraInfoCards(prj.extraInfoCards);

    }, [])



    return {
        title,
        type,
        shortDescr,
        tags,
        thumbnail,
        featuredImage,
        refLinks,
        aboutInfo,
        highlightsInfo,
        extraInfoCards,
        formatProjectType
    }
}

export default useProject;