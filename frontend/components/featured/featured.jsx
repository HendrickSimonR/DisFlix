import * as React from 'react';
import { withRouter } from 'react-router';

class Featured extends React.Component {
  constructor(props) {
    super(props)
    this.showMovie = this.showMovie.bind(this);
    this.playFeatured = this.playFeatured.bind(this);
    this.displayPoster = this.displayPoster.bind(this);
    this.displayShadow = this.displayShadow.bind(this);
    this.replayFeatured = this.replayFeatured.bind(this);
    this.state = { mute: 'volume_up', moviePlay: true }
  }

  showMovie() {
    let movie = document.getElementById('brand-container-video');
    window.movieTime = movie.currentTime;
    this.stopFeatured();
    this.props.openModal('1');
  }

  playFeatured() {
    window.moviePlay = true;
    window.movieShow = 1;
    this.props.history.push('/movie');
  }

  stopFeatured() {
    let mainContainer = document.getElementById('featured-container');
    let movieContainer = document.getElementById('featured-movie-container');
    let featuredMovie = document.getElementById('brand-container-video');

    featuredMovie.pause();
    featuredMovie.currentTime = 30;

    this.setState({ moviePlay: false});

    movieContainer.style.display = 'none';
    mainContainer.style.animation = 'fadeIn ease 1s';
    mainContainer.style.height = '103vh';
  }

  displayShadow() {
    this.setState({ moviePlay: true })
    let mainContainer = document.getElementById('featured-container');
    let movieContainer = document.getElementById('featured-movie-container');
  }

  displayPoster() {
    let movieContainer = document.getElementById('featured-movie-container');
    let mainContainer = document.getElementById('featured-container');

    movieContainer.style.display = 'none';

    mainContainer.style.animation = 'fadeIn ease 1s';
    mainContainer.style.height = '103vh';

    this.setState({ moviePlay: false });
  }

  replayFeatured() {
    this.displayPoster();

    let movieContainer = document.getElementById('featured-movie-container');
    let movie = document.querySelector(".brand-container-video.featured");

    movie.load();

    if (this.state.mute === 'volume_off') movie.muted = true;

    movie.play();

    movieContainer.style.display = 'block';
    movie.style.display = 'block';
  }

  handleMute(e){
    if(this.state.mute === 'volume_up'){

      this.setState({mute: 'volume_off'})
      let vid = document.querySelector(".brand-container-video.featured");
      if (vid) vid.muted = true;   
      window.featuredVolume = 'off';

    } else {

      this.setState({mute: 'volume_up'})
      let vid = document.querySelector(".brand-container-video.featured");
      if (vid) vid.muted = false;
      window.featuredVolume = 'on';

    }
  }

  render() {
    let movie = this.props.featured.movie_url;

    return (
      <div className="featured" id="featured-container">
        
        <div className="featured-movie-container" id="featured-movie-container">
          <video 
            poster="" 
            playsInline 
            style={{display: 'none'}}
            id="brand-container-video" 
            className="brand-container-video featured" 
            onPlay={() => this.displayShadow()} 
            onEnded={() => this.displayPoster()} 
          >
            <source src={movie} type="video/mp4" /> 
          </video>

          <div id="featured-video-shadow" className="featured-video-shadow" ></div>
        </div>
      
      <div className="featured-info" id='featured-info'>

        <img 
          alt="" 
          className="featured-logo" 
          src="https://i.imgur.com/bfllKfa.png" 
        />

        <div className="featured-buttons">

          <div className="featured-left">
            <div className="featured-play-button" onClick={this.playFeatured}>
              <h1>
                <span className="material-icons-sharp">play_arrow</span>
              </h1>

              <h2>Play</h2>
            </div>

            <div className="featured-info-button" onClick={this.showMovie}>
              <span className="material-icons-outlined featured-info-icon">
                info
              </span>

              <h2>More Info</h2>
            </div>
          </div>

          <div className="featured-right"> 
            <span 
              className='material-icons-round featured-volume' 
              onClick={
                this.state.moviePlay === true 
                ? (e) => this.handleMute(e) 
                : () => this.replayFeatured()
              }
            >

              { this.state.moviePlay === true ? 
                this.state.mute : 'refresh' 
              }

            </span>
            
            <p>TV-PG</p>
          </div>
        </div>
      </div>
    </div>
    )
  }      
}


export default withRouter(Featured);