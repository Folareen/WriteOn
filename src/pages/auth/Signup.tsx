import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../../firebase.config'
import AuthContainer from '../../components/auth/AuthContainer'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e: any) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password).then(() => console.log('welcome!')).catch(() => console.log('err')).finally()
  }
  return (
    // <div>



    // </div>


    <AuthContainer title="Signup">

      <form onSubmit={handleSubmit}>

        <div>

          <div>
            <p>
              First name
            </p>
            <input type="password" name="" id="" value={password} onChange={(e) => setPassword(e.target.value)} className='w-full my-4 border p-2 rounded-md' />
          </div>

          <div>
            <p>
              Name
            </p>
            <input type="password" name="" id="" value={password} onChange={(e) => setPassword(e.target.value)} className='w-full my-4 border p-2 rounded-md' />
          </div>

        </div>



        <div>
          <p>
            Email address
          </p>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="" id="" className='w-full my-4 border p-2 rounded-md' placeholder='mail@mail.com' />
        </div>
        <div>
          <input type="password" name="" id="" value={password} onChange={(e) => setPassword(e.target.value)} className='w-full my-4 border p-2 rounded-md' />
        </div>

        <button onClick={handleSubmit} className=' w-full bg-blue-300 text-white p-2 rounded-md' >
          Signup
        </button>
      </form>
    </AuthContainer>

  )
}

export default Signup