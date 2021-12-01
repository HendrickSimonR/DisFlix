import { connect } from 'react-redux';
import { getWatchlist, newWatchlist, destroyWatchlist } from '../../actions/watchlist_actions';
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
  newWatchlist: data => dispatch(newWatchlist(data)),
  destroyWatchlist: data => dispatch(destroyWatchlist(data))
});

export default connect(mSTP, mDTP)(WatchlistButton);