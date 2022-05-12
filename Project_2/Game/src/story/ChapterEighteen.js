import React from 'react';
import { Link } from 'react-router-dom';
import background from '../img/ship.jpg';
import Fader from './Fader';

export default function ChapterEighteen() {
  return (
    <form className="flex justify-content max-w-xs mx-auto mt-5">
      <div className="pt-5">
        <div className="text-center">
          <h1 className="font-link">Zombie Apocalypse</h1>
        </div>

        <br></br>
        <div
          className="pg"
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <div>
          <h4>
            <br></br>
            There's no way that they could have made it to the pod in time
            anyway to escape, so you selfishly take their place and decide to
            jettison the pod without them after all. After a while, your escape
            pod finds another alien ship to dock with, and the aliens welcome
            you on board as a refugee. You live out the rest of your life on
            this ship, far away from everyone and everything you've ever known
            and loved. <br></br>Ending 8/10
          </h4>
          <div className="container">
            <Link
              to="/Start"
              type="submit"
              className="btn btn-warning btn-lg btn-block mt-5"
            >
              Try again?
            </Link>
            <>
              <Fader></Fader>
            </>
            <br></br>
          </div>
        </div>
      </div>
    </form>
  );
}
