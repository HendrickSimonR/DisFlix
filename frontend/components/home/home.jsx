import React from 'react';
import SelectProfile from '../selectProfile/select_profile';
import BrandButtons from './brand_buttons';
import Nav from './nav/nav';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignout = this.handleSignout.bind(this)
  }

  handleSignout() {
    this.props.signout();
    // this.props.history.push('/');
  }

  componentDidMount() {
    this.props.getMovies()
  }

  render() {
    let {movies} = this.props; //equivalent to this.props.movies

    if (!movies) {
      return null;
    }

    console.log(movies); //Object.values(movies).map

    return (
      <div className="home-container">
        <div className="home-main">
        <SelectProfile />
        <BrandButtons />
          <div className='sign-out-container'>
            <button 
              className='signout-button' 
              onClick={this.handleSignout}>SIGN OUT
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

{/* <video className='video-test' autoPlay={true} playsInline={true} loop={true}>
            <source src="b1.button_video" type='video/mp4' />
          </video> */}