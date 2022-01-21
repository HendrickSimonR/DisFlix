import React from 'react';
import { Link } from 'react-router-dom';

class SelectProfile extends React.Component {
  constructor(props) {
    super(props);

    this.hideSelect = this.hideSelect.bind(this);
    this.profileMickey = this.profileMickey.bind(this);
    this.profileDory = this.profileDory.bind(this);
    this.profileMoana = this.profileMoana.bind(this);
    this.profileC3PO = this.profileC3PO.bind(this);
    this.profileSpidey = this.profileSpidey.bind(this);
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

  profileMickey(e) {
    window.profilePic = window.mickey;
    this.handleScroll();
    this.hideSelect();
  }

  profileDory(e) {
    window.profilePic = window.dory;
    this.handleScroll();
    this.hideSelect();
  }

  profileMoana(e) {
    window.profilePic = window.moana;
    this.handleScroll();
    this.hideSelect();
  }

  profileC3PO(e) {
    window.profilePic = window.c3po;
    this.handleScroll();
    this.hideSelect();
  }

  profileSpidey(e) {
    window.profilePic = window.Spidey;
    this.handleScroll();
    this.hideSelect();
  }

  render() {
    return (
      <div className="select-profile-container">
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

export default SelectProfile;
