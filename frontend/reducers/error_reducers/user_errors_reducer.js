import { 
  RECEIVE_USER,
  RECEIVE_USERS
} from "../../actions/user_actions";
import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";

const userErrorsReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  const nextState = Object.assign({}, oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    case RECEIVE_USER:
      return {};
    default:
      return oldState;
  }
}

export default userErrorsReducer;