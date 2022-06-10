
import axios from "axios";
// counter app

import { ADD_TODO, ADD_TODOS_ERROR, ADD_TODOS_LOADING, ADD_TODOS_SUCCESS, COMPLETE_TODO, DECREMENT_COUNTER, DELETE_TODO, GET_TODOS, GET_TODOS_ERROR, GET_TODOS_LOADING, GET_TODOS_SUCCESS, INCREMENT_COUNTER, UPDATE_TODO } from "./action.types";

export const counterInc = ()=>({type: INCREMENT_COUNTER})
export const counterDec = ()=>({type: DECREMENT_COUNTER})

// todo 

// export const getTodos = ()=>{
//    

// }

export const getTodos = ()=>(dispatch)=>{
    // loading start
    dispatch({type:GET_TODOS_LOADING})

    axios.get("http://localhost:8081/todos")
      .then((res)=>{
          // loading ends 
        // console.log(res.data)
       setTimeout(()=>{
        dispatch({type : GET_TODOS_SUCCESS , payload: res.data})
       },5000)
      
      }).catch(()=>{
          // loading ends
          dispatch({type : GET_TODOS_ERROR })
      })
}


export const todoAdd = (payload)=> (dispatch)=>{
    dispatch({type:ADD_TODOS_LOADING})
    axios.post("http://localhost:8081/todos", payload).then((res)=>{
        dispatch({type:ADD_TODOS_SUCCESS,payload:res.data})
    }).catch((err)=>{
        dispatch({type: ADD_TODOS_ERROR})
    })
}

export const todoComplete = (id)=>({type : COMPLETE_TODO , payload: id})
export const deleteTodo = (id)=>({type : DELETE_TODO , payload: id})
export const updateTodo = (payload)=>({type : UPDATE_TODO, payload})
