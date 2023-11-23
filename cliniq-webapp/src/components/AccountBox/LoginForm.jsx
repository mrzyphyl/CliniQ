    import React, { useState } from 'react'
    import { Link } from 'react-router-dom'
    import axios from 'axios'
    import { useNavigate } from 'react-router-dom'
    import { useAuth } from '../../utils/AuthContext'

    function Login() {
        const [UserEmail, setEmail] = useState()
        const [UserPassword, setPassword] = useState()

        const [adminError, setAdminError] = useState(false)
        const [userError, setUserError] = useState(false)
    
        const navigate = useNavigate()

        const { login, setLoginError, loginError } = useAuth()
    
        const onSubmit = (e) => {
            e.preventDefault()

            axios.post('http://localhost:5000/api/users/login', { UserEmail, UserPassword })
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
                .catch(UserErr => {
                console.log('User Login Error:', UserErr)
                setUserError(true)
            })

            const AdminEmail = UserEmail
            const AdminPassword = UserPassword

            axios.post('http://localhost:5000/api/admin/login', { AdminEmail, AdminPassword })
            .then(result => {
                console.log('Amin Login:', result)
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
                navigate('/dashboard')
            })
                .catch(AdminErr => {
                console.log('Admin Login Error:', AdminErr)
                setAdminError(true)
            })

            console.log('adminError', adminError)
            console.log('userError', userError)
            // Check both errors and set loginError if both requests fail
            if (adminError && userError) {
                setLoginError('Invalid email or password')
            }
        }
    return (
        <>
            <div className='md:w-[850px] w-[300px] m-auto my-16 mt-[150px] mb-[100px]'>
                <div className='signInBg md:h-[150px] h-[100px]'>
                    <div className='makeBlur'>
                        <p className='uppercase h-[100%] flex items-center justify-center text-white font-extrabold tracking-widest text-xl md:text-2xl'>
                            Sign In
                        </p>
                    </div>
                </div>

                <div className='text-center pt-11'>
                    <form onSubmit={onSubmit}>
                        <div className='flex items-center justify-center'>
                            <input 
                            type="text" 
                            placeholder="Email"
                            value={UserEmail} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className='border-b-2 mb-6 ml-2 md:ml-10 text-lg md:text-xl outline-none w-4/5 md:w-[500px] h-[60px]'/>
                        </div>
                        <div>
                            <input 
                            type="password" 
                            placeholder="Password"
                            value={UserPassword} 
                            onChange={(e) => setPassword(e.target.value)}
                            className='border-b-2 ml-2 md:ml-10 text-lg md:text-xl outline-none w-4/5 md:w-[500px] h-[60px]'/>
                        </div>
                        {/* Error message */}
                        {loginError && <p className='text-red-500 mt-9'>{loginError}</p>}
                        <br/>
                        <br/>
                        <Link to='/signup'>Forgot Your Password?</Link>
                        <div className='text-[#7d7d7d] text-base md:text-lg my-8 flex items-center justify-around'>
                            <input 
                            type='submit' 
                            value="Submit" 
                            className='rounded-full font-bold md:text-base text-xs p-4 md:p-5 uppercase text-white bg-[#7cb2ec] transition-all w-24 md:w-44
                            hover:bg-[#3a434356] hover:border-transparent hover:text-[#3a4343] mb-[-10px] cursor-pointer'/>
                        </div>
                        <Link className='font-semibold text-lg' to='/signup'>Don't have an account yet?</Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login