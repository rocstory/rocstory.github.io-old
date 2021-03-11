// import appConfig from "./app-config.json";
var configData = require('./db-config.json');

async function getConfig(key)
{
    return configData[key];
}

async function getAllConfigObj()
{
    return configData;
}

module.exports =
{
    getConfig,
    getAllConfigObj
}
