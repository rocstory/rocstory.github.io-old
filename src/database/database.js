var dbConfig = require("./db-config");
var { db } = require('./firebase');
const NodeCache = require("node-cache");
const dbCache = new NodeCache();

var prjImports = require('./imports/prjImports.json');
var projectEntries = require('./data/projectEntries.json');
var activityEntries = require('./data/activityEntries.json');
var generalData = require('./data/generalData.json');


const GENERAL_CACHE_KEY = 'general';

export async function getGeneralData() {
    try 
    {
        // throw "forced error";
        return getGeneralDataFromCache() || await getGeneralDataFromDB();
    }
    catch (error) {
        throw error;
    }
}

function getGeneralDataFromCache()
{
    try
    {
        const generalData = dbCache.get(GENERAL_CACHE_KEY);
        return generalData;
    }
    catch (error)
    {
        throw error
    }
}

async function getGeneralDataFromDB()
{
    try {
        
        const {GeneralCollectionName, AboutMeDocName, ContactLinksDocName} = await dbConfig.getAllConfigObj();
        
        let generalData = {};
        const docRef = db.collection(GeneralCollectionName);
        const aboutMe = await docRef.doc(AboutMeDocName).get().then((doc) => doc.data().aboutme);
        const contactLinks = await docRef.doc(ContactLinksDocName).get().then((doc) => doc.data().contactlinks);
        
        generalData[AboutMeDocName] = aboutMe;
        generalData[ContactLinksDocName] = contactLinks;
        dbCache.set(GENERAL_CACHE_KEY, generalData);
        return generalData;
    }
    catch (error) {
        throw error;
    }
}
export function getLocalGeneralData()
{
    return generalData;
}

export async function getEntries(collection)
{
    try
    {
        // throw "forced error";
        return getEntriesFromCache(collection) || await getEntriesFromDB(collection)
    }
    catch (error)
    {
        throw error;
    }
}

function getEntriesFromCache(collection)
{
    try
    {
        const entries = dbCache.get(collection);
        return entries;
    }
    catch (error)
    {
        return null
    }
}

async function getEntriesFromDB(collection)
{
    try
    {
        const docRef = db.collection(collection);
        const entries = await docRef.get().then(snapshot => {
            let entryList = [];

            snapshot.forEach(doc => {
                let data  = doc.data();
                data['name'] = doc.id; 
                entryList.push(data);
            });

            return entryList;
        });
        dbCache.set(collection, entries);

        return entries;
    }
    catch (error)
    {
        throw new Error('Unable to retrieve data from database');
    }
}

export function getLocalEntries(collection)
{
    const {ProjectCollectionName, ActivityCollectionName} = dbConfig.getAllConfigObj();

    switch (collection)
    {
        case ProjectCollectionName:
            return projectEntries;
        case ActivityCollectionName:
            return activityEntries;
    }
}

export async function getEntry(entryName, collectionName)
{
    try
    {
        const docRef = db.collection(collectionName).doc(entryName);
        const entry = await docRef.get().then(doc => {
            if (doc.exists)
            {
                let data = doc.data();
                data['name'] = doc.id;
                return data;
            }
            else 
            {
                throw new Error(`Doc does not exist`)
            }
        });
        return entry;
    }
    catch
    {
        throw new Error(`Unable to retrieve entry: ${entryName} from ${collectionName}`);
    }
}

export function getDBConfigObj() {
    return dbConfig.getAllConfigObj();
}

export async function getPerson(personID) {
    try {
        personID = personID.toLowerCase();
        const collection = await dbConfig.getConfig("PersonCollectionName");

        const docRef = db.collection(collection)
        const person = await docRef.doc(personID).get()
                                .then(doc => {
                                    let data = doc.data();
                                    data['pid'] = doc.id; 
                                    return data;
                                });
        return person;
    }
    catch (error) {
        //  (error);
        throw new Error(`Unable to retrieve ${personID} from database.`);
    }
}

export async function addLikesToEntry(entryName, collection, numOfLikes = 1) {
    try {
        numOfLikes = parseInt(numOfLikes);
        // const prjCollection = await dbConfig.getConfig('ProjectCollectionName');
        const docRef = db.collection(collection).doc(entryName);
        const likes = await docRef.get().then(doc => doc.data().likes); 
        
        if (likes === undefined || likes === null) throw new Error("Entry Likes does not exist!");
        let newLikes = likes + numOfLikes;
        await docRef.update({
            likes: newLikes
        });
        return newLikes;
    }
    catch (error) {
        //  (error);
        throw new Error(error);
    }
}


// export async function importEntries(name)
// {
//     console.log("Adding entries!", name);
//     const entries = (name === "project") ? projectEntries : activityEntries;
//     for (const entry of entries)
//     {
//         await addEntry(entry, 'activitystore2');
//     }
// }

// async function addEntry(entry, collection)
// {
//     try
//     {
//         console.log("Entry:", entry);
//         const doc = entry.name;
//         delete entry.name;
//         await db.collection(collection).doc(doc).set(entry);
//     }
//     catch (error)
//     {
//         console.error(error);
//     }
// }
