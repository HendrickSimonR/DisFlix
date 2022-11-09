import React from 'react';

class ProfileMenu extends React.Component {
  constructor(props) {
    super(props)

    this.handleSignout = this.handleSignout.bind(this);
    this.visitSite = this.visitSite.bind(this);
    this.newAvatar = this.newAvatar.bind(this);
    this.randomAvatar;
    
    this.state = { 
      selectNew: false 
    }
  }

  newAvatar() {
    window.hideProfile = false;
    window.profilePic = null;

    if (window.location.href.includes('home')) {
      let selectScreen = document.getElementById('select-profiles');
      selectScreen.style.display = 'flex';

      this.setState({ selectNew: !this.state.selectNew});
    } else {
      this.props.history.push('/home');
    }
  }

  visitSite(link) {
    window.open(
      link, '_blank'
    )
  }

  handleSignout() {
    window.hideProfile = false;
    window.profilePic = null;
    this.props.signout();
    window.scrollTo(0, 0);
    // console.log(window.allowAccess) 
  }

  render() {
    let randNum = Math.floor(Math.random() * (34 - 0) + 0);

    if (this.props.avatars.length === 35) {
      this.randomAvatar = this.props.avatars[randNum].image;
    }

    return (
      <div className="profile-menu-container hide" id="profile-menu">
        <div className="profile-menu">
          <p className="dropdown-username">
            {this.props.session.username}
          </p>

          <ul id="profile-links">

            <li 
              id="link-to-site" 
              onClick={this.newAvatar} 
              className="change-profile-pic"
            >
              <img 
                alt='' 
                src={this.randomAvatar} 
                className="profile-pic change" 
              />

              <p>Change Avatar</p>
            </li>

            <div className="not-avatar">
              <li id="link-to-site" onClick={() => this.props.openModal('about')}>
                About Me

                <img 
                  alt='' 
                  id='img-to-site' 
                  className="mickey" 
                  src='https://i.imgur.com/HtJM1AM.png' 
                />
              </li>

              <li id="link-to-site" onClick={() => this.visitSite("https://hendrickramos.com")}>
                My Website

                <img 
                  alt='' 
                  className='web' 
                  id='img-to-site' 
                  src='https://i.imgur.com/V1TQaje.png' 
                />
              </li>   

              <li id="link-to-site" onClick={() => this.visitSite("https://www.linkedin.com/in/hendrick-ramos/")}>
                LinkedIn

                <img 
                  alt='' 
                  id='img-to-site' 
                  className="linked" 
                  src='https://i.imgur.com/uO5d91L.png' 
                />
              </li>

              <li id="link-to-site" onClick={() => this.visitSite("https://angel.co/u/hendrick-ramos")}>
                AngelList

                <img 
                  alt='' 
                  id='img-to-site' 
                  className="angel" 
                  src='https://i.imgur.com/NROnijm.png' 
                />
              </li>            

              <li id="link-to-site" onClick={() => this.visitSite("https://github.com/hendricksimonr/")}>
                GitHub

                <img 
                  alt='' 
                  className="git" 
                  id='img-to-site' 
                  src='https://i.imgur.com/Bj3ZPbm.png' 
                />
              </li>     

              <li id="link-to-site" onClick={() => this.visitSite("mailto:hendricksimonr@gmail.com")}>
                Email

                <img 
                  alt='' 
                  id='img-to-site' 
                  className="email" 
                  src='https://i.imgur.com/IGgldlO.png' 
                />
              </li>    

              <li id="link-to-site" onClick={this.handleSignout}>
                Log Out

                <img 
                  alt='' 
                  id='img-to-site'
                  className="keyhole" 
                  src='https://i.imgur.com/Q6GIubT.png' 
                />
              </li>

            </div>
          </ul>
          
        </div>
      </div>
    );
  }
}

export default ProfileMenu;
