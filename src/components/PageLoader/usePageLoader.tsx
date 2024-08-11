import { useEffect, useState } from "react";
import { EPages } from "../../enums/EPages";
import ProjectsPage from "../../pages/ProjectsPage/ProjectsPage";
import ContactMePage from "../../pages/ContactMePage/ContactMePage";
import ProjectDisplayPage from "../../pages/ProjectDisplayPage/ProjectDisplayPage";
import { EProject } from "../../enums/EProject";


function usePageLoader(pageName: EPages) {
    const [PageComponent, setPageComponent] = useState<any>(undefined)

    const getPageToLoad = () => {

        switch (pageName) {
            case EPages.Projects:
                return <ProjectsPage />
            case EPages.ContactMe:
                return <ContactMePage />  // contact page
            case EPages.ProjectDisplay:
                return <ProjectDisplayPage />
            default:
                return <div> Page Not Found </div>// page not found page
        }

    }

    useEffect(() => {
        const pageToLoad = getPageToLoad();
        setPageComponent(pageToLoad);

    }, [pageName])

    return {
        PageComponent
    }
}

export default usePageLoader;