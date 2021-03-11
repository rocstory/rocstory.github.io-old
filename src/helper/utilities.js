
var db = require("../database/database");
var technologies = require("../data/technologies.json");
var projectTags = require("../data/projectTags.json");

// centralize obtaining the collection name based on the entry type
async function getCollectionName(entryType)
{
    const {ActivityCollectionName, ProjectCollectionName} = (await db.getDBConfigObj()); 
    return entryType ? ActivityCollectionName : ProjectCollectionName
}

function getProjectTags()
{
    return projectTags;
}

function getTechIcon(name)
{
    name = name.toLowerCase().trim();

    const iconData = getIconByProperty(name);
    // return default icon if icon is not found 
    if (!iconData) return getIconByProperty('default');
    return iconData;
}

function getIconByProperty(iconName, property="name")
{
    return technologies.filter(tech => tech[property].toLowerCase().localeCompare(iconName) === 0)[0];
}

function sortAscendingOrder(array)
{
    array = array.sort((itemA, itemB) => {
        if (itemA < itemB) return -1;
        else if (itemA > itemB) return 1;
        return 0;
    });
    return array;
}

function modifyName(name = '')
{
    if (name.length < 14 ) return name;
    const nameArr = name.split(' ');
    if (nameArr.length >= 2)
    {
        let lastName = nameArr[nameArr.length - 1];
        let lastInitial = lastName[0].toUpperCase();
        name = nameArr[0].concat(` ${lastInitial}.`)
    }
    else
    {
        name = name.substr(0, 13)
    }
    return name;
}

module.exports =
{
    getCollectionName,
    getTechIcon,
    getProjectTags,
    sortAscendingOrder,
    modifyName
}