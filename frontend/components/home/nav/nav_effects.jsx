import React, { useState, useEffect } from 'react';

function NavEffect() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 777) {
        handleShow(true);
      }
      else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);
}


export default NavEffect;