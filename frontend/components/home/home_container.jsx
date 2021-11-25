import Home from './home';
import { signout } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mSTP = state => ({
  user: state.session.id
});

const mDTP = dispatch => ({
  signout: () => dispatch(signout())
});

export default connect(mSTP, mDTP)(Home);