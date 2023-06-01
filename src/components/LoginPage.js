import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import loginDetails from "./loginDetails.json"


function Login(){
    let navigate=useNavigate();
    const [formData,setFormData]=useState({
     email:"",
     password:""
 })
 
 const {email,password}=formData;
 function handleChange(e){
     e.preventDefault();
     const {name,value}=e.target;
     setFormData({...formData,[name]:value});
     console.log(formData);

 }

    function handleData(e) {
      e.preventDefault();
       navigate("/register",true)
     }
       function handleSubmit(e){
         e.preventDefault();
         if(loginDetails.email===email && loginDetails.password===password)
         {
           navigate("/",true);
           alert("Sign in Successfull");
         }
         else{
           alert("Enter the correct login credentials")
         }
       }

     

    return(

<>
<Nav/>
<div className="login-block">
            <h1 className="login-box">Log in</h1>
            <div className="login">
                
              <input type={"email"} placeholder={"Enter your email"} onChange={handleChange} name="email" value={email}  className={"login-input"}></input>
            <input type={"password"} placeholder={"Enter your password"} onChange={handleChange} name="password" value={password}   className={"login-input"}></input>

            </div>
<p>Don`t have an account?  <a onClick={handleData} className={"login-here"}>Sign Up  </a>here.</p>

             <button onClick={handleSubmit}  className="login-btn"><svg className={"login-icon"} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"/>
  <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
</svg>Login</button>

</div>

</>



    )
}

export default Login;