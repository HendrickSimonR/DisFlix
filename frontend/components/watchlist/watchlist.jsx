import React from 'react';
import { Link, Route } from 'react-router-dom';
// import Thumbnail from '../home/thumbnail';
// import Nav from '../home/nav/nav';

class Watchlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignout = this.handleSignout.bind(this);
  }

  handleSignout() {
    this.props.signout();
  }

  componentDidMount() {
    this.props.getWatchlist({user_id: this.props.user})
  }

  render() {
    this.watchlistMovies = [];

    if (this.props.watchlist) {
      for (let i = 0; i < this.props.watchlist.length; i++) {
        this.watchlistMovies.push(this.props.watchlist[i].movie_id);
      }
    }

    // console.log('WATCHLIST PROPS', this.props)
    //this.props.watchlist to get watchlist 
    return(
      <div className="watchlist-container">
        

      </div>
    )
  }
}

export default Watchlist;