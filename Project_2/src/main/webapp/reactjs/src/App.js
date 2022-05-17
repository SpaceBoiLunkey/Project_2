import React from "react";
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
import Support from './components/Support';
import CommentSection from './components/CommunityComponents/CommentSection/CommentSection';
import PopUpForm from './components/CommunityComponents/Form/PopUpForm';
import Community from './components/Community';
import Store from './components/StoreComponents/Store';
import Start from './components/story/Start';
import ChapterOne from './components/story/ChapterOne';
import ChapterTwo from './components/story/ChapterTwo';
import ChapterThree from './components/story/ChapterThree';
import ChapterFour from './components/story/ChapterFour';
import ChapterFive from './components/story/ChapterFive';
import ChapterSix from './components/story/ChapterSix';
import ChapterSeven from './components/story/ChapterSeven';
import ChapterEight from './components/story/ChapterEight';
import ChapterNine from './components/story/ChapterNine';
import ChapterTen from './components/story/ChapterTen';
import ChapterEleven from './components/story/ChapterEleven';
import ChapterTwelve from './components/story/ChapterTwelve';
import ChapterThirteen from './components/story/ChapterThirteen';
import ChapterFourteen from './components/story/ChapterFourteen';
import ChapterFifteen from './components/story/ChapterFifteen';
import ChapterSixteen from './components/story/ChapterSixteen';
import ChapterSeventeen from './components/story/ChapterSeventeen';
import ChapterEighteen from './components/story/ChapterEighteen';
import ChapterNineteen from './components/story/ChapterNineteen';
import Credits from './components/story/Credits';
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
              <Route path="/Store" exact component={Store} />
              <Route path="/Community" exact component={Community} />
              <Route path="/Support" exact component={Support} />
              <Route path="/CommentSection" exact component={CommentSection} />
              <Route path="/PopUpForm" exact component={PopUpForm} />
              <Route path="/Start" exact component={Start} />
              <Route path="/ChapterOne" exact component={ChapterOne} />
              <Route path="/ChapterTwo" exact component={ChapterTwo} />
              <Route path="/ChapterThree" exact component={ChapterThree} />
              <Route path="/ChapterFour" exact component={ChapterFour} />
              <Route path="/ChapterFive" exact component={ChapterFive} />
              <Route path="/ChapterSix" exact component={ChapterSix} />
              <Route path="/ChapterSeven" exact component={ChapterSeven} />
              <Route path="/ChapterEight" exact component={ChapterEight} />
              <Route path="/ChapterNine" exact component={ChapterNine} />
              <Route path="/ChapterTen" exact component={ChapterTen} />
              <Route path="/ChapterEleven" exact component={ChapterEleven} />
              <Route path="/ChapterTwevle" exact component={ChapterTwelve} />
              <Route path="/ChapterThirteen" exact component={ChapterThirteen} />
              <Route path="/ChapterFourteen" exact component={ChapterFourteen} />
              <Route path="/ChapterFifhteen" exact component={ChapterFifteen} />
              <Route path="/ChapterSixteen" exact component={ChapterSixteen} />
              <Route path="/ChapterSeventeen" exact component={ChapterSeventeen} />
              <Route path="/ChapterEighteen" exact component={ChapterEighteen} />
              <Route path="/ChapterNineteen" exact component={ChapterNineteen} />
              <Route path="/Credits" exact component={Credits} />
              <Route
                path="/logout"
                exact
                component={() => (
                  <Login message="User Logged Out Successfully." />
                )}
              />
            </Switch>
          </Col>
        
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
