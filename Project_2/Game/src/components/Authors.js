import React from 'react';
import { Link } from "react-router-dom";
import kal from "../img/kal.jpg";
// import donald from "./img/kal.jpg";
// import Drael from "./img/kal.jpg";
// import Eric from "./img/kal.jpg";


export default function Authors() {
        return (
            <form  className="flex justify-content max-w-xs mx-auto mt-5" >
                 <div className="pt-5">
                        <div class="text-center">   
                            <h1 className="font-link">Zombie Apocalypse</h1>
                        </div>
                      
                        <br></br>
            <div>
        <h4><br></br>
        "Zombie Apocalypse: In Space" was written by Kalvin McClure of Zombie Apocalypse Inc. Donald Lopez edited the story. Together, the two of them dreamed up the concept of the game and laid the foundation for the website.
        <br></br><br></br>
        Drael Davidson and Eric Vara helped build the website alongside Donald and Kalvin. Eric handled the backend database while Drael helped build a lot of the community pages with Donald. Kalvin built the actual game itself.<br></br>
        <div class="portfolioPhotos">
                    <img src={kal} class="profilePhoto" alt="Kalvin's Logo" />
                    <img src={kal} class="profilePhoto" alt="Kalvin's Logo" />
                    <img src={kal} class="profilePhoto" alt="Kalvin's Logo" />
                    <img src={kal} class="profilePhoto" alt="Kalvin's Logo" />
                    </div>
        <div class="profileLinksFlex">
        <Link to="/portfolioLinkHere" type="submit" className="btn btn-danger btn-lg btn-block mt-5">Kalvin's Portfolio</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {/* <div className="pg rounded"style={{ backgroundImage: `url(${donald})` }}>
                </div> */}
        <Link to="/portfolioLinkHere" type="submit" className="btn btn-danger btn-lg btn-block mt-5">Donald's Portfolio</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {/* <div className="pg rounded"style={{ backgroundImage: `url(${Drael})` }}>
                </div> */}
        <Link to="/portfolioLinkHere" type="submit" className="btn btn-danger btn-lg btn-block mt-5">Drael's Portfolio</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {/* <div className="pg rounded"style={{ backgroundImage: `url(${Eric})` }}>
                </div> */}
        <Link to="/portfolioLinkHere" type="submit" className="btn btn-danger btn-lg btn-block mt-5">Eric's Portfolio</Link>
        </div>
        </h4>
        <div class="container">
                <>

                </>
    <br></br>
    </div>
    </div>
    </div>
    </form>
        );
    }