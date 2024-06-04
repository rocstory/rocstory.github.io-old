import { Image } from "react-bootstrap";
import { EProject } from "../enums/EProject";
import { DefaultThumbnail, HeroImg } from "../helpers/imageHelper";
import { IProject } from "../interfaces/IProject";
import { useEffect, useState } from "react";
import { EProjectType } from "../enums/EProjectType";
import { IRefLink } from "../interfaces/IRefLink";
import { ERefLinkType } from "../enums/ERefLinkType";
import prjConfig from "../config/projectConfig";

const SAMPLE_TEXT = "This project leverages React and TypeScript to craft modern, scalable web applications with a focus on reliability and developer efficiency. By harnessing React's component-based architecture and TypeScript's static typing, it ensures robustness and maintainability in the codebase."

function useProject(name: EProject) {
    const [title, setTitle] = useState<string>('Test Project');
    const [type, setType] = useState<EProjectType>(EProjectType.WebDevelopment);
    const [shortDescr, setShortDescr] = useState<string>(SAMPLE_TEXT);
    const [tags, setTags] = useState<any>(['a', 'b', 'c', 'd']);
    const [thumbnail, setThumbnail] = useState<string>(DefaultThumbnail);
    const [refLinks, setRefLinks] = useState<IRefLink[]>([]);

    const getTitle = () => {
        let formattedTitle = String(name);
        switch (name) {
            case EProject.TwinlandeSuperStore:
                formattedTitle = prjConfig.twinlandeSuperstore.title;
                break;

        }
        return formattedTitle;
    }

    const getType = () => {
        switch (name) {
            case EProject.TwinlandeSuperStore:
                return prjConfig.twinlandeSuperstore.type;
            default:
                return EProjectType.WebDevelopment

        }

    }

    const formatProjectType = (prjType: EProjectType) => {
        switch (prjType) {
            case EProjectType.WebDevelopment:
                return 'Web Development';
            default:
                return '';
        }
    }

    const getShortDescr = () => {
        switch (name) {
            case EProject.TwinlandeSuperStore:
                return prjConfig && prjConfig.twinlandeSuperstore && prjConfig.twinlandeSuperstore.shortDescr;
            default:
                return '';
        }
    }

    const getTags = () => {
        switch (name) {
            case EProject.TwinlandeSuperStore:
                return prjConfig.twinlandeSuperstore.tags;
            default:
                return [];

        }
    }

    const getThumbnail = () => {
        switch (name) {
            case EProject.TwinlandeSuperStore:
                return DefaultThumbnail;
            default:
                return DefaultThumbnail;
        }
    }

    const getRefLinks = () => {
        let configRefLinks: any = [];
        let prjRefLinks: IRefLink[] = [];
        switch (name) {
            case EProject.TwinlandeSuperStore:
                configRefLinks = prjConfig.twinlandeSuperstore.refLinks;
                break;
        }

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

    useEffect(() => {
        const prjTitle = getTitle();
        const prjType = getType();
        const prjShortDescr = getShortDescr();
        const prjTags = getTags();
        const prjThumbnail = getThumbnail();
        const referenceLinks = getRefLinks();

        setTitle(prjTitle);
        setType(prjType);
        setShortDescr(prjShortDescr);
        setTags(prjTags);
        setThumbnail(prjThumbnail);
        setRefLinks([...referenceLinks]);

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