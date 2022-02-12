import React from 'react';
import ThumbnailContainer from '../thumbnail/thumbnail_container';
import Footer from '../footer/footer';

class Marvel extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoader = this.handleLoader.bind(this);
    this.displayPoster = this.displayPoster.bind(this);
  }

  handleLoader() {
    let loader = document.getElementById('brand-loader-marvel');
    let movies = document.getElementById('marvel-movies');
    loader.style.display = 'none';
    movies.style.display = 'grid';
    movies.style.animation = 'fadeIn ease 1s';
    window.scrollTo(0,0);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.props.shadowFilter);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.shadowFilter)
  }

  displayPoster() {
    let video = document.getElementById('brand-container-video');
    let image = document.getElementById('brand-container-poster');
    
    video.style.display = 'none';
    image.style.display = 'inline';
  }

  render() {
    this.marvelMovies = this.props.marvel.reverse();
    let user = this.props.user;
    let poster;
    let brandMovie;

    for (let i = 0; i < this.props.brands.length; i++) {
      let brand = this.props.brands[i];

      if (brand.name === 'Marvel') {
        poster = brand.image_url;
        brandMovie = brand.movie_url;
      }
    }

    return(
      <div className="films-container disney">
        <div id='brand-loader-marvel' className='loader-container'>
          <img className='brand-loader marvel' src={window.loader} alt='' />
        </div>

        <img 
          alt=''
          src={poster} 
          style={{display: 'none'}}
          id="brand-container-poster" 
          className="brand-container-video" 
        />
        
        <video 
          autoPlay 
          playsInline 
          id="brand-container-video" 
          onPlay={this.handleLoader} 
          className="brand-container-video" 
          onEnded={() => this.displayPoster()}
        >
          <source src={brandMovie} type="video/mp4" /> 
        </video>

        <ul id='marvel-movies' className="films-rows disney">
          { this.marvelMovies.map((movie) => (
            <ThumbnailContainer 
              user={user} 
              movie={movie} 
              key={movie.id}
              likes={this.props.likes} 
              dislikes={this.props.dislikes} 
              watchlist={this.props.watchlist} 
            />
          ))}
        </ul>

        <Footer />
        
        <div className="brand-background"></div>
      </div>
    )
  }
}

export default Marvel;