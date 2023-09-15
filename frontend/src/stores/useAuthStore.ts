import { create } from "zustand";
import { setAxiosToken } from "../api/axios";
import jwtDecode from "jwt-decode";

type AuthState = {
    user: any,
    authenticate: (user: any) => void,
    logout: () => void
}

const useAuthStore = create<AuthState>((set) => ({
    user: null,
    authenticate(token: string){
      const user = jwtDecode(token)
        setAxiosToken(token)
        localStorage.removeItem('token')
        localStorage.setItem('token', token)
        set(() => ({
            user
        }))
    },
    logout(){
        setAxiosToken(null)
        localStorage.removeItem('token')
        set({user: null})
    }
}))

export default useAuthStore