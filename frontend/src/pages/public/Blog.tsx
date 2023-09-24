import { Link } from 'react-router-dom'
import journeyImg from '../../assets/journey-image.png'
import Container from '../../components/Container'
import { useState } from 'react'

const Blog = () => {
    const [category, setCategory] = useState('')
    return (
        <div>
            <Container style={{ backgroundImage: `url(${journeyImg})` }} className='bg-center bg-cover py-10 lg:py-20 flex flex-col justify-center items-center h-[60vh]'>
                <h1 className='text-white text-lg lg:text-3xl font-bold mb-1.5 lg:mb-5 text-center'>
                    Blogs
                </h1>
                <p className='text-white text-[14px] lg:text-xl font-medium text-center'>
                    Browse from the list of unlimited blogs of your interest.
                </p>
            </Container>
            <Container>
                <div className='flex flex-row items-center py-4 lg:py-10 gap-2.5 lg:gap-5 overflow-x-auto'>
                    {
                        ['all', 'entertainment', 'politics', 'fashion', 'sports', 'education'].map((cgy) => (
                            <button onClick={() => {
                                setCategory(cgy)
                            }} className={`text-base lg:text-xl font-semibold capitalize ${category == cgy ? 'text-white bg-[#9333EA] rounded-lg py-0.5 lg:py-1.5 px-2 lg:px-4' : 'text-[#1E1E21]'}`}>
                                {cgy}
                            </button>
                        ))
                    }
                </div>

            </Container>
        </div>
    )
}

export default Blog