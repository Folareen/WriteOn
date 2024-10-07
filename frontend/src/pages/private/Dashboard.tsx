import { FaEdit, FaRegEnvelope, FaRegUserCircle } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import BlogCard from '../../components/BlogCard'
import Container from '../../components/Container'
import Error from '../../components/Error'
import Skeleton from '../../components/Skeleton'
import useFetch from '../../hooks/useFetch'
import useAuthStore from '../../stores/useAuthStore'

const Dashboard = () => {
  const { user } = useAuthStore()

  const { data, loading, error } = useFetch(`/user/${user?.username}`, [user?.username])

  return (
    <Container className='bg-[#EFF3F0] text-[rgba(30,30,33,1)] py-6 md:py-8'>
      <h1 className='font-semibold text-xl md:text-3xl'>
        Welcome <span className='font-bold'>{user?.username}</span>
      </h1>
      <div className='flex flex-col md:flex-row py-2 md:py-4 lg:items-start'>
        <div className='w-[90%] max-w-[400px] mx-auto md:mx-[unset] lg:w-1/3 p-4 md:p-6 shadow-md rounded-md '>                    {
          loading ?
            <Skeleton className='h-[80vh] w-full' />
            :
            error ?
              <Error message={error} />
              :
              data?.user ?
                <>
                  <img src={data?.user?.avatar} className='w-20 h-20 border-[10px] border-white block rounded-full mx-auto object-cover' />
                  <p className='text-base md:text-lg font-bold text-center my-1 capitalize'>
                    {data?.user?.username}
                  </p>
                  <p className='text-sm md:text-base font-bold flex items-center space-x-1.5 justify-center'>
                    <FaRegUserCircle /> <span>{data?.user?.fullName}</span>
                  </p>
                  <p className='text-sm md:text-base font-bold flex items-center space-x-1.5 justify-center'>
                    <FaRegEnvelope /> <span>{data?.user?.email}</span>
                  </p>
                  <Link to='/edit-profile' className="bg-[#9333EA] text-white hover:shadow-sm text-xs lg:text-sm rounded-md py-1 md:py-1.5 lg:py-2 px-2.5 lg:px-4 w-max mx-auto my-2 space-x-1 flex justify-center items-center">
                    <FaEdit />
                    <span>
                      Edit Profile
                    </span>
                  </Link>
                  <div className='my-4 md:my-6'>
                    <div className='flex items-center justify-between text-[15px] md:text-[17px] font-medium'>
                      <p>
                        Post Views
                      </p>
                      <p>
                        -
                      </p>
                    </div>
                    <div className='flex items-center justify-between text-[15px] md:text-[17px] font-medium'>
                      <p>
                        Post Likes
                      </p>
                      <p>
                        -
                      </p>
                    </div>
                    <div className='flex items-center justify-between text-[15px] md:text-[17px] font-medium'>
                      <p>
                        Post Comments
                      </p>
                      <p>
                        -
                      </p>
                    </div>
                  </div>
                  <p className='font-semibold text-base md:text-lg'>
                    About Ajao
                  </p>
                  <p className='text-[15px] md:text-[17px] '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis officiis, enim repellat deserunt dolore placeat quasi perspiciatis ea maxime possimus esse, quidem optio natus nostrum eum eveniet animi eos sequi!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, delectus inventore optio voluptas quos nam earum ad, sint eius dolorum fuga laboriosam laudantium natus. Dignissimos laboriosam voluptatibus expedita quidem praesentium!
                  </p>
                </>
                :
                <p className='text-slate-700 font-medium text-center text-base lg:text-xl p-2 lg:p-5 bg-[rgba(0,0,0,0.1)] rounded-md'>
                  Profile not Found
                </p>
        }
        </div>
        <div className='w-full lg:w-2/3 p-4 md:p-6 lg:pl-12'>
          <p className='font-semibold text-lg md:text-xl mb-2 md:-mt-6'>
            My Blogs
          </p>
          {
            loading ?
              <div className='gap-3 md:gap-4 lg:gap-7 grid grid-cols-1 md:grid-cols-2 '>
                {
                  Array.from(Array(10).keys()).map(() => (
                    <Skeleton className='h-[35vh] lg:h-[40vh]' />
                  ))
                }
              </div>
              :
              error ?
                <Error message={error} />
                :
                data?.blogs.length > 0 ?
                  <div className='gap-3 md:gap-4 lg:gap-7 grid grid-cols-1 md:grid-cols-2 '>
                    {
                      data?.blogs.map(({ id, coverImage, title, content, updatedAt, author: { username, avatar } }: any) => (
                        <BlogCard id={id} coverImage={coverImage} title={title}
                          content={content} date={updatedAt} authorUsername={username}
                          authorAvatar={avatar} key={id} />
                      ))
                    }
                  </div>
                  :
                  <p className='text-slate-700 font-medium text-center text-base lg:text-xl p-2 lg:p-5 bg-[rgba(0,0,0,0.1)] rounded-md'>
                    No Blogs
                  </p>
          }
        </div>
      </div>
    </Container>
  )
}

export default Dashboard