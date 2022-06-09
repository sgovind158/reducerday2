import React from 'react'
import { Link } from 'react-router-dom'
import style from "./style.module.css"

const Navbar = () => {
  return (
    <div className={style.navbar}>
     
        <Link className={style.color} to= "/">Counter App</Link>
        <Link className={style.color} to= "/todoapp">TODO App</Link>
        <Link className={style.color} to= "/showCompleteTask">Show Complete Task</Link>
        <Link className={style.color} to= "/showUnCompleteTask">Show UnComplete Task</Link>
        <Link className={style.color} to= "/todo/:id/edit">Edit Todo</Link>
       
    </div>
  )
}

export default Navbar
