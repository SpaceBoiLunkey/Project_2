import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { logoutUser } from "../services/index";

const NavigationBar = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutUser());
  };

  const guestLinks = (
    <>
      <div className="mr-auto"></div>
      <Nav className="navbar-right">
        <Link to={"register"} className="nav-link">
          <FontAwesomeIcon icon={faUserPlus} /><h4>Register</h4>
        </Link>
        <Link to={"login"} className="nav-link">
          <FontAwesomeIcon icon={faSignInAlt} /><h4>Login</h4>
        </Link>
      </Nav>
    </>
  );
  const userLinks = (
    <>
      <Nav className="mr-auto font-link">
        <Link to={"Store"} className="nav-link">
        <h4>Store</h4>
        </Link>
        <Link to={"Community"} className="nav-link">
        <h4>Community</h4>
        </Link>
        <Link to={"Support"} className="nav-link">
        <h4>Support</h4>
        </Link>
      </Nav>
      <Nav className="navbar-right">
        <Link to={"Home"} className="nav-link" onClick={logout}>
          <FontAwesomeIcon icon={faSignOutAlt} /><h4>Logout</h4>
        </Link>
      </Nav>
    </>
  );

  return (
    <Navbar className="font-link" bg="dark" variant="dark">
      <Link to={auth.isLoggedIn ? "home" : ""} className="navbar-brand">
        <h4><img
          src="./img/ZA.png"
          width="90"
          height="90"
          alt="brand"
        />{" "}
        Zombie Apocalypse</h4>
      </Link>
      {auth.isLoggedIn ? userLinks : guestLinks}
    </Navbar>
  );
};

export default NavigationBar;
