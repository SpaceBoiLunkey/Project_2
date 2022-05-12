import React from 'react';
import { Link } from 'react-router-dom';
import background from '../img/win.jpg';
import Fader from './Fader';

export default function ChapterSeventeen() {
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
            "I'll come with you," you tell the mustached man. Your crew protests
            behind you, and almost doesn't let you leave. However, the captain
            motions for the guard at the door to let you aside. Surprisingly
            enough, this mustached man had his own ship, and you and this man
            use it to escape the zombified space ship. The man takes you to the
            Universal Stability Agency, a space agency that makes sure the
            universe doesn't go into complete chaos. After the agency detoxifies
            you and decides you are fit to go home, you are sent back to Earth
            where you live the rest of your days far away from the threat of
            being eaten by a zombie. <br></br>Ending 10/10
          </h4>
          <div className="container">
            <Link
              to="/Start"
              type="submit"
              className="btn btn-success btn-lg btn-block mt-5"
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
