import React from 'react';
import { Head, BlackBar } from '../components/HomePageComponents/HomeStyles';
import TopComponent from '../components/HomePageComponents/TopSection';
import HomeBoxes from './HomePageComponents/BottomSection';

function Home() {
  return (
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
  );
}

export default Home;
