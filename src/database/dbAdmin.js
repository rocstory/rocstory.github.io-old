import {db} from "../firebase";
import {getConfig} from "../app-config"; 


export async function addEntryToCollection(entry, collection)
{
    try
    {
        if (!isEntryValid(entry) || !iscollectionValid(collection))
            throw new Error("Invalid parameters");
        
        const {name, links, startDate, mediaList, technologies, 
            summary, notes, acknowledgements, collaborators, 
            icon, likes, index} = entry
        const docId = name;
        delete entry.name
        collection = collection.toLowerCase();
        await db.collection(collection).doc(docId).set(entry);
        return docId;
    }
    catch(error)
    {
        // console.log(error);
        return false;
    }
}

export async function addEntriesToCollection(entry, collection)
{
    
}

export async function updateEntry(entry, collection)
{

}

function isEntryValid(entry)
{
    try
    {
        const mockEntry = null; //await getConfig()
        hasSameProps()
    }
    catch (error)
    {

    }
}

function hasSameProps( obj1, obj2 ) {
    var obj1Props = Object.keys( obj1 ),
        obj2Props = Object.keys( obj2 );

    if ( obj1Props.length == obj2Props.length ) {
        return obj1Props.every( function( prop ) {
          return obj2Props.indexOf( prop ) >= 0;
        });
    }

    return false;
}