import React from 'react';
import SelectProfile from '../selectProfile/select_profile';
import BrandButtons from './brand_buttons';
import ThumbnailContainer from '../thumbnail/thumbnail_container';
import Featured from '../featured/featured';
import Footer from '../footer/footer';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignout = this.handleSignout.bind(this);
    this.watchlistLink = this.watchlistLink.bind(this);
    this.disney = React.createRef();
    this.pixar = React.createRef();
    this.marvel = React.createRef();
    this.starWars = React.createRef();
    this.natGeo = React.createRef();
    this.watchlist = React.createRef();
  }

  handleSignout() {
    // console.log('profile', window.profilePic)
    this.props.signout();
  }

  watchlistLink(){
    window.scrollTo(0, 0);
    this.props.history.push('/watchlist');
  }

  componentDidMount() {
    // console.log('HOME DID MOUNT')
    this.props.getMovies();
    // this.props.getLikes({user_id: this.props.user});
    // this.props.getDislikes({user_id: this.props.user});
    this.props.getWatchlist({user_id: this.props.user});
  }

  componentWillMount() {
    this.props.getLikes({user_id: this.props.user});
    this.props.getDislikes({user_id: this.props.user}); 
  }
 
  handleScroll = (direction, brand) => {
    if (direction === 'left') {

      if (brand === 'disney') {
        this.disney.current.style.transform = 'translateX(0px)';
        
        let mid = document.getElementsByClassName("thumbnail-container middle disney swiped");
        mid[0].classList.remove('swiped');

        let leftArrow = document.getElementsByClassName("material-icons left-arrow disney");
        let rightArrow = document.getElementsByClassName("material-icons right-arrow disney hidden");

        leftArrow[0].classList.add('hidden');
        rightArrow[0].classList.remove('hidden');

      } else if (brand === 'pixar') {
        this.pixar.current.style.transform = 'translateX(0px)';

        let mid = document.getElementsByClassName("thumbnail-container middle pixar swiped");
        mid[0].classList.remove('swiped');

        let leftArrow = document.getElementsByClassName("material-icons left-arrow pixar");
        let rightArrow = document.getElementsByClassName("material-icons right-arrow pixar hidden");

        leftArrow[0].classList.add('hidden');
        rightArrow[0].classList.remove('hidden');

      } else if (brand === 'marvel') {
        this.marvel.current.style.transform = 'translateX(0px)';

        let mid = document.getElementsByClassName("thumbnail-container middle marvel swiped");
        mid[0].classList.remove('swiped');

        let leftArrow = document.getElementsByClassName("material-icons left-arrow marvel");
        let rightArrow = document.getElementsByClassName("material-icons right-arrow marvel hidden");

        leftArrow[0].classList.add('hidden');
        rightArrow[0].classList.remove('hidden');

      } else if (brand === 'starWars') {
        this.starWars.current.style.transform = 'translateX(0px)';
        
        let mid = document.getElementsByClassName("thumbnail-container middle star-wars swiped");
        mid[0].classList.remove('swiped');

        let leftArrow = document.getElementsByClassName("material-icons left-arrow star-wars");
        let rightArrow = document.getElementsByClassName("material-icons right-arrow star-wars hidden");

        leftArrow[0].classList.add('hidden');
        rightArrow[0].classList.remove('hidden');

      } else if (brand === 'natGeo') {
        this.natGeo.current.style.transform = 'translateX(0px)';

        let mid = document.getElementsByClassName("thumbnail-container middle nat-geo swiped");
        mid[0].classList.remove('swiped');

        let leftArrow = document.getElementsByClassName("material-icons left-arrow nat-geo");
        let rightArrow = document.getElementsByClassName("material-icons right-arrow nat-geo hidden");

        leftArrow[0].classList.add('hidden');
        rightArrow[0].classList.remove('hidden');

      } else {
        this.watchlist.current.style.transform = 'translateX(0px)';

        let mid = document.getElementsByClassName("thumbnail-container middle watchlist swiped");
        mid[0].classList.remove('swiped');

        let leftArrow = document.getElementsByClassName("material-icons left-arrow watchlist");
        let rightArrow = document.getElementsByClassName("material-icons right-arrow watchlist hidden");

        leftArrow[0].classList.add('hidden');
        rightArrow[0].classList.remove('hidden');

      }

    } else if (direction === 'right') {

      if (brand === 'disney') {
        this.disney.current.style.transform = 'translateX(-78.5%)';

        let mid = document.getElementsByClassName("thumbnail-container middle disney");
        mid[0].classList.add('swiped');
        
        let leftArrow = document.getElementsByClassName("material-icons left-arrow disney hidden");
        let rightArrow = document.getElementsByClassName("material-icons right-arrow disney");

        leftArrow[0].classList.remove('hidden');
        rightArrow[0].classList.add('hidden');

      } else if (brand === 'pixar') {
        this.pixar.current.style.transform = 'translateX(-78.5%)';
        
        let mid = document.getElementsByClassName("thumbnail-container middle pixar");
        mid[0].classList.add('swiped');

        let leftArrow = document.getElementsByClassName("material-icons left-arrow pixar hidden");
        let rightArrow = document.getElementsByClassName("material-icons right-arrow pixar");

        leftArrow[0].classList.remove('hidden');
        rightArrow[0].classList.add('hidden');

      } else if (brand === 'marvel') {
        this.marvel.current.style.transform = 'translateX(-78.5%)';
        
        let mid = document.getElementsByClassName("thumbnail-container middle marvel");
        mid[0].classList.add('swiped');

        let leftArrow = document.getElementsByClassName("material-icons left-arrow marvel hidden");
        let rightArrow = document.getElementsByClassName("material-icons right-arrow marvel");

        leftArrow[0].classList.remove('hidden');
        rightArrow[0].classList.add('hidden');

      } else if (brand === 'starWars') {
        this.starWars.current.style.transform = 'translateX(-78.5%)';
        
        let mid = document.getElementsByClassName("thumbnail-container middle star-wars");
        mid[0].classList.add('swiped');

        let leftArrow = document.getElementsByClassName("material-icons left-arrow star-wars hidden");
        let rightArrow = document.getElementsByClassName("material-icons right-arrow star-wars");

        leftArrow[0].classList.remove('hidden');
        rightArrow[0].classList.add('hidden');

      } else if (brand === 'natGeo') {
        this.natGeo.current.style.transform = 'translateX(-78.5%)';
        
        let mid = document.getElementsByClassName("thumbnail-container middle nat-geo");
        mid[0].classList.add('swiped');

        let leftArrow = document.getElementsByClassName("material-icons left-arrow nat-geo hidden");
        let rightArrow = document.getElementsByClassName("material-icons right-arrow nat-geo");

        leftArrow[0].classList.remove('hidden');
        rightArrow[0].classList.add('hidden');

      } else {
        this.watchlist.current.style.transform = 'translateX(-78.5%)';
        
        let mid = document.getElementsByClassName("thumbnail-container middle watchlist");
        mid[0].classList.add('swiped');

        let leftArrow = document.getElementsByClassName("material-icons left-arrow watchlist hidden");
        let rightArrow = document.getElementsByClassName("material-icons right-arrow watchlist");

        leftArrow[0].classList.remove('hidden');
        rightArrow[0].classList.add('hidden');
      }
    }
  }

  // refreshPage() {
  //   window.location.reload(true);
  // }

  render() {
    // console.log('window', typeof(window.location.href))
    // console.log('HOMEPAGE', this.props);
    // console.log('state', this.state);

    this.disneyMovies = [];
    this.pixarMovies = [];
    this.marvelMovies = [];
    this.starWarsMovies = [];
    this.natGeoMovies = []; 
    this.watchlistMovies = [];

    let { movies } = this.props; //equivalent to this.props.movies
    let moviesArr = Object.values(movies);
    let watchlistObj = this.props.watchlist;
    let watchlistArr;
    // let disliked = false;

    if (Object.values(watchlistObj) !== undefined) {
      watchlistArr = Object.values(watchlistObj)
    }
    // moviesArr.sort(() => Math.random() - 0.5);

    if (moviesArr.length === 0) {
      return null;
    } else {
      // console.log('MOVIESARR', moviesArr);

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
    //   console.log('MOVIES', this.disneyMovies);
    //   console.log('MOVIES', this.pixarMovies);
    //   console.log('MOVIES', this.marvelMovies);
    //   console.log('MOVIES', this.starWarsMovies);
    //   console.log('MOVIES', this.natGeoMovies);
    // }

    let user = this.props.user;
    let watchlist = this.props.watchlist;
    let userWatchlistMovies = [];

    if (this.props.watchlist) {
      for (let i = 0; i < this.props.watchlist.length; i++) {
        userWatchlistMovies.push(this.props.watchlist[i].movie_id);
      };
    }

    
    // if (this.props.dislikes) {
    //   for (let i = 0; i < this.props.dislikes.length; i++) {
    //     let dislike = this.props.dislikes[i];

    //     for (let j = 0; j < moviesArr.length; j++) {
    //       let movie = moviesArr[j];
          
    //       if (dislike.movie_id === movie.id) {
    //         disliked = true;
    //         break;
    //       }
    //     } 
    //   }
    //   console.log('DISLIKED', disliked)
    // }


    // console.log('PROPITY', this.props);
    // console.log('PROPITYSTATE', this.state);
    

    return (
      <div className="home-container">
        <Featured />

        <div className="home-main">
          {window.profilePic ? null : <SelectProfile /> }
          <BrandButtons />

        
          <div className="movie-index">
            { (this.props.watchlist.includes('No watchlists!') && this.props.watchlist.length === 1) || this.props.watchlist === []

            ?  null //<div>
            //     <h1 className="row-header">Watchlist</h1>
            //       <ul className="movie-row" id="watchlist-movies-row" ref={this.watchlist}>
            //         <li className="thumbnail-container" >
            //           <img src={window.placeholder} className="thumbnail" id="placeholder" ></img>
            //         </li>
            //       </ul>
            //   </div>


            : <div>
                <h1 className="row-header">Watchlist</h1>

                <div className="scroll-arrows">
                  <span className="material-icons left-arrow watchlist hidden" onClick={() => this.handleScroll('left', 'watchlist')}>
                    arrow_back_ios
                  </span>
                  <span className="material-icons right-arrow watchlist" onClick={() => this.handleScroll('right', 'watchlist')}>
                    arrow_forward_ios
                  </span>
                </div>

                <ul className="movie-row" id="watchlist-movies-row" ref={this.watchlist}>
                  {this.watchlistMovies.slice(0, 8).map((movie, i) => (
                    <ThumbnailContainer likes={this.props.likes} dislikes={this.props.dislikes} brand={6} index={i} user={user} watchlist={watchlist} userMovies={userWatchlistMovies} key={movie.id} movie={movie} />
                  ))}

                  {this.watchlistMovies.length >= 9 ? 
                    <li className="thumbnail-container placeholder" >
                      <img onClick={this.watchlistLink} src={window.placeholder} className="thumbnail" id="placeholder" ></img>
                      <div className="thumbnail-functions placeholder">
                        Visit the Watchlist Page for your full watchlist!
                      </div>
                    </li> 
                  : null }
                </ul>
              </div> }


            <div>
              <h1 className="row-header">Disney</h1>
                
              <div className="scroll-arrows">
                <span className="material-icons left-arrow disney hidden" onClick={() => this.handleScroll('left', 'disney')}>
                  arrow_back_ios
                </span>
                <span className="material-icons right-arrow disney"  onClick={() => this.handleScroll('right', 'disney')}>
                  arrow_forward_ios
                </span>
              </div>
                
              <ul className="movie-row" id="disney-movies" ref={this.disney}>
                {this.disneyMovies.map((movie, i) => (
                  <ThumbnailContainer likes={this.props.likes} dislikes={this.props.dislikes} brand={movie.brand_id} index={i} user={user} watchlist={watchlist} userMovies={userWatchlistMovies} key={movie.id} movie={movie}/>
                ))}
              </ul>

            </div>
                
            <div>
              <h1 className="row-header">Pixar</h1>
                
              <div className="scroll-arrows">
                <span className="material-icons left-arrow pixar hidden" onClick={() => this.handleScroll('left', 'pixar')}>
                  arrow_back_ios
                </span>
                <span className="material-icons right-arrow pixar" onClick={() => this.handleScroll('right', 'pixar')}>
                  arrow_forward_ios
                </span>
              </div>

              <ul className="movie-row" id="pixar-movies" ref={this.pixar}>
                {this.pixarMovies.map((movie, i) => (
                  <ThumbnailContainer likes={this.props.likes} dislikes={this.props.dislikes} brand={movie.brand_id} index={i} user={user} watchlist={watchlist} userMovies={userWatchlistMovies} key={movie.id} movie={movie}/>
                ))}
              </ul>
            </div>
                
            <div>            
              <h1 className="row-header">Marvel</h1>

              <div className="scroll-arrows">
                <span className="material-icons left-arrow marvel hidden" onClick={() => this.handleScroll('left', 'marvel')}>
                  arrow_back_ios
                </span>
                <span className="material-icons right-arrow marvel" onClick={() => this.handleScroll('right', 'marvel')}>
                  arrow_forward_ios
                </span>
              </div>

              <ul className="movie-row" id="marvel-movies" ref={this.marvel}>
                {this.marvelMovies.map((movie, i) => (
                  <ThumbnailContainer likes={this.props.likes} dislikes={this.props.dislikes} brand={movie.brand_id} index={i} user={user} watchlist={watchlist} userMovies={userWatchlistMovies} key={movie.id} movie={movie} />
                ))}
              </ul>
            </div>

            <div>
              <h1 className="row-header">Star Wars</h1>

              <div className="scroll-arrows">
                <span className="material-icons left-arrow star-wars hidden" onClick={() => this.handleScroll('left', 'starWars')}>
                  arrow_back_ios
                </span>
                <span className="material-icons right-arrow star-wars" onClick={() => this.handleScroll('right', 'starWars')}>
                  arrow_forward_ios
                </span>
              </div>

              <ul className="movie-row" id="star-wars-movies" ref={this.starWars}>
                {this.starWarsMovies.map((movie, i) => (
                  <ThumbnailContainer likes={this.props.likes} dislikes={this.props.dislikes} brand={movie.brand_id} index={i} user={user} watchlist={watchlist} userMovies={userWatchlistMovies} key={movie.id} movie={movie} />
                ))}
              </ul>
            </div>

            <div>
              <h1 className="row-header ">National Geographic</h1>
                
              <div className="scroll-arrows">
                <span className="material-icons left-arrow nat-geo hidden" onClick={() => this.handleScroll('left', 'natGeo')}>
                  arrow_back_ios
                </span>
                <span className="material-icons right-arrow nat-geo" onClick={() => this.handleScroll('right', 'natGeo')}>
                  arrow_forward_ios
                </span>
              </div>

              <ul className="movie-row" id="nat-geo-movies" ref={this.natGeo}>
                {this.natGeoMovies.map((movie, i) => (
                  <ThumbnailContainer likes={this.props.likes} dislikes={this.props.dislikes} brand={movie.brand_id} index={i} user={user} watchlist={watchlist} userMovies={userWatchlistMovies} key={movie.id} movie={movie} />
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

        <Footer/>
      </div>
    );
  }
}

export default Home;

{/* <video className='video-test' autoPlay={true} playsInline={true} loop={true}>
            <source src="b1.button_video" type='video/mp4' />
          </video> */}