import React from 'react';
import { Link, Route } from 'react-router-dom';
import WelcomeContainer from './welcome_container';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="splash-container">
        <div className="splash-main">
          <Link className="splash-signin" to="/signin">SIGN IN</Link>
          <Route exact path="/" handleDemo={this.handleDemo} component={WelcomeContainer} />
        </div>

        <div className="info-container">
          <div className="info-one">
            <h1>Timeless memories in your hands.</h1>
            <h3>Decades of Disney moments for you</h3>
            <h3>and your family to enjoy, with more</h3>
            <h3>memories waiting to be made.</h3>
          </div>
        </div>

        <div className="info-container">
          <div className="info-two">
            <h1>Experience the magic on all platforms.</h1>
            <h3>Watch on Smart TVs, gaming consoles,</h3>
            <h3>Apple TV, Chromecast, Blu-Ray players,</h3>
            <h3>and more.</h3>
          </div>
        </div>

        <div className="info-container">
          <div className="info-three">
            <h1>Watch your favorite stories anywhere.</h1>
            <h3>Stream on your phone, laptop, tablet,</h3>
            <h3>and TV without paying more.</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default SplashPage;
