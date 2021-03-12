
var dbConfig = require("./db-config");
var { db } = require('./firebase');

// var activitySample = require('./data/activityData.json');
// var projectSample = require('./data/projectData.json') //require("./data/entrySample.json");
// var generalSample = require("./data/generalSample.json");
var prjImports = require('./imports/prjImports.json');
// var actImports = require('./imports/actImports.json');
// var peopleImports = require('./imports/actImports.json');
// var generalImports = require('./imports/actImports.json');


export async function getGeneralData() {
    try {
        // console.log("Getting general data...")
        const {GeneralCollectionName, AboutMeDocName, ContactLinksDocName} = await dbConfig.getAllConfigObj();
        // console.log("General config names:", GeneralCollectionName, AboutMeDocName, ContactLinksDocName);
        let generalData = {};
        const docRef = db.collection(GeneralCollectionName);
        const aboutMe = await docRef.doc(AboutMeDocName).get().then((doc) => doc.data().aboutme);
        const contactLinks = await docRef.doc(ContactLinksDocName).get().then((doc) => doc.data().contactlinks);
        
        generalData[AboutMeDocName] = aboutMe;
        generalData[ContactLinksDocName] = contactLinks;
        // console.log("General data sample:", genData, generalData);
        return generalData;
    }
    catch (error) {
        throw new Error(error);
    }
}

export async function getEntries(collection)
{
    try
    {
        collection = collection.toLowerCase();
        //const collectionName = await dbConfig.getConfig('ActivityCollectionName');
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
        // console.log("Retireved Entries:", entries);
        // console.log("From:", collection);
        return entries;
    }
    catch (error)
    {
        throw new Error('Unable to retrieve data from database');
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
    // console.log("Getting DB config...");
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
        // console.log(error);
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
        console.log(error);
        throw new Error(error);
    }
}


async function importEntries()
{
    const entries =  prjImports;
    for (const entry of entries)
    {
        console.log("Importing entry:");
        console.log(entry);
        await addEntry(entry, 'projectstore');
    }
}

async function addEntry(entry, collection)
{
    try
    {
        const doc = entry.name;
        delete entry.name;
        db.collection(collection).doc(doc).set(entry);
    }
    catch (error)
    {
        console.error(error);
    }
}

// exports =
// {
//     getGeneralData,
//     getEntries,
//     getDBConfigObj,
//     addLikesToEntry,
//     getPerson,
//     getEntry,

//     importEntries
// }

// module.exports =
// {
//     getGeneralData,
//     getEntries,
//     getDBConfigObj,
//     addLikesToEntry,
//     getPerson,
//     getEntry,

//     importEntries
// }


