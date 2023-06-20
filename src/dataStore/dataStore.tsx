import { ESocialMedia } from '../enums/ESocialMedia';
import { IPersonalBio } from '../models/IPersonalBio';
import { IProjectMetadata} from '../models/IProjectMetadata';
import { ISocialLink } from '../models/ISocialLink';
import { ITechnologyIcon } from '../models/ITechnologyIcon';
import { ITreeLink } from '../models/TreeLink';

const projectEntries = require('./data/projectEntries.json');
const activityEntries = require('./data/activityEntries.json');

const meData = require('./data/me.json')
const linksData = require('./data/links.json')
const peopleCollection = require('./data/peopleCollection.json')

const technologies = require("./data/technologies.json");




export function getMeData() {
    return meData;
}

export function getPersonalBio() {
    const bio = meData.general;
    return {
        name: bio.name,
        title: bio.title,
        pronounciation: bio.prnounciation,
        introduction: bio.introduction
    } as IPersonalBio
}

export function getSocialLinks(): ISocialLink[] {
    return meData.socialLinks.map((link: any )=> ({
        src: link.src, 
        name: link.name,
        type: link.type
    } as ISocialLink))
}

export function getLinksData() : ITreeLink[] {

    return linksData.map((link: any) => ({
        label: link.label,
        url: link.url,
        color: link.color,
        icon: link.icon
    }));
}
export function getProjectsData() : IProjectMetadata[] {

    // return projectEntries;
    return projectEntries.map((entry: any, index: number) => ({
        id: entry.id ?? undefined,
        index: entry.index ?? index,
        name: entry.name ?? undefined,
        type: entry.type ?? undefined,
        icon: entry.icon ?? {type: 'fas', name:'lightbulb', color: '#FDFD96'},
        referenceLinks: entry.refLinks ?? [],
        caption: entry.caption ?? undefined,
        repoUrl: entry.repoUrl ?? undefined,
        demoUrl: entry.demoUrl ?? undefined,
        startDate: entry.startDate ?? undefined,
        videoUrl: entry.video ?? undefined,
        images: entry.images ??  undefined,
        tags: entry.tags ?? [],
        collaborators: entry.collaborators ?? []
    })); 
}

export function getActivitiesData() {
    return activityEntries;
}

export function getPerson(pid: string) {
    return peopleCollection.find((person: any) => person.pid === pid)
}

export function getTechIcon(name: string) : ITechnologyIcon {
    name = name.toLowerCase().trim();
    const iconData = getIconByProperty(name);
    // return default icon if icon is not found 
    if (!iconData) return getIconByProperty('default');
    return iconData;
}

function getIconByProperty(iconName: string, property: string = "name") {
    const foundIcon = technologies.filter((tech: any) => tech[property].toLowerCase().localeCompare(iconName) === 0)[0];
    return {
        name: foundIcon.name,
        color: foundIcon.color,
        type: foundIcon.type,
        icon: foundIcon.icon
    } as ITechnologyIcon
}





