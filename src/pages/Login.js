import React, {useState, useRef} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useGlobalContext} from '../context'
function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useGlobalContext()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        } catch {
            setError('Failed to login')
        }
    }



    return (
        <div className="sign-up">
            <div className="grid wide">
                <div className="sign-up-container">
                    <div className="sign-up-beside">
                        <h1>Log In</h1>
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
                            <button disabled={loading} className="btn" type="submit">Sign up</button>
                        </form>
                        <Link className='sign-up-beside-forgot' to="/forgot-password">Forgot Password</Link>
                        <p>Need an account? <Link to="/sign-up">Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
