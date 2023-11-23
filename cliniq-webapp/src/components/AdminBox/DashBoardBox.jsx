import React from 'react'
import sign from '../../assets/img/Mobile login-amico.svg'
import { useNavigate } from "react-router-dom";

function DashBoardBox() {
  const navigate = useNavigate()
  return (
    <>
      <div className="bg-[#7cb2ec] relative h-[26rem] md:h-[40rem] flex-col lg:flex">
        <div className="bg-white absolute top-16 left-24 md:left-auto md:right-40 px-8 md:px-10 py-3 md:py-8 flex flex-col w-[70%] md:w-[50%]">
            <div className="pl-[12%] md:pl-[40%]">
                <h1 className="capitalize font-bold text-xl md:text-4xl my-3 md:my-5">Check User's Appointements and manage them</h1>
                <p className="md:text-base text-xs text-justify">Click the button below to see the appointments created</p>
                <p className="my-3 md:my-5 md:text-base text-xs">You can manage the appointements as you see fit.</p>
                <button className="rounded-md font-bold md:text-base text-xs p-2 md:p-5 uppercase text-white bg-[#7cb2ec] transition-all my-3 md:my-5 px-6 md:px-14 md:w-44
                hover:bg-[#3a434356] hover:border-transparent hover:text-[#3a4343]"
                onClick={() => {navigate("/appointments")}}>Check</button>  
            </div>
        </div>
        <div>
            <img src={sign} alt="sign" className="absolute left-[-35px] top-52 md:top-0 md:left-44 rounded-full w-[15rem] md:w-[45rem]"></img>
        </div>
      </div>
    </>
  )
}

export default DashBoardBox