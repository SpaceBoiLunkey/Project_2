import React from 'react'
import { Link } from 'react-router-dom';

export default function navbar() {
  return (
    <div>  <nav className=" navbar navbar-expand-md navbar-dark bg-dark fixed-top font-link">
    <div className="container-fluid ">
      <Link className="navbar-brand" to={"/Login"}>
      <img src="./img/ZA.png" width="90" height="90" alt=""></img>
      </Link>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    
      <div class="collapse navbar-collapse text-start" id="navbarCollapse">
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      
    <li className="nav-item">
            <Link className="nav-link" to={"/Home"}><h4>Home</h4></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/Login"}><h4>Login</h4></Link>
          </li>
       
          <li className="nav-item">
            <Link className="nav-link" to={"/About"}><h4>About</h4></Link>
          </li>
      </ul>
    </div>
    </div>
  </nav>
</div>
  )
}
