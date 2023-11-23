import React from 'react'
import QR from '../../assets/icons/qr-code.gif'
import Track from '../../assets/icons/route.gif'
import Appointment from '../../assets/icons/appointment.gif'

function ServiceBox() {
  return (
    <>
        <div className="bg-gray-100 w-full flex items-center justify-center">
            <div className='w-full flex flex-col md:flex-row items-center justify-center gap-8 mt-[100px] mb-[100px]'>
                <div class="w-60 h-[500px] p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-2xl hover:shadow-8xl">
                    <img
                        class="h-[200px] object-cover rounded-xl w-full"
                        src={QR}
                        alt="QR"
                    />
                    <div class="p-2">
                        <h2 class="font-bold text-lg mb-2 ">QR Scanning</h2>
                        <p class="text-sm text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div class="m-2">
                        <a
                        role="button"
                        href="/booking"
                        rel="noreferrer"
                        class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700"
                        >
                        Learn More
                        </a>
                    </div>
                </div>
                <div class="w-60 h-[500px] p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-2xl hover:shadow-8xl">
                    <img
                        class="h-[200px] object-cover rounded-xl w-full"
                        src={Track}
                        alt="Track"
                    />
                    <div class="p-2">
                        <h2 class="font-bold text-lg mb-2 ">Queue Tracking</h2>
                        <p class="text-sm text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div class="m-2">
                        <a
                        role="button"
                        href="/booking"
                        rel="noreferrer"
                        class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700"
                        >
                        Learn More
                        </a>
                    </div>
                </div>
                <div class="w-60 h-[500px] p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-2xl hover:shadow-8xl">
                    <img
                        class="h-[200px] object-cover rounded-xl w-full"
                        src={Appointment}
                        alt="Appointment"
                    />
                    <div class="p-2">
                        <h2 class="font-bold text-lg mb-2 ">Cancel Appointments</h2>
                        <p class="text-sm text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div class="m-2">
                        <a
                        role="button"
                        href="/booking"
                        rel="noreferrer"
                        class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700"
                        >
                        Learn More
                        </a>
                    </div>
                </div>
            </div>
      </div>
    </>
  )
}

export default ServiceBox