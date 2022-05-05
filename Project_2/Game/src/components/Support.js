import React from 'react'
import {
  Container,
  Row,
  Column,
  FooterLink,
  } from "./FooterStyles";
export default function Support() {
  return (
    <form  className="flex justify-content max-w-xs mx-auto mt-5 "  >

    <h1 className="pt-5 font-link col text-center">
      Zombie Apocalypse
    </h1>
    <Container>
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

  </form>
  )
}
