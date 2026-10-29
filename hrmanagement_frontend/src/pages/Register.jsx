import {useState} from "react"
import { Await } from "react-router-dom"
function Register()
    {
        let [name,setName]=useState("")
        let [emailid,setEmailid]=useState("")
        let [password,setpassword]=useState("")
        let [Role,setRole]=useState("")


        let handleRegister= async (event)=>
            {
            event.preventDefault()
            let res= await fetch("http://localhost:3000/api/emp/register",
                {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({name,emailid,password,role})
            })
            let data=await res.json()
            if (res){
                console.log("data inserted success");
                console.log(data)
            }else{
                console.log("data inseted failed");
                console.log(data)
            }

        };
        return(
            <div>
             <h1>Register</h1> 
             <form onSubmit={handleRegister}>
                <input type="text"
                onChange={(event)=>setName(event.target.value)}
                value={name}
                placeholder="enter name"></input><br/>
                <input type="email"
                onChange={(event)=>setEmailid(event.target.value)}
                value={emailid}
                placeholder="enter email"></input><br/>
                <input type="password" 
                onChange={(event)=>setPassword(event.target.value)}
                value={password}
                placeholder="enter password"></input><br/>
                <select
                    onChnage={(event)=>setRole(event.target.value)}
                    value={Role}
                >
                    <option value="">choose your role</option>
                    <option value="HR">HR</option>
                    <option value="EMPLOYEE">EMPLOYEE</option>
                </select><br/>
                <button type="submit">Register</button>
              </form> 
            
            </div>
        )
    }
export default Register