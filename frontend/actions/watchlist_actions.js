import { createWatchlist, fetchWatchlist, deleteWatchlist } from '../util/watchlist_api';

export const RECEIVE_WATCHLIST = 'RECEIVE_WATCHLIST';

const receiveWatchlist = watchlist => ({
  type: RECEIVE_WATCHLIST,
  watchlist
});

export const getWatchlist = (movieId, userId) => dispatch => {
  return fetchWatchlist(movieId, userId).then(
    watchlist => (dispatch(receiveWatchlist(watchlist))
  ))
};

export const newWatchList = (movieId, userId) => dispatch => {
  return createWatchlist(movieId, userId).then(
    watchlist => (dispatch(receiveWatchlist(watchlist))
  ))
};

export const destroyWatchlist = (watchlistId, userId) => dispatch => {
  return deleteWatchlist(watchlistId, userId).then(
    watchlist => (dispatch(receiveWatchlist(watchlist))
  ))
};