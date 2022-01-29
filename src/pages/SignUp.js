import React,{useRef, useState} from 'react'
import {Link,useNavigate } from 'react-router-dom'
import {useGlobalContext} from '../context'
function SignUp() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup, currentUser} = useGlobalContext()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    console.log(currentUser)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Password do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }


    return (
        <div className="sign-up">
            <div className="grid wide">
                <div className="sign-up-container">
                    <div className="sign-up-beside">
                        <h1>Sign up</h1>
                        {currentUser && currentUser.email}
                        {error && <h2>{error}</h2>}
                        <form onSubmit={handleSubmit}>
                            <div className="sign-up-container-item sign-up-container-email">
                                <label>Email</label>
                                <input ref={emailRef} type="email" required />
                            </div>
                            <div className="sign-up-container-item sign-up-container-password">
                                <label>Password</label>
                                <input ref={passwordRef} type="password" required />
                            </div>
                            <div className="sign-up-container-item sign-up-container-password-confirm">
                                <label>Password Confirmation</label>
                                <input ref={passwordConfirmRef} type="password" required />
                            </div>
                            <button disabled={loading} className="btn" type="submit">Sign up</button>
                        </form>
                        <p>Already have an account? <Link to="/log-in">Log in</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
