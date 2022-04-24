import React from 'react';
import { Link } from "react-router-dom";



export default function Login() {
  
  
        return (
            <form  className="flex justify-content max-w-xs mx-auto mt-5" >
                
                 <div className="">
                   <div class="text-center">
                <h1>Zombie Apocolypse</h1>
                <br></br>
                <h4> Account login</h4>
                
                <br></br>
                </div>
                <div className="">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter Email" />
                </div>

                <div className="">
                    <label>Password</label>
                    <input type="password"  className="form-control" placeholder="Enter password" />
                </div>
<br></br>

<Link to="/Start" type="submit" className="btn btn-dark btn-lg btn-block">Login</Link>

                </div>
            </form>
        );
    }

