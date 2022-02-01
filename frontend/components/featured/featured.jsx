import * as React from 'react';
import ReactDOM from 'react-dom';
// import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// import PlayArrow from '@mui/material/Button';

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
    // video.style.animation = 'fadeOut linear 1s';
    // movieContainer.style.animation = 'fadeOut ease 1s';
    featuredMovie.pause();
    // featuredMovie.load();
    featuredMovie.currentTime = 30;
    this.setState({ moviePlay: false});
    movieContainer.style.display = 'none';
    mainContainer.style.animation = 'fadeIn ease 1s';
    mainContainer.style.height = '103vh';
  }

  displayShadow() {
    console.log('HOOOPLAH')
    this.setState({ moviePlay: true })
    // let shadow = document.getElementById('featured-video-shadow');
    let mainContainer = document.getElementById('featured-container');
    let movieContainer = document.getElementById('featured-movie-container');
    // mainContainer.style.animation = 'fadeOut linear 1s';
    // mainContainer.style.transition = 'all 0.1s ease 5s';
    // movieContainer.style.animation = 'fadeIn ease 1.5s';
    // movieContainer.style.top = '-18vh'; 
  }

  displayPoster() {
    // let video = document.getElementById('brand-container-video');
    // let image = document.getElementById('brand-container-poster');
    let mainContainer = document.getElementById('featured-container');
    let movieContainer = document.getElementById('featured-movie-container');
    // video.style.animation = 'fadeOut linear 1s';
    // movieContainer.style.animation = 'fadeOut ease 1s';
    movieContainer.style.display = 'none';
    mainContainer.style.animation = 'fadeIn ease 1s';
    mainContainer.style.height = '103vh';
    this.setState({ moviePlay: false });
    // image.style.display = 'none';
    // container.style.background = 'inline'
  }

  replayFeatured() {
    this.displayPoster();
    let movieContainer = document.getElementById('featured-movie-container');
    let movie = document.querySelector(".brand-container-video.featured");
    movie.load();
    movie.play();
    movieContainer.style.display = 'block';
    movie.style.display = 'block';
  }

  handleMute(e){
    if(this.state.mute === 'volume_up'){
      this.setState({mute: 'volume_off'})
      let vid = document.querySelector(".brand-container-video.featured");
      if (vid) vid.muted = true;    
    } else {
      this.setState({mute: 'volume_up'})
      let vid = document.querySelector(".brand-container-video.featured");
      if (vid) vid.muted = false;
    }
  }

  // muteFromThumb() {
  //   this.setState({ mute: 'volume_off' });
  // }

  

  render() {
    let movie = this.props.featured.movie_url;
    // let vid = document.querySelector(".brand-container-video.featured");

    // if (vid && vid.muted === true) this.muteFromThumb;

    console.log('FEATURED', this.props, this.state);


    return (
      <div className="featured" id="featured-container">
      {/* <img className="featured-background" src="https://i.imgur.com/roimLHs.jpg" alt="" /> */}
        {/* <img id="brand-container-poster" className="brand-container-video" src="https://i.imgur.com/roimLHs.jpg" alt='' /> */}
        
        <div className="featured-movie-container" id="featured-movie-container">
          <video 
            onPlay={() => this.displayShadow()} 
            playsInline 
            poster="" 
            className="brand-container-video featured" 
            id="brand-container-video" 
            onEnded={() => this.displayPoster()} 
            style={{display: 'none'}}
          >
            <source src={movie} type="video/mp4" /> 
          </video>
          <div className="featured-video-shadow" id="featured-video-shadow"></div>
        </div>
      
      <div className="featured-info" id='featured-info'>
        <img className="featured-logo" src="https://i.imgur.com/bfllKfa.png" alt="" />
        
        
        
        {/* <div className="blurb">
          <h3>In celebration of the 50th Anniversary of</h3> 
          <h3>Walt Disney World Resort, taking viewers on</h3> 
          <h3>a journey spanning half a century and beyond.</h3>
        </div> */}



        <div className="featured-buttons">

          <div className="featured-left">
            <div 
              className="featured-play-button"
              onClick={this.playFeatured}
            >
              <h1><span className="material-icons-sharp">play_arrow</span></h1>
              <h2>Play</h2>
            </div>
            <div className="featured-info-button" onClick={this.showMovie}>
              <span className="material-icons-outlined featured-info-icon">
                info
              </span>
              <h2>More Info</h2>
            </div>
          </div>
          {/* <button variant="contained" className="featured-play"> */}
            {/* <PlayArrow /> */}
            {/* <span>Play</span> */}
          {/* </button> */}
          {/* <button className="featured-more"> */}
            {/* <InfoOutlined /> */}
            {/* <span>More Info</span> */}
          {/* </button> */}
          <div className="featured-right"> 
            <span className='material-icons-round featured-volume' onClick={this.state.moviePlay === true ? (e) => this.handleMute(e) : () => this.replayFeatured()}>
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