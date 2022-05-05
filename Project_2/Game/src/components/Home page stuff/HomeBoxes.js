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


    <div className="thumbs">

    <Link to="/Support" className="page-break"> 
    <h3 className="linkbox1">NEED HELP?</h3>
    {/* <div className="page-break"> */}
    <img src={help} className="botpic"/>
    {/* </div> */}
    </Link>
    <Link to="/Support"  className="page-break">
    <h3 className="linkbox2">CREAT AN ACCOUNT?</h3>
    {/* <div className="page-break"> */}
    <img src={spaceSleep} className="botpic"/>
    {/* </div> */}
    </Link>
    <Link to="/Support" className="page-break">
    <h3 className="linkbox3">SHOP THE STORE?</h3>
    {/* <div className="page-break"> */}
    <img src={zombie} className="botpic"/>
    {/* </div> */}
    </Link>

    </div>      

















</div>

    );




}

export default HomeBoxes;