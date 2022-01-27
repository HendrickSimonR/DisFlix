import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { getMovie } from '../../actions/movie_actions'
import { withRouter } from 'react-router';
import Thumbnail from './thumbnail';

const mSTP = state => {
  console.log('THUMBSTATE', state);
  return {
    test: state.brands[state.brands.length - 1].movie_url,
    user: state.session.id,
    modal: state.modal 
  };
};

const mDTP = dispatch => ({
  openModal: movieId => dispatch(openModal(`${movieId}`)),
  getMovie: id => dispatch(getMovie(id))
    // fetchUser: (userId) => dispatch(fetchUserInfo(userId))
});

export default withRouter(connect(mSTP, mDTP)(Thumbnail));
