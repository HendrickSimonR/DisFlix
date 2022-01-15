import React from "react";
import { withRouter } from 'react-router';

class MovieModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { movie: null }
  }

  componentDidMount() {
    this.props.getMovie(this.props.movie);
    // console.log('film', film)
    // this.setState 
  }

  render() {
    let film = null;

    let moviesArr = Object.values(this.props.movies);
    if (moviesArr.length === 0) {
      return null;
    } else {
      // console.log('WTF')
      for (let i = 0; i < moviesArr.length; i++) {
        let movie = moviesArr[i];
        // debugger
        // console.log('movie', movie);
        // console.log('findmovie', this.props.movie)

        if (this.props.movie === movie.id) {
          film = movie;
          // console.log('YIPPPEEEEEE', film)
        }
        // console.log(film);
      }
    }
    
    console.log('MOVIE PROPS ', film)

    return (
      <div className="movie-modal">
        <video className="modal-movie" poster={film.image_url}>
          <source src={this.props.movie.movie_url} type="video/mp4" /> 
        </video>

        <div className="modal-description">
          {film.description}
        </div>
      </div>
    )
  }
}

export default withRouter(MovieModal);