import { FormEvent, useState } from 'react'
import AuthContainer from '../../components/auth/AuthContainer'
import Axios from '../../api/axios'
import { toast } from 'react-toastify'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { forgotPassword } from '../../services/auth'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault()
      setSubmitting(true)
      await forgotPassword(email)
      navigate('/reset-password')
    } catch (error: any) {
      toast.error(error?.message || error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <AuthContainer title='Forgot Password'>

      <form onSubmit={handleSubmit}>

        <div className='mb-4 md:mb-5'>
          <label htmlFor="email-or-username" className='text-base md:text-xl block mb-1 font-semibold '>
            Email
          </label>
          <input value={email} onChange={(e) => {
            setEmail(e.target.value)
          }} id='email-or-username' className='text-xs md:text-[14px] border-solid border-white md:border-[#1E1E21] border-2 rounded-xl bg-transparent p-4 md:p-5 outline-none block w-full' />
        </div>

        <div className='gap-1 flex flex-row flex-wrap justify-center text-base md:text-lg mb-4 md:mb-5 font-semibold'>
          <p>
            Remember Password?
          </p>
          <Link to={'/login'} className='text-[#9333EA] underline underline-offset-1'>
            Login
          </Link>
        </div>
        <div className='gap-1 flex flex-row flex-wrap justify-center text-base md:text-lg mb-4 md:mb-5 font-semibold'>
          <p>
            You don't have an account?
          </p>
          <Link to={'/signup'} className='text-[#9333EA] underline underline-offset-1'>
            Sign up
          </Link>
        </div>

        <button type='submit' disabled={submitting} className='text-white text-base md:text-lg font-bold rounded-[5px] md:rounded-[10px] py-[10px] md:py-[15px] px-[60px] md:px-[120px] block mx-auto bg-[#9333EA] disabled:bg-gray-500'>
          {
            !submitting ? 'Submit' : 'Submitting...'
          }
        </button>

      </form>
    </AuthContainer>
  )
}

export default ForgotPassword