import React,{ useState, useContext, useEffect} from 'react';
import data from './components/dataBlog'
import {auth} from './firebase'

const AppContext = React.createContext()


const AppProvider = ({children}) => {

    const [articles, setArticles] = useState(data[0])
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }

    const logout = () => {
        auth.signOut()
    }

    const resetPassword = (email) => {
        return auth.sendPasswordResetEmail(email)
    }

    useEffect(() => {
        const unsubcribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubcribe
    },[])

    const value = {
        articles, 
        setArticles,
        signup,
        currentUser,
        login,
        logout,
        resetPassword
    }

    return (
        <AppContext.Provider value={value}>
            {!loading && children}
        </AppContext.Provider>
    )
}

// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}