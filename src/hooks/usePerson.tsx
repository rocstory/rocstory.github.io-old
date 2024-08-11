import React, { useEffect, useState } from "react";
import { IRefLink } from "../interfaces/IRefLink";
import { EPerson } from "../enums/EPerson";
import personConfig from "../config/personConfig";


function usePerson(person: EPerson) {
    const [name, setPerson] = useState('');
    const [profilePicSrc, setProfilePicSrc] = useState('');
    const [refLinks, setRefLinks] = useState<IRefLink[]>([]);

    const getPersonInfo = () => {
        let pName = '';
        let pProfSrc = undefined;
        let refLinks: IRefLink[] = [];
        switch (person) {
            case EPerson.ChrisKukk:
                pName = personConfig.cKukkk.name;
                pProfSrc = personConfig.cKukkk.profilePicSrc;
                refLinks = personConfig.cKukkk.refLinks;
                break;
            case EPerson.ChristopherIossa:
                pName


        }
    }

    useEffect(() => {

    }, [])



    return {

    }
}

export default usePerson;