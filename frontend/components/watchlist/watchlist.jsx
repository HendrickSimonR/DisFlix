import React from 'react';
import Thumbnail from '../home/thumbnail';

class Watchlist extends React.Component {
  constructor(props) {
    super(props);
    // this.handleSignout = this.handleSignout.bind(this);
  }

  // handleSignout() {
  //   this.props.signout();
  // }

  componentDidMount() {
    this.props.getMovies();
    this.props.getWatchlist({user_id: this.props.user})
  }

  render() {
    this.watchlistMovies = [];

    let user = this.props.user;
    let { movies } = this.props;
    let moviesArr = Object.values(movies);

    if (moviesArr.length === 0) {
      return null;
    } else {
      if (this.props.watchlist) {
        for (let i = 0; i < this.props.watchlist.length; i++) {
          let watchlistMovie = this.props.watchlist[i];
          let watchlistMovieInfoId = watchlistMovie.movie_id;
          // console.log ('watchlistMovieInfoId', watchlistMovieInfoId, this.props.watchlist);

          for (let j = 0; j < moviesArr.length; j++) {
            let movie = moviesArr[j];
            // console.log('watchlistMovie SECOND FOR LOOP', movie.id)

            if (movie.id === watchlistMovieInfoId) {
              this.watchlistMovies.push(movie);
            }
          }
        }

        // console.log("WATCHLIST MOVIES PAGE", this.watchlistMovies)
      }
    }

    // console.log('WATCHLIST PROPS', this.props)
    //this.props.watchlist to get watchlist 
    return(
      <div className="watchlist-container">
        <ul className="films-rows">
          {this.watchlistMovies.map((movie) => (
            <Thumbnail user={user} watchlist={this.props.watchlist} key={movie.id} movie={movie}/>
          ))}
        </ul>
      </div>
    )
  }
}

export default Watchlist;