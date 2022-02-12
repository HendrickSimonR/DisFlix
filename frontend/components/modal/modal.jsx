import React from 'react';
import AboutContainer from './about_me_modal';
import MovieModalContainer from './movie_modal_container';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

function Modal({modal, closeModal}) {
  if (!modal) return null;

  let about;
  let movieId;
  let modalComponent;
  let renderMovie = false;
  let possibleNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  for (let i = 0; i < possibleNums.length; i++) {
    let possibleNum = possibleNums[i];
    
    if (modal.includes(possibleNum)) {
      renderMovie = true;
      movieId = parseInt(modal);
      break;
    }
  }

  if (modal.includes('about')) {
    about = true;
  }
  
  if (renderMovie === true) {
    modalComponent = <MovieModalContainer movie={movieId} />
  } else {
    modalComponent = <AboutContainer />;
  }

  return (
    <div 
      onClick={closeModal}
      className={window.location.href.includes('home') ? "modal-background" 
        : window.location.href.includes('watchlist') ? "modal-background watchlist" 
        : window.location.href.includes('search') ? "modal-background search" 
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