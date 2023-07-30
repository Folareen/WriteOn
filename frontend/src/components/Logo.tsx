import React from 'react'
import { MdModeEditOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Logo = ({ dark }: { dark: boolean }) => {
    return (
        <Link to='/' className={`${dark ? 'text-[#27292C]' : 'text-white '} logo-font text-lg lg:text-xl flex flex-wrap gap-0 items-center !leading-none`}>
            <p className="logo-font !leading-none">
                <span className='text-2xl lg:text-3xl !leading-none'>W</span>rite<span className='text-2xl lg:text-3xl !leading-none'>O</span>n
            </p>
            <MdModeEditOutline className='text-xl lg:text-[27px] p-0 m-0 ml-[-1px]' />
        </Link>
    )
}

export default Logo