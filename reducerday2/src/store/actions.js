
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
    //    setTimeout(()=>{
        dispatch({type : GET_TODOS_SUCCESS , payload: res.data})
    //    },5000)
      
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

export const todoComplete = (id)=>(dispatch)=>{

    // const {id,  upDate} = payload;
    axios.put(`http://localhost:8081/todos/${id}/`, {
     isCompleted:true
}).then(res => {
    
    console.log(res.data);
}).catch(error => {

    console.log(error);
});


dispatch({type : UPDATE_TODO, payload:id})
}


export const deleteTodo = (id)=>(dispatch)=>{
    console.log(id,"delete")
    axios.delete(`http://localhost:8081/todos/${id}/`)
    .then(resp => {
        console.log(resp.data,"updeteDel")
    }).catch(error => {
        console.log(error);
    });

  dispatch({type : DELETE_TODO , payload: id})
    }


export const updateTodo = (payload)=>(dispatch)=>{
    // console.log("update",payload)
    const {id,  upDate} = payload;
    // console.log(id,upDate)

    axios.put(`http://localhost:8081/todos/${id}/`, {
    value:upDate
}).then(res => {
    console.log(res);
    // dispatch({type : GET_TODOS_SUCCESS , payload: res.data})
   
}).catch(error => {

    console.log(error);
});


dispatch({type : UPDATE_TODO, payload})
}



export const showCompleteTask = (payload)=>(dispatch)=>{

    const {id,  upDate} = payload;
    axios.put(`http://localhost:8081/todos/${id}/`, {
     isCompleted:true
}).then(res => {
    
    console.log(res.data);
}).catch(error => {

    console.log(error);
});


dispatch({type : UPDATE_TODO, payload})
}