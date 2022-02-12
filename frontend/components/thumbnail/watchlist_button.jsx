import React from 'react'

class WatchlistButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      added: 'add' 
    };

    this.watchlistButton = this.watchlistButton.bind(this);
  }

  watchlistButton() {
    if (this.state.added === 'add') {
      this.setState({ added: 'done' });
      this.props.newAddition({ movie_id: 
        this.props.movieId, 
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
    let movieCheck; 

    if (this.props.watchlist) {
      for (let i = 0; i < this.props.watchlist.length; i++) {
        let watchlistMovie = this.props.watchlist[i];

        if (watchlistMovie['movie_id'] === this.props.movieId) {
          movieCheck = true;
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
          { movieCheck === true ? this.state.added = 'done' : this.state.added = 'add' }
        </p>
      </div>
    )
  }
}

export default WatchlistButton;