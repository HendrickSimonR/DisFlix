import React from 'react'

class WatchlistButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { added: 'add' }
    this.watchlistButton = this.watchlistButton.bind(this);
    // this.addSetter = this.addSetter.bind(this);    
  }

  // componentDidMount() {
  //   this.props.getWatchlist({ user_id: this.props.userId }))
  // }
  
  // addSetter() {
  //   if (this.props.userMovies.includes(this.props.movieId) && this.state.added === 'add') {
  //     this.setState({ added: 'done' })
  //   }
  // }

  watchlistButton(e) {
    if (this.state.added === 'add') {
      this.setState({ added: 'done' })
      this.props.newAddition({ movie_id: this.props.movieId, user_id: this.props.userId });
      // window.location.reload(true);

    } else {
      this.setState({ added: 'add' })
      this.props.removeMovie({ watchlist_id: this.props.watchlistId, movie_id: this.props.movieId, user_id: this.props.userId });
        // window.location.reload(true);
    }
  }

  render() {
    // if (this.props.movieId < 4) {
    //   console.log('PROPS', this.props)
    //   console.log('STATE', this.state);
    // }
    console.log('BUTTON', this.props)
    
    // let watchlistId;
    
    // for (let i= 0; i < this.props.watchlist.length; i++) {
    //   let movie = this.props.watchlist[i];
    //   if (movie.movie_id === this.props.moviedId &&
    //     movie.user_id === this.props.userId) {
    //     watchlistId = i;
    //     break;  
    //   }
    // }

    return (
      <div onClick={this.watchlistButton} className="add-button">
        <p className="material-icons-outlined">
          {/* {this.state.added = 'done'} */}
          {this.props.movieCheck === true ? this.state.added = 'done' : this.state.added = 'add'}
        </p>
      </div>
    )
  }
}

export default WatchlistButton;