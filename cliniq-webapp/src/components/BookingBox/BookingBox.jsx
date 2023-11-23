import React from 'react'
import sign from '../../assets/img/Mobile login-amico.svg'
import qr from '../../assets/icons/qr-code.png'
import { useNavigate } from "react-router-dom";

function BookingBox() {
  const navigate = useNavigate()
  return (
    <>
      <div className="bg-[#7cb2ec] relative h-[26rem] md:h-[40rem] mt-[1.5px]">
        <div className="bg-white absolute top-16 left-24 md:left-auto md:right-40 px-8 md:px-10 py-3 md:py-8 flex md:flex-row flex-col w-[70%] md:w-[50%]">
            <div className='flex items-center justify-center'> 
                <img img src={qr} alt="sign" className="md:w-[800px] w-[200px] md-[50px] md:ml-[100px]"></img>
            </div>
            <div className="pl-[12%] md:pl-[40%] flex flex-col items-center justify-center md:ml-[-200px] ml-0">
                <h1 className="capitalize font-bold text-xl md:text-4xl my-3 md:my-5">Check Our New QR System!</h1>
                <p className="md:text-base text-xs text-justify">Sign up to our website and stay up to date. Make your appointments with your doctor and track your queue just by making an account</p>
                <p className="my-3 md:my-5 md:text-base text-xs">After creating an appointment you can see and track the status of you queue</p>
                <button className="rounded-md font-bold md:text-base text-xs p-2 md:p-5 uppercase text-white bg-[#7cb2ec] transition-all my-3 md:my-5 px-6 md:px-14 w-44 md:w-[300px]
                hover:bg-[#3a434356] hover:border-transparent hover:text-[#3a4343]"
                onClick={() => {navigate("/booking-appointments")}}>Check your Appointment</button>  
            </div>
        </div>
        <img src={sign} alt="sign" className="absolute left-[-35px] md:mt-[20px] mt-[130px] top-52 md:top-0 md:left-44 rounded-full w-[15rem] md:w-[45rem]"></img>
      </div>
      <div className='mb-[2px]'/>
    </>
  )
}

export default BookingBox