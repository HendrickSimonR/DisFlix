import Sorted from './sorted';
import { connect } from 'react-redux';
import { selectMovies } from '../../selectors/movie_selector';
import { getMovies } from '../../actions/movie_actions'; 
import { signout } from '../../actions/session_actions';
import { getWatchlist, removeMovie } from '../../actions/watchlist_actions';

const mSTP = state => {
  // console.log('SORTED STATE', state)
  return ({
    user: state.session.id,
    likes: state.likes,
    dislikes: state.dislikes,
    movies: selectMovies(state),
    watchlist: state.watchlist,
    collection: window.location.href
  })
};

const mDTP = dispatch => ({
  signout: () => dispatch(signout()),
  getMovies: () => dispatch(getMovies()),
  getWatchlist: userId => dispatch(getWatchlist(userId)),
  removeMovie: data => dispatch(removeMovie(data))
});

export default connect(mSTP, mDTP)(Sorted);

// KEEP