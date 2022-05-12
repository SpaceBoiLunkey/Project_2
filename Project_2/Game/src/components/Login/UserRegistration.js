import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AccountService from '../../service/AccountService';

const UserRegistration = () => {
  const [account, setAccount] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setAccount({ ...account, [e.target.name]: value });
  };

  const saveAccount = () => {
    AccountService.saveAccount(account)
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
      })
      .catch((error) => {
        console.log('failed to create new account');
      });
  };

  return (
    <form className="flex justify-content max-w-xs mx-auto mt-5 ">
      <div className="pt-5 mt-5">
        <div class="text-center">
          <h1 className="font-link ">Zombie Apocalypse</h1>
          <br></br>

          <h3> Account Register</h3>

          <div className="col text-center ">
            <span class="bg-dark d-inline-block p-5 mr-3 rounded">
              <form>
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
                  ></input>
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
                  ></input>
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
                  ></input>
                </div>
                <div className="input-container">
                  <label>
                    <h5>Password</h5>
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={account.password}
                    onChange={(e) => handleChange(e)}
                    className="form-control"
                  ></input>
                </div>
                <br />
                <button
                  onClick={saveAccount}
                  className="btn btn-success btn-lg btn-block"
                  type="submit"
                >
                  Submit
                </button>
                <div className="mt-3">
                  <Link to="/Login" type="submit" className="">
                    <h5>Login</h5>
                  </Link>
                </div>
              </form>
            </span>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </form>
  );
};

export default UserRegistration;
