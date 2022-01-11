import {
  RECEIVE_DISLIKE,
  RETURN_DISLIKES
} from '../actions/like_actions';

const dislikesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
  case RECEIVE_DISLIKE:
    let nextDislikes = Object.values(newState);
    nextDislikes.push(action.dislike);
    return nextDislikes;

  case RETURN_DISLIKES:
    return action.dislikes;

  default:
    return oldState;
  }
};

export default dislikesReducer;