import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../utils/AuthContext'

function SignupForm() {
    const navigate = useNavigate()

    const [ UserFName , setFirstname ] = useState()
    const [ UserLName, setUserLName ] = useState()
    const [ Birthday, setBirthday ] = useState()
    const [ Age, setAge ] = useState()
    const [ UserEmail, setUserEmail ] = useState()
    const [ UserPassword, setUserPassword ] = useState()

    const { login } = useAuth()

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/users', { 
            UserFName,
            UserLName,
            Birthday,
            Age,
            UserEmail,
            UserPassword
        })
        .then(result => {
            console.log('User Login:', result)
            if (Array.isArray(result.data) && result.data.length > 0) {
                // Access the first item in the array
                const userData = result.data[0].UserFName
                console.log(userData)

                // Store userData in local storage
                localStorage.setItem('userData', JSON.stringify(userData))
            } else {
                console.log('User data not found in the response')
                // Handle this case as needed. You can set userData to a default value.
                const defaultUserData = { UserFName: "Default User" }
                localStorage.setItem('userData', JSON.stringify(defaultUserData))
            }
            login()
            navigate('/')
        })
        .catch(err => console.log(err))
    }
    return (
        <>
            <div className='md:w-[850px] w-[300px] m-auto my-16'>
                <div className='signInBg md:h-[150px] h-[100px]'>
                    <div className='makeBlur'>
                        <p className='uppercase h-[100%] flex items-center justify-center text-white font-extrabold tracking-widest text-xl md:text-2xl'>
                            Sign Up
                        </p>
                    </div>
                </div>

                <div className='text-center pt-11'>
                    <form onSubmit={onSubmit}>
                        <div className='flex items-center justify-center'>
                            <input 
                            type="text" 
                            placeholder="First Name"
                            value={UserFName} 
                            onChange={(e) => setFirstname(e.target.value)}
                            className='border-b-2 mb-6 ml-2 md:ml-10 text-lg md:text-xl outline-none w-4/5 md:w-[500px] h-[60px]'/>
                        </div>
                        <div className='flex items-center justify-center'>
                            <input 
                            type="text" 
                            placeholder="Last Name"
                            value={UserLName} 
                            onChange={(e) => setUserLName(e.target.value)}
                            className='border-b-2 mb-6 ml-2 md:ml-10 text-lg md:text-xl outline-none w-4/5 md:w-[500px] h-[60px]'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <label className='opacity-60 text-lg'>Birthday</label>
                            <input 
                            type="date" 
                            placeholder="Bithday"
                            value={Birthday} 
                            onChange={(e) => setBirthday(e.target.value)}
                            className='border-b-2 mb-6 ml-2 md:ml-10 text-lg md:text-xl outline-none w-4/5 md:w-[500px] h-[60px] opacity-70'/>
                        </div>
                        <div className='flex items-center justify-center'>
                            <input 
                            type='number' 
                            inputMode='numeric'
                            placeholder="Age" 
                            value={Age} 
                            onChange={(e) => setAge(e.target.value)}
                            className='border-b-2 mb-6 ml-2 md:ml-10 text-lg md:text-xl outline-none w-4/5 md:w-[500px] h-[60px]'/>
                        </div>
                        <div className='flex items-center justify-center'>
                            <input 
                            type="text" 
                            placeholder="Email" 
                            value={UserEmail} 
                            onChange={(e) => setUserEmail(e.target.value)}
                            className='border-b-2 mb-6 ml-2 md:ml-10 text-lg md:text-xl outline-none w-4/5 md:w-[500px] h-[60px]'/>
                        </div>
                        <div className='flex items-center justify-center'>
                            <input 
                            type="password" 
                            placeholder="Password" 
                            value={UserPassword} 
                            onChange={(e) => setUserPassword(e.target.value)}
                            className='border-b-2 ml-2 md:ml-10 text-lg md:text-xl outline-none w-4/5 md:w-[500px] h-[60px]'/>
                        </div>
                        <br/>
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

export default SignupForm