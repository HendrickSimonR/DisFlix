import React from 'react';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';

const mSTP = state => {
  return {
    errors: state.errors,
    formType: 'Sign Up',
    formGreeting: 'Welcome!',
    question: 'Already a Mouseketeer?',
    link: <Link className="question-link" to="/signin">Sign in</Link>,
  };
};

const mDTP = dispatch => {
  return {
    submitForm: (user) => dispatch(signup(user))
  };
};

export default connect(mSTP, mDTP)(SessionForm);