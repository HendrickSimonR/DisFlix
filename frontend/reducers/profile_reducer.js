import { 
  RECEIVE_PROFILE, 
  RECEIVE_PROFILES, 
  REMOVE_PROFILE 
} from "../actions/profile_actions";


const profileReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PROFILES:
      return action.profiles;
      
    case RECEIVE_PROFILE:
      nextState[action.profile.id] = action.profile;
      return nextState;

    case REMOVE_PROFILE:
      delete nextState[action.profileId];
      return nextState;
      
    default:
      return state;
  }
};

export default profileReducer;