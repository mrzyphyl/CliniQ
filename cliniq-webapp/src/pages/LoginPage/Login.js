import React from 'react'
import Navbar from '../../components/Navs/Navbar'
import Footer from '../../components/Navs/Footer'
import LoginForm from '../../components/AccountBox/LoginForm'

function Login() {
  return (
    <div>
      <Navbar/>
      <LoginForm/>
      <Footer/>
    </div>
  )
}

export default Login