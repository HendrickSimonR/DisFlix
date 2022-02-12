import React from 'react';
import ThumbnailContainer from '../thumbnail/thumbnail_container';
import Footer from '../footer/footer';

class Disney extends React.Component {
  constructor(props) {
    super(props);
    this.displayPoster = this.displayPoster.bind(this);
    this.handleLoader = this.handleLoader.bind(this);
  }

  displayPoster() {
    let video = document.getElementById('brand-container-video');
    let image = document.getElementById('brand-container-poster');
    video.style.display = 'none';
    image.style.display = 'inline';
  }

  componentDidMount() {
    window.addEventListener('scroll', this.props.shadowFilter);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.shadowFilter)
  }

  handleLoader() {
    let loader = document.getElementById('brand-loader-disney');
    let movies = document.getElementById('disney-movies');
    loader.style.display = 'none';
    movies.style.display = 'grid';
    movies.style.animation = 'fadeIn ease 1s';
    window.scrollTo(0,0);
  }

  render() {
    this.disneyMovies = this.props.disney.reverse();
    let user = this.props.user;
    let brandId = this.props.current_brand;
    let poster;
    let brandMovie;

    for (let i = 0; i < this.props.brands.length; i++) {
      let brand = this.props.brands[i];

      if (brand.name === 'Disney') {
        poster = brand.image_url;
        brandMovie = brand.movie_url;
      }
    }

    // console.log('disneybrand', this.props)
    return(
      <div className="films-container disney">
        <div id='brand-loader-disney' className='loader-container'>
          <img className='brand-loader disney' src={window.loader} alt='' />
        </div>
        <img id="brand-container-poster" className="brand-container-video" src={poster} alt='' style={{display: 'none'}}/>
        <video onPlay={this.handleLoader} autoPlay playsInline className="brand-container-video" id="brand-container-video" onEnded={() => this.displayPoster()}>
          <source src={brandMovie} type="video/mp4" /> 
        </video>
        <ul id='disney-movies' className="films-rows disney" style={{display: 'none'}}>
          { this.disneyMovies.map((movie) => (
            <ThumbnailContainer likes={this.props.likes} dislikes={this.props.dislikes} user={user} watchlist={this.props.watchlist} key={movie.id} movie={movie} />
          ))}
        </ul>
        <Footer />
        <div className="brand-background"></div>
      </div>
    )
  }
}

export default Disney;

