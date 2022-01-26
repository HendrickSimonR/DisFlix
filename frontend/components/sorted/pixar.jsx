import React from 'react';
import ThumbnailContainer from '../thumbnail/thumbnail_container';
import Footer from '../footer/footer';

class Pixar extends React.Component {
  constructor(props) {
    super(props);

    window.addEventListener('scroll', () => {    
      if ($(window).scrollTop() < 100) {
        $('#brand-container-video').removeClass('scrolled');
      } else {
        $('#brand-container-video').addClass('scrolled');
      }

      if (this.props.modal) {
        $('#brand-container-video').addClass('scrolled');
      }
    });
  }

  render() {
    this.pixarMovies = this.props.pixar.reverse();
    let user = this.props.user;
    let brandId = this.props.current_brand;
    let poster;

    for (let i = 0; i < this.props.brands.length; i++) {
      let brand = this.props.brands[i];

      if (brand.id === brandId) {
        poster = brand.image_url;
      }
    }

    return(
      <div className="films-container disney">
        <video className="brand-container-video" poster={poster} id="brand-container-video">
          <source src={this.props} type="video/mp4" /> 
        </video>
        <ul className="films-rows disney">
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