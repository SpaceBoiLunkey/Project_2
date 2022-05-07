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
             {/* 


          <br>ADD TO GAME START PAGE</br>
            <h3>Playing the Game</h3>
           <p>Playing the game requires internet and the abilty to read. You must also be aware this game is for mature audience and not for the feint hearted.
           Please rememnber to keep all hands and feet inside at all times as you could be eatin by a Zombie. Thanks again for flying 
           Alterra the only inter-galatic space agency this side of the Milky Way.</p> <p>If you are having technical issue please click the link 
             below.</p> <div className="text-start"><Link to="/Support" type="submit" className="">Get help</Link></div>
          </ColumnTwo>
        </RowTwo> 
    </BoxTwo> */}

         {/*<Link
          to="/ChapterOne"
          type="submit"
          className="btn btn-warning btn-lg btn-block "
        >
          Continue Game
  </Link>*/}
        <div className="bg rounded" style={{ backgroundImage: `url(${background})` }}>
          <div className="flex justify-content max-w-xs mx-auto mt-5"></div>
        </div>
      </div>
    </div>
  );
}

export default Start;
