export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = modal => {
  document.body.style.top = `-${window.scrollY}px`;
  document.body.style.position = 'fixed';
  window.modal = true;

  if (window.location.href.includes('home')) {
    let featured = document.getElementById('featured-info')
    featured.style.display = 'none';
  }

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

  if (window.location.href.includes('home')) {
    let featured = document.getElementById('featured-info')
    featured.style.display = 'flex';
  }
  
  return {
    type: CLOSE_MODAL
  };
};
