import LikeButtons from './like_buttons';
import { connect } from 'react-redux';

import { 
  getLikes, 
  getDislikes,
  newLike,
  newDislike,
  deleteLike,
  deleteDislike
} from '../../actions/like_actions';

const mSTP = state => {
  return ({
    user: state.session.id,
    likes: state.likes,
    dislikes: state.dislikes,
  })
};

const mDTP = dispatch => ({
  getLikes: userId => dispatch(getLikes(userId)),
  getDislikes: userId => dispatch(getDislikes(userId)),
  newLike: data => dispatch(newLike(data)),
  newDislike: data => dispatch(newDislike(data)),
  deleteLike: data => dispatch(deleteLike(data)),
  deleteDislike: data => dispatch(deleteDislike(data))
})

export default connect(mSTP, mDTP)(LikeButtons);