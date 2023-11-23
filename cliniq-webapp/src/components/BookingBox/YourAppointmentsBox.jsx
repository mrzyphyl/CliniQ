import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const YourAppointmentsBox = () => {
    const navigate = useNavigate()
    const [appointments, setAppointnments] = useState([])
    const userData = localStorage.getItem('userData')

    useEffect(() => {
        axios.get('http://localhost:5000/api/appointments')
            .then(result => {
                setAppointnments(result.data)
                console.log('Appoitnments Data: ', result.data)
            })
            .catch(err => console.log(err))
    }, [])

    const filteredAppointments = appointments.filter(appointment => {
        return appointment.FullName === userData || appointment.FullName === JSON.parse(userData)
    })

    console.log(userData)
    console.log(filteredAppointments)

    const onCanceled = (AppointmentID) => {
        axios.delete(`http://localhost:5000/api/appointments/${AppointmentID}`)
        .then(result => console.log('Appoitnments Data: ', result.data))
        .catch(err => console.log(err))
    }

    return (
        <>
            <div className='w-4/5 m-auto my-16 mt-[200px] md:mt-[100px]'>
                <div className="bg-blue p-4 rounded-lg shadow-2xl flex flex-col items-center justify-center pb-[3rem]">
                    <h1 className="text-4xl font-semibold my-8">Scan to see this Appointment</h1>
                    {filteredAppointments.map((appointment, index) => (
                        <div
                            key={index}
                            className='bg-white rounded-lg p-4 my-4 w-4/5 shadow-2xl cursor-pointer flex flex-col md:flex-row items-start justify-between'
                        >
                            <div
                            onClick={() => {
                                if (filteredAppointments.length > 0) {
                                    navigate('/qr-scan', {
                                    state: {
                                        appointmentData: appointment,
                                    }
                                    });
                                }
                            }}
                            >
                            <h2 className='text-xl font-semibold'>Appointment {index + 1}</h2>
                            <p>Ticket Number: {appointment.AppointmentTicketNo}</p>
                            <p>Full Name: {appointment.FullName}</p>
                            <p>Phone Number: {appointment.PhoneNo}</p>
                            <p>Doctor: {appointment.Doctor}</p>
                            <p>Services: {appointment.Services}</p>
                            <p>Appointment Time: {appointment.AppointmentTime}</p>
                            <p>Appointment Date: {appointment.AppointmentDate}</p>
                            </div>
                            <button
                            onClick={() => onCanceled(appointment.AppointmentID)}
                            className='bg-red-500 text-white px-3 py-1 rounded cursor-pointer mt-2 md:mt-0'
                            >
                            Cancel Appointment
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
