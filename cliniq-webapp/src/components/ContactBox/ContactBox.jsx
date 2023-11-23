import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function ContactBox() {
    const form = useRef();
  const [clearname, setClearName] = useState("")
  const [clearemail, setClearEmail] = useState("")
  const [clearbody, setClearBody] = useState("")
  const clrname = useRef("")
  const clremail = useRef("")
  const clrbody = useRef("")

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5uit6sd', 'template_ytmc7rq', form.current, 'SToOoK0rzDIp7x7x_')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent!")
      }, (error) => {
          console.log(error.text);
      });
      
    clrname.current.value = ""
    clremail.current.value = ""
    clrbody.current.value = ""
  }
  return (
    <>
        <div className='md:w-[850px] w-[300px] m-auto my-16'>
            <div className="bg-blue p-4 rounded-lg shadow-2xl">
                <h1 className="text-4xl font-semibold mb-8">Contact Us</h1>
                <form ref={form} onSubmit={sendEmail} >
                    <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-800 text-xl mb-4">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="user_name"
                        placeholder="Name"
                        value={clearname}
                        onChange={(a) => setClearName(a.target.value)}
                        className="w-full border rounded p-2 outline-none"
                        ref={clrname}
                    />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-800 text-xl mb-4">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="user_email"
                        placeholder='Email'
                        value={clearemail} 
                        onChange={(a) => setClearEmail(a.target.value)}
                        className="w-full border rounded p-2 outline-none"
                        ref={clremail}
                    />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-800 text-xl mb-4">Message:</label>
                    <textarea
                        id="message"
                        placeholder='Message'
                        value={clearbody} 
                        onChange={(a) => setClearBody(a.target.value)}
                        rows="4"
                        className="w-full border rounded p-2 outline-none"
                        ref={clrbody}
                    ></textarea>
                    </div>
                    <div className='text-[#7d7d7d] text-base md:text-lg my-8 flex items-center justify-around'>
                        <input type='submit' value="Submit" className='rounded-full font-bold md:text-base text-xs p-4 md:p-5 uppercase text-white bg-[#7cb2ec] transition-all w-24 md:w-44
                        hover:bg-[#3a434356] hover:border-transparent hover:text-[#3a4343] mb-[-10px] cursor-pointer'></input>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default ContactBox