import React from "react";
import LikeButtonsContainer from '../thumbnail/like_buttons_container';
import WatchlistButtonContainer from '../thumbnail/watchlist_button_container';
import { withRouter } from 'react-router';

class MovieModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { movie: null }
  }

  // componentDidMount() {
  //   this.props.getMovie(this.props.movie);
  //   // console.log('film', film)
  //   // this.setState 
  // }

  render() {
    let film = null;
    let watchlistId;

    let moviesArr = Object.values(this.props.movies);
    if (moviesArr.length === 0) {
      return null;
    } else {
      // console.log('WTF')
      for (let i = 0; i < moviesArr.length; i++) {
        let movie = moviesArr[i];
        // debugger
        // console.log('movie', movie);
        // console.log('findmovie', this.props.movie)

        if (this.props.movie === movie.id) {
          film = movie;
        }
      }

      if (this.props.watchlist) { 
        for (let i = 0; i < this.props.watchlist.length; i++) {
          let watchlistMovie = this.props.watchlist[i];
          if (watchlistMovie.movie_id === film.id) {
            watchlistId = watchlistMovie.id;
            break;
          } 
        } 
      }
    }



    
    console.log('MODAL PROPS', this.props)
    console.log('MOVIE PROPS ', film)

    return (
      <div className="movie-modal">
        <div className="modal-movie-player">
          <video className="modal-movie" poster={film.image_url}>
            <source src={this.props.movie.movie_url} type="video/mp4" /> 
          </video>
          <div className="modal-movie-shadow"></div>
        </div>
        
        <div className="movie-modal-details">
          <div className="movie-modal-buttons">
            <div className="movie-modal-play">
              <h2><span className="material-icons">play_arrow</span></h2>
              <h2>PLAY</h2>
            </div>
            <WatchlistButtonContainer movieId={film.id} userId={this.props.user} watchlistId={watchlistId} />
            <LikeButtonsContainer movieId={film.id} user={this.props.user} />
          </div>

          <div className="movie-modal-bottom">
            <div className="movie-modal-left">
              <div className="movie-modal-info">
                <h1>100% Match</h1>
                <h2>{film.rating}</h2>
                <h2>{film.runtime}</h2>
              </div>
              <div className="modal-description">
                {film.description}
              </div>
            </div>
            <div className="movie-modal-right">
              <div>Cast: <span>{film.cast}, more</span></div>
              <div>Genres: <span>{film.tags}</span></div>
              <div>This feature is: <span>{film.topic}</span></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(MovieModal);