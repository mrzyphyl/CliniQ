import React from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import QRCode from 'react-qr-code'

function QRScannerBox() {
    const navigate = useNavigate()
    const location = useLocation()
    const appointmentData = location.state.appointmentData

  return (
    <>
        <div className='w-4/5 m-auto my-16 mt-[200px] md:mt-[100px]'>
            <div className="bg-blue p-4 rounded-lg shadow-2xl flex flex-col items-center justify-center pb-[3rem]">
                <h1 className="text-4xl font-semibold my-8">Your Appointments</h1>
                <div className='flex flex-col md:flex-row gap-5 md:gap-[5rem]'>
                {appointmentData && (
                    <div className="qr-code">
                        <QRCode
                        size={256}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={JSON.stringify(appointmentData)}
                        viewBox={`0 0 256 256`}
                        />
                    </div>
                )}
                <div className='flex flex-col items-center justify-center text-center'>
                    <h1 className="text-2xl font-normal">Scan this to your app</h1>
                    <h1 className="text-xl font-medium my-4">or</h1>
                    <button className="rounded-md font-bold md:text-base text-xs p-2 md:p-5 uppercase text-white bg-[#7cb2ec] transition-all my-3 md:my-5 px-6 md:px-14 w-44 md:w-[300px]
                    hover:bg-[#3a434356] hover:border-transparent hover:text-[#3a4343]"
                    onClick={() => {navigate("/booking-appointments")}}>Go Back</button>  
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default QRScannerBox