import React from 'react';
import './App.scss';
import LoginIntergration from './components/loginAPI/LoginIntergration';
// created state tracker for tracking user login
// received props from login and register component files
function App() {
  return (
    <div className="App">
      <LoginIntergration />
    </div>
  );
}

export default App;
