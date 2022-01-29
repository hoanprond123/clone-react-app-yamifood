import React from 'react'
import {Navigate} from 'react-router-dom'
import {useGlobalContext} from '../context'
function PrivateRoute({children}) {

    const {currentUser} = useGlobalContext()

    return (
        currentUser ? children : <Navigate to="/log-in" />
    )
}

export default PrivateRoute
