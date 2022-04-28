import React from 'react';
import { Link } from "react-router-dom";
import background from "../img/zombie.png";
import Fader from './Fader'

export default function ChapterNineteen() {
        return (
            <form  className="flex justify-content max-w-xs mx-auto mt-5" >
                 <div className="pt-5">
                        <div class="text-center">   
                            <h1 className="font-link">Zombie Apocolypse</h1>
                        </div>
                      
                        <br></br>
                    <div className="pg"style={{ backgroundImage: `url(${background})` }}>
                </div>
            <div>
        <h4><br></br>
         <br></br>Ending 8/10</h4>
        <div class="container">
        You stop to wait for them, because you're not heartless. They somehow make it past the zombies without any incident, and the three of you escape without incident. After a few days of waiting for the pod to find something else other than deep space, you encounter an Alterra rendeveaux point. Once you dock with the space station, the crew sterilize you, feed you a great meal, and prepare to send the three of you back to Earth as heroes. <br></br>Ending 9/10
        <Link to="/Start" type="submit" className="btn btn-success btn-lg btn-block mt-5">Try again?</Link>
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