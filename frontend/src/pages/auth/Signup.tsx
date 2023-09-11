import React, { useState } from 'react'
import AuthContainer from '../../components/auth/AuthContainer'
import { toast } from 'react-toastify'

const Signup = () => {
  const [fullname, setFullname] = useState('')

  const handleSubmit = async () => {

  }


  return (
    <AuthContainer>
      <div>
        <h1>
          WriteOn Sign-Up Page
        </h1>

        <form onSubmit={handleSubmit}>

          <div>
            <label htmlFor="fullname">
              Full name
            </label>
            <input value={fullname} onChange={(e) => {
              setFullname(e.target.value)
            }} />
          </div>

        </form>
      </div>
    </AuthContainer>
  )
}

export default Signup