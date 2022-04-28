import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import About from './components/About';
import Start from './components/Start';
import ChapterOne from './story/ChapterOne';
import ChapterTwo from './story/ChapterTwo';
import ChapterThree from './story/ChapterThree';
import ChapterFour from './story/ChapterFour';
import ChapterFive from './story/ChapterFive';
import ChapterSix from './story/ChapterSix';
import ChapterSeven from './story/ChapterSeven';
import ChapterEight from './story/ChapterEight';
import ChapterNine from './story/ChapterNine';


function App() {
 
  

  return (<Router>
    <br></br>
    <div className="App ">
      <nav className=" navbar navbar-expand-md navbar-dark bg-dark fixed-top font-link">
        <div className="container-fluid ">
          <Link className="navbar-brand" to={"/Login"}>
          <img src="./img/ZA.png" width="90" height="90" alt=""></img>
          </Link>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        
          <div class="collapse navbar-collapse text-start" id="navbarCollapse">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          
        <li className="nav-item">
                <Link className="nav-link" to={"/Login"}><h4>Home</h4></Link>
              </li>
           
              <li className="nav-item">
                <Link className="nav-link" to={"/Start"}><h4>About</h4></Link>
              </li>
          </ul>
        </div>
        </div>
      </nav>

    
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/Login" component={Login} />
            <Route path="/Start" component={Start} />
            <Route path="/About" component={About} />
            <Route path="/ChapterOne" component={ChapterOne} />
            <Route path="/ChapterTwo" component={ChapterTwo} />
            <Route path="/ChapterThree" component={ChapterThree} />
            <Route path="/ChapterFour" component={ChapterFour} />
            <Route path="/ChapterFive" component={ChapterFive} />
            <Route path="/ChapterSix" component={ChapterSix} />
            <Route path="/ChapterSeven" component={ChapterSeven} />
            <Route path="/ChapterEight" component={ChapterEight} />
            <Route path="/ChapterNine" component={ChapterNine} />
       </Switch>
      
    </div>
   </Router>
  );
  
}

export default App;
