import Home from './home';
import { signout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { getMovies } from '../../actions/movie_actions'; 
import { selectMovies } from '../../selectors/movie_selector'

const mSTP = state => ({
  user: state.session.id,
  movies: selectMovies(state)
});

const mDTP = dispatch => ({
  signout: () => dispatch(signout()),
  getMovies: () => dispatch(getMovies())
});

export default connect(mSTP, mDTP)(Home);