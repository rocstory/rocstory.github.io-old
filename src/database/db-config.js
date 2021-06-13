// import appConfig from "./app-config.json";
var configData = require('./db-config.json');

export async function getConfig(key)
{
    return configData[key];
}

export  function getAllConfigObj()
{
    return configData;
}
