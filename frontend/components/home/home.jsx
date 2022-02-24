import React from 'react';
import SelectProfile from '../selectProfile/select_profile';
import BrandButtons from './brand_buttons';
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

  handleScroll = ( direction, brand ) => {
    let ref;

    let mid = [
      document.getElementsByClassName(`thumbnail-container middle ${brand} swiped`),
      document.getElementsByClassName(`thumbnail-container middle ${brand}`)
    ]

    let leftArrow = [
      document.getElementsByClassName(`material-icons left-arrow ${brand}`),
      document.getElementsByClassName(`material-icons left-arrow ${brand} hidden`)
    ];

    let rightArrow = [
      document.getElementsByClassName(`material-icons right-arrow ${brand}`),
      document.getElementsByClassName(`material-icons right-arrow ${brand} hidden`)
    ];

    if (brand === 'disney') {
      ref = this.disney;
    } else if (brand === 'pixar') {
      ref = this.pixar;
    } else if (brand === 'marvel') {
      ref = this.marvel;
    } else if (brand === 'star-wars') {
      ref = this.starWars;
    } else if (brand === 'nat-geo') {
      ref = this.natGeo;
    } else {
      ref = this.watchlist;
    }

    if (direction === 'left') {
      ref.current.style.transform = 'translateX(0px)';
      mid[0][0].classList.remove('swiped');
      leftArrow[0][0].classList.add('hidden');
      rightArrow[1][0].classList.remove('hidden');
    } else {
      ref.current.style.transform = 'translateX(-78.5%)';
      mid[1][0].classList.add('swiped');
      leftArrow[1][0].classList.remove('hidden');
      rightArrow[0][0].classList.add('hidden');
    }
  }

  render() {
    this.disneyMovies = [];
    this.pixarMovies = [];
    this.marvelMovies = [];
    this.starWarsMovies = [];
    this.natGeoMovies = []; 
    this.watchlistMovies = [];
    
    let allMovies = [];
    let brandRows = [];
    let watchlistComponent;
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

      allMovies = [
        this.disneyMovies,
        this.pixarMovies,
        this.marvelMovies,
        this.starWarsMovies,
        this.natGeoMovies
      ];

      let headers = [ 'Disney', 'Pixar', 'Marvel', 'Star Wars', 'National Geographic' ];
      let input = [ 'disney', 'pixar', 'marvel', 'star-wars', 'nat-geo' ];
      let refs = [ this.disney, this.pixar, this.marvel, this.starWars, this.natGeo ];
      
      for (let i = 0; i < allMovies.length; i++) {
        let movies = allMovies[i];
        let currentInput = input[i];
        let currentRef = refs[i];
        let header = headers[i];

        let scrollLeft = `material-icons left-arrow ${currentInput} hidden`;
        let scrollRight = `material-icons right-arrow ${currentInput}`;
        let id = `${currentInput}-movies`
        
        let brandContainer = 
          <div key={`${header}-${i}`}>
            <h1 className="row-header">{ header }</h1>
                    
              <div className="scroll-arrows">
                <span 
                  className={scrollLeft} 
                  onClick={() => this.handleScroll('left', currentInput)}
                >
                  arrow_back_ios
                </span>
                <span 
                  className={scrollRight}  
                  onClick={() => this.handleScroll('right', currentInput)}
                >
                  arrow_forward_ios
                </span>
              </div>
                    
              <ul className="movie-row" id={id} ref={currentRef}>
                {movies.map((movie, i) => (
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

        brandRows.push(brandContainer);
      }
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

      watchlistComponent = 
        this.watchlistMovies.slice(0, 8).map((movie, i) => (
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
        ))
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

    let placeholderComponent = 
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

    return (
      <div className="home-container">

        { window.hideProfile === true ? '' :  this.loader }

        <SelectProfile avatars={this.props.avatars} />

        <div id="home-reveal" style={{ visibility: 'hidden' }}>
          <Featured featured={featured} openModal={this.props.openModal} />

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

                  <ul className="movie-row" id="watchlist-movies" ref={this.watchlist}>
                    { watchlistComponent }

                    { this.watchlistMovies.length >= 9 ? 
                      placeholderComponent  
                      : null 
                    }
                  </ul>
                </div> 
              }
                
              { brandRows.map((component) => (
                component 
              ))}

            </div>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
