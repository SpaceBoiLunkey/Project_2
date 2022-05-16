import React from 'react'
import ZA from './HomeImg/ZA.png';
import {} from './backgroundimages.css';
import { Link } from 'react-router-dom';
import {
  TopContainer,
  LogoPic,
  Title,
  Body,
  SubBody,
  Row,
  Button,
} from './HomeStyles';

const TopComponent = () => {
  return (
    <TopContainer>
      <div className="winimg">
        <Row>
          <LogoPic>
            <img src={ZA} alt="" />
          </LogoPic>
          <Title>
            <b>WELCOME TO YOUR NIGHTMARE</b>
          </Title>
          <br />
          <Body>
            Get ready to engage in a dazzling new sensation that is sweeping the
            internet across the land with this action-packed mobile strategy
            game—coming soon to Android and iOS devices.
          </Body>
          <br />
          <SubBody>
            With a single act of desperation, Sylvans Farmers have ripped open
            the way to the zombie destruction, by cross breeding alien birds
            with earth chickens. Then sending this mutated poultry to Alterra,
            an inter-galactic space agency who has now been dragged into
            all-consuming darkness. An ancient force of death threatens to
            ensnare and unravel reality. Are your ready to attempt your escape!
          </SubBody>

          <Link to="/Login">
            <Button>PLAY!!</Button>
          </Link>
        </Row>
      </div>
    </TopContainer>
  );
};

export default TopComponent;
