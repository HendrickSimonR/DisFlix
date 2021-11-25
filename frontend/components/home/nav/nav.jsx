import React from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './nav_links'

class Nav extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="nav-bar">
        <Link to="/home">
          <img src={window.logo} className="nav-logo" />
        </Link>
        <NavLinks />
      </div>
    );
  }
}

export default Nav;