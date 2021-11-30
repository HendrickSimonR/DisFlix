import React from 'react';
import { Link } from 'react-router-dom';


class ProfileMenu extends React.Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
    window.profHidden = false;
    this.props.logout();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="profile-menu-container">
        <div className="dropdown-menu">
          <ul className="menu-logout">
            <li onClick={this.handleLogout} className="logout">Log Out</li>
          </ul>
        </div>
      </div>
    );
  }
}


export default ProfileMenu;
