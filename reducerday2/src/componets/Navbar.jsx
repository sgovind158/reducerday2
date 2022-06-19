import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import style from "./style.module.css"
import { LogoutApi } from '../store/Auth/authAction';

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

  const handleLoginClick = () => {
    dispatch(LogoutApi());
  };

  return (
    <div className={style.navbar}>
     
        <Link className={style.color} to= "/">Counter App</Link>
        <Link className={style.color} to= "/todoapp">TODO App</Link>
        <Link className={style.color} to= "/showCompleteTask">Show Complete Task</Link>
        <Link className={style.color} to= "/showUnCompleteTask">Show UnComplete Task</Link>
        <Link className={style.color} to= "/todo/:id/edit">Edit Todo</Link>
        <Link className={style.color} to= "/login">Login</Link>
        <button onClick={handleLoginClick}>
          {isAuth ? "Logout" : "Login"}
        </button>
    </div>
  )
}

export default Navbar
