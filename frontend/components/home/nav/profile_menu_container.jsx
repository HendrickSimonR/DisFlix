import { connect } from 'react-redux';
import { signout } from '../../../actions/session_actions';
import ProfileMenu from './profile_menu';

const mSTP = ({ session }) => {
  return {
    session: session
  };
};

const mDTP = dispatch => ({
  signout: () => dispatch(signout())
});

export default connect(mSTP, mDTP)(ProfileMenu);
