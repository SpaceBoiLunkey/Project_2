import React, { useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';



export default function Login() {



    const [errorMessages, setErrorMessages] = useState({});
    const navigate = useNavigate();


    const errors = {
        logEmail: "invalid email",
        pass: "invalid password"
      };
    



      const handleSubmit = (event) => {
        event.preventDefault();
        var { logEmail,pass } = document.forms[0];

        //Prevent page reload
    
        // Find user login info
        const baseURL =`http://localhost:3001/userByEmail/${logEmail.value}`;

    
      axios.get(baseURL).then((response) => {
       let userData=response.data[0];
            console.log(userData);

        // Compare user info
        if (userData) {
          if (userData.password !== pass.value) {
            // Invalid password
            setErrorMessages({ name: "pass", message: errors.pass });
          }else{
        }
        }else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
          } 
        }).then(() => {
            navigate("/Start");
          });
      };
    

      const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );




      const renderForm = (
        <>
                <div className="col text-center "  >
                <span class="bg-dark d-inline-block p-5 mr-3 rounded" >
                <div className="">
                    <label><h5>Email</h5></label>
                    <input required type="email" name="logEmail" className="form-control" placeholder="Enter Email"  />
                    {renderErrorMessage("logEmail")}
                </div>
                <br></br>
                <div className="">
                <label><h5>Password</h5></label>
                    <input required type="password" name="pass" className="form-control" placeholder="Enter password"  />
                    {renderErrorMessage("pass")}
                </div>

                <br></br>
                <div >

                <Link to="/Start" type="submit" className="btn btn-success btn-lg btn-block"><h5>Login</h5></Link>
               {/* <button onClick={handleSubmit} className="btn btn-success btn-lg btn-block" type="submit" >Submit</button>*/}
                <div className='mt-3'>
    
<Link to="/UserRegistration" type="submit" className=""><h5>Register</h5></Link>
</div>
                </div>
                </span>
                </div>
                {/* DELETE LATER */}
                {handleSubmit}
        </>
      );

        return (

            <form  className="flex justify-content max-w-xs mx-auto mt-5 "  >
                 <div className="pt-5 mt-5">
                   <div class="text-center">
                <h1 className="font-link ">Zombie Apocalypse</h1>
                <br></br>

                <h3 >Login to Play</h3>
                {renderForm}               
                 <br></br>
                </div>
                <br></br><br></br><br></br>
                
                </div>
            </form>
        );
    }