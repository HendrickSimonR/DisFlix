import * as userApi from '../util/api/user_api';

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
});

export const receiveUserThunk = id => dispatch => {
  return userApi.getUser(id)
    .then(
      (user) => dispatch(receiveUsers(user)),
      (errors) => dispatch(receiveUserErrors(errors))
  );
};

export const removeUserThunk = id => dispatch => {
  return userApi.deleteUser(id)
    .then(
      (user) => dispatch(removeUser(user)),
      (errors) => dispatch(receiveUserErrors(errors))
  );
};