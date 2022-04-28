import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (

	<Container className="mt-5 ">
		<Row>
		<Column >
			<Heading>About Us</Heading>
			<FooterLink href="#">Authors</FooterLink>
			<FooterLink href="#">Press</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Game Help</FooterLink>
			<FooterLink href="#">Feedback</FooterLink>
			<FooterLink href="#">Password Reset</FooterLink>
		</Column>
		<Column>
			<Heading>Community</Heading>
			<FooterLink href="#">Community</FooterLink>
			<FooterLink href="#">Store</FooterLink>
			<FooterLink href="#">Careers</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
    
			<FooterLink href="#">
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
              <br></br>@ 2022 Zombie Apocolypse</h5></div></Container>
	</Container>
   
    

);
};
export default Footer;
