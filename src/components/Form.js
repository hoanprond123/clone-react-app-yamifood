import React, { useState } from 'react'

const Form = () => {
    const [values, setValue] = useState({
        fullname: '',
        email: '',
        message: '',
    })

    const [errors, setError] = useState({})


    console.log(errors)

    const handleChange = (e) => {
        setValue({
            ...values,
            [e.target.name]: e.target.value
        })

        setError({
            ...errors,
            [e.target.name]: ''
        })
    }

    // Validation
    const validation = () => {
        let errors = {}
        if (!values.fullname) {
            errors.fullname = 'Name is required'
        }
        if (!values.email) {
            errors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Email is invalid'
        }
        if (!values.message) {
            errors.message = 'Message is required'
        }
        return errors
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setError(validation(values))
    }



    return (
        <div className="form-contact">
            <form className="form-contact-container grid wide">
                <div className="form-contact-heading">
                    <h1>Contact</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                </div>
                <div className="form-contact-name">
                    <input type="text" className="form-contact-input" placeholder="Your Name" name="fullname" onChange={handleChange} />
                    {errors.fullname && <p className="form-contact-error">{errors.fullname}</p>}
                </div>
                <div className="form-contact-email">
                    <input type="text" className="form-contact-input" placeholder="Your Email" name="email" onChange={handleChange} />
                    {errors.email && <p className="form-contact-error">{errors.email}</p>}
                </div>
                <select className="form-contact-select" required data-error="Please Select Number Of Person*">
                    <option disabled selected>Please Select Number Of Person*</option>
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                    <option value="1">4</option>
                </select>
                <div className="form-contact-msg">
                    <textarea className="form-contact-message" placeholder="Your message" rows="4" name="message" onChange={handleChange} />

                </div>
                {errors.message && <p className="form-contact-error">{errors.message}</p>}
                <button className="form-contact-btn btn" onClick={handleFormSubmit}>send message</button>
                {(errors.fullname || errors.email || errors.message) && <p className="form-contact-btn-error">Did you fill in the form properly?</p>}
            </form>

        </div>
    )
}

export default Form
