import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './nav_links'

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 585) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    
    return () => {
      window.removeEventListener('scroll', null);
    };
  }, []);

  return (
    <div className={`nav-bar ${show && "nav-show"}`} id="navbar">
      <Link to="/home">
        <img src={window.logo} className="nav-logo" />
      </Link>
      <NavLinks />
    </div>
  );
}

export default Nav;


// class Nav extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//       <div className={`nav-bar ${show && "nav-show"}`} id="navbar">
//         <Link to="/home">
//           <img src={window.logo} className="nav-logo" />
//         </Link>
//         <NavLinks />
//       </div>
//     );
//   }
// }

// export default Nav;