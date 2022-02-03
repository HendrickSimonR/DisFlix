import React from 'react';
import ProfileMenuContainer from './profile_menu_container';

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.revealMenu = this.revealMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  revealMenu() {
    $('#profile-menu').removeClass('hidden');
  }

  hideMenu() {
    $('#profile-menu').addClass('hidden');
  }
  
  render() {
    return (
      <div className="profile-container">
        <img onMouseEnter={this.revealMenu} onMouseLeave={this.hideMenu} src={window.profilePic} className="profile-pic" />
        <ProfileMenuContainer />
      </div>
    );
  }
}

export default Profile;