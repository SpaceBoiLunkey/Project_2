import React from 'react';
import { Link } from 'react-router-dom';
import background from '../img/stuck.png';
import Fader from './Fader';

export default function ChapterEleven() {
  return (
    <form className="flex justify-content max-w-xs mx-auto mt-5">
      <div className="">
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
            You decide that going with the lady is probably the safest option,
            considering that you could die pretty easily fighting the zombies
            head-on. She brings you around the barracks of the ship to the
            captain's quarters. Turns out there was a room nearby for the
            captain and his most important crew members for emergency. Once you
            get there, a meeting is being held with everyone to go over the
            details of the emergency. The captain tells you and the rest of the
            crew to follow his directions, and if were all obedient, then maybe
            most of us would make it out of this situation alive.<br></br>
            After a few days of surviving in this small space with everyone,
            you're starting to get tired of them. There's a person with a weird
            voice, and you don't like it when that other guy chews weirdly.
            You're hoping for something... anything, as an excuse to leave.
            <br></br>
            One day, a man with dark hair and a light-colored mustache shows up
            at your door, asking for you specifically by name. No one has seen
            anyone besides zombies at the door for days, and according to the
            captain, no one has left the ship since the outbreak began, but
            something about this man seems familiar, yet peculiar... you are at
            least entertained by what he has to say.<br></br>
            "If you want any chance of survival, you'll come with me," he tells
            you.<br></br>
            "How do you even know me?" you ask.<br></br>
            "Oh trust me, we go way back!" he says, winking. "Come with me and
            you'll survive, This is your last chance," he whispers, so that only
            you can hear.<br></br>
            You look back at the captain and the rest of the crew. They all give
            you disapproving looks. Do you...
          </h4>
          <div className="container">
            <Link
              to="/ChapterSixteen"
              type="submit"
              className="btn btn-success btn-lg btn-block mt-5"
            >
              Stay with the crew?
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link
              to="/ChapterSeventeen"
              type="submit"
              className="btn btn-success btn-lg btn-block mt-5"
            >
              Escape with mustache guy?
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
