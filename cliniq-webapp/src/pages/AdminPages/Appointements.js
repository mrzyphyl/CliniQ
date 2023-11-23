import React from 'react'
import AdminNavbar from '../../components/Navs/AdminNavbar'
import AdminFooter from '../../components/Navs/AdminFooter'
import AppointmentBox from '../../components/AdminBox/AppointmentBox'

function Appointements() {
  return (
    <div>
      <AdminNavbar/>
      <AppointmentBox/>
      <AdminFooter/>
    </div>
  )
}

export default Appointements