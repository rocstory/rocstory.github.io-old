var configData = require('./app-config.json');

export async function getConfig(key) {
    try 
    {
        const value = configData[key];
        return value;
    }
    catch(error)
    {
        return null;
    }
}
export async function getConfigObj()
{
    try 
    {
        return configData;

    }
    catch (err)
    {
        return null; 
    }
}

// module.exports =
// {
//     getConfig, 
//     getConfigObj
// }
