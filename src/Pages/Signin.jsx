import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';






function Signin() {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const userData = JSON.parse(localStorage.getItem('cridential'));
    const token=localStorage.getItem('Token')
    const navigate=useNavigate()
    
    




    const handleEmail=(e)=>{
        let value=e.target.value
        setEmail(value)
    }
    const handlePassword=(e)=>{
        let value=e.target.value
        setPassword(value)
    }

    const handleSubmit=()=>{
        let flag=false
        for(let i=0;i<userData.length;i++){
            if(userData[i].email===email&&userData[i].password===password){
                flag=true
            }
        }
        if(flag===true){
            let save="abc"
            localStorage.setItem('Token', JSON.stringify(save));
            navigate("/home")
        }
    }





  return (
    <div>
        <input onChange={handleEmail} placeholder='Email id'/>
        <input onChange={handlePassword} placeholder='Password'/>
        <button onClick={handleSubmit}>Submit</button>
        </div>
  )
}

export default Signin