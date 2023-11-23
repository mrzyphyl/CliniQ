import React from 'react'
import AdminNavbar from '../../components/Navs/AdminNavbar'
import AdminFooter from '../../components/Navs/AdminFooter'
import EditUserBox from '../../components/AdminBox/EditUserBox'

function EditUser() {
  return (
    <div>
        <AdminNavbar/>
        <EditUserBox/>
        <AdminFooter/>
    </div>
  )
}

export default EditUser