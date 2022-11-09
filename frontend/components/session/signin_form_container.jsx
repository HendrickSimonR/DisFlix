import React from 'react';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin, removeErrors } from '../../actions/session_actions';

const mSTP = (state) => {
  return {
    errors: state.errors,
    formType: 'Sign In',
    formGreeting: 'Welcome back!',
    question: '', // New to Disney Cinema?
    link: <Link className="question-link" to="" /*/signup*/>Come back soon to join us!</Link> // Sign Up
  };
};

const mDTP = dispatch => {
  return {
    submitForm: (user) => dispatch(signin(user)),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(mSTP, mDTP)(SessionForm);