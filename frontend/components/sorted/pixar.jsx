import React from 'react';
import ThumbnailContainer from '../thumbnail/thumbnail_container';
import Footer from '../footer/footer';

class Pixar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoader = this.handleLoader.bind(this);
    this.displayPoster = this.displayPoster.bind(this);
  }

  handleLoader() {
    let loader = document.getElementById('brand-loader-pixar');
    let movies = document.getElementById('pixar-movies');
    loader.style.display = 'none';
    movies.style.display = 'grid';
    movies.style.animation = 'fadeIn ease 1s'
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
    this.pixarMovies = this.props.pixar.reverse();
    let user = this.props.user;
    let brandId = this.props.current_brand;
    let poster;
    let brandMovie;

    for (let i = 0; i < this.props.brands.length; i++) {
      let brand = this.props.brands[i];

      if (brand.id === brandId) {
        poster = brand.image_url;
        brandMovie = brand.movie_url;
      }
    }

    return(
      <div className="films-container disney">
        <div id='brand-loader-pixar' className='loader-container'>
          <img className='brand-loader pixar' src={window.loader} alt='' />
        </div>
        <img id="brand-container-poster" className="brand-container-video" src={poster} alt='' style={{display: 'none'}}/>
        <video onPlay={this.handleLoader} autoPlay playsInline className="brand-container-video" id="brand-container-video" onEnded={() => this.displayPoster()}>
          <source src={brandMovie} type="video/mp4" /> 
        </video>
        <ul id='pixar-movies' className="films-rows disney">
          { this.pixarMovies.map((movie) => (
            <ThumbnailContainer likes={this.props.likes} dislikes={this.props.dislikes} user={user} watchlist={this.props.watchlist} key={movie.id} movie={movie} />
          ))}
        </ul>
        <Footer />
      </div>
    )
  }
}

export default Pixar;