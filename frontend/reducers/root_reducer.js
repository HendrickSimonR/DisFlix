import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import likesReducer from './likes_reducer';
import dislikesReducer from './dislikes_reducer';
import moviesReducer from './movies_reducer';
import brandsReducer from './brands_reducer';
import watchlistReducer from './watchlist_reducer';

const rootReducer = combineReducers({
  brands: brandsReducer,
  errors: errorsReducer,
  likes: likesReducer,
  dislikes: dislikesReducer,
  movies: moviesReducer,
  session: sessionReducer,
  user: usersReducer,
  watchlist: watchlistReducer
});

export default rootReducer;


