import React from 'react';
import { Link } from "react-router-dom";
import background from "../img/zombie.png";
import Fader from './Fader'

export default function ChapterTwelve() {
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
        It might have been selfish, but you decide that your best course of action is to save yourself before the zombie can make it to your pod. However, you didn't know that not only did your crewmate have coordinates to another ship that could have saved you, he also had emergency rations in case something happened and you were left to drift in space. Your selfishness ends up betraying you, and you are left to drift for all eternity. <br></br>Ending 4/10
        </h4>
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