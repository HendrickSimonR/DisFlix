import React from 'react'

class WatchlistButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { added: 'add' }
    this.watchlistButton = this.watchlistButton.bind(this);
    // this.addSetter = this.addSetter.bind(this);    
  }

  componentDidMount() {
    this.props.getWatchlist({ user_id: this.props.userId });
  }
  
  // addSetter() {
  //   if (this.props.userMovies.includes(this.props.movieId) && this.state.added === 'add') {
  //     this.setState({ added: 'done' })
  //   }
  // }

  watchlistButton(e) {
    if (this.state.added === 'add') {
      this.setState({ added: 'done' })
      this.props.newAddition({ movie_id: this.props.movieId, user_id: this.props.userId });
    } else {
      this.setState({ added: 'add' })
      this.props.removeMovie({ watchlist_id: this.props.watchlistId, movie_id: this.props.movieId, user_id: this.props.userId });
    }
  }

  render() {
    // if (this.props.movieId < 4) {
    //   console.log('PROPS', this.props)
    //   console.log('STATE', this.state);
    // }
    // console.log('BUTTON', this.props)
    
    // this.watchlistId = undefined;
    
    // for (let i= 0; i < this.props.watchlist.length; i++) {
    //   let movie = this.props.watchlist[i];

    //   if (movie.movie_id === this.props.moviedId) {
    //     this.watchlistId = movie.id;
    //     break;  
    //   }
    // }

    let movieCheck; 

    if (this.props.watchlist) {
      for (let i = 0; i < this.props.watchlist.length; i++) {
        let watchlistMovie = this.props.watchlist[i];

        if (watchlistMovie['movie_id'] === this.props.movieId) {
          // console.log('INSIDE THE IF FUCNTION', watchlistMovie['movie_id'], this.props.movieId)
          movieCheck = true;
          break;
        }
      }
    }

    if (window.location.href.includes('watchlist')) {
      movieCheck = true;
    } 
    
    // console.log('WATCHLIST ID', this.props.watchlistId)
    // console.log('WTACHLISTBUTTONWATCHLIST', this.props);
    // console.log('MOVIECHECK', this.props.movieCheck, this.props.movieId);

    return (
      <div onClick={this.watchlistButton} className="add-button">
        <p className="material-icons-outlined">
          {/* {this.state.added = 'done'} */}
          {movieCheck === true ? this.state.added = 'done' : this.state.added = 'add'}
        </p>
      </div>
    )
  }
}

export default WatchlistButton;