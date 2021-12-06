import React from 'react';
import SelectProfile from '../selectProfile/select_profile';
import BrandButtons from './brand_buttons';
import Nav from './nav/nav';
import Thumbnail from './thumbnail';
import Featured from '../featured/featured';
import WatchlistContainer from '../watchlist/watchlist_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignout = this.handleSignout.bind(this);
    this.disney = React.createRef();
    this.pixar = React.createRef();
    this.marvel = React.createRef();
    this.starWars = React.createRef();
    this.natGeo = React.createRef();
    this.watchlist = React.createRef();
  }

  handleSignout() {
    this.props.signout();
    // this.props.history.push('/');
  }

  componentDidMount() {
    this.props.getMovies();
    this.props.getWatchlist({user_id: this.props.user})
  }

  handleScroll = (direction, brand) => {
    if (direction === 'left') {
      if (brand === 'disney') {
        this.disney.current.style.transform = 'translateX(0px)';
      } else if (brand === 'pixar') {
        this.pixar.current.style.transform = 'translateX(0px)';
      } else if (brand === 'marvel') {
        this.marvel.current.style.transform = 'translateX(0px)';
      } else if (brand === 'starWars') {
        this.starWars.current.style.transform = 'translateX(0px)';
      } else if (brand === 'natGeo') {
        this.natGeo.current.style.transform = 'translateX(0px)';
      } else {
        this.watchlist.current.style.transform = 'translateX(0px)';
      }
    } else if (direction === 'right') {
      if (brand === 'disney') {
        this.disney.current.style.transform = 'translateX(-1270px)';
      } else if (brand === 'pixar') {
        this.pixar.current.style.transform = 'translateX(-761px)';
      } else if (brand === 'marvel') {
        this.marvel.current.style.transform = 'translateX(-1013px)';
      } else if (brand === 'starWars') {
        this.starWars.current.style.transform = 'translateX(-511px)';
      } else if (brand === 'natGeo') {
        this.natGeo.current.style.transform = 'translateX(-511px)';
      } else {
        this.watchlist.current.style.transform = 'translateX(-1270px)';
      }
    }
  }

  refreshPage() {
    window.location.reload(true);
  }

  render() {
    this.disneyMovies = [];
    this.pixarMovies = [];
    this.marvelMovies = [];
    this.starWarsMovies = [];
    this.natGeoMovies = []; 
    this.watchlistMovies = [];

    let {movies} = this.props; //equivalent to this.props.movies
    let moviesArr = Object.values(movies);
    let watchlistObj = this.props.watchlist;
    let watchlistArr;

    if (Object.values(watchlistObj) !== undefined) {
      watchlistArr = Object.values(watchlistObj)
    }
    // moviesArr.sort(() => Math.random() - 0.5);

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

    if (watchlistArr === undefined || watchlistArr.length === 0) {
      return null;
    } else {
      watchlistArr = Object.values(watchlistObj);
      for (let i = 0; i < watchlistArr.length; i++) {
        let watchlistMovie = watchlistArr[i];
        let watchlistMovieId = watchlistMovie.movie_id;

        for (let j = 0; j < moviesArr.length; j++) {
          let movie = moviesArr[j];

          if (movie.id === watchlistMovieId) {
            this.watchlistMovies.push(movie);
          }
        }
      }
    }

    // if (this.disneyMovies.length > 1) {
    //   console.log(this.disneyMovies);
    //   console.log(this.pixarMovies);
    //   console.log(this.marvelMovies);
    //   console.log(this.starWarsMovies);
    //   console.log(this.natGeoMovies);
    // }
    let user = this.props.user;
    let watchlist = this.props.watchlist;
    let userWatchlistMovies = [];

    if (this.props.watchlist) {
      for (let i = 0; i < this.props.watchlist.length; i++) {
        userWatchlistMovies.push(this.props.watchlist[i].movie_id);
      };
    }

    // console.log('PROPITY', this.props);
  
    return (
      <div className="home-container">
        <Featured />
        <WatchlistContainer />
        <div className="home-main">
        <SelectProfile />
        <BrandButtons />

        
        <div className="movie-index">
          {this.props.watchlist.includes('No watchlists!') && this.props.watchlist.length === 1 
        
          ? <div>
                <h1 className="row-header">Watchlist</h1>
                <ul className="movie-row" id="watchlist-movies-row" ref={this.watchlist}>
                  <li className="thumbnail-container" onMouseOver={event => this.hoverPlay(event)} onMouseOut={event => event.target.load()}>
                    <img src={window.placeholder} className="thumbnail" id="placeholder" ></img>
                  </li>
                </ul>
            </div>
        
          
          : <div>
            <h1 className="row-header">Watchlist</h1>
            <span className="material-icons left-arrow" onClick={() => this.handleScroll('left', 'watchlist')}>
              arrow_back_ios
            </span>
            <span className="material-icons right-arrow" onClick={() => this.handleScroll('right', 'watchlist')}>
              arrow_forward_ios
            </span>
            <ul className="movie-row" id="watchlist-movies-row" ref={this.watchlist}>
              {this.watchlistMovies.map((movie) => (
                <Thumbnail user={user} watchlist={watchlist} userMovies={userWatchlistMovies} key={movie.id} movie={movie} />
              ))}
            </ul>
          </div> }

          <div>
            <h1 className="row-header">Disney</h1>
              <span className="material-icons left-arrow" onClick={() => this.handleScroll('left', 'disney')}>
                arrow_back_ios
              </span>
              <span className="material-icons right-arrow" onClick={() => this.handleScroll('right', 'disney')}>
                arrow_forward_ios
              </span>
                <ul className="movie-row" id="disney-movies" ref={this.disney}>
              {this.disneyMovies.map((movie) => (
                <Thumbnail user={user} watchlist={watchlist} userMovies={userWatchlistMovies} key={movie.id} movie={movie}/>
              ))}
            </ul>
          </div>
          
          <div>
          <h1 className="row-header">Pixar</h1>
            <span class="material-icons left-arrow" onClick={() => this.handleScroll('left', 'pixar')}>
              arrow_back_ios
            </span>
            <span className="material-icons right-arrow" onClick={() => this.handleScroll('right', 'pixar')}>
              arrow_forward_ios
            </span>
              <ul className="movie-row" id="pixar-movies" ref={this.pixar}>
            {this.pixarMovies.map((movie) => (
              <Thumbnail user={user} watchlist={watchlist} userMovies={userWatchlistMovies} key={movie.id} movie={movie}/>
            ))}
          </ul>
          </div>
          
          <div>
          <h1 className="row-header">Marvel</h1>
            <span class="material-icons left-arrow" onClick={() => this.handleScroll('left', 'marvel')}>
              arrow_back_ios
            </span>
            <span className="material-icons right-arrow" onClick={() => this.handleScroll('right', 'marvel')}>
              arrow_forward_ios
            </span>
              <ul className="movie-row" id="marvel-movies" ref={this.marvel}>
            {this.marvelMovies.map((movie) => (
              <Thumbnail user={user} watchlist={watchlist} userMovies={userWatchlistMovies} key={movie.id} movie={movie} />
            ))}
          </ul>
          </div>

          <div>
              <h1 className="row-header">Star Wars</h1>
            <span class="material-icons left-arrow" onClick={() => this.handleScroll('left', 'starWars')}>
              arrow_back_ios
            </span>
            <span className="material-icons right-arrow" onClick={() => this.handleScroll('right', 'starWars')}>
              arrow_forward_ios
            </span>
              <ul className="movie-row" id="star-wars-movies" ref={this.starWars}>
            {this.starWarsMovies.map((movie) => (
              <Thumbnail user={user} watchlist={watchlist} userMovies={userWatchlistMovies} key={movie.id} movie={movie} />
            ))}
          </ul>
          </div>

          <div>
          <h1 className="row-header ">National Geographic</h1>
            <span class="material-icons left-arrow" onClick={() => this.handleScroll('left', 'natGeo')}>
              arrow_back_ios
            </span>
            <span className="material-icons right-arrow" onClick={() => this.handleScroll('right', 'natGeo')}>
              arrow_forward_ios
            </span>
              <ul className="movie-row" id="nat-geo-movies" ref={this.natGeo}>
            {this.natGeoMovies.map((movie) => (
              <Thumbnail user={user} watchlist={watchlist} userMovies={userWatchlistMovies} key={movie.id} movie={movie} />
            ))}
          </ul>
          </div>
        </div>

          {/* <div className='sign-out-container'>
            <button 
              className='signout-button' 
              onClick={this.handleSignout}>SIGN OUT
            </button>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Home;

{/* <video className='video-test' autoPlay={true} playsInline={true} loop={true}>
            <source src="b1.button_video" type='video/mp4' />
          </video> */}