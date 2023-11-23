import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function EditUserBox() {
  const navigate = useNavigate()
  const location = useLocation()
  const userData = location.state.userData

  const [UserFName, setFirstname] = useState(userData.UserFName)
  const [UserLName, setUserLName] = useState(userData.UserLName)
  const [Birthday, setBirthday] = useState(userData.Birthday)
  const [Age, setAge] = useState(userData.Age);
  const [UserEmail, setUserEmail] = useState(userData.UserEmail)
  const [UserPassword, setUserPassword] = useState(userData.UserPassword)

  const onSubmit = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:5000/api/users/${userData.UserID}`, {
      UserFName,
      UserLName,
      Birthday,
      Age,
      UserEmail,
      UserPassword
    })
    .then(result => {
        console.log('User Data: ', result.data)
        navigate("/users")
    })
    .catch(err => console.log(err))
  }
  return (
    <>
      <div className='md:w-[850px] w-[300px] m-auto my-16'>
          <div className='signInBg md:h-[150px] h-[100px]'>
              <div className='makeBlur'>
                  <p className='uppercase h-[100%] flex items-center justify-center text-white font-extrabold tracking-widest text-xl md:text-2xl'>
                      Edit User
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
                  <button className="rounded-md font-bold md:text-base text-xs p-2 md:p-5 uppercase text-white bg-[#eb5151a6] transition-all my-3 md:my-5 px-6 md:px-14 w-44 md:w-[300px]
                  hover:bg-[#3a434356] hover:border-transparent hover:text-[#3a4343]"
                  onClick={() => {navigate("/users")}}>Go Back</button>  
              </form>
          </div>
      </div>
    </>
  )
}

export default EditUserBox