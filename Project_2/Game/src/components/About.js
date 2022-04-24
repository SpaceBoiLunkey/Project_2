import React from "react";
import background from "../img/zombie.png";


function About() {
  return (
    <div className="bg"style={{ backgroundImage: `url(${background})` }}>
  <div className="flex justify-content max-w-xs mx-auto mt-5">
      <h1>Zombie Apocolypse</h1>
      <button className="">Start New Game</button>
      </div>
    </div>
  );
}
//is this button supposed to say "Start New Game"?
export default About