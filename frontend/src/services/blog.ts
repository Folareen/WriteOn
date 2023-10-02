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

export const editBlog = async (
    { title, content, category, published, coverImage, blogId }:
        { title: string, content: string, category: string, published: boolean, coverImage: string, blogId: string }
) => {
    try {
        const formData = new FormData()
        formData.append('title', title)
        formData.append('content', content)
        formData.append('category', category)
        formData.append('published', JSON.stringify(published))
        formData.append('coverImage', coverImage)

        const response = await Axios.patch(`/blog/${blogId}`, formData)
        return response.data.blog
    } catch (error: any) {
        throw new Error(error)
    }
}

export const likeBlog = async (username: string, blogId: string) => {
    try {
        await Axios.patch(`/blog/${username}/${blogId}/like`)
    } catch (error: any) {
        throw new Error(error)
    }
}

export const unlikeBlog = async (username: string, blogId: string) => {
    try {
        await Axios.patch(`/blog/${username}/${blogId}/unlike`)
    } catch (error: any) {
        throw new Error(error)
    }
}

export const addComment = async (blogId: string, username: string, comment: string) => {
    try {
        await Axios.patch(`/blog/${username}/${blogId}/comment`, { content: comment })
    } catch (error: any) {
        throw new Error(error)
    }
}