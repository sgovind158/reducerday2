import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from "./style.module.css"
const ShowComplete = () => {
    const dispatch = useDispatch()
    const {data:todos,getTodos:gTodo,addTodo:aTodo} = useSelector((state)=>state.todo)
  return (
      <>
    <div >
      <h1>show complete</h1>
      {todos.map((todo)=>{
   return (
       
      
       <div className={style.showComplete} key={todo.id} >{todo.isCompleted ? todo.value : ""}</div>
       
         )
  
      })}
    </div>
    </>
  )
}

export default ShowComplete
