import { connect } from 'react-redux';
import { getMovie } from '../../actions/movie_actions';
import MovieShow from './movie_show';

const mSTP = (state) => {
  return {
    movies: state.movies
  }
}

const mDTP = (dispatch) => {
  return {
    getMovie: movieId => dispatch(getMovie(movieId))
  }
}

export default connect(mSTP, mDTP)(MovieShow);