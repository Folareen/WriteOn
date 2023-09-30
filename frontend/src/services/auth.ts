import { toast } from "react-toastify"
import Axios from "../api/axios"
import { AuthState } from "../stores/useAuthStore"

export const login = async (
    { emailOrUsername, password }: { emailOrUsername: string, password: string },
    authenticate: AuthState["authenticate"]
) => {
    try {
        const response = await Axios.post('/login', { emailOrUsername, password })
        authenticate(response.data.token)
    } catch (error: any) {
        throw new Error(error)
    }
}

export const signup = async (
    { fullName, username, email, password, avatar }: { fullName: string, username: string, email: string, password: string, avatar: string },
    authenticate: AuthState["authenticate"]
) => {
    try {
        const formData = new FormData()
        formData.append('fullName', fullName)
        formData.append('username', username)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('avatar', avatar)
        const response = await Axios.post('/signup', formData)
        authenticate(response.data.token)
    } catch (error: any) {
        throw new Error(error)
    }
}

export const forgotPassword = async (email: string) => {
    try {
        await Axios.post('/forgot-password', { email })
        toast.success('Password reset token sent to your email!')
    } catch (error: any) {
        throw new Error(error)
    }
}

export const resetPassword = async (
    { email, newPassword, passwordResetToken }
        :
        { email: string, newPassword: string, passwordResetToken: string }
) => {
    try {
        await Axios.post('/reset-password', {
            email, newPassword, passwordResetToken
        })
        toast.success('Password changed!')
    } catch (error: any) {
        throw new Error(error)
    }
}