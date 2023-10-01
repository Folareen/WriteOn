import { Link } from 'react-router-dom'
import journeyImg from '../../assets/journey-image.png'
import Container from '../../components/Container'
import { useEffect, useRef, useState } from 'react'
import BlogCard from '../../components/BlogCard'
import useFetch from '../../hooks/useFetch'
import blogCategories from '../../constants/blogCategories'
import { AiOutlineSearch } from 'react-icons/ai'
import Pagination from '../../components/Pagination'

const Blog = () => {
    const [category, setCategory] = useState('')
    const [searchTerm, setSearchTerm] = useState('')
    const [page, setPage] = useState(1)

    const searchRef = useRef<HTMLInputElement>(null)

    const { loading, data, error } = useFetch(`/blog/?${category ? `category=${category}` : ''}&${page ? `page=${page}` : ''}&${searchTerm ? `search=${searchTerm}` : ''}`, [category, page, searchTerm])

    useEffect(() => {
        window.scrollTo(0, window.innerHeight / 2)
    }, [data])

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

            <Container className='bg-[#EFF3F0]'>

                <div className='flex flex-row items-center py-4 lg:py-10 gap-2.5 lg:gap-5 overflow-x-auto'>
                    <button onClick={() => {
                        setCategory('')
                        if (searchRef.current) {
                            searchRef.current.value = ''
                        }
                        setSearchTerm('')
                    }} className={`text-base lg:text-xl font-semibold capitalize py-0.5 lg:py-1.5 px-2 lg:px-5 ${category == '' ? 'text-white bg-[#9333EA] rounded-lg ' : 'text-[#1E1E21]'}`}>
                        All
                    </button>
                    {
                        blogCategories.map((cgy) => (
                            <button onClick={() => {
                                setCategory(cgy)
                                if (searchRef.current) {
                                    searchRef.current.value = ''
                                }
                                setSearchTerm('')
                            }} className={`text-base lg:text-xl font-semibold capitalize py-0.5 lg:py-1.5 px-1.5 lg:px-3 ${category == cgy ? 'text-white bg-[#9333EA] rounded-lg ' : 'text-[#1E1E21]'}`} key={cgy}>
                                {cgy}
                            </button>
                        ))
                    }
                </div>

                <div className='flex border-solid border-black border-[1px] mb-3 lg:mb-6 rounded-lg'>
                    <input type='search' ref={searchRef} className='flex-1 bg-transparent p-2 lg:p-4 outline-none border-solid border-[0] border-black border-r-[0.4px]' placeholder='Search your keywords' />
                    <button onClick={() => {
                        if (searchRef?.current) {
                            setSearchTerm(searchRef.current.value)
                        }
                    }} className='outline-none p-2 lg:p-4'>
                        <AiOutlineSearch />
                    </button>
                </div>

                <div className='pb-3 lg:pb-6'>
                    {
                        loading ?
                            <div className='gap-3 md:gap-4 lg:gap-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                                {
                                    Array.from(Array(10).keys()).map(() => (
                                        <div className="h-[35vh] lg:h-[40vh] bg-slate-500 rounded-[10px] animate-pulse"></div>
                                    ))
                                }
                            </div>
                            :
                            error ?
                                <p className='text-red-600 font-medium text-center text-base lg:text-xl p-1 lg:p-2.5'>
                                    {error}
                                </p>
                                :
                                data?.blogs.length > 0 ?
                                    <div className='gap-3 md:gap-4 lg:gap-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                                        {
                                            data?.blogs.map(({ id, coverImage, title, content, updatedAt, author: { username, avatar } }: any) => (
                                                <BlogCard id={id} coverImage={coverImage} title={title}
                                                    content={content} date={updatedAt} authorUsername={username}
                                                    authorAvatar={avatar} key={id} />
                                            ))
                                        }
                                    </div>
                                    :
                                    <div>
                                        No blogs
                                    </div>
                    }

                </div>

                {
                    (!loading && data?.pages > 1) &&
                    <Pagination currPage={data?.page} setNewPage={setPage} totalPages={data?.pages} />
                }
            </Container>
        </div>
    )
}

export default Blog