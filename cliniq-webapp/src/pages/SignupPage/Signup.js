import React from 'react'
import NavBar from '../../components/Navs/Navbar'
import Footer from '../../components/Navs/Footer'
import SignUpForm from '../../components/AccountBox/SignupForm'

function Signup() {
  return (
    <div>
      <NavBar/>
      <SignUpForm/>
      <Footer/>
    </div>
  )
}

export default Signup