import { AuthError,AuthLoading,AuthSuccess,AuthLogout  } from "./auth.types";

let token = localStorage.getItem("token");

let initState = {
    loading:false,
    error:false,
    isAuth:!!token,

    token:token,
}

export const authReducer = (state = initState,{type, payload})=>{
    switch(type){
        case AuthLoading :{
 
            return{
                ...state,
                loading:true

            }
        }

        case AuthSuccess :{
            localStorage.setItem("token",payload.token)
 
            return{
                ...state,
                loading:false,
                error:false,
                isAuth:true,
                token:payload.token

            }
        }


        case AuthError :{
 
            return{
                ...state,
                loading:false,
                error:true,
                isAuth:false

            }
        }


        case AuthLogout :{
            localStorage.removeItem("token")
 
            return{
                ...state,
                isAuth:false,
                token:""

            }
        }
    
        default:{
            return state 
        }
    }
}

