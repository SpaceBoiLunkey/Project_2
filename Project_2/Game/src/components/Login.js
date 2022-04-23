import React, { useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';



export default function Login() {




    const [errorMessages, setErrorMessages] = useState({});
    const navigate = useNavigate();


    const errors = {
        uname: "invalid username",
        pass: "invalid password"
      };
    



      const handleSubmit = (event) => {
    
        //Prevent page reload
        event.preventDefault();
    
        var { username, password } = document.forms[0];
        // Find user login info
      
    
      axios.get(`http://localhost:3001/login/${username.value}`).then((response) => {
           let userData=response.data[0];
            //console.log(userData);
        // Compare user info
        if (userData) {
          if (userData.password !== password.value) {
            // Invalid password
            setErrorMessages({ name: "password", message: errors.pass });
          }
        } else {
          // Username not found
          setErrorMessages({ name: "username", message: errors.uname });
        }
        }).then((res) => {
            console.log(res);
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
                    <input type="username" name="username" className="form-control" placeholder="Enter Username" />
                    {renderErrorMessage("uname")}
                </div>

                <div className="">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter Password" />
                    {renderErrorMessage("pass")}
                </div>
<br></br>

        <div className="button-container">
          <button onClick={handleSubmit} class="button" type="submit" >Submit</button>
        </div>

                </div>
            </form>
        );
    }

