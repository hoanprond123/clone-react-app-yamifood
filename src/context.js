import React,{ useState, useContext} from 'react';
import data from './components/dataBlog'

const AppContext = React.createContext()

const AppProvider = ({children}) => {

    const [articles, setArticles] = useState(data[0])
    return (
        <AppContext.Provider value={{articles, setArticles}}>
            {children}
        </AppContext.Provider>
    )
}

// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}