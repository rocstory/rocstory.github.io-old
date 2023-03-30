import React, {useState, createContext} from 'react';

interface IArticleProps {
    children: React.ReactNode 
}



export const ArticleContext = createContext<any>({
    selEntry: undefined,
    updateSelEntry: () => {}
})

export const ArticleProvider = ({children}: IArticleProps) => {
    const [selArticle, setSelArticle] = useState<any>(undefined);
    const updateSelArticle = (article: any) => setSelArticle(article);


    return (
        <ArticleContext.Provider value={{
            selArticle,
            updateSelArticle,
        }}>
            {children}
        </ArticleContext.Provider>
    );
};