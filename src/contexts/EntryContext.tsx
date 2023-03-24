import React, {useState, createContext} from 'react';

interface EntryProps {
    children: React.ReactNode 
}



export const EntryContext = createContext<any>({
    selEntry: undefined,
    updateSelEntry: () => {}
})

export const EntryProvider = ({children}: EntryProps) => {
    const [selEntry, setSelEntry] = useState<any>(undefined);
    const updateSelEntry = (entry: any) => setSelEntry(entry);


    return (
        <EntryContext.Provider value={{
            selEntry,
            updateSelEntry,
        }}>
            {children}
        </EntryContext.Provider>
    );
};