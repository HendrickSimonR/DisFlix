import { RECEIVE_MOVIES, RECEIVE_MOVIE } from '../actions/movie_actions';

const moviesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_MOVIES:
      return Object.assign({}, newState, action.movies);

    case RECEIVE_MOVIE: 
      newState[action.movie.id] = action.movie; 
      return newState;
      
    default:
      return oldState;
  }
};

export default moviesReducer;
