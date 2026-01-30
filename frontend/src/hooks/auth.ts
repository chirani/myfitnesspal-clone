import { useMutation } from "@tanstack/react-query"
import { logoutService, signupService } from "../services/auth"

export const useSignup = ()=>{
    return useMutation({
     mutationFn: signupService  
    })
}
export const useLogin = ()=>{
    return useMutation({
     mutationFn: signupService  
    })
}

export const useLogout = ()=> {
    return useMutation ({
        mutationFn:logoutService
    })
}