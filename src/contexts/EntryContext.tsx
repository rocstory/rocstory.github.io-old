import React, {useState, createContext} from 'react';
// import appConfig from '../appConfig.json';


interface EntryProps {
    children: React.ReactNode 
}

export const EntryContext = createContext({
    selEntry: undefined,
    setSelEntry: (selEntry: any) => {}
})

export const EntryProvider = ({children}: EntryProps) => {
    const [selEntry, setSelEntry] = useState<any>(undefined);


    return (
        <EntryContext.Provider value={{
            selEntry,
            setSelEntry,
        }}>
            {children}
        </EntryContext.Provider>
    );
};

// const PortfolioContext = React.createContext();

// const PortfolioContextProvider = ({children}) =>  {
//     const [dbConfig, setDBConfig] = useState(null);
//     const [selEntry, setSelEntry] = useState(null);
//     const [entryType, setEntryType] = useState(false); 

//     const [selPage, setSelPage] = useState(appConfig.WebPages.linkPage)

//     return (
//         <PortfolioContext.Provider value={{
//             dbConfig, setDBConfig,
//             selEntry, setSelEntry,
//             entryType, setEntryType,
//             selPage, setSelPage
//         }} >
//             {children}
//         </PortfolioContext.Provider>
//     )
// }

// export {PortfolioContext, PortfolioContextProvider} 

