import React from 'react';
import ThumbnailContainer from '../thumbnail/thumbnail_container';
import Footer from '../footer/footer';

class NatGeo extends React.Component {
  constructor(props) {
    super(props);
    this.displayPoster = this.displayPoster.bind(this);
    let location = window.location.href;

    if (!location.includes('home') || !location.includes('search') || !location.includes('watchlist')) {
      window.addEventListener('scroll', () => {    
        let image = document.getElementById('brand-container-poster');
        let video = document.getElementById('brand-container-video');
      

        if ($(window).scrollTop() < 100) {
          image.style.transition = 'none';
          image.style.filter = 'brightness(100%)';
          video.style.transition = 'none';
          video.style.filter = 'brightness(100%)';
          // $('#brand-container-video').removeClass('scrolled');
          // $('#brand-container-poster').removeClass('scrolled');
        } else {
          image.style.transition = 'all 0.3s ease 0s';
          image.style.filter = 'brightness(30%)';
          video.style.transition = 'all 0.3s ease 0s';
          video.style.filter = 'brightness(30%)';

          // $('#brand-container-video').addClass('scrolled');
          // $('#brand-container-poster').addClass('scrolled');
        }

        if (this.props.modal) {
          image.style.transition = 'none';
          image.style.filter = 'brightness(30%)';
          video.style.transition = 'none';
          video.style.filter = 'brightness(30%)';
          // $('#brand-container-video').addClass('scrolled');
          // $('#brand-container-poster').addClass('scrolled');
        }
      });
        // image.style.transition = 'all 0.3s ease 0s';
    }
  }

  displayPoster() {
    let video = document.getElementById('brand-container-video');
    let image = document.getElementById('brand-container-poster');
    
    video.style.display = 'none';
    image.style.display = 'inline';
  }

  render() {
    this.natGeoMovies = this.props.natGeo.reverse();
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
        <img id="brand-container-poster" className="brand-container-video" src={poster} alt='' style={{display: 'none'}}/>
        <video autoPlay playsInline className="brand-container-video" id="brand-container-video" onEnded={() => this.displayPoster()}>
          <source src={brandMovie} type="video/mp4" /> 
        </video>
        <ul className="films-rows disney">
          { this.natGeoMovies.map((movie) => (
            <ThumbnailContainer likes={this.props.likes} dislikes={this.props.dislikes} user={user} watchlist={this.props.watchlist} key={movie.id} movie={movie} />
          ))}
        </ul>
        <Footer />
      </div>
    )
  }
}

export default NatGeo;