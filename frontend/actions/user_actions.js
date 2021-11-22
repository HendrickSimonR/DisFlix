import * as userApi from '../util/user_api';
export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const removeUser = user => ({
  type: REMOVE_USER,
  user
});

export const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
})

export const getUser = id => dispatch => {
  return userApi.getUser(id)
    .then(
      (user) => dispatch(receiveUser(user)),
      (errors) => dispatch(receiveUserErrors(errors))
  )
}