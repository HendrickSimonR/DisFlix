import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = state => {
  return {
    user: {
      username: '',
      password: ''
    },
    formType: 'signup'
  };
};

const mDTP = dispatch => {
  return {
    submitForm: (user) => dispatch(signup(user)),
  };
};

export default connect(mSTP, mDTP)(SessionForm);
