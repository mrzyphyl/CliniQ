import React from 'react'
import NavBar from '../../components/Navs/Navbar'
import Footer from '../../components/Navs/Footer'
import { YourAppointmentsBox } from '../../components/BookingBox/YourAppointmentsBox'

function YourAppointments() {
  return (
    <div>
      <NavBar/>
      <YourAppointmentsBox/>
      <Footer/>
    </div>
  )
}

export default YourAppointments