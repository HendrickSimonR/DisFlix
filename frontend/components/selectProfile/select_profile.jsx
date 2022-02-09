import React from 'react';
import { Link } from 'react-router-dom';

class SelectProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    this.selected = [];
    this.selectProfile = this.selectProfile.bind(this);
    this.hideSelect = this.hideSelect.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    if (window.profilePic === undefined || window.profilePic === null) {
      let home = document.getElementById('home-reveal');
      home.style.position = 'fixed';
    }
  }

  refresh() {
    this.setState( { count: this.state.count += 1});
    this.selected = this.selected.sort(() => (Math.random() - 0.5));
  }

  hideSelect() {
    let nav = document.querySelector('#nav-bar');
    let selectScreen = document.getElementById('select-profiles');
    selectScreen.style.display = 'none';
    nav.classList.remove('nav-bar-hidden');
    nav.classList.add('nav-bar');
    window.hideProfile = true;
  }

  selectProfile(img) {
    window.profilePic = img;
    window.scrollTo(0, 0);
    this.hideSelect();

    // document.body.style.position = 'inherit';

    let homePage = document.getElementById('home-reveal');
    homePage.style.visibility = 'visible';
    homePage.style.position = 'inherit';

    if (window.hideProfile === true){
      let movie = document.querySelector(".brand-container-video.featured");
      movie.style.display = 'block';
      movie.play();
    }
  }

  render() {
    let avatars = Object.values(this.props.avatars);
    avatars = avatars.sort(() => (Math.random() - 0.5));

    if (avatars.length > 0 && this.selected.length < 35) {
      for (let i = 0; i < avatars.length; i++) {
        let avatar = avatars[i];

        let avatarContainer =
          <li id="avatar-select" key={i}>
            <Link onClick={() => this.selectProfile(avatar.image)} className="avatar-container" to="/home">
              <img src={avatar.image} className="avatar-hover" />
              <h2>{avatar.character}</h2>
            </Link>
          </li>

        this.selected.push(avatarContainer);
      }
    }

    return (
      <div id='select-profiles' className="select-profile-container">
        <img src={window.logo} className="select-profile-logo" />

        <h1 className="select-header">Who's Watching?</h1>

          { this.selected.length > 0 ?

          <ul className="profiles">
            {this.selected.slice(0, 5).map(avatar => (
              avatar
            ))}
          </ul>
            
          : '' 

          }

        <span onClick={this.refresh} className="material-icons-outlined re-run">
          refresh
        </span>       
      </div>
    );
  }
}

export default SelectProfile;

