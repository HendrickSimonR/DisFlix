import * as React from 'react';
import ReactDOM from 'react-dom';
// import PlayArrow from '@mui/material/Button';

class Featured extends React.Component {
  constructor(props) {
    super(props)
    this.displayPoster = this.displayPoster.bind(this);
    this.displayShadow = this.displayShadow.bind(this);
  }

  displayShadow() {
    console.log('HOOOPLAH')
    // let shadow = document.getElementById('featured-video-shadow');
    let mainContainer = document.getElementById('featured-container');
    let movieContainer = document.getElementById('featured-movie-container');
    // mainContainer.style.animation = 'fadeOut linear 1s';
    // mainContainer.style.transition = 'all 0.1s ease 5s';
    // movieContainer.style.animation = 'fadeIn ease 1.5s';
    movieContainer.style.top = '-15vh'; 
  }

  displayPoster() {
    // let video = document.getElementById('brand-container-video');
    // let image = document.getElementById('brand-container-poster');
    let mainContainer = document.getElementById('featured-container');
    let movieContainer = document.getElementById('featured-movie-container');
    // video.style.animation = 'fadeOut linear 1s';
    movieContainer.style.animation = 'fadeOut ease 1s';
    movieContainer.style.display = 'none';
    mainContainer.style.animation = 'fadeIn ease 1s';
    mainContainer.style.height = '103vh';
    // image.style.display = 'none';
    // container.style.background = 'inline'
  }

  

  render() {
    let movie = this.props.featured.movie_url;
    console.log('FEATURED', this.props)

    return (
      <div className="featured" id="featured-container">
      {/* <img className="featured-background" src="https://i.imgur.com/roimLHs.jpg" alt="" /> */}
        {/* <img id="brand-container-poster" className="brand-container-video" src="https://i.imgur.com/roimLHs.jpg" alt='' /> */}
        
        <div className="featured-movie-container" id="featured-movie-container">
          <video onPlay={() => this.displayShadow()} playsInline poster="" className="brand-container-video featured" id="brand-container-video" onEnded={() => this.displayPoster()}>
            <source src={movie} type="video/mp4" /> 
          </video>
          <div className="featured-video-shadow" id="featured-video-shadow"></div>
        </div>
      
      <div className="featured-info">
        <img className="featured-logo" src="https://i.imgur.com/bfllKfa.png" alt="" />
        
        
        
        {/* <div className="blurb">
          <h3>In celebration of the 50th Anniversary of</h3> 
          <h3>Walt Disney World Resort, taking viewers on</h3> 
          <h3>a journey spanning half a century and beyond.</h3>
        </div> */}



        <div className="featured-buttons">
          {/* <button variant="contained" className="featured-play"> */}
            {/* <PlayArrow /> */}
            {/* <span>Play</span> */}
          {/* </button> */}
          {/* <button className="featured-more"> */}
            {/* <InfoOutlined /> */}
            {/* <span>More Info</span> */}
          {/* </button> */}
        </div>
      </div>
    </div>
    )
  }      
}


export default Featured;