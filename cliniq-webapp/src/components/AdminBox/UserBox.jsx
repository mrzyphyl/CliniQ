import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function UserBox() {
  const navigate = useNavigate()
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
        .then(result => {
            setUsers(result.data)
            console.log('Users Data: ', result.data)
        })
        .catch(err => console.log(err))
  }, [])

  const onCanceled = (UserID) => {
    axios.delete(`http://localhost:5000/api/users/${UserID}`)
    .then(result => {
      console.log('User Data: ', result.data)
      window.location.reload()
    })
    .catch(err => console.log(err))
}

  return (
    <>
      <div className='w-4/5 m-auto my-16 mt-[200px] md:mt-[100px]'>
        <div className="bg-blue p-4 rounded-lg shadow-2xl flex flex-col items-center justify-center pb-[3rem]">
            <h1 className="text-4xl font-semibold my-8">Users</h1>
            {users.map((users, index) => (
              <div
                  key={index}
                  className='bg-white rounded-lg p-4 my-4 w-4/5 shadow-2xl flex flex-col md:flex-row items-start justify-between'
              >
                  <div
                  className='cursor-pointer'
                  onClick={() => {
                    navigate('/editusers', {
                      state: {
                          userData: users,
                      }
                    })
                  }}
                  >
                  <h2 className='text-xl font-semibold'>User {index + 1}</h2>
                  <p>First Name: {users.UserFName}</p>
                  <p>Last Name: {users.UserLName}</p>
                  <p>Age: {users.Age}</p>
                  <p>Birthday: {users.Birthday}</p>
                  <p>Email: {users.UserEmail}</p>
                  <p>Password: {users.UserPassword}</p>
                  </div>
                  <button
                  onClick={() => onCanceled(users.UserID)}
                  className='bg-red-500 text-white px-3 py-1 rounded cursor-pointer mt-2 md:mt-0'
                  >
                  Delete User
                  </button>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default UserBox