import React from 'react'
import AdminNavbar from '../../components/Navs/AdminNavbar'
import AdminFooter from '../../components/Navs/AdminFooter'
import DashboardBox from '../../components/AdminBox/DashBoardBox'

function Dashboard() {
  return (
    <div>
      <AdminNavbar/>
      <DashboardBox/>
      <AdminFooter/>
    </div>
  )
}

export default Dashboard