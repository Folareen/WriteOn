import { FormEvent, useState } from 'react'
import AuthContainer from '../../components/auth/AuthContainer'
import Axios from '../../api/axios'
import { toast } from 'react-toastify'
import useAuthStore from '../../stores/useAuthStore'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [avatar, setAvatar] = useState<any>(null)

  const [submitting, setSubmitting] = useState(false)

  const { authenticate } = useAuthStore()

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault()
      setSubmitting(true)
      const formData = new FormData()
      formData.append('fullName', fullName)
      formData.append('username', username)
      formData.append('email', email)
      formData.append('password', password)
      formData.append('avatar', avatar)
      const response = await Axios.post('/signup', formData)
      authenticate(response.data.token)
    } catch (error: any) {
      toast.error(error?.message || error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <AuthContainer title='Sign Up'>

      <form onSubmit={handleSubmit}>

        <div className='mb-4 md:mb-5'>
          <label htmlFor="fullName" className='text-base md:text-xl block mb-1 font-semibold '>
            Full Name
          </label>
          <input type='text' value={fullName} onChange={(e) => {
            setFullName(e.target.value)
          }} id='fullName' className='text-xs md:text-[14px] border-solid border-white md:border-[#1E1E21] border-2 rounded-xl bg-transparent p-4 md:p-5 outline-none block w-full' />
        </div>

        <div className='mb-4 md:mb-5'>
          <label htmlFor="username" className='text-base md:text-xl block mb-1 font-semibold '>
            Username
          </label>
          <input type='text' value={username} onChange={(e) => {
            setUsername(e.target.value)
          }} id='username' className='text-xs md:text-[14px] border-solid border-white md:border-[#1E1E21] border-2 rounded-xl bg-transparent p-4 md:p-5 outline-none block w-full' />
        </div>

        <div className='mb-4 md:mb-5'>
          <label htmlFor="email" className='text-base md:text-xl block mb-1 font-semibold '>
            Email
          </label>
          <input value={email} type='email' onChange={(e) => {
            setEmail(e.target.value)
          }} id='email' className='text-xs md:text-[14px] border-solid border-white md:border-[#1E1E21] border-2 rounded-xl bg-transparent p-4 md:p-5 outline-none block w-full' />
        </div>

        <div className='mb-4 md:mb-5'>
          <label htmlFor="password" className='text-base md:text-xl block mb-1 font-semibold '>
            Password
          </label>
          <div className='w-full relative text-xs md:text-[14px]'>
            <input value={password} type={passwordVisible ? 'text' : 'password'} onChange={(e) => {
              setPassword(e.target.value)
            }} id='email' className=' border-solid border-white md:border-[#1E1E21] border-2 rounded-xl bg-transparent p-4 md:p-5 outline-none block w-full' />
            <button type='button' onClick={() => {
              setPasswordVisible(!passwordVisible)
            }} className='absolute right-4 md:right-5 bottom-1/2 translate-y-1/2 scale-150 w-max h-max block '>
              {
                passwordVisible ?
                  <AiFillEyeInvisible />
                  :
                  <AiFillEye />
              }
            </button>
          </div>
        </div>

        <div className='mb-4 md:mb-5'>
          <label htmlFor="profile-picture" className='text-base md:text-xl block mb-1 font-semibold '>
            Profile Picture <span className='text-xs md:text-base'>(optional)</span>
          </label>
          <input type='file' onChange={(e) => {
            setAvatar(e.target.files && e.target.files[0])
          }} id='profile-picture' className='text-xs md:text-[14px] border-solid border-white md:border-[#1E1E21] border-2 rounded-xl bg-transparent p-4 md:p-5 outline-none block w-full' />
        </div>

        <div className='gap-1 flex flex-row flex-wrap justify-center text-base md:text-lg mb-4 md:mb-5 font-semibold'>
          <p>
            Have an account?
          </p>
          <Link to={'/login'} className='text-[#9333EA] underline underline-offset-1'>
            Login
          </Link>
        </div>

        <button type='submit' disabled={submitting} className='text-white text-base md:text-lg font-bold rounded-[5px] md:rounded-[10px] py-[10px] md:py-[15px] px-[60px] md:px-[120px] block mx-auto bg-[#9333EA] disabled:bg-gray-500'>
          {
            !submitting ? 'Register' : 'Submitting...'
          }
        </button>

      </form>
    </AuthContainer>
  )
}

export default Signup