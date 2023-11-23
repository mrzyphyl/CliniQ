import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'

function AppointmentBox() {
  const [date, setDate] = useState(new Date())
  const [appointments, setAppointnments] = useState([])
  const [selectedAppointments, setSelectedAppointments] = useState([])

  const handleDateChange = (newDate) => {
    setDate(newDate)
    setSelectedAppointments(getAppointmentsForDate(newDate))
  }

  useEffect(() => {
    axios.get('http://localhost:5000/api/appointments')
        .then(result => {
            setAppointnments(result.data)
            console.log('Appoitnments Data: ', result.data)
        })
        .catch(err => console.log(err))
  }, [])

  const getAppointmentsForDate = (date) => {
    const formattedDate = date.toDateString()
    return appointments.filter(appointment => {
      const formattedAppointmentDate = new Date(appointment.AppointmentDate).toDateString()
      return formattedAppointmentDate === formattedDate
    })
  }

  const onCanceled = (AppointmentID) => {
    axios.delete(`http://localhost:5000/api/appointments/${AppointmentID}`)
    .then(result => {
      console.log('Appoitnments Data: ', result.data)
      window.location.reload()
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <div className="flex justify-center items-center my-[8rem] w-100 ">
        <div className="flex flex-col justify-center items-center p-4 bg-white rounded-lg shadow-2xl w-4/5">
          <h2 className="text-2xl mb-4">Calendar</h2>
          <div className="flex flex-col justify-center items-center gap-4 w-100">
            <div className="w-[97%]">
              <Calendar
                onChange={handleDateChange}
                value={date}
                tileContent={({ date, view }) => {
                  if (view === 'month') {
                    const dateAppointments = getAppointmentsForDate(date);
                    if (dateAppointments.length > 0) {
                      return (
                        <div className="p-1">
                          🔴
                        </div>
                      );
                    }
                  }
                }}
              />
            </div>
            <div className='flex items-center justify-center'>
              {selectedAppointments.length > 0 ? (
                selectedAppointments.map((appointment, index) => (
                  <div
                    key={index}
                    className='bg-white rounded-lg p-4 my-4 w-4/5 shadow-2xl flex flex-col md:flex-row items-start justify-between'
                  >
                    <div>
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
                ))
              ) : (
                <p>No appointments for this date.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AppointmentBox