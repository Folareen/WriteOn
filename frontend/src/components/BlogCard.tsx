import { Link } from "react-router-dom"

type Props = {
    id: string,
    coverImage: string,
    title: string,
    date: string
}

const BlogCard = ({ id, coverImage, title, date }: Props) => {
    return <div>
        <img src={coverImage} />
        <h2>
            {title}
        </h2>
        <div className="flex justify-between items-center">
            <p className="text-[8px] lg:text-base">
                {date}
            </p>
            <Link to={`/blog/${id}`}>
                Read More
            </Link>
        </div>
    </div>
}

export default BlogCard