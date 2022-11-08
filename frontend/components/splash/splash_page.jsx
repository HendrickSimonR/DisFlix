import React from 'react';
import { Link, Route } from 'react-router-dom';
import WelcomeContainer from './welcome_container';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '' 
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.password === '$dis-pr0ject!$-94~') {
      let splashContainer = document.getElementById('splash-container');
      let protector = document.getElementById('site-protector');
      let mainSplash = document.getElementById('splash-main');
      let description = document.getElementById('splash-info');
      protector.remove();
      splashContainer.style.position = 'inherit';
      mainSplash.style.visibility = 'visible';
      description.style.visibility = 'visible';
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  visitSite(link) {
    window.open(
      link, '_blank'
    )
  }

  render() {
    return (
      <div className="splash-container" id="splash-container">
        <div id='site-protector'>
          <form onSubmit={this.handleSubmit} className="sign-form-box" id='protector-form'>
            {/* <div>
              {this.props.errors.session.length > 0 ? this.renderErrors() : ''}
            </div> */}

            <p id='site-protector-access' onClick={() => this.visitSite("mailto:hendricksimonr@gmail.com")}>
              Please contact me for access! 
            </p>

            <br />

            <div className="signin-form">
              <input 
                type="password"
                placeholder="Password"
                className="signin-input"
                value={this.state.password}
                onChange={this.update('password')}
              />

              <br />

              <input 
                type="submit" 
                className="session-submit" 
                value="Submit" 
              />

              <br />
            </div>
          </form>
        </div>
        <div className="splash-main" id='splash-main'>
          <Link to="/">
            <img src={window.logo} className="splash-logo" />
          </Link>

          <Link className="splash-signin" to="/signin">
            SIGN IN
          </Link>

          <Route exact path="/" handleDemo={this.handleDemo} component={WelcomeContainer} />
        </div>

        <div className="splash-info-container" id='splash-info'>
          <div className="info-container odd">
            <div className="splash-info">
              <div className="info-text-left">
                <h1 className="info-header-left">
                  Timeless memories in your hands.
                </h1>

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
                <h1 className="info-header">
                  Feel the force on all platforms.
                </h1>

                <h3>Watch on Smart TVs, gaming consoles,</h3>
                <h3>Apple TV, Chromecast, Blu-Ray players,</h3>
                <h3>and more.</h3>
              </div>
            </div>
          </div>

          <div className="info-container odd last">
            <div className="splash-info">
              <div className="info-text-left">
                <h1 className="info-header-left">
                  Watch your favorite heroes anywhere.
                </h1>

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
