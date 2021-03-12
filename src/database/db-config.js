// import appConfig from "./app-config.json";
var configData = require('./db-config.json');

export async function getConfig(key)
{
    return configData[key];
}

export async function getAllConfigObj()
{
    return configData;
}

// exports =
// {
//     getConfig,
//     getAllConfigObj
// }


// module.exports =
// {
//     getConfig,
//     getAllConfigObj
// }
