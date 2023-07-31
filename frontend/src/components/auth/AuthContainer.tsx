import React from 'react'
import authImg from '../../assets/journey-image.png'

type Props = {
    children: React.ReactNode
    title: string
}

const AuthContainer = ({ children, title }: Props) => {
    return (
        <div className='flex flex-row h-screen w-full'>

            <div className='w-1/2 flex items-center p-10'>

                <div className='w-full'>
                    <h3 className='text-xl font-bold text-indigo-900 mb-10'>
                        {title}
                    </h3>
                    {children}

                    <div className='h-[1px] w-full bg-gray-400 my-4'></div>
                    <button className='outline-none  bg-white text-center mx-2 border-solid border-[1px] border-indigo-200 p-2 rounded-md'>
                        sign in with google
                    </button>
                </div>

            </div>

            <div className='hidden lg:block w-1/2 h-full'>
                <img src={authImg} className='h-full w-full object-cover' />
            </div>


        </div>
    )
}

export default AuthContainer