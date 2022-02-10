import React from 'react';
import { Link } from 'react-router-dom';

class NavLinks extends React.Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <ul className="nav-links-container">
        <li><Link onClick={this.handleScroll} className="nav-link home" to="/home">Home</Link></li>
        <li><Link onClick={this.handleScroll} className="nav-link" to="/disney">Disney</Link></li>
        <li><Link onClick={this.handleScroll} className="nav-link" to="/pixar">Pixar</Link></li>
        <li><Link onClick={this.handleScroll} className="nav-link" to="/marvel">Marvel</Link></li>
        <li><Link onClick={this.handleScroll} className="nav-link" to="/starwars">Star Wars</Link></li>
        <li><Link onClick={this.handleScroll} className="nav-link" to="/natgeo">National Geographic</Link></li>
        <li><Link onClick={this.handleScroll} className="nav-link" to="/watchlist">Watchlist</Link></li>
      </ul>
    )
  }
}

export default NavLinks;