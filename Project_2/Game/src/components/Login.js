import React from 'react';
import { Link } from "react-router-dom";



export default function Login() {
  
  
        return (
            
            <form  className="flex justify-content max-w-xs mx-auto mt-5" >
               <br></br>
                 <div className="pt-5">
                   <div class="text-center">
                <h1 className="font-link">Zombie Apocolypse</h1>
                <br></br>
                <h3 > Account login</h3>
                
                <br></br>
                </div>
                <div className="col text-center">
                <span class="bg-light d-inline-block p-5 mr-3">
                <div className="">
                    <label><h5>Email</h5></label>
                    <input type="email" className="form-control" placeholder="Enter Email" />
                </div>
                <br></br>
                <div className="">
                    <label>Password</label>
                    <input type="password"  className="form-control" placeholder="Enter password" />
                </div>
                
<br></br>

<Link to="/Start" type="submit" className="btn btn-dark btn-lg btn-block">Login</Link>
</span>
                </div>
                </div>
            </form>
        );
    }

