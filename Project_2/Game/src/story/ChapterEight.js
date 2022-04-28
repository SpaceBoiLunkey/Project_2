import React from 'react';
import { Link } from "react-router-dom";
import background from "../img/zombie.png";
import Fader from './Fader'

export default function ChapterEight() {
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
        It's better to prep and be ready for something rather than be caught by surprise, right? You gather up all your emergency supplies and extra snacks and wait for someone to give you further instructions. Since you were woken up in the middle of the night, you get hungry and decide to eat one of the snacks. You continue waiting for someone to come, but they never do. You stay up all night waiting for news in the morning, but it never comes. You decide to eat another snack bar for breakfast.<br></br>
        The hours turn into days of waiting. You wish you hadn't eaten all your rations so soon, but you were hungry, and there was no way of knowing if help was coming sooner rather than later. The power to your room eventually shuts off, telling you that the workers who are responsible for keeping the power are probably dead. You know your time is coming soon. One day, someone that looks like a crewmate comes and pries open your door.<br></br>
        You're too weak to fight, and your death comes slowly and painfully.<br></br>Ending 2/10</h4>
        <div class="container">
    
    <Link to="/Start" type="submit" className="btn btn-danger btn-lg btn-block mt-5">Try again?</Link>
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