import React, { useState} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
function UserRegistration() {

    // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState();
  

  const errors = {
    email: "this email id is already registered",
  };

  const handleSubmit = (event) => {
    
    //Prevent page reload
    event.preventDefault();

    var { email, firstname,lastname,password } = document.forms[0];

    let userDetails ={
         email: email.value,
        firstname: firstname.value,
        lastname : lastname.value,
        password: password.value

    };
    //TODO -- URL -- http://localhost:3001/registeruser and pass data in request body

    // COULDNT GET THIS TO WORK SO I COMMENTED IT OUT FOR NOW

    axios.get(`http://localhost:3001/userByEmail/${email.value}`).then((response) => {
       let  userData=response.data;
       console.log(userData);
       console.log(userDetails);
       if (userData){
       if(userData.email === email.value){
           setErrorMessages({ name :"email", message: errors.email});
       }
    }
    }).then(() => { axios.post(`http://localhost:3001/registration`,userDetails).then(()=>{
        setIsSubmitted(true);
    })
});
    
  };

  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

    /***/

    const renderForm = (

     
      <div className="col text-center "  >
        <span class="bg-dark d-inline-block p-5 mr-3 rounded" >
          <form onSubmit={handleSubmit}>
             <div className="input-container">
              <label><h5>Email</h5></label>
              <input type="email" name="email" required className="form-control" placeholder="Enter Email" />
              {renderErrorMessage("email")}
            </div>
            
            <div className="input-container">
              <label><h5>First Name</h5></label>
              <input type="text" name="firstname" required className="form-control" placeholder="Enter Fisrt Name"/>
            </div>
            <div className="input-container">
              <label><h5>Last Name</h5></label>
              <input type="text" name="lastname" required className="form-control" placeholder="Enter Last Name"/>
            </div>
            <div className="input-container">
              <label><h5>Password</h5> </label>
              <input type="password" name="password" required className="form-control" placeholder="Enter password"/>
            </div>
            <br></br>
            <button onClick={handleSubmit} className="btn btn-success btn-lg btn-block" type="submit" >Submit</button>
          {/*  <div className="button-container">
              <input class="button" type="submit" />
    </div>*/}
                         <div className='mt-3'>
    
    <Link to="/Login" type="submit" className=""><h5>Login</h5></Link>
    </div>
          </form>
          </span>
        </div>
      );
    return(

      <form  className="flex justify-content max-w-xs mx-auto mt-5 "  >
      <div className="pt-5 mt-5">
        <div class="text-center">
     <h1 className="font-link ">Zombie Apocalypse</h1>
     <br></br>

     <h3 > Account Register</h3>
        {isSubmitted ? 
                     <div>User Registered successfully </div>   
        : renderForm}
    <br></br>
                </div>
                <br></br><br></br><br></br>
                
                </div>
            </form>
    );

}



export default UserRegistration;