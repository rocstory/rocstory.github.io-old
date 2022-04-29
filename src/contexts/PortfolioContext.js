import React, {useState} from 'react';
import appConfig from '../appConfig';


const PortfolioContext = React.createContext();

const PortfolioContextProvider = ({children}) =>  {
    const [dbConfig, setDBConfig] = useState(null);
    const [selEntry, setSelEntry] = useState(null);
    const [entryType, setEntryType] = useState(false); 

    const [selPage, setSelPage] = useState(appConfig.WebPages.linkPage)

    return (
        <PortfolioContext.Provider value={{
            dbConfig, setDBConfig,
            selEntry, setSelEntry,
            entryType, setEntryType,
            selPage, setSelPage
        }} >
            {children}
        </PortfolioContext.Provider>
    )
}

export {PortfolioContext, PortfolioContextProvider} 

