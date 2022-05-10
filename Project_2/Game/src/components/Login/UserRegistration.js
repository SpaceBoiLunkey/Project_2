import React, { useState, useNavigate } from 'react';
import { Link } from 'react-router-dom';
import AccountService from '../../service/AccountService';
function UserRegistration() {
  const [account, setAccount] = useState({
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setAccount({ ...account, [e.target.name]: value });
  };

  const saveAccount = (e) => {
    e.preventDefault();
    AccountService.saveAccount(account)
      .then((response) => {
        console.log(response);
        navigate('/accountList');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setAccount({
      id: '',
      email: '',
      firstName: '',
      lastName: '',
      password: '',
    });
  };

  const renderForm = (
    <div className="col text-center ">
      <span class="bg-dark d-inline-block p-5 mr-3 rounded">
        <form onSubmit={handleChange}>
          <div className="input-container">
            <label>
              <h5>Email</h5>
            </label>
            <input
              type="email"
              name="email"
              value={account.email}
              onChange={(e) => handleChange(e)}
              className="form-control"
              placeholder="email"
            />
          </div>
          <div className="input-container">
            <label>
              <h5>First Name</h5>
            </label>
            <input
              type="text"
              name="firstName"
              value={account.firstName}
              onChange={(e) => handleChange(e)}
              className="form-control"
              placeholder="first name"
            />
          </div>
          <div className="input-container">
            <label>
              <h5>Last Name</h5>
            </label>
            <input
              type="text"
              name="lastName"
              value={account.lastName}
              onChange={(e) => handleChange(e)}
              className="form-control"
              placeholder="last name"
            />
          </div>
          <div className="input-container">
            <label>
              <h5>Password</h5>{' '}
            </label>
            <input
              type="text"
              name="password"
              value={account.password}
              onChange={(e) => handleChange(e)}
              className="form-control"
              placeholder="password"
            />
          </div>
          <br></br>
          <button
            onClick={saveAccount}
            className="btn btn-success btn-lg btn-block"
          >
            Submit
          </button>
          <button onClick={reset} className="btn btn-success btn-lg btn-block">
            Clear
          </button>
          {/*  <div className="button-container">
              <input class="button" type="submit" />
    </div>*/}
          <div className="mt-3">
            <Link to="/Login" type="submit" className="">
              <h5>Login</h5>
            </Link>
          </div>
        </form>
      </span>
    </div>
  );
  return (
    <form className="flex justify-content max-w-xs mx-auto mt-5 ">
      <div className="pt-5 mt-5">
        <div class="text-center">
          <h1 className="font-link ">Zombie Apocalypse</h1>
          <br></br>

          <h3> Account Register</h3>
          {
            /*isSubmitted ? <div>User Registered successfully </div> : */ renderForm
          }
          <br></br>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </form>
  );
  /* <Box>   
         <RowTwo>        
          <ColumnTwo>
          <br></br>
            <h3>Create an Account</h3>
           <p> Online gaming refers to playing games over the internet that incorporate virtual worlds consisting of numerous players simultaneously. Online games are widely popular amongst children and young adults who use mobile devices or games consoles to play games. These games facilitate gamers in playing against or with other players through a computer network, mainly over the internet.</p>

<p>Online gaming caters to a diverse range of interests such as sports games, action games, card games, mission-based games, quiz games, quests, and more. Completing challenges and connecting with online players thrill players. Moreover, the introduction of fun elements such as leaderboards and tournaments satiate the adrenaline rush that most players seek while playing online games. typesetting, remaining essentially unchanged.</p> <p>Playing CYOA ZA is easy just hit the button to register and your seconds away from fun!</p><div className="text-end"><Link to="/UserRegistration" type="submit" className="btn btn-secondary btn-lg "><h5>Register</h5></Link></div>
            </ColumnTwo>
            </RowTwo>
            </Box>
 */
}

export default UserRegistration;
