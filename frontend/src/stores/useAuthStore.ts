import { create } from "zustand";
import { setAxiosToken } from "../api/axios";

type AuthState = {
    user: any,
    authenticate: (user: any) => void
}

const useAuthStore = create<AuthState>((set) => ({
    user: null,
    authenticate(user: any){
        setAxiosToken(user?.accessToken)
        set(() => ({
            user
        }))
    },
    logout(){
        setAxiosToken(null)
        set({user: null})
    }
}))

export default useAuthStore