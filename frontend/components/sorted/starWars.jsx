import React from 'react';
import ThumbnailContainer from '../thumbnail/thumbnail_container';
import Footer from '../footer/footer';

class StarWars extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('STARWARS', this.props);
    let user = this.props.user;
    this.starWarsMovies = this.props.starWars.reverse();

    return(
      <div className="films-container disney">
        <ul className="films-rows disney">
          { this.starWarsMovies.map((movie) => (
            <ThumbnailContainer likes={this.props.likes} dislikes={this.props.dislikes} user={user} watchlist={this.props.watchlist} key={movie.id} movie={movie} />
          ))}
        </ul>

        <Footer />
      </div>
    )
  }
}

export default StarWars;