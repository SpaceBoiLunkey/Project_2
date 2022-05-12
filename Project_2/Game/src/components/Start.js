import React from 'react';
import background from '../img/zombie.png';
import { Link } from 'react-router-dom';
import '../Page.css';

function Start() {
  return (
    <div className="col text-center pt-5">
      <h1 className="font-link">Zombie Apocalypse</h1>
      <br></br>
      <div class="container">
        <Link
          to="/ChapterOne"
          type="submit"
          className="btn btn-warning btn-lg btn-block "
        >
          Start New Game
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link
          to="/Credits"
          type="submit"
          className="btn btn-warning btn-lg btn-block "
        >
          Credits
        </Link>
        <div
          className="bg rounded"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="flex justify-content max-w-xs mx-auto mt-5"></div>
        </div>
      </div>
    </div>
  );
}

export default Start;
