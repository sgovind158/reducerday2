import { AuthError,AuthLoading,AuthSuccess,AuthLogout  } from "./auth.types";
import axios  from "axios";


export const LoginApi = (data)=>(dispatch)=>{
    dispatch({type:AuthLoading})

    axios.post("https://reqres.in/api/login",{
        email:data.email,
        password : data.password
    }).then((r)=>{
        dispatch({type:AuthSuccess,payload: r.data})
    }).catch((error)=>{
        dispatch({type:AuthError})
    })


}


export const LogoutApi = ()=>({ type:AuthLogout })