import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import Header from '../../components/layouts/Header'
import clockImage from '../../assets/clock-image.png'
import setsDesktopImg from '../../assets/sets-desktop.png'
import setsMobileImg from '../../assets/sets-mobile.png'
import hereWriteImg from '../../assets/here-write.png'
import hereReadImg from '../../assets/here-read.png'
import penImg from '../../assets/pen.png'
import bulbImg from '../../assets/bulb.png'
import sourceImg from '../../assets/source.png'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import millionsPeopleImg from '../../assets/millions-people.png'
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi'
import journeyImg from '../../assets/journey-image.png'
const Landing = () => {

  const [activeFAQ, setActiveFAQ] = useState('')

  const [writeHeight, setWriteHeight] = useState(0)
  const [readHeight, setReadHeight] = useState(0)

  const writeRef = useRef(null as any)
  const readRef = useRef(null as any)

  useEffect(() => {
    setWriteHeight(writeRef.current?.clientHeight)
    setReadHeight(readRef.current?.clientHeight)
  }, [])

  return (
    <div className=''>

      <Container className='py-7 lg:py-20 bg-cover bg-center text-white flex flex-col items-center' style={{ backgroundImage: `url(${clockImage})` }}>
        <p className='text-lg lg:text-2xl font-bold mb-1.5 lg:mb-2.5'>
          WriteOn is the right platform to get started with your writing career.
        </p>
        <p className='text-base lg:text-xl'>
          Keep writing simple for writers and reading even much more better for readers.
        </p>
        <Link to={'/sign-up'} className='text-white text-[14px] lg:text-base py-4 rounded-md px-24 bg-[#9333EA] font-semibold mt-4 lg:mt-8'>
          Sign Up- It’s free
        </Link>

        <div className='flex flex-row py-5 lg:py-12 gap-5 lg:gap-12 w-full justify-center items-center'>

          <div className='flex-1 max-w-[300px] px-3 rounded-xl bg-[rgba(22,24,26,0.90)]'>
            <div className='bg-[#929BA9] rounded-xl w-full h-3 my-3'>
            </div>
            <p className='text-xs lg:text-[14px] font-medium underline mb-1'>
              Power To Writers
            </p>
            <p className='text-xs lg:text-base'>
              WriteOn for writers is a home for peaceful and adequate writing. It gives writer the freedom to write as they think and post on their own terms. Writing has never been made so easy.
            </p>
            <div className='bg-[#929BA9] rounded-xl w-full h-3 my-3'>
            </div>
          </div>
          <div className='flex-1 max-w-[300px] px-3 rounded-xl bg-[rgba(22,24,26,0.90)] mt-10 lg:mt-0'>
            <div className='bg-[#929BA9] rounded-xl w-full h-3 my-3'>
            </div>
            <p className='text-xs lg:text-[14px] font-medium underline mb-1'>
              Freedom To Readers
            </p>
            <p className='text-xs lg:text-base'>
              WriteOn provides readers with the freedom to browse about any author of their choice. Present readers with passion for writing the opportunity to connect with their favorite writers.
            </p>
            <div className='bg-[#929BA9] rounded-xl w-full h-3 my-3'>
            </div>
          </div>

        </div>

      </Container>

      <Container className='py-5 lg:py-24 flex flex-col items-center'>
        <h3 className='text-base lg:text-2xl font-bold text-center text-[#27292C] mb-8'>
          Giving Readers And Writers The Great Ecosystem
        </h3>
        <img src={setsMobileImg} className='block lg:hidden h-80 w-[380px]' />
        <img src={setsDesktopImg} className='hidden lg:block h-[630px] w-[730px]' />
      </Container>

      <Container className='py-5 lg:py-24 bg-cover bg-center text-white' style={{ backgroundImage: `url(${hereWriteImg})`, minHeight: `${writeHeight}px` }}>
        <h3 style={{ marginBottom: `${writeHeight * 0.5}px` }} className='font-bold text-base lg:text-2xl text-center'>
          Are you here to write?
        </h3>
      </Container>

      <Container className='bg-white'>
        <div className={`bg-[rgba(22,24,26,0.80)] py-7 px-5 lg:px-16 text-white relative h-max rounded-md`} ref={writeRef} style={{ top: `-${writeHeight / 2}px` }}>
          <p>
            WriteOn is a tested and trusted platform where you can push out all your wonderful and amazing writings to the right audience. We give you the power of free journalism and a mindset of impactful writer. We help you arrange your contents according to your choice and help you target the exact type of audience you have in mind. We give room for all race to write. With our free platform, You won’t only write, you will monitor your greatness just from the comfort of anywhere you want. We help you manifest the power and ability embodied in you. Here at WriteOn, we give you the exact power you truly desire through your writing.
          </p>
          <Link to={'/create-blog'} className='block text-white text-[14px] lg:text-base py-4 rounded-md px-24 bg-[#9333EA] font-semibold mt-4 lg:mt-7 w-max mx-auto'>
            Start Writing
          </Link>
        </div>
      </Container>

      <Container className='py-5 lg:py-24 bg-cover bg-center text-white' style={{ backgroundImage: `url(${hereReadImg})`, minHeight: `${readHeight}px` }}>
        <h3 style={{ marginBottom: `${readHeight * 0.3}px` }} className='font-bold text-base lg:text-2xl text-center'>
          Are you here to Read?
        </h3>
      </Container>

      <Container className='bg-white pb-5 lg:pb-10'>
        <div className={`bg-[rgba(22,24,26,0.80)] py-7 px-5 lg:px-16 text-white relative h-max rounded-md`} ref={readRef} style={{ top: `-${readHeight / 2}px` }}>
          <p>
            WriteOn gives you the chance to explore thousands of writings from your favorite writers. With our platform, you get to connect with any writer you want. We give you blogs of different fields. Our blogs are limitless and fascinating. We present you with the best interface you can ever come across. We put your request in mind and bring you closer to your reading goals. WriteOn has created so many leaders and build an interesting system for all our readers. With WriteOn, readers are presented with the opportunity to be influenced by the readers they look up to. Our goal is to empower all our users with knowledge embedded in writings. WriteOn! The reading platform you have always wanted.
          </p>
          <Link to={'/blog'} className='block text-white text-[14px] lg:text-base py-4 rounded-md px-24 bg-[#9333EA] font-semibold mt-4 lg:mt-7 w-max mx-auto'>
            Start Reading
          </Link>
        </div>

        <h3 className='text-[#27292C] text-base lg:text-2xl font-bold mb-1 lg:mb-2'>
          We are committed to understand you and your mission.
        </h3>
        <h3 className='text-[#27292C] text-[14px] lg:text-xl mb-1 lg:mb-2'>
          We are committed to understand you and your mission.
        </h3>
        <div className='flex flex-row flex-wrap gap-7'>
          {
            [
              {
                icon: penImg,
                title: 'The power to write as you want.',
                desc: 'Get simplified way to write and keep your writings. Power to draft, save, edit and publish.'
              },
              {
                icon: bulbImg,
                title: 'In all you do, get knowledge.',
                desc: 'Get untampered knowledge from writers of different fields of life.'
              },
              {
                icon: sourceImg,
                title: 'Read from the right source.',
                desc: 'A platform that creates the missing bridge between readers and writers. '
              }
            ].map(({ title, icon, desc }) => (
              <div className='bg-[#0C4A6E] p-6 rounded-md text-white flex-1 min-w-[300px] ' key={title}>
                <img src={icon} className='h-12 w-12' />
                <p className='font-bold text-base my-2'>
                  {title}
                </p>
                <p className='text-base mb-2'>
                  {desc}
                </p>
              </div>
            ))
          }
        </div>

        <h3 className='text-[#27292C] text-base lg:text-2xl font-bold mt-4 lg:mt-8'>
          Frequently Asked Questions(FAQs)
        </h3>

        <div className='flex flex-col gap-2 my-5'>
          {
            [
              {
                title: 'How to get started?',
                content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos eum in accusantium natus, suscipit doloremque quod ratione alias hic doloribus explicabo voluptatem, rem velit iusto eveniet nostrum maxime! Nesciunt, quis!"
              },
              {
                title: 'What makes WriteOn special?',
                content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos eum in accusantium natus, suscipit doloremque quod ratione alias hic doloribus explicabo voluptatem, rem velit iusto eveniet nostrum maxime! Nesciunt, quis!"
              },
              {
                title: 'What are the new updates?',
                content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos eum in accusantium natus, suscipit doloremque quod ratione alias hic doloribus explicabo voluptatem, rem velit iusto eveniet nostrum maxime! Nesciunt, quis!"
              },
              {
                title: 'Not getting the answers you want?',
                content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos eum in accusantium natus, suscipit doloremque quod ratione alias hic doloribus explicabo voluptatem, rem velit iusto eveniet nostrum maxime! Nesciunt, quis!"
              },
            ].map(({ title, content }) => (
              <div className='text-white' key={title}>
                <button onClick={() => {
                  if (activeFAQ == title) {
                    setActiveFAQ('')
                  } else {
                    setActiveFAQ(title)
                  }
                }} className='px-3 lg:px-6 flex flex-row items-center justify-between bg-[#0C4A6E] rounded-md w-full p-2.5'>
                  <p className='font-medium'>
                    {title}
                  </p>
                  {
                    activeFAQ == title ?
                      <IoMdArrowDropup />
                      :
                      <IoMdArrowDropdown />
                  }
                </button>
                <p className={`${activeFAQ == title ? 'block' : 'hidden'} text-[#0C4A6E] border border-solid border-[#0C4A6E] mt-0.5 bg-gray-50 rounded-md p-2 text-[14px] lg:text-lg font-medium`}>
                  {content}
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos eum in accusantium natus, suscipit doloremque quod ratione alias hic doloribus explicabo voluptatem, rem velit iusto eveniet nostrum maxime! Nesciunt, quis!
                </p>

              </div>
            ))
          }

        </div>

      </Container>

      <Container style={{ background: 'linear-gradient(234deg, rgba(230, 234, 22, 0.50) 0%, rgba(167, 169, 52, 0.00) 100%), linear-gradient(223deg, #7E22CE 0%, rgba(84, 98, 149, 0.55) 81.42%, rgba(84, 149, 149, 0.00) 100%)' }} className='text-white py-5 lg:py-10'>
        <h3 className='text-center text-base lg:text-2xl font-bold'>
          Chosen by millions of people around the world
        </h3>
        <img src={millionsPeopleImg} className='block mx-auto my-10' />
        <h3 className='text-center text-base lg:text-2xl font-bold'>
          See what our users have been saying about us
        </h3>
        <div className='flex gap-1 text-lg'>
          <div className='self-start'>
            <BiSolidQuoteAltLeft className='' />
          </div>
          <div className='bg-[rgba(22,24,26,0.40)] rounded-xl p-4 my-2 lg:my-4 '>
            <p className='text-base lg:text-xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ipsum id ex ullamcorper pellentesque. In ultricies nisi vel lacinia vulputate. Etiam at accumsan leo. Fusce rutrum dapibus nunc, ac mollis tortor mollis sed. Proin et orci porta, tempus lorem quis, convallis arcu. Nullam tincidunt nisi quis urna cursus, ut suscipit odio rhoncus. Vivamus rutrum, mi sit amet sagittis dapibus, ante ligula pulvinar enim, sed lacinia massa ante ut leo. Maecenas vel elit mi. Cras at pharetra tellus, at
            </p>
            <p className='text-center text-base lg:text-xl font-semibold'>
              Otuyemi Samuel
            </p>
          </div>
          <div className='self-end'>
            <BiSolidQuoteAltRight className='' />
          </div>
        </div>
      </Container>

    </div>
  )
}

export default Landing