import { useContext, useState } from "react";
import UserContext from "../utilities/UserContext";



const User = ()=> {

const {loggedInUser,setUserName} = useContext(UserContext);


return(
<div className="user-container">
<div className="login-box">
<h1>Login</h1>
{/* <label>Username</label> */}
<br></br>
<input  type="text"
            placeholder="Username"
            value={loggedInUser}
            onChange={(event)=> setUserName(event.target.value)}/>
<br></br>
{/* <label>Password</label>
<br></br>
<input placeholder="password" type="password"/> */}
<br></br>
<button><i class="ri-user-3-fill">Continue with Username</i></button>
</div>
</div> 
)
};

export default User;

{/* 
      <input className="input-bar border border-black p-4 bg-black"
            type="text"
            placeholder="Enter your Username here"
            value={loggedInUser}
            onChange={(event)=> setUserName(event.target.value)}
          /> */}
