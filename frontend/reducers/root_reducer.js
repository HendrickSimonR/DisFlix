import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import moviesReducer from './movies_reducer';
import brandsReducer from './brands_reducer';

const rootReducer = combineReducers({
  user: usersReducer,
  errors: errorsReducer,
  session: sessionReducer,
  movies: moviesReducer,
  brands: brandsReducer
});

export default rootReducer;


