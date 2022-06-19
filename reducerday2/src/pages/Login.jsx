import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import { LoginApi } from "../store/Auth/authAction";

const Login = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const { isAuth } = useSelector((state) => state.auth);
    const [loginCreds, setLoginCreds] = useState({
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      });


      const hanldeChange = (e) => {
        const { name, value } = e.target;
        setLoginCreds({
          ...loginCreds,
          [name]: value,
        });
      };


      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(LoginApi(loginCreds));
      };



      useEffect(() => {
        console.log(isAuth,"this is ")
        if (isAuth) {
            // <Navigate to="/" />
          navigate( "/todoApp", { replace: true });
        }else{
            navigate( "/login", { replace: true });
        }
      }, [navigate, isAuth]);


  return (
    <div>
    Login
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        maxWidth: "200px",
        gap: "10px",
      }}
    >
      <input
       
        name="email"
        type="email"
        placeholder="Enter Email"
        value={loginCreds.email}
        onChange={hanldeChange}
      />
      <input
       
        name="password"
        type="password"
        placeholder="Enter Password..."
        value={loginCreds.password}
        onChange={hanldeChange}
      />
      <button  type="submit">
        Login
      </button>
    </form>
  </div>
  )
}

export default Login
