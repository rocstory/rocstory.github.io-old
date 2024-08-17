import { Image } from "react-bootstrap";
import { EProject } from "../enums/EProject";
// import { ChevsEscapeFI, ChevsEscapeTN, ColonialCarnivalFI, ColonialCarnivalFeaturedImg, ColonialCarnivalTN, CrayonGITRGFI, CrayonGITRGTN, DefaultFI, DefaultTN, HeroImg, MocapFI, MocapTN, PawbytesCafeFI, PawbytesCafeTN, RevRocTN, RevealingRocFI, TwinlandeSSFI, TwinlandeSSTN } from "../helpers/imageHelper";
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
import { AboutChevsEscape, HighlightsChevsEscape } from "../components/ProjectInfo/ChevsEscapeInfo";
import { ICollaborator } from "../interfaces/ICollaborator";
import { EPerson } from "../enums/EPerson";
import { AboutCrayoGITRG, HighlightsCrayonGITRG } from "../components/ProjectInfo/CrayonGITRG";
import { AboutLovelyFeathers, HighlightsLovelyFeathers } from "../components/ProjectInfo/LovelyFeathersInfo";
import { AboutMocapGITRG } from "../components/ProjectInfo/MocapGITRGInfo";
import { AboutPawBytes } from "../components/ProjectInfo/PawBytesInfo";
import { AboutTwinlandeSuperstore } from "../components/ProjectInfo/TwinlandeSuperStoreInfo";
import { AboutRevealingRoc } from "../components/ProjectInfo/RevealingRoc";
import useRSImages from "./useRSImages";

interface IProjectObj {
    title: string,
    type: EProjectType,
    shortDescr: string,
    tags: ETag[],
    thumbnail: string,
    featuredImg: string,
    videoSrc?: string,
    refLinks: IRefLink[],
    aboutInfo?: React.ReactNode,
    highlightsInfo?: React.ReactNode,

    extraInfoCards?: React.ReactNode[],
    collaborators?: [];

}



