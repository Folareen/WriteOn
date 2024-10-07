import Axios from "../api/axios"

export const editProfile = async (
    { fullName, username, email, avatar }: { fullName: string, username: string, email: string, avatar: string }
) => {
    try {
        const formData = new FormData()
        formData.append('fullName', fullName)
        formData.append('username', username)
        formData.append('email', email)
        formData.append('avatar', avatar)
        await Axios.put('/user', formData)
    } catch (error: any) {
        throw new Error(error)
    }
}
