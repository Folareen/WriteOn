import { BiLogoFacebook, BiLogoInstagramAlt, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi'
import { GoDotFill } from 'react-icons/go'
import { Link } from 'react-router-dom'
import getUrlFromTitle from '../../utils/getUrlFromTitle'
import Container from '../Container'
import useAuthStore from '../../stores/useAuthStore'
import journeyImg from '../../assets/journey-image.png'

const Footer = () => {
  const { user } = useAuthStore()
  return (
    <div className='mt-auto'>
      {
        !user &&
        <Container style={{ backgroundImage: `url(${journeyImg})` }} className='bg-center bg-cover py-10 lg:py-20 flex flex-col items-center'>
          <p className='text-white text-base lg:text-xl mb-3 lg:mb-6 font-bold'>
            Join millions of users on this beautiful Journey
          </p>
          <Link to={'/sign-up'} className='text-white text-[14px] lg:text-base py-4 rounded-md px-24 bg-[#9333EA] font-semibold'>
            Get Started
          </Link>
        </Container>
      }

      <footer style={{ background: 'linear-gradient(219deg, #B91C7A 0%, rgba(57, 133, 150, 0.47) 52.60%, rgba(56, 82, 175, 0.00) 100%)' }}>
        <Container className='flex flex-col lg:flex-row-reverse py-7 lg:py-11' >
          <div className='flex justify-evenly flex-1 !text-base lg:!text-xl items-start'>
            <p className=' rounded-full bg-[#424242] text-[#E1BEE7] p-1.5'>
              <BiLogoFacebook />
            </p>
            <p className=' rounded-full bg-[#424242] text-[#E1BEE7] p-1.5'>
              <BiLogoLinkedin />
            </p>
            <p className=' rounded-full bg-[#424242] text-[#E1BEE7] p-1.5'>
              <BiLogoTwitter />
            </p>
            <p className=' rounded-full bg-[#424242] text-[#E1BEE7] p-1.5'>
              <BiLogoInstagramAlt />
            </p>

          </div>
          <div className='flex-1'>
            <h3 className='uppercase mb-2 lg:mb-5 text-base lg:text-xl font-bold'>
              Quick Links
            </h3>
            <div className='!text-[14px] lg:!text-lg font-semibold flex '>
              <div className='w-1/2'>
                {
                  [
                    'Blog', 'Create Blog', 'Contact'
                  ].map((link) => (
                    <Link to={getUrlFromTitle(link)} className='my-1 lg:my-2 block'>
                      {link}
                    </Link>
                  ))
                }
              </div>
              <div className='w-1/2'>
                {
                  [
                    'Login', 'Sign up', 'FAQs'
                  ].map((link) => (
                    <Link to={getUrlFromTitle(link)} className='my-1 lg:my-2 block'>
                      {link}
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </Container>
        <div className='flex flex-row items-center gap-2 justify-center !text-[#424242]'>
          <p>
            Designed by <a href='https://twitter.com/otuyemis' className='underline underline-offset-1' target='blank'>Samuel Otuyemi</a>
          </p>
          <GoDotFill />
          <p>
            Developed by <a href='https://twitter.com/_folareen_' className='underline underline-offset-1' target='blank'>Folareen</a>
          </p>
        </div>
      </footer >
    </div>
  )
}

export default Footer