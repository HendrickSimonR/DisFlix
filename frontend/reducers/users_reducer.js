// import { 
//   RECEIVE_USER,
//   REMOVE_USER
// } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = ( oldState = {}, action ) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.user;
      
    default:
      return oldState;
  }
}

export default usersReducer;

