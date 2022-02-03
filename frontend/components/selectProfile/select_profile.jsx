import React from 'react';
import { Link } from 'react-router-dom';

class SelectProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
    this.selected = [];
    console.log('SELECT PROPS', this.props)
    // this.selectAvatars = this.selectAvatars.bind(this);
    this.selectProfile = this.selectProfile.bind(this);
    this.hideSelect = this.hideSelect.bind(this);
    this.refresh = this.refresh.bind(this);
    // this.profileMickey = this.profileMickey.bind(this);
    // this.profileDory = this.profileDory.bind(this);
    // this.profileMoana = this.profileMoana.bind(this);
    // this.profileC3PO = this.profileC3PO.bind(this);
    // this.profileSpidey = this.profileSpidey.bind(this);
  }

  refresh() {
    this.setState( { count: this.state.count += 1});
    console.log(this.state.count);
    this.selected = this.selected.sort(() => (Math.random() - 0.5));
  }

  hideSelect() {
    let nav = document.querySelector('#nav-bar');
    let selectScreen = document.getElementById('select-profiles');
    selectScreen.style.display = 'none';
    // console.log('bullshit', nav, selectScreen)
    nav.classList.remove('nav-bar-hidden');
    nav.classList.add('nav-bar');
    window.hideProfile = true;
  }

  handleScroll() {
    window.scrollTo(0, 0);
  }

  // selectProfile(pic) {
  //   window.profilePic = ;
  //   this.handleScroll();
  //   this.hideSelect(); 
  // }

  // componentDidMount() {
  //   let selected = this.selectAvatars();
  //   this.setState({ selectedAvatars: selected })
  //   console.log('did it work', this.state)
  // }

  // selectAvatars() {
  //   let avatars = Object.values(this.props.avatars);
  //   let selected = [];
  //   avatars = avatars.sort(() => (Math.random() - 0.5));
    
  //   let i = 0;
  //   while (i < 5) {
  //     selected.push(avatars[i]);
  //     this.state.selectedAvatars.push(avatars[i]);
  //     console.log('select', selected, this.state)
  //     i++;
  //   }

  //   // this.setState({ selectedAvatars: selected })
  //   console.log('THIS HAPPENS HERE', this.state)
  // }

  selectProfile(img) {
    window.profilePic = img;
    console.log('stuff', window.profilePic)
    this.handleScroll();
    this.hideSelect();
    let homePage = document.getElementById('home-reveal');
    homePage.style.visibility = 'visible';
    if (window.hideProfile === true){
      let movie = document.querySelector(".brand-container-video.featured");
      movie.style.display = 'block';
      movie.play();
    }
  }

  // profileMickey(e) {
  //   window.profilePic = window.mickey;
  //   this.handleScroll();
  //   this.hideSelect();
  // }

  // profileDory(e) {
  //   window.profilePic = window.dory;
  //   this.handleScroll();
  //   this.hideSelect();
  // }

  // profileMoana(e) {
  //   window.profilePic = window.moana;
  //   this.handleScroll();
  //   this.hideSelect();
  // }

  // profileC3PO(e) {
  //   window.profilePic = window.c3po;
  //   this.handleScroll();
  //   this.hideSelect();
  // }

  // profileSpidey(e) {
  //   window.profilePic = window.Spidey;
  //   this.handleScroll();
  //   this.hideSelect();
  // }

  render() {
    // let link = [];


    // let sample = <p>HOOPLAH</p>
    // link.push(sample);

    // console.log('link', link)
    // let avatars = null;
    let avatars = Object.values(this.props.avatars);
    avatars = avatars.sort(() => (Math.random() - 0.5));

    // console.log('avatars', avatars, this.props.avatars)
    
    // IMPORTANT!
    // if (avatars.length > 0) {
    //   let i = 0;
    //   while (i < 5) {
    //     this.selected.push(avatars[i]);
    //     avatars.pop();
    //   // this.state.selectedAvatars.push(avatars[i]);
    //     // console.log('select', this.selected, this.state)
    //     i++;
    //   }
    // }

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
        console.log('selected', this.selected);
      }
    }


    // if (this.state.selectedAvatars.length < 0) {
    //   avatars = this.state.selectedAvatars;
    // }

    // this.profiles.map(profile => {
    //   let name = profile.profile_name;
    //   let avatar = profile.avatar;

    //   console.log('PROFILESTUFF', name, avatar)
      // console.log('SELECTPROPS', this.props, this.state)
    // });




    return (
      <div id='select-profiles' className="select-profile-container">
        {/* <img src={this.props.profiles[3].avatar} /> */}

        <img src={window.logo} className="select-profile-logo" />

        <h1 className="select-header">Who's Watching?</h1>

        { this.selected.length > 0 ?

        <ul className="profiles">
          {this.selected.slice(0, 5).map(avatar => (
            avatar
          ))}

          {/* <li>
            <Link onClick={() => this.selectProfile(0)} className="avatar-container" to="/home">
              <img src={this.selected[0].image} className="avatar-hover" />
              <h2>{this.selected[0].character}</h2>
            </Link>
          </li>

          <li>
            <Link onClick={() => this.selectProfile(1)} className="avatar-container" to="/home">
              <img src={this.selected[1].image} className="avatar-hover" />
              <h2>{this.selected[1].character}</h2>
            </Link>
          </li>

          <li>
            <Link onClick={() => this.selectProfile(2)} className="avatar-container" to="/home">
              <img src={this.selected[2].image} className="avatar-hover" />
              <h2>{this.selected[2].character}</h2>
            </Link>
          </li>

          <li>
            <Link onClick={() => this.selectProfile(3)} className="avatar-container" to="/home">
              <img src={this.selected[3].image} className="avatar-hover" />
              <h2>{this.selected[3].character}</h2>
            </Link>
          </li>

          <li>
            <Link onClick={() => this.selectProfile(4)} className="avatar-container" to="/home" >
              <img src={this.selected[4].image} className="avatar-hover" />
              <h2>{this.selected[4].character}</h2>
            </Link>
          </li> */}
          
          {/* <li>
            <Link className="avatar-container" to="/home">
              <img src={this.profiles[0].avatar} onClick={this.profileMickey} className="avatar-hover" />
                <h2>{this.profiles[0].profile_name}</h2>
            </Link>
          </li> */}

          {/* <li>
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
          </li> */}

          {/* <li>
            <Link className="avatar-container" to="/home">
              <img src={window.mickey} onClick={this.profileMickey} className="avatar-hover" />
                <h2>Mickey</h2>
            </Link>
          </li>
          
          <li>
            <Link className="avatar-container" to="/home">
              <img src={this.profiles[0].avatar} onClick={this.profileMickey} className="avatar-hover" />
                <h2>{this.profiles[0].profile_name}</h2>
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
          </li> */}

          {/* <li>
            {this.selected.map((avatar) => {
              <Link className="avatar-container" to="/home">
                <img src={avatar.image} onClick={this.profileSpidey} className="avatar-hover" />
                <h2>{avatar.character}</h2>
              </Link>
              })}
          </li> */}

        </ul>
          : '' }

        <span onClick={this.refresh} className="material-icons-outlined re-run">
          refresh
        </span>       
        {/* <Link to='/home'>
          <span className="material-icons-outlined re-run">
            refresh
          </span>
        </Link> */}
      </div>
    );
  }
}

export default SelectProfile;
