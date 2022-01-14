import React from 'react';
import MovieInfoModal from './movie_info_modal';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  
  let component;
  
  switch (modal) {
    case 'editProfile':
      component = <EditProfileModalContainer/>;
      break;
    case 'movieInfo':
      component = <MovieInfoModal/>;
      break;
    default:
      return null;
  }
  
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.modal,
    props: state.props
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);