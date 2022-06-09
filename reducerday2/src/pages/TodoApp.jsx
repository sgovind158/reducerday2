import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import ShowComplete from '../componets/ShowComplete'
import { deleteTodo, todoAdd, todoComplete } from '../store/actions'
import style from "../componets/style.module.css"
const TodoApp = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state)=>state.todo.todos)
    const ref = useRef()
    let navigate = useNavigate();
   
    const addNew = ()=>{
        let value = ref.current.value;
      console.log(value)
       
        dispatch(todoAdd({
            value:value,
            isCompleted:false,
            
        }))
        ref.current.value = null
    }


    const deleteTodoData = (id)=>{
      console.log(id)

      dispatch(deleteTodo(id))

    }

   
    const toggleTaskStatus = (id,todo)=>{
      console.log(id,todo)
      dispatch(todoComplete(id))
      // let toggleTask = {
      //   ...task,
      //   done: !task.done
      // }
      // // console.log(toggleTask)
      // handleUpdateTask(toggleTask)
    }

    const  EditTodo = (id)=>{
      navigate(`/todo/:id/edit`);
    }

  return (
      <>
   
      <h1>TodoApp</h1>
      
      <div>
          <input className={style.input} ref={ref} type="text" placeholder='enter here' />
          <button onClick={addNew}  className={style.addBtn}>Add</button>
         
      </div>
         <br />
      <br />
      <br />

      {
       todos.map((todo)=>{

        return (
          <div className={style.showTodo} key={ todo.id}>
          <div   style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none'}}>{todo.value}</div>
          <button  className={style.addBtn} onClick={()=>deleteTodoData(todo.id)}>Delete</button>
          <button  className={style.addBtn} onClick={()=>EditTodo(todo.id)}>Edit</button>
        
        {/* compete task logic */}
        <input type="checkbox" className={style.checkBox}  checked = {todo.isCompleted} onChange ={()=>toggleTaskStatus(todo.id,todo)}  style={{ textDecorationLine: 'line-through' }} />
                
      
       
          </div>

        )
       })
      }
     
     
     
    
    </>
  )
}

export default TodoApp
