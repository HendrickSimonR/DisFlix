import React from 'react';
import { Link } from 'react-router-dom';


class ProfileMenu extends React.Component {
  constructor(props) {
    super(props)
    this.handleSignout = this.handleSignout.bind(this)
  }

  handleSignout() {
    window.hideProfile = false;
    window.profilePic = null;
    this.props.signout();
    window.scrollTo(0, 0); 
  }

  render() {
    return (
      <div className="profile-menu-container">
        <div className="profile-menu">

          <ul className="profile-links">
            <li><a href="https://github.com/hendricksimonr/" target="_blank">
              <div className="github-link">GitHub</div></a>
            </li>
          </ul>

          <ul className="logout-button">
            <li onClick={this.handleSignout} className="logout">Sign out</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProfileMenu;
