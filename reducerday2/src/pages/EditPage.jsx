import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTodo } from '../store/actions'

const EditPage = () => {
    const dispatch = useDispatch()
    const {data:todos,getTodos:gTodo,addTodo:aTodo} = useSelector((state)=>state.todo)
    const ref = useRef()

    const editNew = ()=>{
        let value = ref.current.value;
      console.log(value)
       
  var ans =      dispatch(updateTodo({
            value:value,
            isCompleted:false,
            
        }))
        console.log(ans,"after")
        ref.current.value = null
    }

  return (
    <div>
    <input ref={ref} type="text" placeholder='enter here' />
    <button onClick={editNew} >Edit</button>
   
</div>
  )
}

export default EditPage
