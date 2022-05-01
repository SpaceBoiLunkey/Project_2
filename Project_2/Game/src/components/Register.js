import React from 'react'
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <form  className="flex justify-content max-w-xs mx-auto mt-5 "  >
            
    <div className="pt-5 mt-5">
      <div class="text-center">
   <h1 className="font-link ">Zombie Apocalypse</h1>
   <br></br>

   <h3 > Account Register</h3>

   <br></br>
   </div>
   <div className="col text-center "  >
   <span class="bg-dark d-inline-block p-5 mr-3 rounded" >
   <div className="">
       <label><h5>Enter Email</h5></label>
       <input type="email" className="form-control" placeholder="Enter Email" />
   </div>
   <br></br>
   <div className="">
   <label><h5>Create Password</h5></label>
       <input type="password"  className="form-control" placeholder="Enter password" />
   </div>

<br></br>

<Link to="/Login" type="submit" className="btn btn-success btn-lg btn-block"><h5>Submit</h5></Link>
</span>
   </div>
   <br></br><br></br><br></br>
   </div>
</form>
  )
}
