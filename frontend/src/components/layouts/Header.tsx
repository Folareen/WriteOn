import React, { useState } from 'react'
import { MdOutlineMenuOpen, MdOutlineWorkOutline } from 'react-icons/md'
import Logo from '../Logo'
import { RiArticleFill, RiCloseCircleLine, RiFileEditFill, RiLogoutCircleLine } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'
import { GoHome } from 'react-icons/go'
import { LuMessagesSquare } from 'react-icons/lu'
import { AiOutlineLogin } from 'react-icons/ai'
import { IoMdPersonAdd } from 'react-icons/io'
import getUrlFromTitle from '../../utils/getUrlFromTitle'
import Container from '../Container'
import useAuthStore from '../../stores/useAuthStore'
import { toast } from 'react-toastify'

const MobileHeader = ({ links, pathname }: { links: string[], pathname: string }) => {
  const [showNav, setShowNav] = useState(false)
  const { logout } = useAuthStore()

  return <div className='flex lg:hidden p-6 items-center justify-center relative'>
    <Logo dark={true} />
    <button onClick={() => {
      setShowNav(true)
    }} className='absolute right-6'>
      <MdOutlineMenuOpen />
    </button>

    <div className={`fixed z-50 ${showNav ? 'top-0' : 'top-[-100vh]'} left-0 right-0 w-screen bg-[rgba(0,0,0,0.75)] h-screen transition-all duration-500`}>
      <div className='w-full h-3/6 bg-white rounded-b-3xl'>

        <button onClick={() => {
          setShowNav(false)
        }} className='absolute top-10 left-1/2 -translate-x-1/2'>
          <RiCloseCircleLine />
        </button>

        <nav className='relative top-16 text-[#1E1E21] font-semibold'>
          {
            links.map((item) => {

              if (item == 'Login') {
                return <Link to={getUrlFromTitle(item)} className={`flex flex-row gap-2 p-2 border-[#1E1E21] border-solid border-0 border-b-[1px] items-center text-[#9333EA] ${pathname == getUrlFromTitle(item) ? 'bg-gray-200' : 'bg-white'}`}>
                  <AiOutlineLogin />
                  <p className=' text-base'>
                    {item}
                  </p>
                </Link>
              }

              if (item == 'Signup') {
                return <Link to={getUrlFromTitle(item)} className={`flex flex-row gap-2 p-2 items-center text-[#503668] ${pathname == getUrlFromTitle(item) ? 'bg-gray-200' : 'bg-white'}`}>
                  <IoMdPersonAdd />
                  <p className=' text-base'>
                    Sign up
                  </p>
                </Link>
              }

              if (item == 'Logout') {
                return <button className='flex flex-row items-center gap-2 p-2 text-[#C52727]' onClick={() => {
                  logout()
                  toast.info('Logout successful')
                }}>
                  <RiLogoutCircleLine />
                  <span>Logout</span>
                </button>
              }

              return <Link to={getUrlFromTitle(item)} className={`flex flex-row gap-2 p-2 border-[#1E1E21] border-solid border-0 border-b-[1px] items-center ${pathname == getUrlFromTitle(item) ? 'bg-gray-200' : 'bg-white'}`}>
                {
                  item == 'Home' ?
                    <GoHome />
                    :
                    item == 'My Portfolio' ?
                      <MdOutlineWorkOutline />
                      :
                      item == 'Blog' ?
                        <RiArticleFill />
                        :
                        item == 'Create Blog' ?
                          <RiFileEditFill />
                          :
                          item == 'FAQs' ?
                            <LuMessagesSquare />
                            :
                            ''

                }
                <p className=' text-base'>
                  {item}
                </p>
              </Link>
            })
          }
        </nav>
      </div>
    </div>

  </div>
}

const DesktopHeader = ({ links, pathname }: { links: string[], pathname: string }) => {
  const { logout } = useAuthStore()

  return <Container className='hidden lg:flex bg-[#26262F] p-[27px] justify-between'>
    <Logo dark={false} />
    <div className='flex flex-row gap-5 items-center font-medium'>
      {
        links.map((item) => {

          if (item == 'Login') {
            return <Link to={'/login'} className='px-3 rounded-md bg-[#9333EA] text-white py-1.5'>
              Login
            </Link>
          }

          if (item == 'Sign up') {
            return <Link to={'/signup'} className='px-3 rounded-md bg-[#B09EC0] text-white py-1.5'>
              Sign up
            </Link>
          }

          if (item == 'Create Blog') {
            return <Link to={'/create-blog'} className='px-3 rounded-md bg-[#9333EA] text-white py-1.5'>
              Create Blog
            </Link>
          }

          if (item == 'Logout') {
            return <button className='px-3 rounded-md bg-[#C52727] text-white py-1.5' onClick={() => {
              logout()
              toast.info('Logout successful!')
            }}>
              Logout
            </button>
          }

          return <Link to={getUrlFromTitle(item)} className={`text-white ${pathname == getUrlFromTitle(item) || (pathname == '/' && item == 'Home') ? 'font-bold underline underline-offset-1' : ''} hover:underline`}>
            {item}
          </Link>
        })
      }
    </div>
  </Container>
}

const Header = () => {

  const { pathname } = useLocation()
  const { user } = useAuthStore()

  const links = user ? [
    'Home', 'My Portfolio', 'Blog', 'FAQs', 'Create Blog', 'Logout'
  ] : [
    'Home', 'Blog', 'FAQs', 'Login', 'Signup'
  ]

  return (
    <header className='fixed w-full bg-white z-50 shadow-md'>
      <MobileHeader links={links} pathname={pathname} />
      <DesktopHeader links={links} pathname={pathname} />
    </header>
  )
}

export default Header