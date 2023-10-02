import { Link, useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import Container from "../../components/Container"
import useAuthStore from "../../stores/useAuthStore"
import { FaEdit } from "react-icons/fa"
import Error from "../../components/Error"
import Message from "../../components/Message"
import { getDateAndTime } from "../../utils/formatDate"
import { useEffect, useState } from "react"
import { AiFillLike, AiOutlineLike } from "react-icons/ai"
import { addComment, likeBlog, unlikeBlog } from "../../services/blog"
import Skeleton from "../../components/Skeleton"
import { MdOutlinePublic, MdOutlinePublicOff } from "react-icons/md"
import { toast } from "react-toastify"


const BlogContent = () => {
    const { username, blogId } = useParams()

    const { loading, data, error } = useFetch(`/blog/${username}/${blogId}`, [username, blogId])

    const { user } = useAuthStore()

    const [liked, setLiked] = useState(false)
    const [newComment, setNewComment] = useState('')
    const [submittingComment, setSubmittingComment] = useState(false)
    const [refreshComments, setRefreshComments] = useState(false)

    const refetchedBlog = useFetch(`/blog/${username}/${blogId}`, [username, blogId, refreshComments])

    const handleSubmitComment = async () => {
        try {
            setSubmittingComment(true)
            await addComment(blogId!, username!, newComment)
            toast.success('Comment posted!')
            setNewComment('')
            setRefreshComments(!refreshComments)
        } catch (error: any) {
            toast.error(error?.message || error)
        } finally {
            setSubmittingComment(false)
        }
    }

    useEffect(() => {
        if (!data?.blog) return
        if (data?.blog?.likes?.includes(user?._id)) {
            setLiked(true)
        } else {
            setLiked(false)
        }
    }, [data])

    return (
        <div className="text-[#1E1E21] pb-4 lg:pb-8">
            {
                loading ?
                    <Container className='h-[150vh] flex flex-col justify-between py-4 lg:py-6 items-center'>
                        <Skeleton className='h-[5%] w-[85%]' />
                        <Skeleton className='h-[2.5%] w-full' />
                        <Skeleton className='h-[40%] w-[95%]' />
                        <Skeleton className='h-[2.5%] w-full' />
                        <Skeleton className='h-[40%] w-full' />
                    </Container>
                    :
                    error ?
                        <Error message={error} />
                        :
                        data ?
                            <div>
                                <Container >
                                    <h1 className="text-lg md:text-xl lg:text-3xl font-bold my-1.5 lg:my-3 text-center">
                                        {data?.blog?.title}
                                    </h1>
                                    {
                                        username == user?.username ?
                                            <div className="flex flex-row justify-between items-center my-1 lg:my-2">
                                                <Link to={`/${username}/${blogId}/edit`} className="bg-[#9333EA] text-white hover:shadow-sm text-[14px] lg:text-lg rounded-md py-0.5 md:py-1 lg:py-1 px-1.5 lg:px-4 space-x-1 flex justify-center items-center w-max" >
                                                    <FaEdit />
                                                    <span>
                                                        Edit
                                                    </span>
                                                </Link>
                                                <button className="bg-[#9333EA] text-white hover:shadow-sm text-[14px] lg:text-lg rounded-md py-0.5 md:py-1 lg:py-1 px-1.5 lg:px-4 space-x-1 flex justify-center items-center w-max cursor-pointer" >
                                                    {
                                                        data?.blog?.published ?
                                                            <>
                                                                <MdOutlinePublicOff />
                                                                <span>
                                                                    Unpublish
                                                                </span>
                                                            </>
                                                            :
                                                            <>
                                                                <MdOutlinePublic />
                                                                <span>
                                                                    Publish
                                                                </span>
                                                            </>
                                                    }
                                                </button>
                                            </div>
                                            :
                                            <p>
                                                Written By: <Link to={`/${username}`} className="font-bold hover:underline">{username}</Link>
                                            </p>
                                    }

                                    <img src={data?.blog?.coverImage} className="max-h-screen sm:max-h-[95vh] md:max-h-[90vh] lg:max-h-[75vh] object-contain mx-auto my-2 lg:my-4" />

                                    <div dangerouslySetInnerHTML={{ __html: data?.blog?.content }} >
                                    </div>

                                    <div className="my-2 lg:my-4 border-solid border-0 border-t-2 " />

                                    {
                                        data?.blog?.published ?
                                            <>
                                                <div className="flex flex-row justify-between items-center my-2 lg:my-4 max-w-5xl mx-auto">
                                                    <p className="text-xs lg:text-base mt-0.5 lg:mt-1 capitalize">
                                                        Posted: <span className="font-semibold">{getDateAndTime(data?.blog?.updatedAt)}</span>
                                                    </p>
                                                    <p className="text-xs lg:text-base  mt-0.5 lg:mt-1 capitalize">
                                                        {data?.blog?.viewCount} Views
                                                    </p>
                                                    <button onClick={() => {
                                                        if (!user) return
                                                        if (liked) {
                                                            setLiked(false)
                                                            unlikeBlog(username!, blogId!)
                                                        } else {
                                                            setLiked(true)
                                                            likeBlog(username!, blogId!)
                                                        }
                                                    }} className="text-xl lg:text-4xl cursor-pointer flex justify-center items-end space-x-1 lg:space-x-2">
                                                        {
                                                            user && <>
                                                                {
                                                                    liked
                                                                        ?
                                                                        <AiFillLike />
                                                                        :
                                                                        <AiOutlineLike />
                                                                }
                                                            </>
                                                        }
                                                        {
                                                            liked ?
                                                                <span className='text-xs lg:text-lg'>
                                                                    {data?.blog?.likes?.length || 1} {!user && 'likes'}
                                                                </span>
                                                                :
                                                                data?.blog?.likes?.length > 1 ?
                                                                    <span className='text-xs lg:text-lg'>
                                                                        {data?.blog?.likes?.length} {!user && 'likes'}
                                                                    </span>
                                                                    :
                                                                    null
                                                        }
                                                    </button>
                                                </div>
                                                {
                                                    user &&
                                                    <div className="my-4 lg:my-6 max-w-5xl mx-auto">
                                                        <label className="mb-1 lg:mb-3 block text-[14px] lg:text-xl font-medium" htmlFor="comment">
                                                            Write Comment
                                                        </label>
                                                        <textarea value={newComment} onChange={(e) => {
                                                            setNewComment(e.target.value)
                                                        }} id="comment" className="px-3 lg:px-5 py-2.5 lg:py-4 rounded-[10px] border-[rgba(30,30,33,0.8)] focus:outline-none focus:border-[rgba(30,30,33,1)] border-solid border-[1px] w-full " placeholder="Say something..." rows={3} >
                                                        </textarea>
                                                        <button type="button" onClick={handleSubmitComment} className="bg-[#9333EA] text-white hover:shadow-sm text-[14px] lg:text-lg rounded-md py-1 md:py-1.5 lg:py-2 px-2 lg:px-4 w-max  block disabled:bg-gray-500" disabled={submittingComment} >
                                                            {
                                                                submittingComment ?
                                                                    'Submitting...' :
                                                                    "Submit"
                                                            }
                                                        </button>
                                                    </div>
                                                }
                                            </>
                                            :
                                            <p className="text-[10px] lg:text-xs mt-0.5 lg:mt-1 capitalize">
                                                Created: <span className="font-semibold">{getDateAndTime(data?.blog?.updatedAt)}</span>
                                            </p>
                                    }


                                </Container>

                                {
                                    refetchedBlog.loading ?
                                        <div className="w-[90%] mx-auto">
                                            <Skeleton className='h-[80px] lg:h-[50px] max-w-5xl w-full mx-auto' />
                                            <Skeleton className='h-[80px] lg:h-[50px] max-w-5xl w-full mx-auto my-2 lg:my-4' />
                                            <Skeleton className='h-[80px] lg:h-[50px] max-w-5xl w-full mx-auto' />
                                        </div>
                                        :
                                        refetchedBlog.error ?
                                            <Error message={error} />
                                            :
                                            refetchedBlog.data?.blog?.comments?.length > 0 ?
                                                <div className="border-solid border-0 border-t-2 py-1 lg:py-2 max-w-5xl mx-auto w-[80%]">
                                                    <h3 className="text-xs lg:text-base mt-0.5 lg:mt-1 font-semibold">
                                                        Comments
                                                    </h3>
                                                    {
                                                        refetchedBlog?.data?.blog?.comments.map((comment: any) => (
                                                            <div className="my-2 lg:my-4 bg-gray-50 rounded-[10px] ">
                                                                <div className="flex flex-row items-center space-x-2 lg:space-x-4 bg-gray-100 p-1.5 lg:p-2.5 rounded-t-[10px]">
                                                                    <Link to={`/${comment?.authorUsername}`} className="hover:underline font-semibold">
                                                                        {comment?.authorUsername}
                                                                    </Link>
                                                                    <span>-</span>
                                                                    <p className="text-[8px] lg:text-xs capitalize">
                                                                        {getDateAndTime(comment.date)}
                                                                    </p>
                                                                </div>
                                                                <p className="p-2 lg:p-4">
                                                                    {comment.content}
                                                                </p>

                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                                :
                                                <Message message="No comments found" />
                                }
                            </div>
                            :
                            <Message message={'Blog not found'} />
            }
        </div >
    )
}

export default BlogContent