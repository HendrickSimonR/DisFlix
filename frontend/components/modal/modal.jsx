import React from 'react';
import AboutContainer from './about_me_modal';
import MovieModalContainer from './movie_modal_container';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

const Modal = ({ modal, closeModal }) => {
  if (!modal) return null;

  let movieId;
  let modalComponent;
  let url = window.location.href.split('/');
  let modalName = 'modal-background';
  let childName = 'modal-child';
  let location = [ 'home', 'watchlist', 'search' ]

  !location.includes(url[4]) ? modalName += ` brand` : modalName += ` ${url[4]}`;

  if (modal.includes('about')) {
    childName += ' about';
    modalComponent = <AboutContainer />;
  } else {
    movieId = parseInt(modal);
    modalComponent = <MovieModalContainer movie={movieId} />
  }

  return (
    <div onClick={ closeModal } className={ modalName } >
      <div 
        className={ childName } 
        onClick={ e => e.stopPropagation() }
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