import React from 'react'
import AdminNavbar from '../../components/Navs/AdminNavbar'
import AdminFooter from '../../components/Navs/AdminFooter'
import UserBox from '../../components/AdminBox/UserBox'

function Users() {
  return (
    <div>
      <AdminNavbar/>
      <UserBox/>
      <AdminFooter/>
    </div>
  )
}

export default Users