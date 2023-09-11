import React, { useState } from 'react'
import AuthContainer from '../../components/auth/AuthContainer'

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('')
  const [password, setPassword] = useState('')

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
            <label htmlFor="email-or-username">
              Email/Username
            </label>
            <input value={emailOrUsername} onChange={(e) => {
              setEmailOrUsername(e.target.value)
            }} id='email-or-username' />
          </div>

        </form>
      </div>
    </AuthContainer>
  )
}

export default Login