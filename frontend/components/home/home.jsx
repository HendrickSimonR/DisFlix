import React from 'react';
import SelectProfile from '../selectProfile/select_profile';
import BrandButtons from './brand_buttons';
import Nav from './nav/nav';
import Thumbnail from './thumbnail';

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
    this.disneyMovies = [];
    this.pixarMovies = [];
    this.marvelMovies = [];
    this.starWarsMovies = [];
    this.natGeoMovies = []; 

    let {movies} = this.props; //equivalent to this.props.movies
    let moviesArr = Object.values(movies);

    if (moviesArr.length === 0) {
      return null;
    } else {
      moviesArr.forEach(movie => {
        if (movie['brand_id'] === 1) {
          this.disneyMovies.push(movie);
        } else if (movie['brand_id'] === 2) {
          this.pixarMovies.push(movie);
        } else if (movie['brand_id'] === 3) {
          this.marvelMovies.push(movie);
        } else if (movie['brand_id'] === 4 ) {
          this.starWarsMovies.push(movie);
        } else {
          this.natGeoMovies.push(movie);
        }
      })
    }

    if (this.disneyMovies.length > 1) {
      console.log(this.disneyMovies);
      console.log(this.pixarMovies);
      console.log(this.marvelMovies);
      console.log(this.starWarsMovies);
      console.log(this.natGeoMovies);
    }

    return (
      <div className="home-container">
        <div className="home-main">
        {/* <SelectProfile /> */}
        <BrandButtons />

        <div className="movie-index">
          <div>
          <h1 className="row-header">Disney</h1>
          <ul className="movie-row">
            {this.disneyMovies.map((movie) => (
              <Thumbnail key={movie.id} movie={movie}/>
            ))}
          </ul>
          </div>
          
          <div>
          <h1 className="row-header">Pixar</h1>
          <ul className="movie-row">
            {this.pixarMovies.map((movie) => (
              <Thumbnail key={movie.id} movie={movie}/>
            ))}
          </ul>
          </div>
          
          <div>
          <h1 className="row-header">Marvel</h1>
          <ul className="movie-row">
            {this.marvelMovies.map((movie) => (
              <Thumbnail key={movie.id} movie={movie} />
            ))}
          </ul>
          </div>

          <div>
          <h1 className="row-header">Star Wars</h1>
          <ul className="movie-row">
            {this.starWarsMovies.map((movie) => (
              <Thumbnail key={movie.id} movie={movie} />
            ))}
          </ul>
          </div>

          <div>
          <h1 className="row-header">National Geographic</h1>
          <ul className="movie-row">
            {this.natGeoMovies.map((movie) => (
              <Thumbnail key={movie.id} movie={movie} />
            ))}
          </ul>
          </div>
        </div>

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