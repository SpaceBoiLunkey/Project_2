import win from "../Home page stuff/win.jpg";
import styles from "../Home page stuff/playnow.css";


  
// import { Link } from "react-router-dom";

const PlayNow = () => {
    return (


    <div className={styles.container2}>
  <img src={win} alt="play now"/>
  <h3>Welcome to your Nightmare</h3>
            <p className={styles.body}>
            Get ready to engage in a dazzling new sensation that’s sweeping the internet across the land with this action-packed mobile strategy game—coming soon to Android and iOS devices.
             </p>   

  <button className={styles.button}>Play Now</button>
</div>


      
    );
  };
  
  export default PlayNow;