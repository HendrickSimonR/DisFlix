import { connect } from 'react-redux';
import { signout } from '../../../actions/session_actions';
import ProfileMenu from './profile_menu';

const mSTP = state => {
  console.log('PROFILE STATE', state)
  return {
    session: state.session,
    avatars: state.avatars
  };
};

const mDTP = dispatch => ({
  signout: () => dispatch(signout())
});

export default connect(mSTP, mDTP)(ProfileMenu);
