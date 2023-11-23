import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
    const navigate = useNavigate()
    return(
        <>
        <div className="flex flex-col items-center my-[1rem] md:my-[5rem] w-[300px] md:w-[730px] mx-auto p-5">
            <h1 className="capitalize font-bold text-xl md:text-4xl">Welcome to CliniQ</h1>
            <hr className="border-b-8 border-[#7cb2ec] rounded w-24 md:w-40 my-[1rem] md:my-[2rem]"></hr>
            <p className="text-sm md:text-lg text-justify">
                It has been the ongoing goal of Cliniq to provide comprehensive primary medical care. Specially in giving queue to patients.
                When you have healthcare needs, you need to turn to a doctor who listens and responds. However, it would be hassle for you to come
                and see a long line of patients like you waiting for their turn to see a doctoer, a medical professional who knows the field and 
                can effectively dignose and treat your needs a friendly staff who console you on the best ways to maintain and improve your health.
            </p>
            <button className="rounded-md font-bold text-xs md:text-base p-4 md:p-5 uppercase text-white bg-[#7cb2ec] duration-200 
            my-[2rem] md:my-[3rem] hover:bg-[#3a434356] hover:border-transparent hover:text-[#3a4343]"
            onClick={() => {navigate("/booking")}}>Queue Now</button>
        </div>
        </>
    )
}

export default Welcome