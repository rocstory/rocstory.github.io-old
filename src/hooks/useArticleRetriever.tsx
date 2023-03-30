import { useContext, useState, useEffect } from 'react'
import { EProjectId } from '../enums/EProjectId';
// import { useImageRetriever } from './useImageRetriever';

// Project Articles
import { TwinlandeTabs } from '../components/ProjectArticles/TwinlandeSuperStoreArticle';
import { IArticleTab } from '../models/IArticleTab';


type ArticleRetrieverProps = {
    articleId: string
}

export const useArticleRetriever = ({articleId} : ArticleRetrieverProps) => {

    const [tabs, setTabs] = useState<IArticleTab[]>([]);

    

    const getArticleTabs = (articleId: string) => {

        switch (articleId) {
            case EProjectId.TwinlandeSuperStore:
                return TwinlandeTabs;
            // case EProjectId.ChevEscape:
            //     return chevEscapeThumbnail;
            // case EProjectId.PawBytes:
            //     return pawbytesCafeThumbnail;
            // case EProjectId.ColonialCarnival:
            //     return colonialCarnivalThumbnail
            default:
                return TwinlandeTabs;
        }
    }

    useEffect(() => {
        const articleTabs = getArticleTabs(articleId);
        setTabs(articleTabs);
    }, [articleId])


    return {
        tabs
    }
}