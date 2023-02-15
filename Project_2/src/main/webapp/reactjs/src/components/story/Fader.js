import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//import './Page.css';

const Fader = ({ text }) => {
  const [fadeProp, setFadeProp] = useState({
    fade: 'fade-in',
  });

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade === 'fade-in') {
        setFadeProp({
          fade: 'fade-out',
        });
      } else {
        setFadeProp({
          fade: 'fade-in',
        });
      }
    }, 900);

    return () => clearInterval(timeout);
  }, [fadeProp]);

  return (
    <>
      <div className="">
        <h2 className={fadeProp.fade}>{text}</h2>
      </div>
    </>
  );
};

Fader.defaultProps = {
  text: 'Make your choice!',
};

Fader.propTypes = {
  text: PropTypes.string,
};

export default Fader;
