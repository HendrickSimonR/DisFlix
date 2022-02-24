import React from 'react';
import AboutContainer from './about_me_modal';
import MovieModalContainer from './movie_modal_container';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

const Modal = ({ modal, closeModal }) => {
  if (!modal) return null;

  let about;
  let movieId;
  let modalComponent;
  let url = window.location.href;

  if (modal.includes('about')) {
    about = true;
    modalComponent = <AboutContainer />;
  } else {
    movieId = parseInt(modal);
    modalComponent = <MovieModalContainer movie={movieId} />
  }

  return (
    <div 
      onClick={closeModal}
      className={ url.includes('home') ? "modal-background" 
        : url.includes('watchlist') ? "modal-background watchlist" 
        : url.includes('search') ? "modal-background search" 
        : "modal-background brand"} 
    >
      
      <div 
        className={about ? "modal-child about" : "modal-child"} 
        onClick={e => e.stopPropagation()}
      >
        { modalComponent }
      </div>
    </div>
  );
}

const mSTP = state => {
  return {
    modal: state.modal,
    props: state.props,
    movies: state.movies
  };
};

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(Modal);