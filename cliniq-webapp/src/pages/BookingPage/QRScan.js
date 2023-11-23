import React from 'react'
import QRScannerBox from '../../components/BookingBox/QRScannerBox'
import NavBar from '../../components/Navs/Navbar'
import Footer from '../../components/Navs/Footer'

function QRScan() {
  return (
    <div>
        <NavBar/>
        <QRScannerBox/>
        <Footer/>
    </div>
  )
}

export default QRScan