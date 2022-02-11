import { connect } from 'react-redux';
import { getMovie } from '../../actions/movie_actions';
import MovieShow from './movie_show';

const mSTP = (state) => {
  // console.log('SHOW STATE', state)
  // let test;
  // if (state.brands.length > 0) {
  //   test = state.brands[state.brands.length - 1].movie_url
  // }

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