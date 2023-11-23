import React from 'react'
import Footer from '../../components/Navs/Footer'
import NavBar from '../../components/Navs/Navbar'
import HomeBox from '../../components/HomeBox/HomeBox'
import Welcome from '../../components/HomeBox/Welcome'
import Promotion from '../../components/HomeBox/Promotion'

function Home() {
  return (
    <div>
      <NavBar/>
      <HomeBox/>
      <Welcome/>
      <Promotion/>
      <div className='mt-[2px]'/>
      <Footer/>
    </div>
  )
}

export default Home