import Nav from './nav';
import { connect } from 'react-redux';
import { signout } from '../../../actions/session_actions';

const mSTP = state => ({
  session: state.session
});

const mDTP = dispatch => ({
  signout: () => dispatch(signout())
});

export default connect(mSTP, mDTP)(Nav);