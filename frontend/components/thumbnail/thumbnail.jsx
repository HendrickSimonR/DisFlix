import React from 'react';
import { Link } from 'react-router-dom';
import WatchlistButtonContainer from './watchlist_button_container';
import LikeButtonsContainer from './like_buttons_container';

class Thumbnail extends React.Component {
  constructor(props) {
    super(props)
  }

  // hoverVideo() {
  //   this.uniqueId = (this.props.movie.brand_id).toString().concat(this.props.movie.id).concat(this.props.movie.year)
  //   let indexMovie = document.getElementById(this.uniqueId);
  //   indexMovie.play();
  // }

  // exitVideo() {
  //   this.uniqueId = (this.props.movie.brand_id).toString().concat(this.props.movie.id).concat(this.props.movie.year)
  //   let indexMovie = document.getElementById(this.uniqueId);
  //   indexMovie.load();
  // }

  hoverPlay(event) {
    event.target.play();
  }

  render() {
    // this.uniqueId = (this.props.movie.brand_id).toString().concat(this.props.movie.id).concat(this.props.movie.year);
    let watchlistId;
    let watchlist = this.props.watchlist;
    let { userMovies } = this.props;
    let windowUrl = 'home';
    let tags = this.props.movie.tags;
    let separator = <p id="tag-separator">•</p>;
    let tag1;
    let tag2;
    let tag3;

    if (this.props.index) {
      console.log('THUMBPROPS', this.props.index, this.props.movie)
    }

    if (tags !== undefined) {
      let separated = tags.split('•');
      // console.log('TAGS', separateTags)

      tag1 = separated[0];
      tag2 = separated[1];
      tag3 = separated[2];
    }

    // let movieCheck = false;

    if (!window.location.href.includes('home')) {
      windowUrl = 'other';
    } 

    if (watchlist) {

      // if (userMovies) {
      //   if (userMovies.includes(this.props.movie.id)) {
      //     movieCheck = true;
      //   }
      // }
      
      for (let i = 0; i < this.props.watchlist.length; i++) {
        let watchlistMovie = this.props.watchlist[i];
        // console.log('WATCHLIST MOVIE', watchlistMovie)
        if (watchlistMovie.movie_id === this.props.movie.id) {
          watchlistId = watchlistMovie.id;
          // console.log('WATCHLIST ID', watchlistId)
          break;
        } else {
          watchlistId = watchlistMovie.id;
        }
      } 
    }    


    // console.log('THUMBMOVIE', this.props) //  onMouseOver={event => this.hoverPlay(event)} onMouseOut={event => event.target.load()}
    return (
      <div className={ windowUrl === 'home' && this.props.index === 0 ? "thumbnail-container first" 
        : windowUrl === 'home' && this.props.index === 4 ? "thumbnail-container middle" 
        : windowUrl === 'home' && this.props.index === 9 ? "thumbnail-container last" 
        : windowUrl === 'home' ? "thumbnail-container" 
        : "thumbnail-specific"} > 


        <video className={windowUrl === 'home' ? "thumbnail" : "thumbnail sorted"} poster={this.props.movie.image_url}>
          <source src={this.props.movie.movie_url} type="video/mp4" /> 
        </video>

        <div className="thumbnail-functions">
          <div className="thumbnail-buttons">
            <div className="thumbnail-buttons-left">
              <span className="material-icons thumb-play-circle">play_circle</span>
              <WatchlistButtonContainer watchlistId={watchlistId} watchlist={watchlist} movieId={this.props.movie.id} />
              <LikeButtonsContainer movieId={this.props.movie.id}/>
            </div>

            <div className="thumbnail-buttons-right">
              <span className="material-icons-outlined expand-modal">
                expand_more
              </span>
            </div>
          </div>

          <div className="thumbnail-details">
            <h1>100% Match</h1>
            <h3>
              <strong className="thumb-rating">{this.props.movie.rating}</strong> 
              <strong className="thumb-runtime">{this.props.movie.runtime}</strong>
            </h3>
          </div>
          <div className="thumbnail-tags">
            <li>{tag1}</li>
              {separator}
            <li>{tag2}</li>
              {separator}
            <li>{tag3}</li>
          </div>
        </div>


      </div>
    )
  }
}

export default Thumbnail;