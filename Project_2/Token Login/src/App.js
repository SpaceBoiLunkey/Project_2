import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Reimbursement from './components/reimbursement';
import Login from './components/login';
import Admin from './components/admin';
import useToken from './components/useToken';

function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
    
      <BrowserRouter>
      
        <Switch>
          <Route path="/reimbursement">
            <Reimbursement />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;