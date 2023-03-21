import React, {useState, createContext, FC} from 'react';
// import appConfig from '../appConfig.json';


interface PortfolioPageProps {
    children: React.ReactNode 
}

export enum EPortfolioPages {
    Home = "home",
    Projects = "projects"
}

export const PageContext = createContext<any>({
    selPage: EPortfolioPages.Home,
    changeSelPage: () => {} 
})

export const PageProvider = ({children} : PortfolioPageProps) => {
    const [selPage, setSelPage] = useState<EPortfolioPages>(EPortfolioPages.Home)

    const changeSelPage = (page: EPortfolioPages) => setSelPage(page);
    return (
        <PageContext.Provider value={{
            selPage,
            changeSelPage,
        }}>
            {children}
        </PageContext.Provider>
    );
};

// const TodosProvider: FC = ({ children } : any) => {
//     const [todos, setTodos] = useState<string[]>(contextDefaultValues.todos);
  
//     const addTodo = (newTodo: string) => setTodos((todos) => [...todos, newTodo]);
  
//     return (
//       <TodosContext.Provider
//         value={{
//           todos,
//           addTodo
//         }}
//       >
//         {children}
//       </TodosContext.Provider>
//     );
//   };