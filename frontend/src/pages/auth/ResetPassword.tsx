import { FormEvent, useState } from 'react'
import AuthContainer from '../../components/auth/AuthContainer'
import Axios from '../../api/axios'
import { toast } from 'react-toastify'
import useAuthStore from '../../stores/useAuthStore'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { resetPassword } from '../../services/auth'

const ResetPassword = () => {
    const [email, setEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [passwordResetToken, setPasswordResetToken] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)

    const [submitting, setSubmitting] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (e: FormEvent) => {
        try {
            e.preventDefault()
            setSubmitting(true)
            await resetPassword({ email, newPassword, passwordResetToken })
            navigate('/login')
        } catch (error: any) {
            toast.error(error?.message || error)
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <AuthContainer title='Reset Password'>

            <form onSubmit={handleSubmit}>

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
                        New password
                    </label>
                    <div className='w-full relative text-xs md:text-[14px]'>
                        <input value={newPassword} type={passwordVisible ? 'text' : 'password'} onChange={(e) => {
                            setNewPassword(e.target.value)
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
                    <label htmlFor="token" className='text-base md:text-xl block mb-1 font-semibold '>
                        Token
                    </label>
                    <input value={passwordResetToken} type='text' onChange={(e) => {
                        setPasswordResetToken(e.target.value)
                    }} id='token' className='text-xs md:text-[14px] border-solid border-white md:border-[#1E1E21] border-2 rounded-xl bg-transparent p-4 md:p-5 outline-none block w-full' />
                </div>

                <div className='gap-1 flex flex-row flex-wrap justify-center text-base md:text-lg mb-4 md:mb-5 font-semibold'>
                    <p>
                        Didn't get password reset token?
                    </p>
                    <Link to={'/forgot-password'} className='text-[#9333EA] underline underline-offset-1'>
                        Click here
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

export default ResetPassword