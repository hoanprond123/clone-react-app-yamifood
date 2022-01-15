import React,{useState} from 'react'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import {TimePickerComponent} from "@syncfusion/ej2-react-calendars"
function ReservationPages() {
    const [selectedDate, setSelectedDate] = useState(null)

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
            errors.message = 'Number is required'
        }
        return errors
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setError(validation(values))
    }

    return (
        <div className="reservation-pages">
            <div className="grid wide reservation-pages-header">
                <h1>Reservation</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
            <div className="grid wide reservation-pages-body">
                <div className="row no-gutters">
                    <div className="col l-6 m-6 c-12 reservation-pages-body-item">
                        <span>Book a table</span>
                        <div className="reservation-pages-body-calendar-container">
                            <DatePicker className="reservation-pages-body-calendar" selected={selectedDate} onChange={date => setSelectedDate(date)} />
                        </div>
                        <div className="reservation-pages-body-time-container">
                            <input type="text" className="reservation-pages-body-time" />
                        </div>
                        <select className="reservation-pages-select" required data-error="Select person">
                            <option disabled selected>Select person*</option>
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                            <option value="1">4</option>
                            <option value="1">5</option>
                            <option value="1">6</option>
                        </select>
                    </div>
                    <div className="col l-6 m-6 c-12 reservation-pages-body-item">
                        <span>Contact details</span>
                        <div className="reservation-pages-body-name">
                            <input type="text" className="reservation-pages-body-input" placeholder="Your Name" name="fullname" onChange={handleChange}/>
                            {errors.fullname && <p className="form-contact-error">{errors.fullname}</p>}

                        </div>
                        <div className="reservation-pages-body-email">
                            <input type="text" className="reservation-pages-body-input" placeholder="Your Email" name="email" onChange={handleChange}/>
                            {errors.email && <p className="form-contact-error">{errors.email}</p>}

                        </div>
                        <div className="reservation-pages-body-number">
                            <input type="text" className="reservation-pages-body-input" placeholder="Your Number" name="message" onChange={handleChange}/>
                            {errors.message && <p className="form-contact-error">{errors.message}</p>}

                        </div>
                    </div>
                </div>
                <button className="reservation-pages-body-btn btn" onClick={handleFormSubmit}>BOOK TABLE</button>
                {(errors.fullname || errors.email || errors.message) && <p className="form-contact-btn-error">Did you fill in the form properly?</p>}
                
            </div>
        </div>
    )
}

export default ReservationPages
