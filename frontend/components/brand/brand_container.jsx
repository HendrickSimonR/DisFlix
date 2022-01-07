import Brand from './brand';
import { selectMovies } from '../../selectors/movie_selector';
import { signout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { getMovies } from '../../actions/movie_actions'; 
// import { selectMovies } from '../../selectors/movie_selector';
import { getWatchlist, newAddition, removeMovie } from '../../actions/watchlist_actions';

const mSTP = state => {
  return ({
    user: state.session.id,
    movies: selectMovies(state),
    watchlist: state.watchlist
})};

const mDTP = dispatch => ({
  signout: () => dispatch(signout()),
  getMovies: () => dispatch(getMovies()),
  getWatchlist: userId => dispatch(getWatchlist(userId))
});

export default connect(mSTP, mDTP)(Brand);