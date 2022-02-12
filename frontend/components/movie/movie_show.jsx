import React from 'react';

class MovieShow extends React.Component {
  constructor(props) {
    super(props)

    this.movie;
    this.displayPoster;
    this.replayMovie;

    this.exitVideo = this.exitVideo.bind(this);
  }

  exitVideo() {
    window.moviePlay = false;
    this.props.history.goBack();
  }

  replayMovie() {
    let movie = document.getElementById('full-screen-movie');
    let poster = document.getElementById('full-screen-poster');
    let replay = document.getElementById('replay-full-movie');

    movie.load();
    movie.play();

    movie.style.display = 'inline-block';
    poster.style.display = 'none';
    replay.style.display = 'none';
  }

  displayPoster() {
    let movie = document.getElementById('full-screen-movie');
    let poster = document.getElementById('full-screen-poster');
    let replay = document.getElementById('replay-full-movie');

    movie.style.display = 'none';
    poster.style.display = 'inline-block';
    replay.style.display = 'inline-block';
  }

  render() {
    let moviesArr = Object.values(this.props.movies);
    
    if (moviesArr.length > 0) {
      for (let i = 0; i < moviesArr.length; i++) {
        let movie = moviesArr[i];
        if (movie.id === window.movieShow) {
          this.movie = movie;
        }
      }
    }

    return (
      <div className="full-screen-movie-page">
        <span 
          id="replay-full-movie"
          style={{display: 'none'}}
          onClick={this.replayMovie}
          className="material-icons-round replay-full-movie" 
        >
          refresh
        </span>

        <span 
          onClick={this.exitVideo}
          className="material-icons-sharp exit-video"
        >
          arrow_back
        </span>

        <div id="full-screen-poster" style={{ display: 'none'}}>
          <img 
            alt=''
            className="full-screen-poster"
            src={this.movie ? this.movie.image_url : null} 
          />
        </div>

        <video 
          controls
          autoPlay
          id="full-screen-movie"
          onEnded={this.displayPoster}
          className="full-screen-movie"
        >
          <source src={this.movie.movie_url} type="video/mp4" /> 
        </video>
        
      </div>
    )
  }
}

export default MovieShow;