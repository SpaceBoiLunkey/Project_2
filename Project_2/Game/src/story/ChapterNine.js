import React from 'react';
import { Link } from "react-router-dom";
import background from "../img/zombie.png";
import Fader from './Fader'

export default function ChapterNine() {
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
        There's no reason to waste energy by packing or moving around, so you decide to rest and wait for the next instructions. Nothing happens for a while, and you are about to fall back asleep when you suddenly recieve a knock at the door. Looking through the peephole, you realize it is another crew member. She looks very disheveled, like she had just been through something strenuous. "Please come with me," she says, "there's a viral outbreak turning people into zombies... it's nothing like what we've seen before! You won't survive this alone in your room!" Do you...</h4>
        <div class="container">
    
    <Link to="/ChapterFourteen" type="submit" className="btn btn-success btn-lg btn-block mt-5">Open the door?</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/ChapterFifteen" type="submit" className="btn btn-success btn-lg btn-block mt-5">Don't open the door?</Link>
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