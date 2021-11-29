import { createUser, postSession, deleteSession } from '../util/session_api';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const SIGNOUT_CURRENT_USER = 'SIGNOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const signoutCurrentUser = () => ({
  type: SIGNOUT_CURRENT_USER
});

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS
});

export const signup = signupInput => dispatch => {
  return createUser(signupInput).then(
    user => dispatch(receiveCurrentUser(user)),
    error => dispatch(receiveSessionErrors(error.responseJSON))
  );
};

export const signin = signinInput => dispatch => {
  return postSession(signinInput).then(
    user => dispatch(receiveCurrentUser(user)),
    error => dispatch(receiveSessionErrors(error.responseJSON))
  );
};

export const signout = () => dispatch => {
  return deleteSession().then(
    () => dispatch(signoutCurrentUser()),
    error => dispatch(receiveSessionErrors(error.responseJSON))
  );
};