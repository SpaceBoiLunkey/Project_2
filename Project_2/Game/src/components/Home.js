import React from "react";
import {
  Container,
  RowTwo,
  Box,
  BoxTwo,
  ColumnTwo,
  } from "./FooterStyles";
  import { Link } from "react-router-dom";

function Home() {
  return (
    <form  className="flex justify-content max-w-xs mx-auto mt-5 "  >
            
      <h1 className="pt-5 text-center font-link">
      
        Zombie Apocalypse
      </h1>
      
      <Container className="pt-5 ">
        <Box >
        <RowTwo>
         <ColumnTwo >
         <br></br>
            <h3>Welcome to your Nightmare</h3>
            <p>
            Get ready to engage in a dazzling new sensation that’s sweeping the internet across the land with this action-packed mobile strategy game—coming soon to Android and iOS devices.</p>   <img
      src='./img/zombie.png'
      className='img-thumbnail img-fluid shadow-2-strong'
      alt='...'
      style={{ maxWidth: '24rem' }}
    />
            <p>With a single act of despairation, Sylvanas Farmers have ripped open the way to the zombie destruction, by cross breeding alien birds with earth chickens. They have sent out this mutated poultry to Alterra, an inter-galatic space agency who has now been dragged into all-consuming darkness. An ancient force of death threatens to ensnare and unravel reality. Are your ready to attempt your escape!</p>

            <p className="text-end">Play if you dare!</p>
            <div className="text-end"><Link to="/Login" type="submit" className="btn btn-secondary btn-lg "><h5>Play Now</h5></Link></div>
            </ColumnTwo>
         </RowTwo>
         </Box>
         <BoxTwo>
        <RowTwo>
          <ColumnTwo>
          <br></br>
            <h3>Playing the Game</h3>
           <p>Playing the game requires internet and the abilty to read. You must also be aware this game is for mature audience and not for the feint hearted.
           Please rememnber to keep all hands and feet inside at all times as you could be eatin by a Zombie. Thanks again for flying Alterra the only inter-galatic space agency this side of the Milky Way.</p> <p>If you are having technical issue please click the link below.</p> <div className="text-start"><Link to="/UserRegistration" type="submit" className="">Get help</Link></div>
            </ColumnTwo>
          </RowTwo> 
          </BoxTwo>
          <Box>   
         <RowTwo>        
          <ColumnTwo>
          <br></br>
            <h3>Create an Account</h3>
           <p> Online gaming refers to playing games over the internet that incorporate virtual worlds consisting of numerous players simultaneously. Online games are widely popular amongst children and young adults who use mobile devices or games consoles to play games. These games facilitate gamers in playing against or with other players through a computer network, mainly over the internet.</p>

<p>Online gaming caters to a diverse range of interests such as sports games, action games, card games, mission-based games, quiz games, quests, and more. Completing challenges and connecting with online players thrill players. Moreover, the introduction of fun elements such as leaderboards and tournaments satiate the adrenaline rush that most players seek while playing online games. typesetting, remaining essentially unchanged.</p> <p>Playing CYOA ZA is easy just hit the button to register and your seconds away from fun!</p><div className="text-end"><Link to="/UserRegistration" type="submit" className="btn btn-secondary btn-lg "><h5>Register</h5></Link></div>
            </ColumnTwo>
            </RowTwo>
            </Box>
            <BoxTwo>
            <RowTwo>
            <ColumnTwo>
            <br></br>
            <h3>New Features</h3><img
      src='./img/door.png'
      className='img-thumbnail img-fluid shadow-2-strong'
      alt='...'
      style={{ maxWidth: '24rem'}}
    />
           <p>Looking for the perfect gift? Something Special by ZoA, we offer a wide selection of beautiful clothes, stickers, collectables, and much more. You never know what darling items you’ll discover tucked away when you visit our shop. We’ll help you find the ideal gift!</p> 
<p>Something Special for Everyone!</p>

<p>Stepping into our online store is like being pampered. From our Zombie Food section, you’ll enjoy savory seasoned nuts and healthy Juices. Quaint knickknacks and holiday Items can be found in our seasonal section. We have something special for everyone.</p> 
<p className="text-end">Just click the link below to visit our Store</p>
            <div className="text-end"><Link to="/Store" type="submit" >Store</Link></div>
            </ColumnTwo>
        </RowTwo>
        </BoxTwo>
      </Container>
   
    </form>
  );
}

export default Home