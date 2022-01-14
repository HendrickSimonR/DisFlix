import React from 'react';
import ThumbnailContainer from '../thumbnail/thumbnail_container';
import Footer from '../footer/footer';

class Disney extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('DISNEY', this.props);
    this.disneyMovies = this.props.disney.reverse();

    return(
      <div className="films-container disney">
        <ul className="films-rows disney">
          { this.disneyMovies.map((movie) => (
            <ThumbnailContainer likes={this.props.likes} dislikes={this.props.dislikes} user={user} watchlist={this.props.watchlist} key={movie.id} movie={movie} />
          ))}
        </ul>
        <Footer />
      </div>
    )
  }
}

export default Disney;