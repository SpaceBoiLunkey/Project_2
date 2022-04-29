import React from 'react';
import { Link } from "react-router-dom";
import background from "../img/zombie.png";
import Fader from './Fader'

export default function ChapterTen() {
        return (
            <form  className="flex justify-content max-w-xs mx-auto mt-5" >
                 <div className="">
                        <div class="text-center">   
                            <h1 className="font-link">Zombie Apocalypse</h1>
                        </div>
                      
                        <br></br>
                    <div className="pg rounded"style={{ backgroundImage: `url(${background})` }}>
                </div>
            <div>
        <h4><br></br>
        </h4>
        <div class="container">
        You decide to go with the man to fight off the zombies. You know that you will have a bigger chance of survival if you try to quell the outbreak as soon as possible. You begin shooting and killing off dozens of zombies. But slowly, you realize that there's more zombies than you have bullets. You fight a good fight, but its to late your gun runs out of ammo and the zombies overwelm you. <br></br>Ending 3/10

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