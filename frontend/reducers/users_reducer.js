// import { 
//   RECEIVE_USER,
//   REMOVE_USER
// } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // newState[action.user.id] = action.user;
      return action.user;
    default:
      return oldState;
  }
}

export default usersReducer;

