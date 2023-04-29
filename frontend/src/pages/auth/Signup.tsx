import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../../firebase.config'
import AuthContainer from '../../components/auth/AuthContainer'
import {toast} from 'react-toastify'
import formatErrorMessage from '../../utils/formatErrorMessage'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      const data = await createUserWithEmailAndPassword(auth, email, password)
      console.log(data)
    } catch (error) {
      toast.error(formatErrorMessage(error.message))
    } finally {
      console.log('finally')
    }


  }
  return (
    // <div>



    // </div>


    <AuthContainer title="Signup">

      <form onSubmit={handleSubmit}>

        {/* <div>

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

        </div> */}



        <div>
          <p>
            Email address
          </p>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="" id="" className='w-full my-4 border p-2 rounded-md' placeholder='mail@mail.com' />
        </div>
        <div>
          <p>
            Password
          </p>
          <input type="password" name="" id="" value={password} onChange={(e) => setPassword(e.target.value)} className='w-full my-4 border p-2 rounded-md' />
        </div>

        <button onClick={handleSubmit} className=' w-full bg-indigo-300 text-white p-2 rounded-md' >
          Signup
        </button>
      </form>
    </AuthContainer>

  )
}

export default Signup