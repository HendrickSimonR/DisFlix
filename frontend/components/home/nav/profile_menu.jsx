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
    window.hideProfile = false;
    window.profilePic = null;

    if (window.location.href.includes('home')) {
      // let loader = document.getElementById('brand-loader-home');
      // loader.style.display = 'none';
      let selectScreen = document.getElementById('select-profiles');
      // console.log('SELECT SCREEN', selectScreen);
      selectScreen.style.display = 'flex';
      this.setState({ selectNew: !this.state.selectNew})
    } else {
      this.props.history.push('/home');
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
      <div className="profile-menu-container hide" id="profile-menu">
        <div className="profile-menu">
          <p className="dropdown-username">{this.props.session.username}</p>
          <ul id="profile-links">

            <li id="link-to-site" onClick={this.newAvatar} className="change-profile-pic">
              <img className="profile-pic change" alt='' src={this.randomAvatar}></img>
              <p>Change Avatar</p>
            </li>

            <div className="not-avatar">
              <li id="link-to-site" onClick={() => this.props.openModal('about')}>
                About Me
                <img id='img-to-site' className="mickey" alt='' src='https://i.imgur.com/HtJM1AM.png' />
              </li>

              <li id="link-to-site" onClick={() => this.visitSite("https://github.com/hendricksimonr/")}>
                My Website
                <img id='img-to-site' className='web' alt='' src='https://i.imgur.com/V1TQaje.png' />
              </li>   

              <li id="link-to-site" onClick={() => this.visitSite("https://www.linkedin.com/in/hendrick-ramos/")}>
                LinkedIn
                <img id='img-to-site' className="linked" alt='' src='https://i.imgur.com/uO5d91L.png' />
              </li>

              <li id="link-to-site" onClick={() => this.visitSite("https://angel.co/jobs/home")}>
                AngelList
                <img id='img-to-site' className="angel" alt='' src='https://i.imgur.com/NROnijm.png' />
              </li>            

              <li id="link-to-site" onClick={() => this.visitSite("https://github.com/hendricksimonr/")}>
                GitHub
                <img id='img-to-site' className="git" alt='' src='https://i.imgur.com/Bj3ZPbm.png' />
              </li>     

              <li id="link-to-site" onClick={() => this.visitSite("mailto:hendricksimonr@gmail.com")}>
                Email
                <img id='img-to-site' className="email" alt='' src='https://i.imgur.com/IGgldlO.png' />
              </li>    

              <li id="link-to-site" onClick={this.handleSignout}>
                Log Out
                <img id='img-to-site' className="keyhole" alt='' src='https://i.imgur.com/Q6GIubT.png' />
              </li>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProfileMenu;
