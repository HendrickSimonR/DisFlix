// import { 
//   RECEIVE_USER,
//   REMOVE_USER
// } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = ( oldState = {}, action ) => {
  const newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.user;
    default:
      return oldState;
  }
}

export default usersReducer;

