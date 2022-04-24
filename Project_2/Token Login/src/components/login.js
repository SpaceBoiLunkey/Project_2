import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

async function loginUser(credentials) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(

    
    <form onSubmit={handleSubmit}>
               <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="login">ERS</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
   
        <Nav.Link href="login">Employees</Nav.Link>
        <Nav.Link href="admin">Admin</Nav.Link>
    
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


         <br></br>       
    <div className="login-wrapper">
   
    <Card style={{ width: '18rem' }}>
  <Card.Body>
   <h3 class="text-center">Welcome ERS User </h3>
    <Card.Title className="text-center">Please Log in</Card.Title>
    
     <div className="form-group">
       <label>Username</label>
       <input type="text" onChange={e => setUserName(e.target.value)}className="form-control" placeholder="Enter Username" />
   </div> <div className="form-group">
       <label>Password</label>
       <input type="password" onChange={e => setPassword(e.target.value)}  className="form-control" placeholder="Enter password" />
   </div> <br></br>
   <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>


  </Card.Body>
</Card>
 
   </div>
</form>
   
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};