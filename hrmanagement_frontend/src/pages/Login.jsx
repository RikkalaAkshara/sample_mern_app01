import { useState } from 'react';
function Login()
    {
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let handleLogin=(event)=>{
        event.preventDefault();
        console.log(email);
        console.log(password);
        
    }
    return(
        <div>
         <form onSubmit={handleLogin}>
    <input type="email" value={email} 
      onChange={(event)=>setEmail(event.target.value)}
    placeholder="enter your emailid"></input>
    <input type="password" value={password} 
    onChange={(event)=>setPassword(event.target.value)}
    placeholder="enter your password"></input>
    <button type ="sumbit">Login</button>
         </form>
        </div>
    )
}
export default Login