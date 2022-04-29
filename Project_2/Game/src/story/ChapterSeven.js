import React from 'react';
import { Link } from "react-router-dom";
import background from "../img/ZombieFood.png";
import Fader from './Fader'

export default function ChapterSeven() {
        return (
            <form  className="flex justify-content max-w-xs mx-auto mt-5" >
                 <div className="pt-5">
                        <div class="text-center">   
                            <h1 className="font-link">Zombie Apocalypse</h1>
                        </div>
                      
                        <br></br>
                    <div className="pg rounded"style={{ backgroundImage: `url(${background})` }}>
                </div>
            <div>
        <h4><br></br>
        Really? I mean... that person was basically your only chance to get saved before zombines take over the whole ship. Oh yeah, did we mention that's what this story was about? Yeah you're in the middle of a zombie apocalypse. So you can guess just about how well that ended for you while you sleep!<br></br>Ending 1/10</h4>
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