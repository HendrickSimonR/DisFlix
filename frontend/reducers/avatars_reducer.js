import { RECEIVE_AVATARS, RECEIVE_AVATAR } from '../actions/avatar_actions';

const avatarsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_AVATARS:
      return action.avatars;
    case RECEIVE_AVATAR:
      newState[action.avatar.id] = action.avatar;
      return newState;
    default:
      return oldState;
  }
};

export default avatarsReducer;