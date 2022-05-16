import React from 'react';
import { Link } from 'react-router-dom';
import background from '../img/gun.png';
import Fader from './Fader';

export default function ChapterFive() {
  return (
    <form className="flex justify-content max-w-xs mx-auto mt-5">
      <div className="pt-5">
        <div className="text-center">
          <h1 className="font-link">Zombie Apocalypse</h1>
        </div>

        <br></br>
        <div
          className="pg rounded"
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <div>
          <h4>
            <br></br>
            You decide to grab the gun and explore this area of the ship. You
            load in the ammo and take an extra pack with you, because you'll
            probably need it. Once you load your gun with ammo, you begin to
            sneak back to the ship.<br></br>
            Throughout this part of the ship, you see nothing out of the
            ordinary, at first. Then you hear screams echoing through the long,
            metal hallways. The screams were human, but whatever was causing
            them clearly wasn't. Holding the gun out in front of you, you
            continue through the hallway. Suddenly, people begin to rush down
            the narrow corridor, screaming to get out of there.<br></br>
            One person rushes past you and sees your gun. "They could use you
            near the sky bridge," he says, never stopping. "There's a hoard of
            zombies quickly overtaking the ship, and we're killing them before
            they can turn anyone else!" he shouts at you, far away now.<br></br>
            "Please, help!" a woman says, rushing up to you. "We're building a
            barricade as a base. There's no way we can fight them all off. But
            we need weapons!" Both people stare at you longingly, knowing that
            you can only make one choice. Do you...
          </h4>
          <div className="container">
            <Link
              to="/ChapterTen"
              type="submit"
              className="btn btn-success btn-lg btn-block mt-5 mr-1"
            >
              Fight 'em off?
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link
              to="/ChapterEleven"
              type="submit"
              className="btn btn-success btn-lg btn-block mt-5"
            >
              Help build the base?
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
