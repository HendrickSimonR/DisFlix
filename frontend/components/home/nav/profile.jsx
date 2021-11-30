import React from 'react';
import ProfileMenuContainer from './profile_menu_container';


function Profile() {
  return (
    <div className="profile-container">
      <img src={window.profilePic} className="profile-pic" />
      <ProfileMenuContainer />
    </div>
  );
}

export default Profile;