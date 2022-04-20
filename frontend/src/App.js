import React from 'react';
import HomePage from './pages/HomePage';
import './styles/main.css';

function App() {
  return (
    <React.StrictMode>
      <HomePage />
    </React.StrictMode>
  );
}

export default App;

/*

This is a template for when when install the routes dependencies later
The route dependency is a better way to navigate around the website
when clicking certain links, hfres, or any other reference to another
location within the app. also need axios dependency later from my
understanding.

Anyways, this will be the format

  -Eric Vara

*/

/* 
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '.pages/HomePage'
import VictoryPage from '.pages/VictoryPage'
import LoginPage from '.pages/LoginPage'
import ScenePage from '.pages/ScenePage'
import CharacterPage from '.pages/CharacterPage'
import DefeatedPage from '.pages/DefeatedPage'
import axios from 'axios';
import './style/main.css';

 */

/* 
function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path='/'       element={<Home />}/>
        <Route path='/VictoryPage'  element={<VictoryPage />}/>
        <Route path='/LoginPage'  element={<LoginPage />}/>
        <Route path='/ScenePage' element={<ScenePage/>}/>
        <Route path='/CharacterPage'  element={<CharacterPage />}/> 
        <Route path='/DefeatedPage'  element={<DefeatedPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

 */
