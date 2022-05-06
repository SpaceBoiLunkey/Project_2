import React from 'react'
import {
  FooterLink,
    Container,
    Row,
    Column,
    RowTwo,
    Box,
    BoxTwo,
    ColumnTwo,
    } from "./FooterStyles";
    import { Link } from "react-router-dom";
    import TopSection from './SupportPageComponents/TopSection';

export default function Support() {
  return (
    <form  className="flex justify-content max-w-xs mx-auto mt-5 "  >

    <h1 className="pt-5 font-link col text-center">
      Zombie Apocalypse
    </h1>
    <div>
      <TopSection/>
      </div>

    {/* <Container>
      <Row>
        <Column>
          <h3>Game Help</h3>
        </Column>
        <Column>
          <h3>Feed Back</h3>
        </Column>
        <Column>
          <h3>Contact Us</h3>
          <FooterLink href="https://www.facebook.com/profile.php?id=100081142293284">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				<h4>Facebook</h4>
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://www.instagram.com/zombieapocalyspecyoa/">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				<h4>Instagram</h4>
				</span>
			</i>
			</FooterLink>
    
			<FooterLink href="https://www.youtube.com/channel/UCFbEW_B3VRgux-5LPCrxC7g">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				<h4>Youtube</h4>
				</span>
			</i>
			</FooterLink>
        </Column>
      </Row>
    </Container>

    <BoxTwo>
        <RowTwo>
          <ColumnTwo>
          <br></br>
            <h3>Playing the Game</h3>
           <p>Playing the game requires internet and the abilty to read. You must also be aware this game is for mature audience and not for the feint hearted.
           Please rememnber to keep all hands and feet inside at all times as you could be eatin by a Zombie. Thanks again for flying 
           Alterra the only inter-galatic space agency this side of the Milky Way.</p> <p>If you are having technical issue please click the link 
             below.</p> <div className="text-start"><Link to="/Support" type="submit" className="">Get help</Link></div>
          </ColumnTwo>
        </RowTwo> 
    </BoxTwo> */}


  </form>
  )
}
