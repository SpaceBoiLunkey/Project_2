import React from 'react';
import '../../App.scss';
import Login from './login';
import Register from './register';

// created state tracker for tracking user login
// received props from login and register component files
class LoginIntergration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLoggedIn: true,
    };
  }

  // Keep mounted component to the right by initial default
  componentDidMount() {
    this.rightSide.classList.add('right');
  }

  // called changeState function to track and update mounted animation components
  changeState() {
    const { isUserLoggedIn } = this.state;

    if (isUserLoggedIn) {
      this.rightSide.classList.remove('right');
      this.rightSide.classList.add('left');
    } else {
      this.rightSide.classList.remove('left');
      this.rightSide.classList.add('right');
    }
    this.setState((prevState) => ({
      isUserLoggedIn: !prevState.isUserLoggedIn,
    }));
  }

  // 1. extract user login variable from useState function component
  // 2. created container for pages
  // 3. created conditional statement to check if user is active
  // 4.

  render() {
    const { isUserLoggedIn } = this.state;
    const current = isUserLoggedIn ? 'Register' : 'Login';
    const currentActive = isUserLoggedIn ? 'login' : 'register';
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={(ref) => (this.container = ref)}>
            {isUserLoggedIn && (
              <Login containerRef={(ref) => (this.current = ref)} />
            )}
            {!isUserLoggedIn && (
              <Register containerRef={(ref) => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={(ref) => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = (props) => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default LoginIntergration;
