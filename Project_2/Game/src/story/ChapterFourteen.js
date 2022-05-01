import React from 'react';
import { Link } from "react-router-dom";
import background from "../img/Dead.png";
import Fader from './Fader'

export default function ChapterFourteen() {
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
        Against your best judgement, you decide to open the door for the lady. At first, she seems nice, and begins telling you about how a zombie apocalypse started in space. Apparently, according to the people in the Bio department, someone had taken a chicken-like alien animal on another excursion and decided to try breeding it with the other chickens on board for food. However, after a few weeks, apparently the alien began to bite other chickens and spread a rabies-like virus between the animals. They quarantined the animals, but the virus spread to all the chickens and eventually mutated and jumped to humans. In this last mutation, the virus is unmistakeable as a zombification, highly contagious virus that turns people into ravenous, undead beings. You shiver as she recants the story. But then, just five minutes after she tells you this, she begins to snarl and groan oddly, and before you know it, she has a craving for human flesh. She bites you, and you live out the rest of your days as a space zombie. <br></br>Ending 5/10
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