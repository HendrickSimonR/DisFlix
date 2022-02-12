import { connect } from 'react-redux';
import { getWatchlist, newAddition, removeMovie } from '../../actions/watchlist_actions';
import WatchlistButton from './watchlist_button';

const mSTP = (state, ownProps) => {
  return {
    watchlist: state.watchlist,
    userId: state.session.id,
    movieId: parseInt(ownProps.movieId)
  };
};

const mDTP = dispatch => ({
  getWatchlist: watchlist => dispatch(getWatchlist(watchlist)),
  newAddition: data => dispatch(newAddition(data)),
  removeMovie: data => dispatch(removeMovie(data))
});

export default connect(mSTP, mDTP)(WatchlistButton);