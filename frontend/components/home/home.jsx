import React from 'react';
import SelectProfile from '../selectProfile/select_profile';
import BrandButtons from './brand_buttons';
import AvatarsContainer from '../avatars/avatars_container';
import ThumbnailContainer from '../thumbnail/thumbnail_container';
import Featured from '../featured/featured';
import Footer from '../footer/footer';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      loading: true 
    };

    this.loader;
    this.profileSelect;

    this.disney = React.createRef();
    this.pixar = React.createRef();
    this.marvel = React.createRef();
    this.starWars = React.createRef();
    this.natGeo = React.createRef();
    this.watchlist = React.createRef();

    this.handleSignout = this.handleSignout.bind(this);
    this.watchlistLink = this.watchlistLink.bind(this);
  }

  playFeatured() {
    let movieContainer = document.getElementById('featured-movie-container');
    let movie = document.querySelector(".brand-container-video.featured");
    movieContainer.style.display = 'block';
    movie.style.display = 'block';
    movie.load();
    movie.play();
  }

  handleSignout() {
    this.props.signout();
  }

  watchlistLink(){
    window.scrollTo(0, 0);
    this.props.history.push('/watchlist');
  }

  componentDidMount() {
    this.props.getAvatars();
    this.props.getBrands();
    this.props.getMovies();
    this.props.getWatchlist({user_id: this.props.user});
    this.props.getLikes({user_id: this.props.user});
    this.props.getDislikes({user_id: this.props.user}); 
    this.props.getProfiles({user_id: this.props.user});

    if (window.hideProfile === true) {
      let selectScreen = document.getElementById('select-profiles');
      let homePage = document.getElementById('home-reveal');
      selectScreen.style.display = 'none';
      homePage.style.visibility = 'visible';
      this.playFeatured();
      this.setState({ loading: false });
    }

    if (window.hideProfile !== true) {
      setTimeout(() => {
        this.setState({ loading: false }),
        this.handleProfiles()
      }, 3000);
    }
  }

  handleProfiles() {
    let selectScreen = document.getElementById('select-profiles');
    selectScreen.style.display = 'flex';
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

  render() {
    this.disneyMovies = [];
    this.pixarMovies = [];
    this.marvelMovies = [];
    this.starWarsMovies = [];
    this.natGeoMovies = []; 
    this.watchlistMovies = [];

    
    
    let featured;
    let watchlistArr;
    let { movies } = this.props; 
    let moviesArr = Object.values(movies);
    let user = this.props.user;
    let watchlist = this.props.watchlist;
    let userWatchlistMovies = [];

    if (Object.values(watchlist) !== undefined) {
      watchlistArr = Object.values(watchlist)
    }

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
      });

    }

    if (watchlistArr === undefined || watchlistArr.length === 0) {
      return null;
    } else {
      watchlistArr = Object.values(watchlist);

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

    if (this.props.watchlist) {
      for (let i = 0; i < this.props.watchlist.length; i++) {
        userWatchlistMovies.push(this.props.watchlist[i].movie_id);
      };
    }

    if (this.state.loading === true) {

      this.loader =           
        <div id='brand-loader-home' className='loader-container home'>
          <img className='brand-loader home' src={window.loader} alt='' />
        </div>

    } else {
      this.loader = '';
    }

    let brandsArr = Object.values(this.props.brands);

    if (brandsArr.length > 0) {
      for (let i = 0; i < brandsArr.length; i++) {
        let brand = brandsArr[i];

        if (brand.name === 'Featured') {
          featured = brand;
        }
      }
    }

    return (
      <div className="home-container">

        { window.hideProfile === true ? '' :  this.loader }

        <SelectProfile avatars={this.props.avatars} />

        <div id="home-reveal" style={{ visibility: 'hidden' }}>
          <Featured featured={featured} openModal={this.props.openModal}/>

          <div className="home-main">
            <BrandButtons />

            <div className="movie-index">
              { (this.props.watchlist.includes('No watchlists!') && this.props.watchlist.length === 1) 
                || this.props.watchlist === []

              ?  null 

              : <div>
                  <h1 className="row-header">Watchlist</h1>

                  { this.watchlistMovies.length > 5 ? 

                    <div className="scroll-arrows">
                      <span className="material-icons left-arrow watchlist hidden" onClick={() => this.handleScroll('left', 'watchlist')}>
                       arrow_back_ios
                      </span>
                      <span className="material-icons right-arrow watchlist" onClick={() => this.handleScroll('right', 'watchlist')}>
                        arrow_forward_ios
                      </span>
                    </div> 

                    : null 
                  }

                  <ul className="movie-row" id="watchlist-movies-row" ref={this.watchlist}>

                    {this.watchlistMovies.slice(0, 8).map((movie, i) => (
                      <ThumbnailContainer 
                        index={i} 
                        brand={6} 
                        user={user} 
                        movie={movie} 
                        key={movie.id} 
                        watchlistItem={true} 
                        watchlist={watchlist} 
                        likes={this.props.likes} 
                        dislikes={this.props.dislikes} 
                        userMovies={userWatchlistMovies} 
                      />
                    ))}

                    {this.watchlistMovies.length >= 9 ? 

                      <li className="thumbnail-container placeholder" >
                        <img 
                          id="placeholder" 
                          className="thumbnail" 
                          src={window.placeholder} 
                          onClick={this.watchlistLink} 
                        />

                        <div className="thumbnail-functions placeholder">
                          Visit the Watchlist Page for your full watchlist!
                        </div>
                      </li> 

                      : null 
                    }

                  </ul>
                </div> 
              }


              <div>
                <h1 className="row-header">Disney</h1>
                    
                <div className="scroll-arrows">
                  <span 
                    className="material-icons left-arrow disney hidden" 
                    onClick={() => this.handleScroll('left', 'disney')}
                  >
                    arrow_back_ios
                  </span>
                  <span 
                    className="material-icons right-arrow disney"  
                    onClick={() => this.handleScroll('right', 'disney')}
                  >
                    arrow_forward_ios
                  </span>
                </div>
                    
                <ul className="movie-row" id="disney-movies" ref={this.disney}>
                  {this.disneyMovies.map((movie, i) => (
                    <ThumbnailContainer 
                      index={i} 
                      user={user} 
                      movie={movie}
                      key={movie.id} 
                      watchlist={watchlist} 
                      watchlistItem={false} 
                      brand={movie.brand_id} 
                      likes={this.props.likes} 
                      dislikes={this.props.dislikes} 
                      userMovies={userWatchlistMovies} 
                    />
                  ))}
                </ul>

              </div>
                  
              <div>
                <h1 className="row-header">Pixar</h1>
                  
                <div className="scroll-arrows">
                  <span 
                    className="material-icons left-arrow pixar hidden" 
                    onClick={() => this.handleScroll('left', 'pixar')}
                  >
                    arrow_back_ios
                  </span>
                  <span 
                    className="material-icons right-arrow pixar" 
                    onClick={() => this.handleScroll('right', 'pixar')}
                  >
                    arrow_forward_ios
                  </span>
                </div>

                <ul className="movie-row" id="pixar-movies" ref={this.pixar}>
                  {this.pixarMovies.map((movie, i) => (
                    <ThumbnailContainer 
                      index={i} 
                      user={user} 
                      movie={movie}
                      key={movie.id} 
                      watchlist={watchlist} 
                      watchlistItem={false} 
                      brand={movie.brand_id} 
                      likes={this.props.likes} 
                      dislikes={this.props.dislikes} 
                      userMovies={userWatchlistMovies} 
                    />
                  ))}
                </ul>
              </div>
                  
              <div>            
                <h1 className="row-header">Marvel</h1>

                <div className="scroll-arrows">
                  <span 
                    className="material-icons left-arrow marvel hidden" 
                    onClick={() => this.handleScroll('left', 'marvel')}
                  >
                    arrow_back_ios
                  </span>
                  <span 
                    className="material-icons right-arrow marvel" 
                    onClick={() => this.handleScroll('right', 'marvel')}
                  >
                    arrow_forward_ios
                  </span>
                </div>

                <ul className="movie-row" id="marvel-movies" ref={this.marvel}>
                  {this.marvelMovies.map((movie, i) => (
                    <ThumbnailContainer 
                      index={i} 
                      user={user} 
                      movie={movie} 
                      key={movie.id} 
                      watchlist={watchlist} 
                      watchlistItem={false} 
                      brand={movie.brand_id} 
                      likes={this.props.likes} 
                      dislikes={this.props.dislikes} 
                      userMovies={userWatchlistMovies} 
                    />
                  ))}
                </ul>
              </div>

              <div>
                <h1 className="row-header">Star Wars</h1>

                <div className="scroll-arrows">
                  <span 
                    className="material-icons left-arrow star-wars hidden" 
                    onClick={() => this.handleScroll('left', 'starWars')}
                  >
                    arrow_back_ios
                  </span>
                  <span 
                    className="material-icons right-arrow star-wars" 
                    onClick={() => this.handleScroll('right', 'starWars')}
                  >
                    arrow_forward_ios
                  </span>
                </div>

                <ul className="movie-row" id="star-wars-movies" ref={this.starWars}>
                  {this.starWarsMovies.map((movie, i) => (
                    <ThumbnailContainer 
                      index={i} 
                      user={user} 
                      movie={movie} 
                      key={movie.id} 
                      watchlist={watchlist}
                      watchlistItem={false} 
                      brand={movie.brand_id} 
                      likes={this.props.likes} 
                      dislikes={this.props.dislikes} 
                      userMovies={userWatchlistMovies} 
                    />
                  ))}
                </ul>
              </div>

              <div>
                <h1 className="row-header ">National Geographic</h1>
                  
                <div className="scroll-arrows">
                  <span 
                    className="material-icons left-arrow nat-geo hidden" 
                    onClick={() => this.handleScroll('left', 'natGeo')}
                  >
                    arrow_back_ios
                  </span>
                  <span 
                    className="material-icons right-arrow nat-geo" 
                    onClick={() => this.handleScroll('right', 'natGeo')}
                  >
                    arrow_forward_ios
                  </span>
                </div>

                <ul className="movie-row" id="nat-geo-movies" ref={this.natGeo}>
                  {this.natGeoMovies.map((movie, i) => (
                    <ThumbnailContainer 
                      index={i} 
                      user={user} 
                      movie={movie} 
                      key={movie.id} 
                      watchlist={watchlist} 
                      watchlistItem={false} 
                      brand={movie.brand_id} 
                      likes={this.props.likes} 
                      dislikes={this.props.dislikes} 
                      userMovies={userWatchlistMovies} 
                    />
                  ))}
                </ul>
              </div>

            </div>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
