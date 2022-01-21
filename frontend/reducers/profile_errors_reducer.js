import { 
  REMOVE_PROFILE_ERRORS, 
  RECEIVE_PROFILE_ERRORS, 
  RECEIVE_PROFILE } from "../actions/profile_actions";

const profileErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PROFILE:
      return [];
    case RECEIVE_PROFILE_ERRORS:
      return action.errors;
    case REMOVE_PROFILE_ERRORS:
      return [];
    default:
      return state;
  }
}

export default profileErrorsReducer;