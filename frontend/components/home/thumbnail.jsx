import React from 'react';
import { Link } from 'react-router-dom';
import WatchlistButtonContainer from './watchlist_button_container'

class Thumbnail extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let watchlistId;
    let watchlist = this.props.watchlist;
    let user = this.props.watchlist;
    let {userMovies} = this.props;
    let movieCheck = false;
    if (userMovies) {
      if (userMovies.includes(this.props.movie.id)) {
        movieCheck = true;
      }
      for (let i = 0; i < this.props.watchlist.length; i++) {
        let watchlistMovie = this.props.watchlist[i];
        
        if (watchlistMovie.movie_id === this.props.movie.id) {
          watchlistId = watchlistMovie.id;
          break;
        }
      }
    } 

    console.log('THUMB', this.props)
    return (
      <li className="thumbnail-container">
        <img className="thumbnail" src={this.props.movie.image_url}></img>
        <div className="thumbnail-functions">
          <WatchlistButtonContainer watchlistId={watchlistId} watchlist={watchlist} movieCheck={movieCheck} movieId={this.props.movie.id} />
        </div>
      </li>
    )
  }
}

export default Thumbnail;