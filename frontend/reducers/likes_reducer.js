import {
  RECEIVE_LIKE,
  RETURN_LIKES
} from '../actions/like_actions';

const likesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_LIKE:
      let nextLikes = Object.values(newState);
      nextLikes.push(action.like);
      return nextLikes;

    case RETURN_LIKES: 
      return action.likes;

    default:
      return oldState;
  }
};

export default likesReducer;

      