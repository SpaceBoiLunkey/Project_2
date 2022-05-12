import React from 'react';
import { Link } from 'react-router-dom';
import background from '../img/door.png';
import Fader from './Fader';

export default function ChapterThree() {
  return (
    <form className="flex justify-content max-w-xs mx-auto mt-5">
      <div className="pt-5">
        <div class="text-center">
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
            You're not even on the clock right now, so you're definitely within
            your rights to go back to sleep. Drifting off into sleepy bliss, you
            are suddenly awoken a few minutes later by a knock at your door. You
            reluctantly get out of bed to answer it, considering grunt crew
            members like you weren't bothered for anything if it wasn't serious.
            You look through the peep hole on your door. You're met with an eye
            staring right back at you. "Hello?" the person says. "Please open
            the door. Everyone is in danger!" Something isn't adding up. Unless
            this threat is actually credible, your room will be more than safe
            from any random attack or threat. You could go back to sleep, and
            accept your fate, or open the door to see what's up.
          </h4>
          <div class="container">
            <Link
              to="/ChapterSix"
              type="submit"
              className="btn btn-success btn-lg btn-block mt-5 mr-1"
            >
              See what's up?
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link
              to="/ChapterSeven"
              type="submit"
              className="btn btn-success btn-lg btn-block mt-5"
            >
              Accept your fate?
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
