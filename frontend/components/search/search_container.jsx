import Search from './search';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movie_actions';
import { selectMovies } from '../../selectors/movie_selector';



const mSTP = (state, { match }) => {
  console.log('SEARCHSTATE', state)
  const searchTerm = match.params.searchTerm;
  return {
    searchTerm,
    movies: selectMovies(state),
    watchlist: state.watchlist,
    likes: state.likes,
    dislikes: state.dislikes
  };
};

const mDTP = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies())
})

export default connect(mSTP, mDTP)(Search);