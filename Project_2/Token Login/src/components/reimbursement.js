import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

export default function Reimbursement() {
  return(

    
    <form>
                  <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="login">ERS</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
   
        <Nav.Link href="login">Employees</Nav.Link>
        <Nav.Link href="reimbursement">Admin</Nav.Link>
    
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<br>
</br>
<div className="login-wrapper">
   
    <Card style={{ width: '18rem' }}>
  <Card.Body>
                <h4>Please Select Type and Amount</h4>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Food</label></div>
                        <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Travel</label></div>
                        <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Lodging</label></div>
                        <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Other</label>
                    </div>
                </div>
                <div className="form-group">
                    <label>Amount Request for Reimbursement $</label>
                    <input type="amount" className="form-control" placeholder="Enter Amount" />
                </div>
                <br></br>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Submit Request</button>
                <p className="forgot-password text-start">
                    Past Reimbursement status <a href="somepage">here</a>
                </p>
                </Card.Body>
</Card>
</div>
            </form>
  );
}
