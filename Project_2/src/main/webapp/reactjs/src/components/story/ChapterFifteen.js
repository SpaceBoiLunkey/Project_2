import React from 'react';
import { Link } from 'react-router-dom';
import background from '../img/ZombieFood.png';
import Fader from './Fader';

export default function ChapterFifteen() {
  return (
    <form className="flex justify-content max-w-xs mx-auto mt-5">
      <div className="">
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
            You're not opening your door for anyone. You don't even recognize
            this lady. Because of this, however, you end up eventually dying of
            starvation, because you never open the door for anyone ever again...
            not even those zombies that eventually come pry you door open and go
            for your brains. <br></br>Ending 6/10
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
