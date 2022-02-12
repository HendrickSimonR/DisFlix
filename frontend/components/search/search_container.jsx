import Search from './search';
import { connect } from 'react-redux';
import { selectMovies } from '../../selectors/movie_selector';



const mSTP = (state, { match }) => {
  const search = match.params.search;
  
  return {
    search,
    movies: selectMovies(state),
    watchlist: state.watchlist,
    likes: state.likes,
    dislikes: state.dislikes
  };
};

const mDTP = dispatch => ({
  getMovies: () => dispatch(getMovies())
})

export default connect(mSTP, mDTP)(Search);