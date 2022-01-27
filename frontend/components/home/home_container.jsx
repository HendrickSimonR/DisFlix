import Home from './home';
import { getBrands } from '../../actions/brand_actions';
import { getLikes, getDislikes } from '../../actions/like_actions';
import { signout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { getMovies } from '../../actions/movie_actions'; 
import { selectMovies } from '../../selectors/movie_selector';
import { getWatchlist } from '../../actions/watchlist_actions';
import { getProfiles } from '../../actions/profile_actions';
import { getAvatars } from '../../actions/avatar_actions';
import { openModal } from '../../actions/modal_actions'

const mSTP = state => {
  console.log('STATE', state);
  return ({
    avatars: state.avatars,
    brands: state.brands,
    user: state.session.id,
    movies: selectMovies(state),
    watchlist: state.watchlist,
    likes: state.likes,
    dislikes: state.dislikes,
    profiles: state.profiles
})};

const mDTP = dispatch => ({
  signout: () => dispatch(signout()),
  openModal: movieId => dispatch(openModal(movieId)),
  getBrands: () => dispatch(getBrands()),
  getMovies: () => dispatch(getMovies()),
  getWatchlist: userId => dispatch(getWatchlist(userId)),
  getLikes: userId => dispatch(getLikes(userId)),
  getDislikes: userId => dispatch(getDislikes(userId)),
  getProfiles: userId => dispatch(getProfiles(userId)),
  getAvatars: () => dispatch(getAvatars())
});

export default connect(mSTP, mDTP)(Home);