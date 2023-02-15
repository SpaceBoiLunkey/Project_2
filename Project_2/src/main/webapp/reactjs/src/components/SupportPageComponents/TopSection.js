import React from 'react';
import { Link } from 'react-router-dom';
import {} from '../HomePageComponents/backgroundimages.css';
import {
  IconRow,
  IndCol,
  WhiteBoxes,
  Head,
  BoxText,
  Down,
} from './SupportSyles';

const TopSection = () => {
  return (
    <div>
      {/* this should be the only class name because its the background image  */}
      <div className="neonimg">
        <Head>
          <b>ANSWERS HQ!</b>
        </Head>
        <br />

        <IconRow>
          <IndCol>
            <Link to="/Login">
              <WhiteBoxes>
                <BoxText>
                  <b>READY TO PLAY?</b>
                  <br />
                  <br />
                  Playing the game requires internet and the ability to read. You
                  must also be aware this game is for mature audience and not
                  for the feint hearted.
                  <br />
                  <br />
                </BoxText>
                <Down>
                  <p>CLICK ME</p>
                </Down>
              </WhiteBoxes>
            </Link>
          </IndCol>

          <IndCol>
            <Link to="/Community">
              <WhiteBoxes>
                <BoxText>
                  <b>COMMUNITY!</b>
                  <br />
                  <br />
                  Come hang out!
                  <br />
                  <br />
                </BoxText>
                <Down>
                  <p>CLICK ME</p>
                </Down>
              </WhiteBoxes>
            </Link>
          </IndCol>

          <IndCol>
            <Link to="/Store">
              <WhiteBoxes>
                <BoxText>
                  <b>SHOP WITH US!</b>
                  <br />
                  <br />
                  Looking for the perfect gift? Something Special by ZoA, we
                  offer a wide selection of beautiful clothes, stickers,
                  collectables, and much more.
                  <br />
                  <br />
                </BoxText>
                <Down>
                  <p>CLICK ME</p>
                </Down>
              </WhiteBoxes>
            </Link>
          </IndCol>

          <IndCol>
            <Link to="/Register">
              <WhiteBoxes>
                <BoxText>
                  <b>WANT MORE GAMES?</b>
                  <br />
                  <br />
                  Register now and be the first to hear about new games!
                  <br />
                  <br />
                </BoxText>
                <Down>
                  <p>CLICK ME</p>
                </Down>
              </WhiteBoxes>
            </Link>
          </IndCol>
        </IconRow>
      </div>
    </div>
  );
};

export default TopSection;
