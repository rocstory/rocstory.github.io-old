
const projectEntries = require('./data/projectEntries.json');
const activityEntries = require('./data/activityEntries.json');

const meData = require('./data/me.json')
const linksData = require('./data/links.json')
const peopleCollection = require('./data/peopleCollection.json')

const technologies = require("./data/technologies.json");



export function getMeData() {
    return meData;
}
export function getLinksData() {
    return linksData;
}
export function getProjectsData() {
    return projectEntries;
}

export function getActivitiesData() {
    return activityEntries;
}

export function getPerson(pid) {
    return peopleCollection.find(person => person.pid === pid)
}

export function getTechIcon(name) {
    name = name.toLowerCase().trim();

    const iconData = getIconByProperty(name);
    // return default icon if icon is not found 
    if (!iconData) return getIconByProperty('default');
    return iconData;
}

function getIconByProperty(iconName, property = "name") {
    return technologies.filter(tech => tech[property].toLowerCase().localeCompare(iconName) === 0)[0];
}





