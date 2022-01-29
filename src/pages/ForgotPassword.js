import React, {useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import {useGlobalContext} from '../context'

function ForgotPassword() {
    const [error, setError] = useState('')
    const emailRef = useRef()
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const {resetPassword} = useGlobalContext()
    // const navigate = useNavigate()


    const handleSubmit = async (e) =>{
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox mail')
        } catch {
            setError('Failed to reset password')
        }

        setLoading(false)
    }

    return (
        <div className="sign-up">
            <div className="grid wide">
                <div className="sign-up-container">
                    <div className="sign-up-beside">
                        <h1>Reset Password</h1>
                        {error && <h2>{error}</h2>}
                        {message && <h3>{message}</h3>}
                        <form onSubmit={handleSubmit}>
                            <div className="sign-up-container-item sign-up-container-email">
                                <label>Email</label>
                                <input ref={emailRef} type="email" required />
                            </div>
                            <button disabled={loading} className="btn" type="submit">Reset Password</button>
                        </form>
                        {message && <Link className="sign-up-beside-back" to='/log-in'>Back to login again</Link>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword