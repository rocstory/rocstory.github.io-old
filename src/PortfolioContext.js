import React, {useState} from 'react';


const PortfolioContext = React.createContext();

const PortfolioContextProvider = ({children}) =>  {
    const [dbConfig, setDBConfig] = useState(null);
    const [selEntry, setSelEntry] = useState(null);
    const [entryType, setEntryType] = useState(false); 

    return (
        <PortfolioContext.Provider value={{
            dbConfig, 
            setDBConfig,
            selEntry,
            setSelEntry,
            entryType,
            setEntryType
        }} >
            {children}
        </PortfolioContext.Provider>
    )
}

export {PortfolioContext, PortfolioContextProvider} 

