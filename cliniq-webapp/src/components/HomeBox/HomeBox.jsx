import React from 'react'
import HealthService from "../../assets/img/HealthService.jpg";

function HomeBox() {
  return (
    <>
        <div className="heroBG flex justify-center">
            <img src={HealthService} className="w-[300px] md:w-[750px] m-5 mb-[-5rem] shadow-xl" alt="HealthService"></img>
        </div>

        <div className="flex justify-center">
            <div className=" bg-[#a2c5eb71] shadow-xl w-[200px] md:w-[500px] p-5 md:p-10 md:mt-[-5rem]">
                <p className="text-xs md:text-xl line-clamp-5 md:line-clamp-none text-justify">
                    Have access to a health professional at any time. Visiting your doctor on a regular basis is key to a health life, 
                    whether you are feeling the effects of the common cold or just coming in for a checkup.
                    We want to make sure you have all the facts you need to make a safe decision.
                </p>
            </div>
        </div>
    </>
  )
}

export default HomeBox