import React from 'react';
import { Link } from "react-router-dom";
import background from "../img/zombie.png";
import Fader from './Fader'

export default function ChapterThirteen() {
        return (
            <form  className="flex justify-content max-w-xs mx-auto mt-5" >
                 <div className="">
                        <div class="text-center">   
                            <h1 className="font-link">Zombie Apocalypse</h1>
                        </div>
                      
                        <br></br>
                    <div className="pg"style={{ backgroundImage: `url(${background})` }}>
                </div>
            <div>
        <h4><br></br>
        You decide to let your crewmate try and get back to the escape pod in time. You see him try his best to sneak past the zombies, but no amount of distraction or speed is going to save them from the zombies. You realize that you could probably exit the pod to save them at this point, although you would only be able to save one of them with the amount of time you have. Your other option is to jettison the pod and escape with your safety. Do you...
        </h4>
        <div class="container">
    
    <Link to="/ChapterEighteen" type="submit" className="btn btn-success btn-lg btn-block mt-5">Launch the pod?</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/ChapterNineteen" type="submit" className="btn btn-success btn-lg btn-block mt-5">Stop to save them?</Link>
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