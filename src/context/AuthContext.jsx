import React, { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isAuthorized,setIsAuthorized]=useState(false);

  const login=(username,password)=>{
    if(username && password){
        setIsAuthorized(true);
    }
}
  return <AuthContext.Provider value={{isAuthorized,login}}>{children}</AuthContext.Provider>;
};
