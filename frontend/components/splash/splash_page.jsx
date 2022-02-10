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
          <Link to="/">
            <img src={window.logo} className="splash-logo" />
          </Link>
          <Link className="splash-signin" to="/signin">SIGN IN</Link>
          <Route exact path="/" handleDemo={this.handleDemo} component={WelcomeContainer} />
        </div>

        <div className="splash-info-container">
          <div className="info-container odd">
            <div className="splash-info">
              <div className="info-text-left">
                <h1 className="info-header-left">Timeless memories in your hands.</h1>
                <h3>Decades of Disney magic for you</h3>
                <h3>and your family to enjoy, with more</h3>
                <h3>memories waiting to be made.</h3>
              </div>
              <img src={window.splash1} className="info-pic-right"/>
            </div>
          </div>

          <div className="info-container">
            <div className="splash-info right">
              <img src={window.splash2} className="info-pic-left"/>
              <div className="info-text-right">
                <h1 className="info-header">Feel the force on all platforms.</h1>
                <h3>Watch on Smart TVs, gaming consoles,</h3>
                <h3>Apple TV, Chromecast, Blu-Ray players,</h3>
                <h3>and more.</h3>
              </div>
            </div>
          </div>

          <div className="info-container odd last">
            <div className="splash-info">
              <div className="info-text-left">
                <h1 className="info-header-left">Watch your favorite heroes anywhere.</h1>
                <h3>Stream on your phone, laptop, tablet,</h3>
                <h3>and TV without paying more.</h3>
              </div>
              <img src={window.splash3} className="info-pic-right"/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default SplashPage;
