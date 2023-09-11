import React from 'react'
import journeyImg from '../../assets/journey-image.png'

type Props = {
    children: React.ReactNode,
}

const AuthContainer = ({ children }: Props) => {
    return (
        <div className={`bg-[url('../..${journeyImg}')] bg-center md:bg-none w-full min-h-screen object-cover flex flex-row`}>
            <div className='min-h-full w-1/2 hidden md:block '>
                <img src={journeyImg} className='w-full h-full object-cover bg-center' />
            </div>
            <div className=''>
                {children}
            </div>
        </div>
    )
}

export default AuthContainer