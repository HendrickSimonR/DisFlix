import React from 'react'

class WatchlistButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      added: 'add' 
    };

    this.watchlistButton = this.watchlistButton.bind(this);
    this.movieCheck;
  }

  componentDidMount() {
    this.movieCheck 
      ? this.setState({ added: 'done' }) 
      : this.setState({ added: 'add' })
  }

  watchlistButton() {
    if (this.state.added === 'add') {
      this.setState({ added: 'done' });
      this.props.newAddition({ 
        movie_id: this.props.movieId, 
        user_id: this.props.userId 
      });
    } else {
      this.setState({ added: 'add' });
      this.props.removeMovie({ 
        watchlist_id: this.props.watchlistId, 
        movie_id: this.props.movieId, 
        user_id: this.props.userId 
      });
    }
  }

  render() {
    if (this.props.watchlist) {
      for (let i = 0; i < this.props.watchlist.length; i++) {
        let watchlistMovie = this.props.watchlist[i];

        if (watchlistMovie['movie_id'] === this.props.movieId) {
          this.movieCheck = true;
          break;
        }
      }
    }

    return (
      <div 
        onClick={this.watchlistButton} 
        className={this.props.modalButton ? "add-button modal" : "add-button"}
      >
        <p className="material-icons-outlined">
          { this.state.added }
        </p>
      </div>
    )
  }
}

export default WatchlistButton;