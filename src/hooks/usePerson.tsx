import { Image } from "react-bootstrap";
import { EProject } from "../enums/EProject";
import { ChevsEscapeFI, ChevsEscapeTN, ColonialCarnivalFI, ColonialCarnivalFeaturedImg, ColonialCarnivalTN, CrayonGITRGFI, CrayonGITRGTN, DefaultFI, DefaultTN, HeroImg, MocapFI, MocapTN, PawbytesCafeFI, PawbytesCafeTN, RevRocTN, RevealingRocFI, TwinlandeSSFI, TwinlandeSSTN } from "../helpers/imageHelper";
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
import { EPerson } from "../enums/EPerson";


function usePerson(person: EPerson) {
    const [name, setPerson] = useState('');
    const [profilePicSrc, setProfilePicSrc] = useState('');
    const [refLinks, setRefLinks] = useState<IRefLink[]>([]);

    const getPersonInfo = () => {
        let pName = '';
        let pProfSrc = '';
        let refLinks: IRefLink[] = [];
        switch (person) {
            case EPerson.ChrisKukk:

        }
    }

    useEffect(() => {

    }, [])



    return {

    }
}

export default usePerson;