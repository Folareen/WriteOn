import { Link } from "react-router-dom"
import { getDateAndTime } from '../utils/formatDate'

type Props = {
    id: string,
    coverImage: string,
    title: string,
    content: string,
    date: string,
    authorUsername: string,
    authorAvatar: string
}

const BlogCard = ({ id, coverImage, title, content, date, authorUsername, authorAvatar }: Props) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html')
    const parsedContent = doc.body.textContent || "";

    return <div className="shadow-lg hover:shadow-2xl bg-white p-2.5 rounded-[10px] flex flex-col gap-y-1 lg:gap-y-2 max-w-[600px]">
        <Link to={`/${authorUsername}/${id} `}
            className="flex flex-col gap-y-1 lg:gap-y-2"
        >
            <div className="rounded-[10px] w-full h-[156px] lg:h-[258px]">
                <img src={coverImage} className="rounded-[10px] w-full h-full object-cover" />
            </div>
            <h2 className="text-lg lg:text-xl font-semibold">
                {title}
            </h2>
            <p className="text-xs lg:text-base">
                {parsedContent.substring(0, 100)}{parsedContent.length > 100 && '...'}
            </p>
            <p className="text-[8px] lg:text-xs mt-0.5 lg:mt-1 capitalize">
                {getDateAndTime(date)}
            </p>
        </Link>
        <Link to={`/${authorUsername}`} className="flex flex-row items-center gap-2 lg:gap-2.5 mt-auto hover:underline">
            <img src={authorAvatar} className="h-5 lg:h-8 w-5 lg:w-8 rounded-full shadow-sm" />
            <p className="text-[14px] lg:text-lg font-medium">
                {authorUsername}
            </p>
        </Link>
    </div>

}

export default BlogCard