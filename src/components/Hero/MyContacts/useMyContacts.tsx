
import { useEffect, useState } from 'react';
import './MyContacts.scss';
import appConfig from '../../../appConfig';

import { ESocialMedia } from '../../../enums/ESocialMedia';
import { IMyContactTrigger } from './MyContactTrigger/MyContactTrigger';

export const useMyContacts = () => {
    const { myInfo } = appConfig;
    const [myContacts, setMyContacts] = useState<IMyContactTrigger[]>([]);

    const createMyContacts = () => {
        const { myLinks } = myInfo
        const contacts: IMyContactTrigger[] = [];

        if (myLinks && myLinks.linkedinUrl) {
            contacts.push({
                name: ESocialMedia.LinkedIn,
                src: myLinks.linkedinUrl,
                icon: undefined
            })
        }
        if (myLinks && myLinks.githubUrl) {
            contacts.push({
                name: ESocialMedia.Github,
                src: myLinks.githubUrl,
                icon: undefined,
            })
        }
        if (myLinks && myLinks.instagramUrl) {
            contacts.push({
                name: ESocialMedia.Instagram,
                src: myLinks.instagramUrl,
                icon: undefined
            })
        }

        return contacts;
    }

    useEffect(() => {
        const contacts = createMyContacts();
        setMyContacts(contacts);

    }, [])



    return {
        myContacts
    }
}

export default useMyContacts;