import React from 'react';

import 'bootstrap/dist/js/bootstrap.bundle.min';

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import Login from "./components/Login";
import About from './components/About';
import Start from './components/Start';
import UserRegistration from './components/UserRegistration';


function App() {
 
  

  return (<BrowserRouter>
    <div className="App ">
      <nav className=" navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/Login">ZA</Link>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        
          <div class="collapse navbar-collapse text-start" id="navbarCollapse">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          
        <li className="nav-item">
                <Link className="nav-link" to="/Login">Home</Link>
              </li>
           
              <li className="nav-item">
                <Link className="nav-link" to="/Start">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/UserRegistration">User Registration</Link>
              </li>

          </ul>
        </div>
        </div>
      </nav>

          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Start" element={<Start/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/UserRegistration" element={<UserRegistration/>} />

       </Routes>
      
    </div>
   </BrowserRouter>
  );
  
}

export default App;