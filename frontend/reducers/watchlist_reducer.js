import { RECEIVE_WATCHLIST } from '../actions/list_actions';

const watchlistReducer =  (oldState = {}, action ) => {
  Object.freeze(oldState)
  
  switch (action.type) {
    case RECEIVE_WATCHLIST:
      return action.list;
    default:
      return oldState;
  }
};


export default watchlistReducer;
