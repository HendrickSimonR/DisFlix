import React from "react";
import LikeButtonsContainer from '../thumbnail/like_buttons_container';
import WatchlistButtonContainer from '../thumbnail/watchlist_button_container';
import { withRouter } from 'react-router';

class MovieModal extends React.Component {
  constructor(props) {
    super(props);

    this.displayPoster = this.displayPoster.bind(this);
    this.watchMovie = this.watchMovie.bind(this);
    this.handleLoader = this.handleLoader.bind(this);
    this.uniqueId;
    this.posterId;
    this.film;

    this.state = { 
      mute: 'volume_up', 
      moviePlay: true, 
      movieComponent: null, 
    }
  }

  componentDidMount() {
    this.setState({ movieComponent: this.uniqueId })
    let indexMovie = document.getElementById(this.uniqueId);
    indexMovie.currentTime = window.movieTime;  
  }

  handleLoader() {
    let loader = document.getElementById('brand-loader-modal');
    loader.style.display = 'none';
    window.scrollTo(0,0);
  }

  watchMovie() {
    window.movieShow = this.film.id;
    window.moviePlay = true;
    let indexMovie = document.getElementById(this.uniqueId);
    indexMovie.pause()
    indexMovie.load()
    this.displayPoster(this.posterId, this.uniqueId);
    this.props.closeModal();
    this.props.history.push('/movie');
  }

  handleMute(id){
    if (this.state.mute === 'volume_up'){
      this.setState({mute: 'volume_off'});
      let vid = document.getElementById(id);
      console.log('id', id)
      if (vid) vid.muted = true;    
    } else {
      this.setState({mute: 'volume_up'});
      let vid = document.getElementById(id);
      if (vid) vid.muted = false;
    }
  }

  replayFeatured(posterId, movieId) {
    this.setState({ moviePlay: !this.state.moviePlay });
    let movie = document.getElementById(movieId);
    let poster = document.getElementById(posterId);
    poster.style.display = 'none';
    movie.style.display = 'inline-block';
    movie.play();
  }

  displayPoster(posterId, movieId) {
    let movie = document.getElementById(movieId);
    let poster = document.getElementById(posterId);
    movie.style.display = 'none';
    poster.style.animation = 'fadeIn ease 1s'
    poster.style.display = 'inline-block';
    this.setState({ moviePlay: !this.state.moviePlay });
  }
  // componentDidMount() {
  //   this.props.getMovie(this.props.movie);
  //   // console.log('film', film)
  //   // this.setState 
  // }

  render() {
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
          this.film = movie;
          this.uniqueId = movie.id + 444;
          this.posterId = movie.id + 777;        
          break;
        }
      }

      if (this.props.watchlist) { 
        for (let i = 0; i < this.props.watchlist.length; i++) {
          let watchlistMovie = this.props.watchlist[i];
          if (watchlistMovie.movie_id === this.film.id) {
            watchlistId = watchlistMovie.id;
            break;
          } 
        } 
      }
    }

    console.log('MODAL PROPS', this.props)
    console.log('MOVIE PROPS ', this.film)

    return (
      <div className="movie-modal">
        <div className="modal-movie-player">
          <div id='brand-loader-modal' className='loader-container modal'>
            <img className='brand-loader modal' src={window.loader} alt='' />
          </div>
          <img 
            alt 
            id={this.posterId}
            src={this.film.image_url} 
            className='modal-movie' 
            onClick={this.showMovie}
            style={{ display: 'none'}}
          />

          <video 
            id={this.uniqueId} 
            onPlay={this.handleLoader}
            autoPlay
            playsInline
            className="modal-movie"
            poster={this.film.image_url} 
            onClick={this.showMovie}
            muted={window.moviePlay === true ? true : false}
            onEnded={() => this.displayPoster(this.posterId, this.uniqueId)}
          >
            <source src={this.props.test} type="video/mp4" /> 
          </video>

          <div className="modal-movie-shadow"></div>
        </div>

        <div onClick={this.props.closeModal}>
          <span className="material-icons-sharp close-modal">
            cancel
          </span>
          <span className="material-icons-round" id="close-fill">
            circle
          </span>
        </div>
        
        <div className="movie-modal-details">
          {this.state.moviePlay === true ? <h1 id="modal-title">{this.film.title}</h1> : null}
          <div className="movie-modal-buttons">
            <div className="movie-modal-buttons-left">
              <div className="movie-modal-play" onClick={() => this.watchMovie(this.uniqueId)}>
                <h1><span className="material-icons-sharp">play_arrow</span></h1>
                <h2>Play</h2>
              </div>
              <WatchlistButtonContainer modalButton={true} movieId={this.film.id} userId={this.props.user} watchlistId={watchlistId} watchlist={this.props.watchlist} />
              <LikeButtonsContainer modalButton={true} movieId={this.film.id} user={this.props.user} />
            </div>

            <div className="movie-modal-buttons-right">
              <span 
                className='material-icons-round modal-volume-on' id={this.uniqueId + 'volume'}
                onClick={this.state.moviePlay === true ? () => this.handleMute(this.uniqueId) : () => this.replayFeatured(this.posterId, this.uniqueId)}
              >
                { this.state.moviePlay === true ? 
                  this.state.mute : 'refresh' 
                }
              </span>
            </div>
          </div>

          <div className="movie-modal-bottom">
            <div className="movie-modal-left">
              <div className="movie-modal-info">
                <h1>100% Match</h1>
                <h3>{this.film.year}</h3>
                <h2>{this.film.rating}</h2>
                <h3>{this.film.runtime}</h3>
              </div>
              <div className="modal-description">
                {this.film.description}
              </div>
            </div>
            <div className="movie-modal-right">
              <div>Cast: <span>{this.film.cast}</span></div>
              <div>Genres: <span>{this.film.tags}</span></div>
              <div>This feature is: <span>{this.film.topic}</span></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(MovieModal);