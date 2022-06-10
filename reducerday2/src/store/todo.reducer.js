import { ADD_TODO, ADD_TODOS_ERROR, ADD_TODOS_LOADING, ADD_TODOS_SUCCESS, COMPLETE_TODO, DELETE_TODO, GET_TODOS, GET_TODOS_ERROR, GET_TODOS_LOADING, GET_TODOS_SUCCESS, UPDATE_TODO } from "./action.types"
import { v4 as uuidv4 } from 'uuid';

const initState = {
    addTodo:{
        loading : false,
       
       error:false,

    },
    getTodos:{
        loading : false,
        error:false,
       
    },
    data: [],
}


export const todoReducer = (state = initState, {type,payload})=>{
 
    switch(type){

        case GET_TODOS_LOADING:{
            return{
                ...state,
               getTodos:{
                 
                   loading :true,
                   error:false,
               }
            }
        }

        case GET_TODOS_SUCCESS:{
            return{
                ...state,
                getTodos:{
                    ...state.getTodos,
                    loading :false,
                    error:false,
                  
                },
                data:payload
        }
        }
        case GET_TODOS_ERROR:{
            return{
                ...state,
                getTodos:{
                 
                    loading :false,
                    error:true,
                }
            }
        }


        case ADD_TODOS_LOADING:{
            return{
                ...state,
               addTodo:{
                  
                   loading :true,
                   error:false
               }
            }
        }

        case ADD_TODOS_SUCCESS:{
            return{
                ...state,
                addTodo:{
                    loading :false,  
                    error:false  
                },
                data: [...state.data,payload],
        }
        }
        case ADD_TODOS_ERROR:{
            return{
                ...state,
                addTodo:{
                  
                    loading :false ,
                    error:true,
                }
            }
        }


        case ADD_TODO:{
        
          return{
              ...state,
              todos:[  ...state.todos,  payload],
          }
         
        }
       
        case UPDATE_TODO:{
            let newTodos = state.todos.map((todo)=>{
                console.log(todo,"before")
                if(todo.id ===payload.id){
                    return{
                        ...state,
                        todos:[
                            ...state.todos,{
                                ...payload,
                                id: uuidv4(),
                              
                              
                            },
                        ],
                    }
                  
                   }else{
                    return todo;
                }
            })
         
            return {...state,todos: newTodos}
        }

        case DELETE_TODO:{
            let newTodos = state.todos.filter((todo)=>{
                if(todo.id !== payload){
                    return todo 
                }

            }
           )

         
            return {...state, todos:newTodos}
        }

        case COMPLETE_TODO:{
            let newTodos = state.todos.map((todo)=>{
                if(todo.id === payload){
                    if(todo.isCompleted === false){
                        todo.isCompleted = true;
                        console.log(todo,"complete todo ")
                        return todo
                    }else{
                        todo.isCompleted = false;
                    }
                  
                } 

                console.log(todo.isCompleted)
                return todo
            })
         
            return {...state ,todos: newTodos}
        }


        default:{
            return state
        }
    }
}