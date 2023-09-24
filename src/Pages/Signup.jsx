import React, { useState } from 'react'




function Signup() {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const userData = JSON.parse(localStorage.getItem('cridential'))||[]
    


    const handlename=(e)=>{
        let value=e.target.value
        setName(value)
    }
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
    if(flag===false){
        let data2={
            name:name,
            email:email,
        password:password  }

        localStorage.setItem('cridential', JSON.stringify(data2));
        userData.push(data2)

    }
}
  return (
    <div>
        <input onChange={handlename} placeholder='Name'/><br/>
        <input onChange={handleEmail} placeholder='Email id'/><br/>
        <input onChange={handlePassword} placeholder='Password'/><br/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Signup