function useProject(name: EProject | undefined) {
    const [title, setTitle] = useState<string>('');
    const [type, setType] = useState<EProjectType>(EProjectType.WebDevelopment);
    const [shortDescr, setShortDescr] = useState<string>('');
    const [tags, setTags] = useState<ETag[]>([]);
    const [thumbnail, setThumbnail] = useState<string>();
    const [featuredImage, setFeaturedImg] = useState<string>();
    const [videoSrc, setVideoSrc] = useState<string>();
    const [refLinks, setRefLinks] = useState<IRefLink[]>([]);
    const [collaborators, setCollaborators] = useState<any[]>();

    const [aboutInfo, setAboutInfo] = useState<React.ReactNode>();
    const [highlightsInfo, setHighlightsInfo] = useState<React.ReactNode>();
    const [extraInfoCards, setExtraInfoCards] = useState<React.ReactNode[]>();

    const {
        DefaultTN,
        DefaultFI,
        PawbytesCafeTN,
        PawbytesCafeFI,
        MocapGITRGTN,
        MocapGITRGFI,
        CrayonGITRGTN,
        CrayonGITRGFI,
        RevealingRocTN,
        RevealingRocFI,
        ChevsEscapeTN,
        ChevsEscapeFI,
        ColonialCarnivalTN,
        ColonialCarnivalFI,
        TwinlandeSSFI,
        TwinlandeSSTN
    } = useRSImages();

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

            case EProject.ChevEscape:
                abtInfo = <AboutChevsEscape />
                hlInfo = <HighlightsChevsEscape />
                break;
            case EProject.CrayonGITRG:
                abtInfo = <AboutCrayoGITRG />
                // hlInfo = <HighlightsCrayonGITRG />
                break;
            case EProject.LovelyFeathers:
                abtInfo = <AboutLovelyFeathers />
                // hlInfo = <HighlightsLovelyFeathers />
                break;
            case EProject.MocapGITRG:
                abtInfo = <AboutMocapGITRG />
                break;
            case EProject.PawBytesCafe:
                abtInfo = <AboutPawBytes />
                break;
            case EProject.TwinlandeSuperStore:
                abtInfo = <AboutTwinlandeSuperstore />
                break;
            case EProject.RevealingRoc:
                abtInfo = <AboutRevealingRoc />
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
            thumbnail: DefaultTN,
            featuredImg: DefaultFI,
            videoSrc: undefined,
            refLinks: [],
            aboutInfo: undefined,
            highlightsInfo: undefined,
            extraInfoCards: [],
        };

        switch (name) {
            case EProject.PawBytesCafe:
                prj.title = prjConfig.pawBytesCafe.title;
                prj.type = prjConfig.pawBytesCafe.type;
                prj.shortDescr = prjConfig.pawBytesCafe.shortDescr;
                prj.tags = prjConfig.pawBytesCafe.tags;
                prj.thumbnail = PawbytesCafeTN; //DefaultThumbnail;
                prj.refLinks = getPrjRefLinks(prjConfig.pawBytesCafe.refLinks);
                prj.featuredImg = PawbytesCafeFI;
                break;
            case EProject.LovelyFeathers:
                prj.title = prjConfig.lovelyFeathers.title;
                prj.type = prjConfig.lovelyFeathers.type;
                prj.shortDescr = prjConfig.lovelyFeathers.shortDescr;
                prj.tags = prjConfig.lovelyFeathers.tags;
                // prj.thumbnail = DefaultTN;//DefaultThumbnail;
                prj.refLinks = getPrjRefLinks(prjConfig.lovelyFeathers.refLinks);
                // prj.featuredImg = DefaultFI
                break;
            case EProject.MocapGITRG:
                prj.title = prjConfig.mocapGitrg.title;
                prj.type = prjConfig.mocapGitrg.type;
                prj.shortDescr = prjConfig.mocapGitrg.shortDescr;
                prj.tags = prjConfig.mocapGitrg.tags;
                prj.thumbnail = MocapGITRGTN // MocapTN; //DefaultThumbnail;
                prj.refLinks = getPrjRefLinks(prjConfig.mocapGitrg.refLinks);
                prj.featuredImg = MocapGITRGFI // MocapFI;
                break;
            case EProject.CrayonGITRG:
                prj.title = prjConfig.crayonGitrg.title;
                prj.type = prjConfig.crayonGitrg.type;
                prj.shortDescr = prjConfig.crayonGitrg.shortDescr;
                prj.tags = prjConfig.crayonGitrg.tags;
                prj.thumbnail = CrayonGITRGTN;  // CrayonGITRGTN //DefaultThumbnail;
                prj.refLinks = getPrjRefLinks(prjConfig.crayonGitrg.refLinks);
                prj.featuredImg = CrayonGITRGFI;
                break;
            case EProject.RevealingRoc:
                prj.title = prjConfig.revealingRoc.title;
                prj.type = prjConfig.revealingRoc.type;
                prj.shortDescr = prjConfig.revealingRoc.shortDescr;
                prj.tags = prjConfig.revealingRoc.tags;
                prj.thumbnail = RevealingRocTN; //RevRocTN; //DefaultThumbnail;
                prj.refLinks = getPrjRefLinks(prjConfig.revealingRoc.refLinks);
                prj.featuredImg = RevealingRocFI;
                break;
            case EProject.ChevEscape:
                prj.title = prjConfig.chevEscape.title;
                prj.type = prjConfig.chevEscape.type;
                prj.shortDescr = prjConfig.chevEscape.shortDescr;
                prj.tags = prjConfig.chevEscape.tags;
                prj.thumbnail = ChevsEscapeTN; //ChevsEscapeTN; //DefaultThumbnail;
                prj.refLinks = getPrjRefLinks(prjConfig.chevEscape.refLinks);
                prj.featuredImg = ChevsEscapeFI;
                break;
            case EProject.ColonialCarnival:
                prj.title = prjConfig.colonialCarnival.title;
                prj.type = prjConfig.colonialCarnival.type;
                prj.shortDescr = prjConfig.colonialCarnival.shortDescr;
                prj.tags = prjConfig.colonialCarnival.tags;
                prj.thumbnail = ColonialCarnivalTN; // DefaultThumbnail;
                prj.refLinks = getPrjRefLinks(prjConfig.colonialCarnival.refLinks);
                prj.videoSrc = "https://www.youtube.com/watch?v=Pz41maOFJ94&ab_channel=rocstory";
                prj.featuredImg = ColonialCarnivalFI; //ColonialCarnivalFeaturedImg;
                break;
            case EProject.TwinlandeSuperStore:
                prj.title = prjConfig.twinlandeSuperstore.title;
                prj.type = prjConfig.twinlandeSuperstore.type;
                prj.shortDescr = prjConfig.twinlandeSuperstore.shortDescr;
                prj.tags = prjConfig.twinlandeSuperstore.tags;
                prj.thumbnail = TwinlandeSSTN; //DefaultThumbnail;
                prj.refLinks = getPrjRefLinks(prjConfig.twinlandeSuperstore.refLinks);
                prj.featuredImg = TwinlandeSSFI;
                break;
            case EProject.TestProject:
                prj.title = prjConfig.testProject.title;
                prj.type = prjConfig.testProject.type;
                prj.shortDescr = prjConfig.testProject.shortDescr;
                prj.tags = prjConfig.testProject.tags;
                prj.thumbnail = DefaultTN;
                prj.refLinks = getPrjRefLinks(prjConfig.testProject.refLinks);
                break;

            default:
                prj.title = 'Unknown Project';
                prj.type = EProjectType.Unknown;
                prj.shortDescr = '';
                prj.tags = [];
                prj.thumbnail = DefaultFI;
                prj.refLinks = [];
                break;
        }

        const { abtInfo, hlInfo, otherInfo } = getPrjInfoCardObjs();
        prj.aboutInfo = abtInfo;
        prj.highlightsInfo = hlInfo;
        prj.extraInfoCards = otherInfo;

        return prj;
    }

    const getCollaborators = () => {
        let collabs: ICollaborator[] = [];

        try {

            switch (name) {
                case EProject.ChevEscape:
                    collabs = createCollaboratorObjs(prjConfig.chevEscape.collaborators);
                    break;
            }

            return collabs
        }
        catch (error) {
            console.error(error);
            console.error('Please contact the developer!')
            return collabs;
        }
    }

    const createCollaboratorObjs = (prjCollabs: any[]): ICollaborator[] => {
        if (prjCollabs) {

            return prjCollabs.map(collab => {
                return {
                    personId: collab.personId,
                    role: collab.role
                }
            })
        }
        else {
            return []
        }
    }

    useEffect(() => {
        const prj = createProjectObj();
        const uniqueTags = sanitizeTagCollection(prj.tags);
        const collabs = getCollaborators();

        setTitle(prj.title);
        setType(prj.type);
        setShortDescr(prj.shortDescr);
        setTags(uniqueTags);
        setThumbnail(prj.thumbnail);
        setFeaturedImg(prj.featuredImg);
        setVideoSrc(prj.videoSrc);
        setRefLinks([...prj.refLinks]);
        setAboutInfo(prj.aboutInfo);
        setHighlightsInfo(prj.highlightsInfo);
        setExtraInfoCards(prj.extraInfoCards);
        setCollaborators(collabs);

    }, [])



    return {
        title,
        type,
        shortDescr,
        tags,
        thumbnail,
        featuredImage,
        videoSrc,
        refLinks,
        aboutInfo,
        highlightsInfo,
        extraInfoCards,
        collaborators,
        formatProjectType
    }
}

export default useProject;