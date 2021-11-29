import React from 'react';
import { Link } from 'react-router-dom';

class SelectProfile extends React.Component {
  constructor(props) {
    super(props);
    this.hideSelect = this.hideSelect.bind(this)
  }

  hideSelect(e) {
    let selectScreen = document.querySelector('.select-profile-container');
    selectScreen.classList.add('hidden');
    window.profHidden = true;
  }

  render() {
    return (
      <div className="select-profile-container">
        <img src={window.logo} className="select-profile-logo" />

        <h1 className="select-header">Who's Watching?</h1>

        <ul className="profiles">
          <li>
            <Link className="avatar-container" to="/home">
              <img src={window.mickey} onClick={this.hideSelect} className="avatar-hover" />
                <h2>Mickey</h2>
            </Link>
          </li>
          
          <li>
            <Link className="avatar-container" to="/home">
              <img src={window.dory} onClick={this.hideSelect} className="avatar-hover" />
              <h2>Dory</h2>
            </Link>
          </li>

          <li>
            <Link className="avatar-container" to="/home">
              <img src={window.moana} onClick={this.hideSelect} className="avatar-hover" />
              <h2>Moana</h2>
            </Link>
          </li>

          <li>
            <Link className="avatar-container" to="/home">
              <img src={window.c3po} onClick={this.hideSelect} className="avatar-hover" />
              <h2>C-3PO</h2>
            </Link>
          </li>

          <li>
            <Link className="avatar-container" to="/home">
              <img src={window.spidey} onClick={this.hideSelect} className="avatar-hover" />
              <h2>Spider-Man</h2>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default SelectProfile;
