import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function BookNow() {
    const [ticketNumber, setTicketNumber] = useState('')
    const userData = JSON.parse(localStorage.getItem('userData'))

    const [formData, setFormData] = useState({
        FullName: userData,
        AppointmentTicketNo: '',
        PhoneNo: '',
        Doctor: '',
        AppointmentTime: '',
        AppointmentDate: '',
        Services: ''
    })

    const generateTicketNumber = () => {
        return uuidv4()
    }

    useEffect(() => {
        const newTicketNumber = generateTicketNumber();
        setTicketNumber(newTicketNumber);
    }, [])

    const onSubmit = (e) => {
        e.preventDefault()

        formData.FullName = userData.replace(/"/g, '')
        formData.AppointmentTicketNo = ticketNumber
        axios.post('http://localhost:5000/api/appointments', formData)
        .then((response) => {
            console.log('Appointment Created:', response.data)
            window.location.reload()
        })
        .catch((error) => {
            console.error('Appointment Creation Error:', error)
        })
    }

    return (
        <>
            <div className='w-4/5 m-auto my-16 mt-[200px] md:mt-[100px]'>
                <div className="bg-blue p-4 rounded-lg shadow-2xl flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-semibold my-8">Book an Appointment</h1>
                    <form className='w-4/5' onSubmit={onSubmit}>
                        <div className="my-5 flex flex-row gap-5">
                            <p className="text-xl text-gray-800">
                            Your Appointment Ticket Number: 
                            </p>
                            <p className="text-xl text-gray-800 font-semibold">
                            {ticketNumber}
                            </p>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-800 text-xl mb-4">Name:</label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full border rounded p-2 outline-none"
                                value={formData.FullName}
                                onChange={(e) => setFormData({ ...formData, FullName: e.target.value })}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-gray-800 text-xl mb-4">Phone Number:</label>
                            <input 
                            type='number' 
                            inputMode='numeric'
                            placeholder="Phone Number" 
                            className='w-full border rounded p-2 outline-none'
                            value={formData.PhoneNo}
                            onChange={(e) => setFormData({ ...formData, PhoneNo: e.target.value })}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="doctor" className="block text-gray-800 text-xl mb-4">Doctor:</label>
                            <input 
                            type='text' 
                            placeholder="Doctor" 
                            className='w-full border rounded p-2 outline-none'
                            value={formData.Doctor}
                            onChange={(e) => setFormData({ ...formData, Doctor: e.target.value })}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="apptTime" className="block text-gray-800 text-xl mb-4">Appointment Time:</label>
                            <input 
                            type='text' 
                            placeholder="Appointment Time" 
                            className='w-full border rounded p-2 outline-none'
                            value={formData.AppointmentTime}
                            onChange={(e) => setFormData({ ...formData, AppointmentTime: e.target.value })}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="apptDate" className="block text-gray-800 text-xl mb-4">Appointment Date:</label>
                            <input 
                            type='date' 
                            placeholder="Appointment Date" 
                            className='w-full border rounded p-2 outline-none'
                            value={formData.AppointmentDate}
                            onChange={(e) => setFormData({ ...formData, AppointmentDate: e.target.value })}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="service" className="block text-gray-800 text-xl mb-4">Service:</label>
                            <input 
                            type='text' 
                            placeholder="Service" 
                            className='w-full border rounded p-2 outline-none'
                            value={formData.Services}
                            onChange={(e) => setFormData({ ...formData, Services: e.target.value })}
                            />
                        </div>
                        <div className='text-[#7d7d7d] text-base md:text-lg my-8 flex items-center justify-around'>
                            <input type='submit' value="Submit" className='rounded-full font-bold md:text-base text-xs p-4 md:p-5 uppercase text-white bg-[#7cb2ec] transition-all w-24 md:w-44
                            hover:bg-[#3a434356] hover:border-transparent hover:text-[#3a4343] mb-[-10px] cursor-pointer'></input>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default BookNow