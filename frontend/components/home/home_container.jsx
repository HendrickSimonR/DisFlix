import Home from './home';
import { getLikes, getDislikes } from '../../actions/like_actions';
import { signout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { getMovies } from '../../actions/movie_actions'; 
import { selectMovies } from '../../selectors/movie_selector';
import { getWatchlist } from '../../actions/watchlist_actions';

const mSTP = state => {
  console.log('STATE', state);
  return ({
    user: state.session.id,
    likes: state.likes,
    dislikes: state.dislikes,
    movies: selectMovies(state),
    watchlist: state.watchlist
})};

const mDTP = dispatch => ({
  signout: () => dispatch(signout()),
  getMovies: () => dispatch(getMovies()),
  getLikes: userId => dispatch(getLikes(userId)),
  getDislikes: userId => dispatch(getDislikes(userId)),
  getWatchlist: userId => dispatch(getWatchlist(userId))
});

export default connect(mSTP, mDTP)(Home);