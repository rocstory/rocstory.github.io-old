import React, {useState, createContext} from 'react';
// import appConfig from '../appConfig.json';


interface PortfolioPageProps {
    children: React.ReactNode 
}

export enum EPortfolioPages {
    Home = "home",
    Projects = "projects"
}

export const PageContext = createContext({
    selPage: EPortfolioPages.Home,
    setSelPage: (selPage: EPortfolioPages) => {}
})

export const PageProvider = ({children}: PortfolioPageProps) => {
    const [selPage, setSelPage] = useState<EPortfolioPages>(EPortfolioPages.Home)

    return (
        <PageContext.Provider value={{
            selPage,
            setSelPage,
        }}>
            {children}
        </PageContext.Provider>
    );
};
