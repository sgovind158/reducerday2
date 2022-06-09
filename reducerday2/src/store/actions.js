

// counter app

import { ADD_TODO, COMPLETE_TODO, DECREMENT_COUNTER, DELETE_TODO, INCREMENT_COUNTER, UPDATE_TODO } from "./action.types";

export const counterInc = ()=>({type: INCREMENT_COUNTER})
export const counterDec = ()=>({type: DECREMENT_COUNTER})

// todo 
export const todoAdd = (payload)=>({type : ADD_TODO,payload})
export const todoComplete = (id)=>({type : COMPLETE_TODO , payload: id})
export const deleteTodo = (id)=>({type : DELETE_TODO , payload: id})
export const updateTodo = (payload)=>({type : UPDATE_TODO, payload})
