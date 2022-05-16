import React from "react";
import { useSelector } from "react-redux";
import authToken from "../utils/authToken";
import { Alert } from "react-bootstrap";
import { Head, BlackBar } from '../components/HomePageComponents/HomeStyles';
import TopComponent from '../components/HomePageComponents/TopSection';
import HomeBoxes from './HomePageComponents/BottomSection';
import '../Page.css';

const Home = () => {
  if (localStorage.jwtToken) {
    authToken(localStorage.jwtToken);
  }

  const auth = useSelector((state) => state.auth);

  return (
    <div>
    <Alert>
      Welcome {auth.username}
    </Alert>
    <form className="flex justify-content max-w-xs mx-auto mt-5 ">
    <h1 className="pt-5 text-center font-link">Zombie Apocalypse</h1>
    <div>
      <TopComponent />
    </div>
    <BlackBar>
      <Head>
        <b>EXPLORE OUR SHIP!</b>
      </Head>
    </BlackBar>
    <div>
      <HomeBoxes />
    </div>
  </form>
  </div>
  );
};

export default Home;
