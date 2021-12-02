import { RECEIVE_WATCHLIST, RECEIVE_NEW_MOVIE } from '../actions/watchlist_actions';

const watchlistReducer =  (oldState = {}, action ) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState) 
  
  switch (action.type) {
    case RECEIVE_WATCHLIST:
      return action.watchlist;
    case RECEIVE_NEW_MOVIE: 
      let next = Object.values(newState);
      next.push(action.movie);
      return next;
    default:
      return oldState;
  }
};


export default watchlistReducer;
