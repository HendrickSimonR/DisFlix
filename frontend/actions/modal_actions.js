export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = modal => {
  // console.log('HOOOOPLAGH')
  document.body.style.top = `-${window.scrollY}px`;
  document.body.style.position = 'fixed';
  window.modal = true;

  return {
    type: OPEN_MODAL,
    modal
  };
};

export const closeModal = () => {
  const scrollY = document.body.style.top;
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  window.modal = false;
  
  return {
    type: CLOSE_MODAL
  };
};
