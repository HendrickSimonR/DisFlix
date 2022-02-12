import { connect } from 'react-redux';
import { signout } from '../../../actions/session_actions';
import { withRouter } from 'react-router';
import { openModal } from '../../../actions/modal_actions';
import ProfileMenu from './profile_menu';

const mSTP = state => {
  return {
    session: state.session,
    avatars: state.avatars
  };
};

const mDTP = dispatch => ({
  signout: () => dispatch(signout()),
  openModal: about => dispatch(openModal(about)),
});

export default withRouter(connect(mSTP, mDTP)(ProfileMenu));
