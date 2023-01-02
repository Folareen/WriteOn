import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import {auth } from '../../firebase.config'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e : any) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password).then(() => console.log('welcome!')).catch( () => console.log('err')).finally()
  }
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <form className='w-[300px] drop-shadow-md py-8 bg-gray-50 px-4' onSubmit={handleSubmit}>
        
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="" id=""  className='w-full my-4 border ' />
          <input type="password" name="" id="" value={password} onChange={(e) => setPassword(e.target.value)} className='w-full my-4 border ' />
          <button onClick={handleSubmit} className=' w-full bg-blue-300 text-white' >
            Signup
          </button>
      </form>
    </div>
  )
}

export default Signup