import { 
  RECEIVE_CURRENT_USER,
  SIGNOUT_CURRENT_USER,
  RECEIVE_SESSION_ERRORS
} from "../../actions/session_actions";

const sessionErrorsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const nextState = Object.assign({}, oldState);

  switch(action.type) {
    case SIGNOUT_CURRENT_USER:
    case RECEIVE_CURRENT_USER:
      return {};
    case RECEIVE_SESSION_ERRORS:
      return action.errors.responseJSON;
    default:
      return oldState;
  }
}

export default sessionErrorsReducer;