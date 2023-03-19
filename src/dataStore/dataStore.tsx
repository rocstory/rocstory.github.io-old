import { ESocialMedia } from '../enums/ESocialMedia';
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
export function getProjectsData() {
    return projectEntries;
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





