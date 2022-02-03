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
  console.log('MODAL', modal, closeModal)
  // console.log('TYPEOF', typeof(num))
  
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

  // let other = parseInt('poop');
  
  if (renderMovie === true) {
    modalComponent = <MovieModalContainer movie={movieId} />
    // CHANGE THIS WHEN EDIT PROFILE IS ESTABLISHED
  } else {
    modalComponent = <AboutContainer />;
  }

  // switch (num) {
  //   // case 'editProfile':
  //   //   component = <EditProfileModalContainer/>;
  //   //   break;
  //   case typeof(num) === 'number':
  //     component = <MovieModalContainer />;
  //     break;
  //   default:
  //     return null;
  // }
  

  return (
    <div 
      className={window.location.href.includes('home') ? "modal-background" 
      : window.location.href.includes('watchlist') ? "modal-background watchlist" 
      : window.location.href.includes('search') ? "modal-background search" 
      : "modal-background brand"} 
      onClick={closeModal}
    >
      
      <div className={about ? "modal-child about" : "modal-child"} onClick={e => e.stopPropagation()}>
        { modalComponent }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  // console.log('MODAL STATE', state)
  return {
    modal: state.modal,
    props: state.props,
    movies: state.movies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);