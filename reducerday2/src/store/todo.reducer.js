import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, UPDATE_TODO } from "./action.types"
import { v4 as uuidv4 } from 'uuid';




export const todoReducer = (state = {todos : []}, {type,payload})=>{
 
    switch(type){
        case ADD_TODO:{
        
          return{
              ...state,
              todos:[
                  ...state.todos,{
                      ...payload,
                      id: uuidv4(),
                    
                    
                  },
              ],
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