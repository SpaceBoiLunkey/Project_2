import React from 'react';
import { Link } from "react-router-dom";
import background from "../img/zombie.png";
import Fader from './Fader'

export default function ChapterOne() {
   
      
     
  
        return (
            <form  className="flex justify-content max-w-xs mx-auto mt-5" >
                
                 <div className="">
                   <div class="text-center">
                     
                <h1 className="font-link">Zombie Apocolypse</h1>
                 </div>
                
           
<br></br>
<div className="pg"style={{ backgroundImage: `url(${background})` }}>
    </div>
    <div>
        <h4 ><br></br>
The year is 2092. You are employed by Alterra, an inter-galatic space agency based on the planet Earth that is responsible for colonizing space. Your specific position isn't an important one, you're pretty low on the totem pole. You've been part of a crew on a derelict spaceship for a while. Your specific crew is responsible for exploring new areas of space not yet colonized or discovered by Alterra. This means that you regularly encounter alien species and situations the average Earth-dweller aren't used to.
Getting a good night's sleep on a spaceship is difficult, considering the 24 hour Earth day doesn't exist naturally outside of the planet, so you take any and every opportunity to get as much sleep as you can. However, this particular night, something arouses you out of your slumber before you are able to get your full 8 hours. Your emergency pager is going off. Since you are technically not on the clock right now, you are allowed to ignore it. Do you...</h4>
<div class="container">
    
<Link to="/ChapterTwo" type="submit" className="btn btn-success btn-lg btn-block mt-5 mr-1">Answer the pager?</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<Link to="/ChapterThree" type="submit" className="btn btn-success btn-lg btn-block mt-5">Go back to sleep?</Link>
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