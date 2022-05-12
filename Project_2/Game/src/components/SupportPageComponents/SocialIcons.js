import youtube from './SupportImages/youtube.jpeg';
import instagram from './SupportImages/instagram.png';
import facebook from './SupportImages/facebook.jpeg';

import { IconRow, IndCol, SocialBoxes } from './SupportSyles';

const SocialIcons = () => {
  return (
    <div>
      <IconRow>
        <IndCol>
          <a href="https://www.facebook.com/profile.php?id=100081142293284">
            <img src={facebook} {...SocialBoxes} alt="" />
          </a>
        </IndCol>

        <IndCol>
          <a href="https://www.instagram.com/zombieapocalyspecyoa/">
            <img src={instagram} {...SocialBoxes} alt="" />
          </a>
        </IndCol>

        <IndCol>
          <a href="https://www.youtube.com/channel/UCFbEW_B3VRgux-5LPCrxC7g">
            <img src={youtube} {...SocialBoxes} alt="" />
          </a>
        </IndCol>
      </IconRow>
    </div>
  );
};

export default SocialIcons;
