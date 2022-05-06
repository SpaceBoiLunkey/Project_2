import win from "../Home page stuff/HomeImg/win.jpg";
import ZA from "../Home page stuff/HomeImg/ZA.png"
import playnow from "../Home page stuff/playnow.css";
import { Link } from "react-router-dom";
import HomeBoxes from "./HomeBoxes";



  
// import { Link } from "react-router-dom";

const PlayNow = () => {
    return (

<div>
    <div className="topcon">
  <img src={win} className="toppic"/>
  <img src={ZA} className="logopic"/>

    <h3 className="head" ><b>
    WELCOME TO YOUR NIGHTMARE</b></h3>
    <br/>
     <p className="body">
        Get ready to engage in a dazzling new sensation that’s sweeping the internet across
         the land with this action-packed mobile strategy game—coming soon to Android and iOS devices.
    </p>   
    <br/>
    <p className="subbody">
        With a single act of despairation, Sylvanas Farmers have ripped open the way 
        to the zombie destruction, by cross breeding alien birds with earth chickens.
         Then sending this mutated poultry to Alterra, an inter-galatic space agency 
         who has now been dragged into all-consuming darkness. An ancient force of
          death threatens to ensnare and unravel reality. Are your ready to attempt 
          your escape!</p>

          <Link to="/Login" ><button className="butto">PLAY IF YOU DARE!!</button></Link>
          <div className="blackbox">
    
         </div>

  {/* <button Link to="/Login" className="butto" >Play if you dare!</button> */}
</div>

<div>
    <HomeBoxes/>
    </div>
</div>


      
    );
  };
  
  export default PlayNow;