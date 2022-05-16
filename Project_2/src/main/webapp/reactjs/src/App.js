import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
///import Welcome from "./components/Welcome";
import Book from "./components/Book/Book";
import BookList from "./components/Book/BookList";
import UserList from "./components/User/UserList";
import Register from "./components/User/Register";
import Login from "./components/User/Login";
import Footer from "./components/Footer";
import Home from "./components/Home";
///import Support from './components/Support';
//import CommentSection from './components/CommunityComponents/CommentSection/CommentSection';
//import PopForm from './components/CommunityComponents/Form/PopUpForm';
import Community from './components/Community';
import Store from './components/StoreComponents/Store';
import Start from './components/Start';
/* import ChapterOne from './story/ChapterOne';
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
import Credits from './story/Credits'; */
const App = () => {
  window.onbeforeunload = (event) => {
    const e = event || window.event;
    e.preventDefault();
    if (e) {
      e.returnValue = "";
    }
    return "";
  };

  return (
    <Router>
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={12} className={"margin-top"}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Home" exact component={Home} />
              <Route path="/add" exact component={Book} />
              <Route path="/edit/:id" exact component={Book} />
              <Route path="/list" exact component={BookList} />
              <Route path="/users" exact component={UserList} />
              <Route path="/register" exact component={Register} />
              <Route path="/login" exact component={Login} />
              {/* <Route path="/Support" exact component={Support} /> */}
              <Route path="/Store" exact component={Store} />
              <Route path="/Community" exact component={Community} />
              <Route path="/Start" exact component={Start} />
              
              <Route
                path="/logout"
                exact
                component={() => (
                  <Login message="User Logged Out Successfully." />
                )}
              />
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
