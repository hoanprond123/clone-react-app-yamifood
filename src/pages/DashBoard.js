import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {useGlobalContext} from '../context'

function DashBoard() {
    const [error, setError] = useState('')
    const {logout, currentUser} = useGlobalContext()
    const navigate = useNavigate()
    
    console.log(currentUser.uid)

    const handleLogOut = async () =>{
        setError('')

        try{
            await logout()
            navigate('/log-in')
        } catch {
            setError('Failed to log out')
        }
    }

    return (
        <div className="sign-up">
            <div className="grid wide">
                <div className="sign-up-container">
                    <div className="sign-up-beside">
                        <h1>User</h1>
                        {error && <h2>{error}</h2>}
                        <strong>Email: {currentUser.email}</strong>
                        <button className="btn" onClick={handleLogOut}>Log out</button>
                        <Link className="sign-up-beside-home" to="/">Go back to the home Page</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard