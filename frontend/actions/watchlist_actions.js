import { createWatchlist, fetchWatchlist, deleteWatchlist } from '../util/watchlist_api';

export const RECEIVE_NEW_MOVIE = 'RECEIVE_NEW_MOVIE';
export const RECEIVE_WATCHLIST = 'RECEIVE_WATCHLIST';

const addToWatchlist = movie => ({
  type: RECEIVE_NEW_MOVIE,
  movie
});

const receiveEntireWatchlist = watchlist => ({
  type: RECEIVE_WATCHLIST,
  watchlist 
});

export const getWatchlist = (userId) => dispatch => {
  return fetchWatchlist(userId).then(
    watchlist => (dispatch(receiveEntireWatchlist(watchlist))
  ))
};

export const newAddition = (data) => dispatch => {
  return createWatchlist(data).then(
    watchlist => (dispatch(addToWatchlist(watchlist))
  ))
};

export const removeMovie = (watchlistId, userId, movieId) => dispatch => {
  return deleteWatchlist(watchlistId, userId, movieId).then(
    watchlist => (dispatch(receiveEntireWatchlist(watchlist))
  ))
};