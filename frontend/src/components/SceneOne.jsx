import React from 'react';

class ScenceOne extends React.Component {
  render() {
    return (
      <div className="game">
        <h1>Prompt 1</h1>
        <div>
          <button className="prompt-button">
            "Wha...what...where am I..."
          </button>
        </div>
        <br />
        <div>
          <button className="prompt-button">"HEEEEEEEEEELP!!!!"</button>
        </div>
        <br />
        <div>
          <button className="prompt-button">
            Wake up, look around, give up...
          </button>
        </div>
      </div>
    );
  }
}

export default ScenceOne;
