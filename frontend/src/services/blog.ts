import Axios from "../api/axios"

export const createBlog = async (
    { title, content, category, published, coverImage }:
        { title: string, content: string, category: string, published: boolean, coverImage: string }
) => {
    try {
        const formData = new FormData()
        formData.append('title', title)
        formData.append('content', content)
        formData.append('category', category)
        formData.append('published', JSON.stringify(published))
        formData.append('coverImage', coverImage)

        const response = await Axios.post('/blog', formData)
        return response.data.blog
    } catch (error: any) {
        throw new Error(error)
    }
}