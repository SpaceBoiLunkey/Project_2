import React from 'react';
import { Link } from "react-router-dom";
import background from "../img/zombie.png";
import Fader from './Fader'

export default function ChapterFour() {
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
        <h4><br></br>
        Whatever is happening must be pretty serious, so you decide to play it safe and go back to your room to quarantine. Whatever is going around must be contagious if they want all crew members to be separated from each other. Your mind begins to wonder, and you remember your training you had to do before leaving Earth for the first time. In emergencies, the people to survive the longest were the ones that were prepared beforehand for their own survival. Each crew member had a cabinet of emergency items set aside for something just like this, and depending on each situation, crew members were supposed to prepare differently with these items. If the emergency required an evacuation, crew members were instructed to pack necessary items like food and survival gear, maybe even eat a snack for energy. If the emergency required a true quarantine, crew members were instructed to rest and conserve energy/supplies. Overall, it looks like your two choices are between prepping for an escape pod by eating and gathering supplies or going back to bed to conserve energy. Do you...</h4>
        <div class="container">
    
    <Link to="/ChapterEight" type="submit" className="btn btn-success btn-lg btn-block mt-5 mr-1">Prep for evacuation?</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/ChapterNine" type="submit" className="btn btn-success btn-lg btn-block mt-5">Conserve your energy?</Link>
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