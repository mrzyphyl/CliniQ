import React from 'react'
import Footer from '../../components/Navs/Footer'
import Navbar from '../../components/Navs/Navbar'
import BookingBox from '../../components/BookingBox/BookingBox'
import BookNow from '../../components/BookingBox/BookNow'

function Booking() {
  return (
    <div>
      <Navbar/>
      <BookingBox/>
      <BookNow/>
      <Footer/>
    </div>
  )
}

export default Booking