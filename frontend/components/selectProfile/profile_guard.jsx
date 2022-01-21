import React from 'react';
import { Link } from 'react-router-dom';

class ProfileGuard extends React.Component {
  constructor(props) {
    super(props);
  }

  hideSelect(e) {
    let nav = document.querySelector('#nav-bar');
    let selectScreen = document.querySelector('.select-profile-container');
    selectScreen.classList.add('hidden');
    nav.classList.remove('nav-bar-hidden');
    nav.classList.add('nav-bar');
    window.hideProfile = true;
  }

  handleScroll() {
    window.scrollTo(0, 0);
  }

  render() {
    this.profiles = [];

    if (this.props.profiles) {
      let userProfiles = Object.values(this.props.profiles);
      console.log('userProfils', userProfiles)
    }



    return (
      <div className="select-profile-container">
        {/* <img src={this.props.profiles[3].avatar} />  THIS WORKS!  */}

        <img src={window.logo} className="select-profile-logo" />

        <h1 className="select-header">Who's Watching?</h1>

        <ul className="profiles">
          <li>
            <Link className="avatar-container" to="/home">
              <img src={window.mickey} onClick={this.profileMickey} className="avatar-hover" />
                <h2>Mickey</h2>
            </Link>
          </li>
          
          <li>
            <Link className="avatar-container" to="/home">
              <img src={window.dory} onClick={this.profileDory} className="avatar-hover" />
              <h2>Dory</h2>
            </Link>
          </li>

          <li>
            <Link className="avatar-container" to="/home">
              <img src={window.moana} onClick={this.profileMoana} className="avatar-hover" />
              <h2>Moana</h2>
            </Link>
          </li>

          <li>
            <Link className="avatar-container" to="/home">
              <img src={window.c3po} onClick={this.profileC3PO} className="avatar-hover" />
              <h2>C-3PO</h2>
            </Link>
          </li>

          <li>
            <Link className="avatar-container" to="/home">
              <img src={window.spidey} onClick={this.profileSpidey} className="avatar-hover" />
              <h2>Spider-Man</h2>
            </Link>
          </li>

        </ul>
      </div>
    );
  }
}

export default ProfileGuard;
