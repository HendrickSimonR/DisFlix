import React from 'react';
import { Link } from 'react-router-dom';
import WatchlistButtonContainer from './watchlist_button_container';

class Thumbnail extends React.Component {
  constructor(props) {
    super(props)
  }

  // hoverVideo() {
  //   this.uniqueId = (this.props.movie.brand_id).toString().concat(this.props.movie.id).concat(this.props.movie.year)
  //   let indexMovie = document.getElementById(this.uniqueId);
  //   indexMovie.play();
  // }

  // exitVideo() {
  //   this.uniqueId = (this.props.movie.brand_id).toString().concat(this.props.movie.id).concat(this.props.movie.year)
  //   let indexMovie = document.getElementById(this.uniqueId);
  //   indexMovie.load();
  // }

  hoverPlay(event) {
    event.target.play();
  }

  render() {
    // this.uniqueId = (this.props.movie.brand_id).toString().concat(this.props.movie.id).concat(this.props.movie.year);
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
      <li className="thumbnail-container" onMouseOver={event => this.hoverPlay(event)} onMouseOut={event => event.target.load()}>
        <video className="thumbnail" poster={this.props.movie.image_url}>
          <source src={this.props.movie.movie_url} type="video/mp4" /> 
        </video>
        <div className="thumbnail-functions">
          <div className="thumbnail-buttons">
            <span className="material-icons thumb-play-circle">play_circle</span>
            <WatchlistButtonContainer watchlistId={watchlistId} watchlist={watchlist} movieCheck={movieCheck} movieId={this.props.movie.id} />
          </div>
          <br />
          <div className="thumbnail-details">
            <h1>100% Match</h1>
            <h3>
              <strong className="thumb-rating">{this.props.movie.rating}</strong> 
              <strong className="thumb-runtime">{this.props.movie.runtime}</strong>
            </h3>
          </div>
        </div>
      </li>
    )
  }
}

export default Thumbnail;