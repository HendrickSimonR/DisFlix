import React from 'react';
import { Link } from 'react-router-dom';


class ProfileMenu extends React.Component {
  constructor(props) {
    super(props)
    this.handleSignout = this.handleSignout.bind(this)
    this.visitSite = this.visitSite.bind(this);
    this.newAvatar = this.newAvatar.bind(this);
    this.randomAvatar;
    this.state = { selectNew: false }
  }

  newAvatar() {
    this.props.history.push('/home')

    if (window.location.href.includes('home')) {
      window.hideProfile = false;
      window.profilePic = null;
      // let loader = document.getElementById('brand-loader-home');
      // loader.style.display = 'none';
      let selectScreen = document.getElementById('select-profiles');
      // console.log('SELECT SCREEN', selectScreen);
      selectScreen.style.display = 'flex';
      this.setState({ selectNew: !this.state.selectNew})
    }
  }

  visitSite(link) {
    // console.log('visit site');
    window.open(
      link, '_blank'
    )
  }

  handleSignout() {
    window.hideProfile = false;
    window.profilePic = null;
    this.props.signout();
    window.scrollTo(0, 0); 
  }

  render() {
    let randNum = Math.floor(Math.random() * (34 - 0) + 0);

    if (this.props.avatars.length === 35) {
      // console.log('RANDOM NUM', randNum)
      this.randomAvatar = this.props.avatars[randNum].image;
    }

    // console.log('PROFILE PROPS', this.props)
    return (
      <div className="profile-menu-container hidden" id="profile-menu">
        <div className="profile-menu">
          <p className="dropdown-username">{this.props.session.username}</p>
          <ul className="profile-links">

            <li id="link-to-site" onClick={this.newAvatar} className="change-profile-pic">
              <img className="profile-pic change" alt='' src={this.randomAvatar}></img>
              <p>Change Avatar</p>
            </li>

            <li id="link-to-site" onClick={() => this.visitSite("https://www.linkedin.com/in/hendrick-ramos/")}>
              LinkedIn
            </li>

            <li id="link-to-site" onClick={() => this.visitSite("https://angel.co/jobs/home")}>
              AngelList
            </li>            

            <li id="link-to-site" onClick={() => this.visitSite("https://github.com/hendricksimonr/")}>
              GitHub
            </li>     

            <li id="link-to-site" onClick={() => this.visitSite("https://github.com/hendricksimonr/")}>
              My Website
            </li>   

            <li id="link-to-site" onClick={this.handleSignout}>Log Out</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProfileMenu;
