import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const {login}=useContext(AuthContext)
  return (
    <div style={{display:"flex",flexDirection:"column",maxWidth:"200px",gap:"20px",margin:'auto',marginTop:"30px"}}>
      <input data-cy="login-email"placeholder="Enter Email.." />
      <input data-cy="login-password" placeholder="Enter Password"/>
      <button onClick={login} data-cy="login-submit">Login</button>
    </div>
  );
};

export default Login;
