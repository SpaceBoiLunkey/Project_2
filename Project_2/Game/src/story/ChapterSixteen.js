import React from 'react';
import { Link } from "react-router-dom";
import background from "../img/starved.png";
import Fader from './Fader'

export default function ChapterSixteen() {
        return (
            <form  className="flex justify-content max-w-xs mx-auto mt-5" >
                 <div className="pt-5">
                        <div class="text-center">   
                            <h1 className="font-link">Zombie Apocalypse</h1>
                        </div>
                      
                        <br></br>
                    <div className="pg"style={{ backgroundImage: `url(${background})` }}>
                </div>
            <div>
        <h4><br></br>
        "No thank you," you tell the funny guy with the mustache. "I'm going to stay with my crew."
        Even though you decided to be loyal to your friends and coworkers, it turns out that the silly little man was your only chance of survival. You along with your crew eventually succumb to starvation after you run out of food. <br></br>Ending 7/10</h4>
        <div class="container">
    
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