import React, { useState} from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';



function FakeLogin() {




    const [errorMessages, setErrorMessages] = useState({});
    const navigate = useNavigate();


    const errors = {
        email: "invalid email",
        password: "invalid password"
      };
    



      const handleSubmit = (event) => {
    
        //Prevent page reload
        event.preventDefault();
    
        var { email, password } = document.forms[0];
        // Find user login info
      
    
      axios.get(`http://localhost:3001/login/${email.value}`).then((response) => {
           let userData=response.data[0];
            console.log(userData);
        // Compare user info
        if (userData) {
          if (userData.password !== password.value) {
            // Invalid password
            setErrorMessages({ name: "password", message: errors.password });
          }
        } else {
          // Username not found
          setErrorMessages({ name: "email", message: errors.email });
        }
        }).then(() => {
            navigate("/Start");
          });
      };
    

      const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );
  
  







  
  
        return (
            <form   className="flex justify-content max-w-xs mx-auto mt-5" >
                
                 <div className="">
                   <div class="text-center">
                <h1>Zombie Apocolypse</h1>
                <br></br>
                <h4> Account login</h4>
                
                <br></br>
                </div>
                
                <div className="">
                    <label>Username</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter Username" />
                    {renderErrorMessage("email")}
                </div>

                <div className="">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter Password" />
                    {renderErrorMessage("password")}
                </div>
<br></br>

        <div className="button-container">
          <button onClick={handleSubmit} class="button" type="submit" >Submit</button>
        </div>

                </div>
            </form>
        );
    };

    export default FakeLogin;