import help from "../Home page stuff/HomeImg/help.png";
import spaceSleep from "../Home page stuff/HomeImg/spaceSleep.png";
import zombie from "../Home page stuff/HomeImg/zombie.png";
import { Link } from "react-router-dom";


const HomeBoxes = () => {

    return (
<div>
    <div>
    <h3 className="otherhead"> <b>
    EXPLORE OUR SHIP!</b></h3>
    </div>


    <div className="iconrow">

    <div className="indcol">
    <Link to="/Support" > 
    <h3 className="linktext">NEED HELP?</h3>
    <img src={help} className="botpic"/>
    </Link>
    </div>


    <div className="indcol">
    <Link to="/Register"  >
    <h3 className="linktext">CREATE AN ACCOUNT?</h3>
    <img src={spaceSleep} className="botpic"/>
    </Link>
    </div>



    <div className="indcol">
    <Link to="/Store" >
    <h3 className="linktext">SHOP THE STORE?</h3>
    <img src={zombie} className="botpic"/>
    </Link>
    </div>


    </div>      

















</div>

    );




}

export default HomeBoxes;