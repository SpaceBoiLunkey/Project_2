
import styled from 'styled-components';

// all the boxes are in one row so when the screen is smaller they line up
export const IconRow = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  height: auto;
  width: 100%;
  align-items: center;
  vertical-align: middle;
`;

//each box is a column
export const IndCol = styled.div`
  flex: 25%;
  padding: 1% 1% 1% 1%;
  width: 100%;

  @media (max-width: 1100px) {
    flex: 50%;
    max-width: 50%;
  }
  @media (max-width: 800px) {
    flex: 100%;
    max-width: 100%;
  }
  align-items: center;
  vertical-align: middle;
`;

//the white boxes
export const WhiteBoxes = styled.div`
  display: inline-block;
  padding: 5%;
  position: relative;
  margin: 1%;
  width: 100%;
  height: 350px;
  background-color: white;
  border-radius: 25px;

  :hover {
    background-color: rgb(0, 195, 255);
    opacity: 0.5;
    box-shadow: 0 0 0px rgb(255, 255, 255);
  }
`;
//the header on the page
export const Head = styled.div`
  position: relative;
  text-align: center;
  color: white;
  font-size: 70px;
  font-family: 'Hanalei Fill', cursive;
`;

//the text in the white boxes
export const BoxText = styled.div`
  padding-left: 1%;
  padding-right: 1%;
  vertical-align: center;
  object-position: center;
  color: rgb(0, 0, 0);
  display: inline;
  position: relative;
  inline-size: 270px;
  writing-mode: horizontal-tb;
  overflow-wrap: break-word;
  hyphens: manual;
  font-size: large;
`;

//moves the Click me to the bottom of the div
export const Down = styled.div`
  position: absolute;
  bottom: 0;
`;

//black bar in between
export const BlackBar = styled.div`
  position: relative;
  top: 90%;
  display: grid;
  height: 100px;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
  border: 1px solid black;
  background-color: rgb(0, 0, 0);
  align-items: center;
  border-radius: 25px;
`;

//social media boxes
export const SocialBoxes = styled.div`
  display: inline-block;
  position: relative;
  height: 350px;
  width: 100%;
  padding: 5%;
  margin-top: 5%;
  align-items: center;
  margin-left: auto;
`;
