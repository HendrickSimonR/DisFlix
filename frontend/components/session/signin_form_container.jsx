import React from 'react';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../../actions/session_actions';

const mSTP = (state) => {
  return {
    errors: state.errors,
    formType: 'Sign In',
    formGreeting: 'Welcome back!',
    question: 'New in town?',
    link: <Link className="question-link" to="/signup">Sign up</Link>,
  };
};

const mDTP = dispatch => {
  return {
    submitForm: (user) => dispatch(signin(user))
  };
};

export default connect(mSTP, mDTP)(SessionForm);


// const mSTP = state => {
//   return {
//     user: {
//       username: '',
//       password: ''
//     },
//     formType: 'Sign In'
//   };
// };

// const mDTP = dispatch => {
//   return {
//     submitForm: (user) => dispatch(signin(user)),
//   };
// };

// export default connect(mDTP, mSTP)(SessionForm);
