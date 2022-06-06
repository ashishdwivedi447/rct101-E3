import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {useContext} from "react";
import {AuthContext} from "./context/AuthContext";
import { useNavigate } from "react-router-dom";



function App() {
  const {isAuthrozied,login}=useContext(AuthContext)
  const Navigate=useNavigate();
  

  if(isAuthrozied){
Navigate("/Home")
  }

  
  return (
    <div className="App">
      
       
        <Home/>
        <Login/>
      
    </div>
  );
}

export default App;
