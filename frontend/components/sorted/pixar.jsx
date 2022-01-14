import React from 'react';
import ThumbnailContainer from '../thumbnail/thumbnail_container';
import Footer from '../footer/footer';

class Pixar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let user = this.props.user;
    this.pixarMovies = this.props.pixar.reverse();

    return(
      <div className="films-container disney">
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