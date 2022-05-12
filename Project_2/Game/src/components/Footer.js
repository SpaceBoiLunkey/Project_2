import React from 'react';
import {
  Container2,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  BlackBar,
  Padding,
} from './FooterStyles';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <Padding>
        <nav className=" navbar navbar-expand-md navbar-dark bg-dark fixed font-link">
          <BlackBar>
            <Container2>
              <Row>
                <div class="collapse navbar-collapse " id="navbarCollapse2">
                  <Column>
                    <Heading>About Us</Heading>
                    <Link to="/Authors" type="submit">
                      Authors
                    </Link>
                    <Link to="/CommentSection" type="submit">
                      Press
                    </Link>
                    <Link to="/Authors" type="submit">
                      About Us
                    </Link>
                  </Column>
                </div>
                <div class="collapse navbar-collapse " id="navbarCollapse2">
                  <Column>
                    <Heading>Services</Heading>
                    <Link to="/Support" type="submit">
                      Game Help
                    </Link>
                    <Link to="/Support" type="submit">
                      Contact
                    </Link>
                    <Link to="/UserRegistration" type="submit">
                      Register
                    </Link>
                  </Column>
                </div>
                <div class="collapse navbar-collapse " id="navbarCollapse2">
                  <Column>
                    <Heading>Community</Heading>
                    <Link to="/Community" type="submit">
                      Community
                    </Link>
                    <Link to="/Store" type="submit">
                      Store
                    </Link>
                    <Link to="/PopForm" type="submit">
                      Careers
                    </Link>
                  </Column>
                </div>
                <div class="collapse navbar-collapse " id="navbarCollapse2">
                  <Column>
                    <Heading>Social Media</Heading>
                    <FooterLink href="https://www.facebook.com/profile.php?id=100081142293284">
                      <i className="fab fa-facebook-f">
                        <span style={{ marginLeft: '10px' }}>Facebook</span>
                      </i>
                    </FooterLink>
                    <FooterLink href="https://www.instagram.com/zombieapocalyspecyoa/">
                      <i className="fab fa-instagram">
                        <span style={{ marginLeft: '10px' }}>Instagram</span>
                      </i>
                    </FooterLink>

                    <FooterLink href="https://www.youtube.com/channel/UCFbEW_B3VRgux-5LPCrxC7g">
                      <i className="fab fa-youtube">
                        <span style={{ marginLeft: '10px' }}>Youtube</span>
                      </i>
                    </FooterLink>
                  </Column>
                </div>
              </Row>

              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse2"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <Container>
                <br></br>
                <div>
                  <h5>
                    <br></br>@ 2022 Zombie Apocalypse
                  </h5>
                </div>
              </Container>
            </Container2>
          </BlackBar>
        </nav>
      </Padding>
    </>
  );
};
export default Footer;
