var dbConfig = require("./data/misc/db-config");

var prjImports = require('./imports/prjImports.json');
var projectEntries = require('./data/projectEntries.json');
var activityEntries = require('./data/activityEntries.json');
const meData = require('./data/me.json')
const linksData = require('./data/links.json')

export async function getMeData() {
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


export function getLocalEntries(collection)
{
    // const {ProjectCollectionName, ActivityCollectionName} = dbConfig.getAllConfigObj();

    // switch (collection)
    // {
    //     case ProjectCollectionName:
    //         return projectEntries;
    //     case ActivityCollectionName:
    //         return activityEntries;
    // }
    return 0
}



