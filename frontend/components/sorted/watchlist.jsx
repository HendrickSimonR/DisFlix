import React from 'react';
import ThumbnailContainer from '../thumbnail/thumbnail_container';
import Footer from '../footer/footer';

class Watchlist extends React.Component {
  constructor(props) {
    super(props);
    // this.handleSignout = this.handleSignout.bind(this);
  }

  // handleSignout() {
  //   this.props.signout();
  // }

  componentDidMount() {
    // this.props.getMovies();
    // this.props.getWatchlist({user_id: this.props.user})
  }

  render() {
    this.watchlist = [];
    let user = this.props.user;
    let watchlistComponent;

    // console.log('WATCHLIST PROPS', this.props)

    if (this.props.watchlist) {
      for (let i = 0; i < this.props.watchlist.length; i++) {
        let watchlistMovie = this.props.watchlist[i];
        
        for (let j = 0; j < this.props.movies.length; j++ ) {
          let movie = this.props.movies[j];

          if (watchlistMovie.movie_id === movie.id) {
            this.watchlist.push(movie);
          }
        } 
      }

      watchlistComponent =
        <>
          <h1 id='watchlist-header'>My Watchlist</h1>
          <ul className="films-rows" style={{top: '10vw'}} >
            {this.watchlist.map((movie) => (
              <ThumbnailContainer likes={this.props.likes} dislikes={this.props.dislikes} user={user} watchlist={this.props.watchlist} key={movie.id} movie={movie}/>
            ))}
          </ul>
        </>
    }

    return(
      <div className="watchlist-container">
        { this.watchlist.length === 0 ?
          <h1 id='watchlist-header'>Add some movies!</h1> 
        : watchlistComponent }
        <div className='watchlist-backdrop'></div>
        {/* <Footer /> */}
      </div>
    )
  }
}

export default Watchlist;