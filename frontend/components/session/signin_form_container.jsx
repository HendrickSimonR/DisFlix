import { connect } from 'react-redux';
import { signin } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = state => {
  return {
    user: {
      username: '',
      password: ''
    },
    formType: 'signin'
  };
};

const mDTP = dispatch => {
  return {
    submitForm: (user) => dispatch(signin(user)),
  };
};

export default connect(mDTP, mSTP)(SessionForm);
