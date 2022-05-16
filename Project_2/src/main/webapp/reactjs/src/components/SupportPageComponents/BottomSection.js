import React from 'react';
import SocialIcons from './SocialIcons';

const BottomSection = () => {
  return (
    <div>
      {/* this should be the only class name because its the background image  */}
      <div className="shipping">
        <SocialIcons />
      </div>
    </div>
  );
};

export default BottomSection;
