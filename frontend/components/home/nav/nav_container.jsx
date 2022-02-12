import Nav from './nav';
import { connect } from 'react-redux';
import { signout } from '../../../actions/session_actions';
import { getMovies } from '../../../actions/movie_actions'; 
import { selectMovies } from '../../../selectors/movie_selector';
import { getWatchlist } from '../../../actions/watchlist_actions';

const mSTP = state => {
  return ({
    user: state.session.id,
    movies: selectMovies(state),
    watchlist: state.watchlist,
    session: state.session
  })
};

const mDTP = dispatch => ({
  signout: () => dispatch(signout()),
  getMovies: () => dispatch(getMovies()),
  getWatchlist: userId => dispatch(getWatchlist(userId))
});

export default connect(mSTP, mDTP)(Nav);