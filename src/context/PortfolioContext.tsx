import React, { useState } from "react";
import { EProject } from "../enums/EProject"
import { EPages } from "../enums/EPages";

export type PortfolioContextType = {
    selProject: EProject | undefined;
    selPage: EPages;
    handleSelProject: (project: EProject) => void;
    handleSelPage: (page: EPages) => void;
}
export const PortfolioContext = React.createContext<PortfolioContextType | null>(null);

const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selProject, setSelProject] = useState<EProject | undefined>(undefined);
    const [selPage, setSelPage] = useState<EPages>(EPages.Projects);

    const handleSelProject = (project: EProject) => {
        setSelProject(project);
    }

    const handleSelPage = (page: EPages) => {
        setSelPage(page);
    }

    return (
        <PortfolioContext.Provider
            value={{
                selProject,
                handleSelProject,
                selPage,
                handleSelPage
            }}
        >
            {children}
        </PortfolioContext.Provider>
    )
}

export default PortfolioProvider;