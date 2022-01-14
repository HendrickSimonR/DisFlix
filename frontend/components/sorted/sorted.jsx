import React from 'react';
import ThumbnailContainer from '../thumbnail/thumbnail_container';
import Footer from '../footer/footer';

// KEEP

class Sorted extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getMovies();
    this.props.getWatchlist({user_id: this.props.user});
  }

  render() {
    this.disney = [];
    this.pixar = [];
    this.marvel = [];
    this.starWars = [];
    this.natGeo = []; 
    this.watchlistMovies = [];

    let user = this.props.user;
    let { movies } = this.props; //equivalent to this.props.movies
    let allMovies = {};
    let moviesArr = Object.values(movies);
    let watchlistObj = this.props.watchlist;
    let location = window.location.href;
    // let renderCriteria = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40]

    if (moviesArr.length === 0) {
      return null;
    } else {
      moviesArr;
      moviesArr.forEach(movie => {
        if (movie['brand_id'] === 1) {
          this.disney.push(movie);
        } else if (movie['brand_id'] === 2) {
          this.pixar.push(movie);
        } else if (movie['brand_id'] === 3) {
          this.marvel.push(movie);
        } else if (movie['brand_id'] === 4 ) {
          this.starWars.push(movie);
        } else {
          this.natGeo.push(movie);
        }
      })

      allMovies['disney'] = this.disney;
      allMovies['pixar'] = this.pixar;
      allMovies['marvel'] = this.marvel;
      allMovies['starWars'] = this.starWars;
      allMovies['natGeo'] = this.natGeo;

      if (Object.values(watchlistObj) !== undefined) {
        let watchlistArr = Object.values(watchlistObj);

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
    }

    // if (watchlistArr === undefined || watchlistArr.length === 0) {
    //   return null;
    // } else {
    //   watchlistArr = Object.values(watchlistObj);

    //   for (let i = 0; i < watchlistArr.length; i++) {
    //     let watchlistMovie = watchlistArr[i];
    //     let watchlistMovieId = watchlistMovie.movie_id;

    //     for (let j = 0; j < moviesArr.length; j++) {
    //       let movie = moviesArr[j];

    //       if (movie.id === watchlistMovieId) {
    //         this.watchlistMovies.push(movie);
    //       }
    //     }
    //   }
    // }

    // let user = this.props.user;
    // let watchlist = this.props.watchlist;
    // let userWatchlistMovies = [];

    // if (this.props.watchlist) {
    //   for (let i = 0; i < this.props.watchlist.length; i++) {
    //     userWatchlistMovies.push(this.props.watchlist[i].movie_id);
    //   };
    // }

    let films;



    if (location.includes('disney')) {
      films = allMovies['disney'].reverse();
    } else if (location.includes('pixar')) {
      films = allMovies['pixar'].reverse();
    } else if (location.includes('marvel')) {
      films = allMovies['marvel'].reverse();
    } else if (location.includes('starwars')) {
      films = allMovies['starWars'].reverse();
    } else if (location.includes('natgeo')) {
      films = allMovies['natGeo'].reverse();
    } else if (location.includes('watchlist')) {
      films = this.watchlistMovies;
    }
    
    // moviesArr.sort(() => Math.random() - 0.5);
    
    // console.log('DISNEY', this.state, this.props)
    // console.log('WINDOW', location)
    // console.log('FILMS', films)
    // console.log('ALL', allMovies)


    return (
      <div className={ location.includes('watchlist') ? "watchlist-container" 
        : location.includes('disney') ? "films-container disney" 
        : location.includes('pixar') ? "films-container pixar" 
        : location.includes('marvel') ? "films-container marvel" 
        : location.includes('starwars') ? "films-container star-wars" 
        : "films-container nat-geo" }>
        
        { location.includes('watchlist') 
        
        ? 

        <div>
          <ul className="films-rows">
            { this.watchlistMovies.map((movie) => (
              <ThumbnailContainer likes={this.props.likes} dislikes={this.props.dislikes} user={user} watchlist={this.props.watchlist} key={movie.id} movie={movie} />
              ))}
          </ul>
        </div>

        : location.includes('disney') ? 
        
        <div>
          <ul className="films-rows">
            { this.disney.map((movie) => (
              <ThumbnailContainer likes={this.props.likes} dislikes={this.props.dislikes} user={user} watchlist={this.props.watchlist} key={movie.id} movie={movie} />
            ))}
          </ul>
        </div>
        
        : location.includes('pixar') ? 

        <div>
          <ul className="films-rows">
            { this.pixar.map((movie) => (
              <ThumbnailContainer likes={this.props.likes} dislikes={this.props.dislikes} user={user} watchlist={this.props.watchlist} key={movie.id} movie={movie} />
            ))}
          </ul>
        </div>  
        
        : location.includes('marvel') ?

        <div>
          <ul className="films-rows">
            { this.marvel.map((movie) => (
              <ThumbnailContainer likes={this.props.likes} dislikes={this.props.dislikes} user={user} watchlist={this.props.watchlist} key={movie.id} movie={movie} />
            ))}
          </ul>
        </div>

        : location.includes('starwars') ?

        <div>
          <ul className="films-rows">
            { this.starWars.map((movie) => (
              <ThumbnailContainer likes={this.props.likes} dislikes={this.props.dislikes} user={user} watchlist={this.props.watchlist} key={movie.id} movie={movie} />
            ))}
          </ul>
        </div>

        : 

        <div>
          <ul className="films-rows">
            { this.natGeo.map((movie) => (
              <ThumbnailContainer likes={this.props.likes} dislikes={this.props.dislikes} user={user} watchlist={this.props.watchlist} key={movie.id} movie={movie} />
            ))}
          </ul>
        </div>

        }

        <Footer/>
      </div>
    )
  }
}

export default Sorted;