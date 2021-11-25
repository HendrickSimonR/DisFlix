
import React from 'react';
import { Link } from 'react-router-dom';

function NavLinks() {
  return (
    <ul className="nav-links-container">
      <li><Link className="nav-link" to="/home">Home</Link></li>
      <li><Link className="nav-link" to="/home/Disney">Disney</Link></li>
      <li><Link className="nav-link" to="/home/Pixar">Pixar</Link></li>
      <li><Link className="nav-link" to="/home/Marvel">Marvel</Link></li>
      <li><Link className="nav-link" to="/home/StarWars">Star Wars</Link></li>
      <li><Link className="nav-link" to="/home/NatGeo">National Geographic</Link></li>
      <li><Link className="nav-link" to="/home/Watchlist">Watchlist</Link></li>
    </ul>
  );
}

export default NavLinks;