import { Link } from "react-router-dom";
import neon from "./SupImg/neon.png";
import ship from "./SupImg/ship.png";

const TopSection = () => {
    return (
<div>
<div className="topcon2">
    
  <img src={neon} className="toppic"/>

    <h3 className="head" >
    <b>
    ANSWERS HQ!
    </b></h3>
    <br/>               
        
                        {/* <div > */}
                        <Link to="/Login" className="oneboxes"> 
                        <p className="onetext">
                        <b>READY TO PLAY?</b>
                        <br/>
                        <br/>
                        Playing the game requires internet and the abilty to read. You must also be aware this game is for mature audience and not for the feint hearted. 
                        <br/>
                        <br/>
                        
                        </p>
                        <div><p className="down">CLICK ME </p></div>
                        </Link>

                        <Link to="/Community" className="twoboxes"> 
                        <p className="onetext">
                        <b>COMMUNITY!</b>
                        <br/>
                        <br/>
                        Come hang out!                        
                        <br/>
                        <br/>
                        </p>
                        <div><p className="down">CLICK ME </p></div>

                        </Link>

                        <Link to="/Store" className="thirdboxes"> 
                        <p className="onetext">
                        <b>SHOP WITH US!</b>
                        <br/>
                        <br/>
                        Looking for the perfect gift? Something Special by ZoA, we offer a wide selection of beautiful clothes, stickers, collectables, and much more. 
                        <br/>
                        <br/>
                        </p>
                        <div><p className="down">CLICK ME </p></div>

                        </Link>


                        <Link to="/UserRegistration" className="fourboxes"> 
                        <p className="onetext">
                        <b>WANT MORE GAMES?</b>
                        <br/>
                        <br/>
                        Register now and be the first to hear about new games!
                        <br/>
                        <br/>
                        </p>
                        <div><p className="down">CLICK ME </p></div>

                        </Link>



          <div className="blackbox"> </div>



            

                </div>
                <img src={ship} className="shippic"/>

                </div>
    );
}

export default TopSection;