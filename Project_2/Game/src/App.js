import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login/Login';
import LoginPage from './pages/LoginPage';
import { Dashboard } from './pages/Dashboard';
import Store from './components/StoreComponents/Store';
import Credits from './story/Credits';
import Start from './components/Start';
import Support from './components/Support';
import ChapterOne from './story/ChapterOne';
import ChapterTwo from './story/ChapterTwo';
import ChapterThree from './story/ChapterThree';
import ChapterFour from './story/ChapterFour';
import ChapterFive from './story/ChapterFive';
import ChapterSix from './story/ChapterSix';
import ChapterSeven from './story/ChapterSeven';
import ChapterEight from './story/ChapterEight';
import ChapterNine from './story/ChapterNine';
import ChapterTen from './story/ChapterTen';
import ChapterEleven from './story/ChapterEleven';
import ChapterTwelve from './story/ChapterTwelve';
import ChapterThirteen from './story/ChapterThirteen';
import ChapterFourteen from './story/ChapterFourteen';
import ChapterFifteen from './story/ChapterFifteen';
import ChapterSixteen from './story/ChapterSixteen';
import ChapterSeventeen from './story/ChapterSeventeen';
import ChapterEighteen from './story/ChapterEighteen';
import ChapterNineteen from './story/ChapterNineteen';
import UserRegistration from './components/Login/UserRegistration';
import CommentSection from './components/CommunityComponents/CommentSection/CommentSection';
import PopForm from './components/CommunityComponents/Form/PopUpForm';
import Community from './components/Community';

function App() {
  return (
    <Router>
      <br></br>
      <div className="App ">
        <nav className=" navbar navbar-expand-md navbar-dark bg-dark fixed-top font-link">
          <div className="container-fluid ">
            <Link className="navbar-brand" to={'/Home'}>
              <img src="./img/ZA.png" width="90" height="90" alt=""></img>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link className="nav-link" to={'/Store'}>
                    <h4>Store</h4>
                  </Link>
                </li>{' '}
                <li className="nav-item">
                  <Link className="nav-link" to={'/Community'}>
                    <h4>Community</h4>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/Support'}>
                    <h4>Support</h4>
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="collapse navbar-collapse text-start"
              id="navbarCollapse"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link className="nav-link" to={'/Home'}>
                    <h4>Home</h4>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/Login'}>
                    <h4>Login/Play</h4>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route exact path="/LoginPage" element={<LoginPage />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Start" element={<Start />} />
          <Route path="/Store" element={<Store />} />
          {/* <Route path="/Cart" element={<Cart/>} />
            <Route path="/Register" element={<Register/>} /> */}
          <Route path="/Support" element={<Support />} />

          <Route path="/Credits" element={<Credits />} />
          <Route path="/ChapterOne" element={<ChapterOne />} />
          <Route path="/ChapterTwo" element={<ChapterTwo />} />
          <Route path="/ChapterThree" element={<ChapterThree />} />
          <Route path="/ChapterFour" element={<ChapterFour />} />
          <Route path="/ChapterFive" element={<ChapterFive />} />
          <Route path="/ChapterSix" element={<ChapterSix />} />
          <Route path="/ChapterSeven" element={<ChapterSeven />} />
          <Route path="/ChapterEight" element={<ChapterEight />} />
          <Route path="/ChapterNine" element={<ChapterNine />} />
          <Route path="/ChapterTen" element={<ChapterTen />} />
          <Route path="/ChapterEleven" element={<ChapterEleven />} />
          <Route path="/ChapterTwelve" element={<ChapterTwelve />} />
          <Route path="/ChapterThirteen" element={<ChapterThirteen />} />
          <Route path="/ChapterFourteen" element={<ChapterFourteen />} />
          <Route path="/ChapterFifteen" element={<ChapterFifteen />} />
          <Route path="/ChapterSixteen" element={<ChapterSixteen />} />
          <Route path="/ChapterSeventeen" element={<ChapterSeventeen />} />
          <Route path="/ChapterEighteen" element={<ChapterEighteen />} />
          <Route path="/ChapterNineteen" element={<ChapterNineteen />} />
          <Route path="/UserRegistration" element={<UserRegistration />} />
          <Route path="/CommentSection" element={<CommentSection />} />
          <Route path="/PopForm" element={<PopForm />} />
          <Route path="/Community" element={<Community />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
