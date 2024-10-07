import { FormEvent, useEffect, useState } from "react";
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Container from "../../components/Container";
import { editProfile } from "../../services/user";
import useAuthStore from "../../stores/useAuthStore";

const EditProfile = () => {
    const [fullName, setFullName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [avatar, setAvatar] = useState<any>(null)

    const [submitting, setSubmitting] = useState(false)

    const navigate = useNavigate()
    const { user } = useAuthStore()

    useEffect(() => {
        setFullName(user?.fullName)
        setUsername(user?.username)
        setEmail(user?.email)
    }, [user])


    const handleSubmit = async (e: FormEvent) => {
        try {
            e.preventDefault()
            setSubmitting(true)
            await editProfile({ fullName, username, email, avatar })
            toast.success('Profile updated successfully!')
        } catch (error: any) {
            toast.error(error?.message || error)
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <Container className="text-[#1E1E21] py-4 lg:py-6">


            <form onSubmit={handleSubmit} className="w-[90%] mx-auto max-w-2xl">

                <div className='mb-4 md:mb-5'>
                    <label htmlFor="fullName" className='text-base md:text-xl block mb-1 font-semibold '>
                        Full Name
                    </label>
                    <input type='text' value={fullName} onChange={(e) => {
                        setFullName(e.target.value)
                    }} id='fullName' className='text-sm md:text-base border-solid border-white md:border-[#1E1E21] border-2 rounded-xl bg-transparent p-4 md:p-5 outline-none block w-full' />
                </div>

                <div className='mb-4 md:mb-5'>
                    <label htmlFor="username" className='text-base md:text-xl block mb-1 font-semibold '>
                        Username
                    </label>
                    <input type='text' value={username} onChange={(e) => {
                        setUsername(e.target.value)
                    }} id='username' className='text-sm md:text-base border-solid border-white md:border-[#1E1E21] border-2 rounded-xl bg-transparent p-4 md:p-5 outline-none block w-full' />
                </div>

                <div className='mb-4 md:mb-5'>
                    <label htmlFor="email" className='text-base md:text-xl block mb-1 font-semibold '>
                        Email
                    </label>
                    <input value={email} type='email' onChange={(e) => {
                        setEmail(e.target.value)
                    }} id='email' className='text-sm md:text-base border-solid border-white md:border-[#1E1E21] border-2 rounded-xl bg-transparent p-4 md:p-5 outline-none block w-full' />
                </div>

                <div className='mb-4 md:mb-5'>
                    <label htmlFor="profile-picture" className='text-base md:text-xl block mb-1 font-semibold '>
                        Profile Picture <span className='text-xs md:text-base'>(optional)</span>
                    </label>
                    <input type='file' onChange={(e) => {
                        setAvatar(e.target.files && e.target.files[0])
                    }} id='profile-picture' className='text-sm md:text-base border-solid border-white md:border-[#1E1E21] border-2 rounded-xl bg-transparent p-4 md:p-5 outline-none block w-full' />
                </div>

                <button type='submit' disabled={submitting} className='text-white text-base md:text-lg font-bold rounded-[5px] md:rounded-[10px] py-[10px] md:py-[15px] px-[60px] md:px-[120px] block mx-auto bg-[#9333EA] disabled:bg-gray-500'>
                    {
                        !submitting ? 'Submit' : 'Submitting...'
                    }
                </button>

            </form>

        </Container >
    )
}

export default EditProfile