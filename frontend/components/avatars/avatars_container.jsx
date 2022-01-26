// import Avatars from './avatars';
import { connect } from "react-redux";
import { getAvatars, getAvatar } from '../../actions/avatar_actions'; 

const mSTP = state => {
  console.log('AVATARSTATE', state)
  return({
    avatars: state.avatars,
    user: state.session
})};

const mDTP = dispatch => ({
  getAvatars: () => dispatch(getAvatars()),
  getAvatar: id => dispatch(getAvatar(id))
});

// export default connect(mSTP, mDTP)(Avatars)