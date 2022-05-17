import React from 'react'
import {
  IconRow,
  IndCol,
  SocialBoxes,
  TextInBoxes,
  WhiteBoxes,
} from './HomeStyles';
import help from './HomeImg/help.png';
import spaceSleep from './HomeImg/spaceSleep.png';
import zombie from './HomeImg/zombie.png';
import { Link } from 'react-router-dom';


const HomeBoxes = () => {
  return (
    <div>
      <IconRow>
        <IndCol>
          <Link to="/Support">
            <WhiteBoxes>
              <TextInBoxes>NEED HELP?</TextInBoxes>
              <img src={help} {...SocialBoxes} alt="" />
            </WhiteBoxes>
          </Link>
        </IndCol>

        <IndCol>
          <Link to="/Register">
            <WhiteBoxes>
              <TextInBoxes>
                CREATE AN <br />
                ACCOUNT?
              </TextInBoxes>
              <img src={spaceSleep} {...SocialBoxes} alt="" />
            </WhiteBoxes>
          </Link>
        </IndCol>

        <IndCol>
          <Link to="/Store">
            <WhiteBoxes>
              <TextInBoxes>
                SHOP THE <br />
                STORE?
              </TextInBoxes>
              <img src={zombie} {...SocialBoxes} alt="" />
            </WhiteBoxes>
          </Link>
        </IndCol>
      </IconRow>
    </div>
  );
};

export default HomeBoxes;
