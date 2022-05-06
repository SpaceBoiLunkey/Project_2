import { Link } from "react-router-dom";


const TestSection = () => {
    return (

            <div className="iconrow">

            <div className="indcol">
                
                <Link to="/Play"  > 
                    <div className="testboxes">
                    <p className="fourtitle"><b>READY TO PLAY?</b></p>
                    <p className="fourtext">
                    Playing the game requires internet and the abilty to read. You must also be aware this game is for mature audience and not for the feint hearted. 
                    </p>
                    </div>

                </Link>
            </div>

            <div className="indcol">
                <Link to="/Community"  >
                    <div className="testboxes">
                    <p className="fourtitle"><b>COMMUNITY</b></p>
                    <div className="fourtext">
                    Come hang out!
                    </div>
                    </div>

                </Link>
            </div>

            <div className="indcol">
                <Link to="/Store" >
                <div className="testboxes">
                    <p className="fourtitle" ><b>SHOP WITH US!</b></p>
                    <div className="fourtext">
                    Looking for the perfect gift? Something Special by ZoA, we offer a wide selection of beautiful clothes, stickers, collectables, and much more. 
                    </div>
                    </div>

                </Link>
            </div>

            <div className="indcol">
                <Link to="/Store" >
                    <div className="testboxes">
                    <p className="fourtitle"><b>HELP WITH LOGIN?</b></p>
                    <div className="fourtext">Please enter your email to reset your account.
                    </div>
                    </div>

                </Link>
            </div>
            </div>
    );
}
export default TestSection;