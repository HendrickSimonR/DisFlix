import React from 'react';

class MovieShow extends React.Component {
  constructor(props) {
    super(props)

    this.movie;
    this.exitVideo = this.exitVideo.bind(this);
    this.displayPoster;
    this.replayMovie;
  }

  // componentDidMount() {
  //   let el = document.getElementById('poop');
  //   if (el.requestFullscreen) {
  //     el.requestFullscreen();
  //   } else if (el.msRequestFullscreen) {
  //     el.msRequestFullscreen();
  //   } else if (el.mozRequestFullScreen) {
  //     el.mozRequestFullScreen();
  //   } else if (el.webkitRequestFullscreen) {
  //     el.webkitRequestFullscreen();
  //   }
  // }

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

    console.log('show', this.props)
    console.log('MOVIEEEEEE', this.movie)
    return (
      <div className="full-screen-movie-page">
        <span 
          id="replay-full-movie"
          className="material-icons-round replay-full-movie" 
          style={{display: 'none'}}
          onClick={this.replayMovie}
        >
          refresh
        </span>
        <span 
          className="material-icons-sharp exit-video"
          onClick={this.exitVideo}
        >
          arrow_back
        </span>
        <div id="full-screen-poster" style={{ display: 'none'}}>
          <img 
            alt 
            src={this.movie ? this.movie.image_url : null} 
            className="full-screen-poster"
          />
        </div>
        <video 
          // id={this.uniqueId} 
          controls
          autoPlay
          id="full-screen-movie"
          className="full-screen-movie"
          // poster={this.props.movie.image_url} 
          // onClick={() => this.toggleFullScreen(this.uniqueId)}
          // muted={false}
          onEnded={this.displayPoster}
        >
          <source src={this.props.test} type="video/mp4" /> 
        </video>
      </div>
    )
  }
}

export default MovieShow;