import React from "react";
import {
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import { Link } from "react-router-dom";
const Footer = () => {
return (

	<Container className="mt-5 ">
		<Row>
		<Column>	<Heading>About Us</Heading>
			<Link to="/Community" type="submit">Authors</Link>
			<Link to="/Community" type="submit">Press</Link>
			<Link to="/Community" type="submit">About Us</Link>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<Link to="/Support" type="submit">Game Help</Link>
			<Link to="/Support" type="submit">Contact</Link>
			<Link to="/UserRegistration" type="submit">Register</Link>
			
		</Column>
		<Column>
			<Heading>Community</Heading>
			<Link to="/Community" type="submit">Comments</Link>
			<Link to="/Store" type="submit">Store</Link>
			<Link to="/Community" type="submit">Careers</Link>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="https://www.facebook.com/profile.php?id=100081142293284">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://www.instagram.com/zombieapocalyspecyoa/">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
    
			<FooterLink href="https://www.youtube.com/channel/UCFbEW_B3VRgux-5LPCrxC7g">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
        
		</Column>
        
		</Row>
      
        <Container>
              <br></br><div><h5>
              <br></br>@ 2022 Zombie Apocalypse</h5></div></Container>
	</Container>
   
    

);
};
export default Footer;
