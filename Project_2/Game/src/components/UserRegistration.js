import React, { useState} from "react";
import { Link} from "react-router-dom";


import axios from 'axios';

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

     
        <div className="containermed" id="container1">
          <form onSubmit={handleSubmit}>
             <div className="input-container">
              <label>Email </label>
              <input type="email" name="email" required />
              {renderErrorMessage("email")}
            </div>
            <div className="input-container">
              <label>First Name </label>
              <input type="text" name="firstname" required />
            </div>
            <div className="input-container">
              <label>Last Name </label>
              <input type="text" name="lastname" required />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="password" required />
            </div>
            <br></br>
            <div className="button-container">
              <input class="button" type="submit" />
            </div>
            <div>
         
            </div>
          </form>
        </div>
      );
    return(

    <div className="app">
      <div className="login-form">
     
        <div className="title">User Registration</div>
        <nav className="navigate">  
           <Link to="/Login"> Home</Link>

           
       </nav>
        {isSubmitted ? 
                     <div>User Registered successfully </div>   
        : renderForm}
      </div>
    </div>
    );

}



export default UserRegistration;