import { 
  addLike, 
  removeLike, 
  addDislike, 
  removeDislike,
  fetchLikes,
  fetchDislikes
} from '../util/like_api';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const RETURN_LIKES = 'RETURN_LIKES';
export const RECEIVE_DISLIKE = 'RECEIVE_DISLIKE';
export const RETURN_DISLIKES = 'RETURN_DISLIKES';

const addToLikes = like => ({
  type: RECEIVE_LIKE,
  like
});

const receiveAllLikes = likes => ({
  type: RETURN_LIKES,
  likes
});

const addToDislikes = dislike => ({
  type: RECEIVE_DISLIKE,
  dislike
});

const receiveAllDislikes = dislikes => ({
  type: RETURN_DISLIKES,
  dislikes
});


export const getLikes = (userId) => dispatch => {
  return fetchLikes(userId).then(
    likes => (dispatch(receiveAllLikes(likes)))
  ) 
};

export const getDislikes = (userId) => dispatch => {
  return fetchDislikes(userId).then(
    dislikes => (dispatch(receiveAllDislikes(dislikes)))
  )
};

export const newLike = (data) => dispatch => {
  return addLike(data).then(
    like => dispatch(addToLikes(like))
  )
};

export const newDislike = (data) => dispatch => {
  return addDislike(data).then(
    dislike => dispatch(addToDislikes(dislike))
  )
};

export const deleteLike = (likeId, userId, movieId) => dispatch => {
  return removeLike(likeId, userId, movieId).then(
    likes => (dispatch(receiveAllLikes(likes)))
  )
};

export const deleteDislike = (dislikeId, userId, movieId) => dispatch => {
  return removeDislike(dislikeId, userId, movieId).then(
    dislikes => (dispatch(receiveAllDislikes(dislikes)))
  )
};