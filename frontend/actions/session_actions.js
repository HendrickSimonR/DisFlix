import { 
  createUser
} from '../util/user_api';
import {
  createSession,
  deleteSession
} from '../util/session_api';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const SIGNOUT_CURRENT_USER = 'SIGNOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const removeCurrentUser = () => ({
  type: SIGNOUT_CURRENT_USER
});

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = formInput => dispatch => {
  return createUser(formInput).then(
    user => dispatch(receiveCurrentUser(user)),
    error => dispatch(receiveSessionErrors(error))
  );
};

export const signin = formInput => dispatch => {
  return createSession(formInput).then(
    user => dispatch(receiveCurrentUser(user)),
    error => dispatch(receiveSessionErrors(error))
  );
};

export const signout = () => dispatch => {
  return deleteSession().then(
    () => dispatch(removeCurrentUser()),
    error => dispatch(receiveSessionErrors(error))
  );
};