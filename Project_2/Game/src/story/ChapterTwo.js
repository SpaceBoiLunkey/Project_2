import React from 'react';
import { Link } from "react-router-dom";
import background from "../img/meetingRoom.png";
import Fader from './Fader'

export default function ChapterTwo() {
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
        Getting out of your bed, you decide to answer your pager out of pure curiosity. You hit the button to connect and hear the pre-recorded distress signal.
    "THIS IS AN EMERGENCY. PLEASE LISTEN CAREFULLY. A SECURITY CONTAINMENT BREACH HAS OCCURED WITHIN THE MORGUE. AN INTER-GALACTIC BIOLOGICAL EVENT IS IMINENT. PLEASE REPORT TO YOUR TEAM LEADER IMMEDIATELY."<br></br>
    You're incredibly happy that you decided to get out of bed when you did. An inter-galactic biological event? That doesn't sound very pleasant. You put on your shoes, take your crew ID with you, and grab your bag with all your valueables. You head out the door to meet at the emergency rendezvous point.<br></br>
    Once you arrive, you don't see the rest of your team there waiting like you usually do during safety drills. You decide to wait a few more minutes, but no one arrives. Then, you hear another announcement being played over the ship's intercom. "ATTENTION CREW MEMBERS: AN EMERGENCY HAS BEEN DECLARED. A SECURITY CONTAINMENT BREACH HAS OCCURED WITHIN THE MORGUE. DO NOT REPORT TO YOUR EMERGENCY STATIONS. PLEASE STAY QUARANTINED IN YOUR ROOMS AND WAIT FOR FURTHER INSTRUCTIONS. DO NOT OPEN YOUR DOORS FOR ANYONE BESIDES YOUR TEAM LEADERS. QUARANTINE ALONE AND NOT WITH OTHERS." The message repeated once more before stopping.<br></br>
    You start hearing people begin to peek out of their doors, confused and curious about the recent announcement. At your emergency station, there is a cabinet with a gun for defensive purposes. Whatever is happening, you realize it's pretty serious, and just quarantining in your room might not be enough. You could grab the gun and explore the area of the ship to see what's going on, or you could play it safe and go back to your room to quarantine. Do you...</h4>
        <div class="container">
    
    <Link to="/ChapterFour" type="submit" className="btn btn-success btn-lg btn-block mt-5 mr-1">Go Quarantine?</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/ChapterFive" type="submit" className="btn btn-success btn-lg btn-block mt-5">Grab a gun?</Link>
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