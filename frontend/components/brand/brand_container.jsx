import Brand from './brand';
import { connect } from 'react-redux';
import { selectMovies } from '../../selectors/movie_selector';
import { getMovies } from '../../actions/movie_actions'; 
import { signout } from '../../actions/session_actions';
import { getWatchlist, removeMovie } from '../../actions/watchlist_actions';

const mSTP = state => {
  return ({
    user: state.session.id,
    movies: selectMovies(state),
    watchlist: state.watchlist
  })
};

const mDTP = dispatch => ({
  signout: () => dispatch(signout()),
  getMovies: () => dispatch(getMovies()),
  getWatchlist: userId => dispatch(getWatchlist(userId)),
  removeMovie: data => dispatch(removeMovie(data))
});

export default connect(mSTP, mDTP)(Brand);