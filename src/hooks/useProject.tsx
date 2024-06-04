import { Image } from "react-bootstrap";
import { EProject } from "../enums/EProject";
import { DefaultThumbnail, HeroImg } from "../helpers/imageHelper";
import { IProject } from "../interfaces/IProject";
import { useEffect, useState } from "react";
import { EProjectType } from "../enums/EProjectType";
import { IRefLink } from "../interfaces/IRefLink";
import { ERefLinkType } from "../enums/ERefLinkType";
import prjConfig from "../config/projectConfig";
import { ETag } from "../enums/ETag";

interface IProjectObj {
    title: string,
    type: EProjectType,
    shortDescr: string,
    tags: ETag[],
    thumbnail: string,
    refLinks: IRefLink[],
}


function useProject(name: EProject) {
    const [title, setTitle] = useState<string>('');
    const [type, setType] = useState<EProjectType>(EProjectType.WebDevelopment);
    const [shortDescr, setShortDescr] = useState<string>('');
    const [tags, setTags] = useState<ETag[]>([]);
    const [thumbnail, setThumbnail] = useState<string>(DefaultThumbnail);
    const [refLinks, setRefLinks] = useState<IRefLink[]>([]);

    const formatProjectType = (prjType: EProjectType) => {
        switch (prjType) {
            case EProjectType.WebDevelopment:
                return 'Web Development';

            default:
                return '';
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


    // to sanitize incoming data 

    const createProjectObj = () => {
        let prj: IProjectObj = {
            title: '',
            type: EProjectType.WebDevelopment,
            shortDescr: '',
            tags: [],
            thumbnail: DefaultThumbnail,
            refLinks: []
        };

        switch (name) {
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
        setRefLinks([...prj.refLinks]);

    }, [])



    return {
        title,
        type,
        shortDescr,
        tags,
        thumbnail,
        refLinks,
        formatProjectType
    }
}

export default useProject;