import React from 'react'
import journeyImg from '../../assets/journey-image.png'

type Props = {
    children: React.ReactNode,
    title: string
}

const AuthContainer = ({ children, title }: Props) => {
    return (
        <div className={`bg-[url('../../src/assets/journey-image.png')] bg-center md:bg-none md:!bg-[#D9D9D9] w-full min-h-screen object-cover flex flex-row`}>
            <div className='min-h-full w-1/2 hidden md:block '>
                <img src={journeyImg} className='w-full h-full object-cover bg-center' />
            </div>
            <div className='w-full md:w-1/2 bg-[rgba(0,0,0,0.3)] md:bg-none'>
                <div className='w-[95%] md:w-[85%] max-w-2xl mx-auto my-[100px] md:my-[120px] text-white md:text-[#1E1E21] '>
                    <h1 className='text-2xl md:text-3xl font-extrabold text-center mb-8 md:mb-4'>
                        {title}
                    </h1>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AuthContainer